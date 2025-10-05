"use client";

import { useEffect } from 'react';

export default function PortfolioPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/webcomponents/portfolio-wd.js';
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
      <portfolio-wd url="myportfoliocom"></portfolio-wd>
    </div>
  );
}