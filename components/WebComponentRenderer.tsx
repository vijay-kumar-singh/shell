"use client";

import React, { useEffect, useRef } from 'react';
import { useWebComponent } from '@/hooks/useWebComponent';
import { WebComponentConfig } from '@/lib/webComponentLoader';
import { Loader2 } from 'lucide-react';

interface WebComponentRendererProps {
  config: WebComponentConfig;
  props?: Record<string, any>;
}

export function WebComponentRenderer({ config, props = {} }: WebComponentRendererProps) {
  const { loading, error, loaded } = useWebComponent(config);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaded && containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Wait for custom element to be defined before creating it
      if (customElements.get(config.tagName)) {
        // Create the web component element
        const element = document.createElement(config.tagName);
        
        // Set attributes from props
        Object.entries(props).forEach(([key, value]) => {
          if (typeof value === 'string' || typeof value === 'number') {
            element.setAttribute(key, String(value));
          }
        });
        
        // Append to container
        containerRef.current.appendChild(element);
      } else {
        // If custom element isn't defined yet, wait for it
        customElements.whenDefined(config.tagName).then(() => {
          if (containerRef.current) {
            const element = document.createElement(config.tagName);
            
            // Set attributes from props
            Object.entries(props).forEach(([key, value]) => {
              if (typeof value === 'string' || typeof value === 'number') {
                element.setAttribute(key, String(value));
              }
            });
            
            containerRef.current.appendChild(element);
          }
        });
      }
    }
  }, [loaded, config.tagName, props]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600">Loading {config.name}...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error loading component</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} />;
}