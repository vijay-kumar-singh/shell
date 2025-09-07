"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    analytics.init();
  }, []);

  useEffect(() => {
    analytics.trackPageView(pathname);
  }, [pathname]);

  return {
    track: analytics.track.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackRouteChange: analytics.trackRouteChange.bind(analytics)
  };
}