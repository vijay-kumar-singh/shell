export interface AnalyticsEvent {
  event: string;
  page?: string;
  timestamp: number;
  userAgent?: string;
  referrer?: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private initialized = false;

  init() {
    if (this.initialized) return;
    
    console.log('Analytics initialized');
    this.track('analytics_init');
    this.initialized = true;
  }

  track(event: string, data?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      ...data
    };

    this.events.push(analyticsEvent);
    console.log('Analytics Event:', analyticsEvent);

    // Here you would send to your analytics service
    // Example: sendToAnalyticsService(analyticsEvent);
  }

  trackPageView(page: string) {
    this.track('page_view', { page });
  }

  trackRouteChange(from: string, to: string) {
    this.track('route_change', { from, to });
  }

  getEvents() {
    return [...this.events];
  }
}

export const analytics = new Analytics();