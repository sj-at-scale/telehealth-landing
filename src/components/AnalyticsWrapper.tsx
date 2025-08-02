'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsWrapperProps {
  locale: string;
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ locale, children }: AnalyticsWrapperProps) {
  const { logPageView } = useAnalytics();

  useEffect(() => {
    // Log page view when component mounts
    logPageView(locale);
  }, [locale, logPageView]);

  return <>{children}</>;
}