export type WebComponentEventHandler = (event: CustomEvent) => void;

export class WebComponentEventBus {
  private listeners: Map<string, Set<WebComponentEventHandler>> = new Map();

  on(eventName: string, handler: WebComponentEventHandler): () => void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }

    this.listeners.get(eventName)!.add(handler);

    return () => {
      this.off(eventName, handler);
    };
  }

  off(eventName: string, handler: WebComponentEventHandler): void {
    const handlers = this.listeners.get(eventName);
    if (handlers) {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.listeners.delete(eventName);
      }
    }
  }

  emit(eventName: string, detail?: any): void {
    const handlers = this.listeners.get(eventName);
    if (handlers) {
      const event = new CustomEvent(eventName, { detail });
      handlers.forEach(handler => handler(event));
    }
  }

  clear(eventName?: string): void {
    if (eventName) {
      this.listeners.delete(eventName);
    } else {
      this.listeners.clear();
    }
  }
}

export const globalEventBus = new WebComponentEventBus();
