"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWebComponentLoader } from '@/hooks/useWebComponentLoader';
import { globalEventBus } from '@/lib/webComponentEvents';

export default function PortfolioPage() {
  const router = useRouter();
  const { isLoaded } = useWebComponentLoader({
    name: 'portfolio-wd',
    scriptUrl: '/webcomponents/portfolio-wd.js',
  });

  useEffect(() => {
    const handlePortfolioContact = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Portfolio contact requested:', customEvent.detail);

      globalEventBus.emit('portfolio-contact-request', customEvent.detail);

      router.push('/contact');
    };

    const handleProjectSelected = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Project selected:', customEvent.detail);

      globalEventBus.emit('project-selected', customEvent.detail);

      router.push('/contact');
    };

    document.addEventListener('portfolio-contact-request', handlePortfolioContact);
    document.addEventListener('project-selected', handleProjectSelected);

    return () => {
      document.removeEventListener('portfolio-contact-request', handlePortfolioContact);
      document.removeEventListener('project-selected', handleProjectSelected);
    };
  }, [router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <portfolio-wd url="myportfoliocom"></portfolio-wd>
    </div>
  );
}