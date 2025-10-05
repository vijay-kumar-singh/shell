"use client";

import { useEffect, useState } from 'react';
import { useWebComponentLoader } from '@/hooks/useWebComponentLoader';
import { globalEventBus } from '@/lib/webComponentEvents';

export default function ContactPage() {
  const { isLoaded } = useWebComponentLoader({
    name: 'contact-us',
    scriptUrl: '/webcomponents/contact-us.js',
  });

  const [prefillSubject, setPrefillSubject] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');

  useEffect(() => {
    const unsubscribePortfolio = globalEventBus.on('portfolio-contact-request', (event) => {
      const { url, message } = event.detail;
      setPrefillSubject(`Inquiry about ${url}`);
      setPrefillMessage(message || 'I am interested in learning more about your portfolio.');
    });

    const unsubscribeProject = globalEventBus.on('project-selected', (event) => {
      const { project, url } = event.detail;
      setPrefillSubject(`Inquiry about ${project.title}`);
      setPrefillMessage(`I am interested in the "${project.title}" project. Could you provide more details?`);
    });

    const handleContactSubmit = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Contact form submitted:', customEvent.detail);
    };

    document.addEventListener('contact-submit', handleContactSubmit);

    return () => {
      unsubscribePortfolio();
      unsubscribeProject();
      document.removeEventListener('contact-submit', handleContactSubmit);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contact form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <contact-us
        name="xyz"
        prefill-subject={prefillSubject}
        prefill-message={prefillMessage}
      ></contact-us>
    </div>
  );
}