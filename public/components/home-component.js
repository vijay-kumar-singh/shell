class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0.5rem; color: white;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; font-weight: bold;">🏠 Home Component</h2>
        <p style="margin: 0 0 1rem 0; opacity: 0.9;">This is a dynamically loaded web component for the home page!</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.25rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">✨ Features</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Dynamic loading system</p>
          </div>
          <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.25rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">📊 Analytics</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Built-in tracking</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('home-component', HomeComponent);