class PortfolioComponent extends HTMLElement {
  connectedCallback() {
    const theme = this.getAttribute('theme') || 'default';
    
    this.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 0.5rem; color: white;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; font-weight: bold;">🎨 Portfolio Component</h2>
        <p style="margin: 0 0 1rem 0; opacity: 0.9;">Theme: ${theme}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Project Alpha</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Web application built with React</p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Project Beta</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Mobile app with Flutter</p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Project Gamma</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">API service with Node.js</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('portfolio-component', PortfolioComponent);