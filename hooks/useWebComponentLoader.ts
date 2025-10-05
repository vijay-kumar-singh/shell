import { useEffect, useState } from 'react';
import { loadWebComponent, isWebComponentLoaded } from '@/lib/webComponentCache';

export interface UseWebComponentLoaderOptions {
  name: string;
  scriptUrl: string;
}

export function useWebComponentLoader({ name, scriptUrl }: UseWebComponentLoaderOptions) {
  const [isLoaded, setIsLoaded] = useState(() => isWebComponentLoaded(name));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isWebComponentLoaded(name)) {
      setIsLoaded(true);
      return;
    }

    const cleanup = loadWebComponent({
      name,
      scriptUrl,
      onLoad: () => {
        setIsLoaded(true);
        setError(null);
      },
      onError: (err) => {
        setError(err);
        setIsLoaded(false);
      },
    });

    return cleanup;
  }, [name, scriptUrl]);

  return { isLoaded, error };
}
