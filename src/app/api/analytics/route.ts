import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (will reset when server restarts)
const analytics = {
  pageViews: {
    total: 0,
    ko: 0,
    zh: 0
  },
  buttonClicks: {
    total: 0,
    'hero-cta': 0,
    'hero-secondary': 0,
    'final-cta': 0,
    'nav-contact': 0,
    'nav-cta': 0
  },
  startTime: new Date().toISOString()
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    console.log(`[ANALYTICS] ${type}:`, data);

    switch (type) {
      case 'pageView':
        analytics.pageViews.total++;
        if (data.locale === 'ko') analytics.pageViews.ko++;
        if (data.locale === 'zh') analytics.pageViews.zh++;
        console.log(`[PAGE VIEW] ${data.locale} - Total: ${analytics.pageViews.total}`);
        break;

      case 'buttonClick':
        analytics.buttonClicks.total++;
        if (data.buttonId in analytics.buttonClicks) {
          analytics.buttonClicks[data.buttonId as keyof typeof analytics.buttonClicks]++;
        }
        console.log(`[BUTTON CLICK] ${data.buttonId} - Total: ${analytics.buttonClicks.total}`);
        break;

      default:
        return NextResponse.json({ error: 'Unknown analytics type' }, { status: 400 });
    }

    return NextResponse.json({ success: true, analytics });
  } catch (error) {
    console.error('[ANALYTICS ERROR]:', error);
    return NextResponse.json({ error: 'Failed to log analytics' }, { status: 500 });
  }
}

export async function GET() {
  const uptime = new Date().getTime() - new Date(analytics.startTime).getTime();
  const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
  const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));

  console.log('[ANALYTICS SUMMARY]');
  console.log('===================');
  console.log(`Server uptime: ${uptimeHours}h ${uptimeMinutes}m`);
  console.log(`Total page views: ${analytics.pageViews.total}`);
  console.log(`Korean page views: ${analytics.pageViews.ko}`);
  console.log(`Chinese page views: ${analytics.pageViews.zh}`);
  console.log(`Total button clicks: ${analytics.buttonClicks.total}`);
  console.log('Button breakdown:', analytics.buttonClicks);
  console.log('===================');

  return NextResponse.json({
    ...analytics,
    uptime: `${uptimeHours}h ${uptimeMinutes}m`,
    uptimeMs: uptime
  });
}