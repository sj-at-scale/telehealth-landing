'use client';

export const useAnalytics = () => {
  const logEvent = async (type: string, data: Record<string, unknown>) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, data }),
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  };

  const logPageView = (locale: string) => {
    logEvent('pageView', { 
      locale, 
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  };

  const logButtonClick = (buttonId: string, locale?: string) => {
    logEvent('buttonClick', { 
      buttonId, 
      locale,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  };

  return { logPageView, logButtonClick };
};