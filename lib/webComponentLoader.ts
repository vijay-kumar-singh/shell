export interface WebComponentConfig {
  name: string;
  scriptUrl: string;
  tagName: string;
}

class WebComponentLoader {
  private loadedScripts = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  async loadComponent(config: WebComponentConfig): Promise<void> {
    if (this.loadedScripts.has(config.scriptUrl)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(config.scriptUrl)) {
      return this.loadingPromises.get(config.scriptUrl)!;
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = config.scriptUrl;
      script.async = true;
      
      script.onload = () => {
        this.loadedScripts.add(config.scriptUrl);
        console.log(`Web component loaded: ${config.name}`);
        resolve();
      };

      script.onerror = () => {
        reject(new Error(`Failed to load web component: ${config.name}`));
      };

      document.head.appendChild(script);
    });

    this.loadingPromises.set(config.scriptUrl, loadPromise);
    return loadPromise;
  }

  isLoaded(scriptUrl: string): boolean {
    return this.loadedScripts.has(scriptUrl);
  }
}

export const webComponentLoader = new WebComponentLoader();