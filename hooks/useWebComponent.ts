"use client";

import { useEffect, useState } from 'react';
import { webComponentLoader, WebComponentConfig } from '@/lib/webComponentLoader';

export function useWebComponent(config: WebComponentConfig) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadComponent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await webComponentLoader.loadComponent(config);
        
        if (mounted) {
          setLoaded(true);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load component');
          setLoading(false);
        }
      }
    };

    loadComponent();

    return () => {
      mounted = false;
    };
  }, [config.scriptUrl, config.name, config.tagName]);

  return { loading, error, loaded };
}