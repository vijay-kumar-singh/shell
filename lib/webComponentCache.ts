type WebComponentCache = {
  [key: string]: {
    loaded: boolean;
    scriptElement?: HTMLScriptElement;
  };
};

const cache: WebComponentCache = {};

export interface LoadWebComponentOptions {
  name: string;
  scriptUrl: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export function loadWebComponent({
  name,
  scriptUrl,
  onLoad,
  onError,
}: LoadWebComponentOptions): () => void {
  if (cache[name]?.loaded) {
    onLoad?.();
    return () => {};
  }

  if (cache[name]?.scriptElement) {
    return () => {};
  }

  const script = document.createElement('script');
  script.src = scriptUrl;
  script.type = 'module';

  script.onload = () => {
    cache[name] = {
      loaded: true,
      scriptElement: script,
    };
    onLoad?.();
  };

  script.onerror = () => {
    delete cache[name];
    const error = new Error(`Failed to load web component: ${name}`);
    onError?.(error);
  };

  cache[name] = {
    loaded: false,
    scriptElement: script,
  };

  document.body.appendChild(script);

  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
      delete cache[name];
    }
  };
}

export function isWebComponentLoaded(name: string): boolean {
  return cache[name]?.loaded || false;
}

export function clearWebComponentCache(name?: string): void {
  if (name) {
    const cached = cache[name];
    if (cached?.scriptElement && document.body.contains(cached.scriptElement)) {
      document.body.removeChild(cached.scriptElement);
    }
    delete cache[name];
  } else {
    Object.keys(cache).forEach(key => {
      const cached = cache[key];
      if (cached?.scriptElement && document.body.contains(cached.scriptElement)) {
        document.body.removeChild(cached.scriptElement);
      }
    });
    Object.keys(cache).forEach(key => delete cache[key]);
  }
}
