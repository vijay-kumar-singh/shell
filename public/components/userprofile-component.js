class UserProfileComponent extends HTMLElement {
  connectedCallback() {
    const userId = this.getAttribute('userId') || 'guest';
    
    this.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 0.5rem; color: white;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; font-weight: bold;">👤 User Profile Component</h2>
        <p style="margin: 0 0 1.5rem 0; opacity: 0.9;">User ID: ${userId}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">📧 Email</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">user@example.com</p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">📅 Joined</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">January 2024</p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">⚡ Status</h3>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Active</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 0.25rem; border-left: 4px solid rgba(255,255,255,0.5);">
          <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">This component receives props dynamically from the shell application.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('userprofile-component', UserProfileComponent);