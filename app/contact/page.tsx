"use client";

import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/webcomponents/contact-us.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-8 px-4">
      <contact-us name="xyz"></contact-us>
    </div>
  );
}