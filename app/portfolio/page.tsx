"use client";

import { WebComponentRenderer } from '@/components/WebComponentRenderer';
import { webComponentConfigs } from '@/lib/webComponentConfigs';

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio</h1>
        <p className="text-gray-600 mb-6">
          This page dynamically loads the portfolio web component.
        </p>
        <WebComponentRenderer 
          config={webComponentConfigs.portfolio}
          props={{ theme: 'professional' }}
        />
      </div>
    </div>
  );
}