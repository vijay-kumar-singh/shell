class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 0.5rem; color: #333;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; font-weight: bold;">📞 Contact Component</h2>
        <p style="margin: 0 0 1.5rem 0; opacity: 0.8;">Get in touch with us!</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
          <div style="background: rgba(255,255,255,0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">📧 Email</h3>
            <p style="margin: 0; opacity: 0.7;">hello@example.com</p>
          </div>
          <div style="background: rgba(255,255,255,0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">📱 Phone</h3>
            <p style="margin: 0; opacity: 0.7;">+1 (555) 123-4567</p>
          </div>
          <div style="background: rgba(255,255,255,0.3); padding: 1.5rem; border-radius: 0.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">📍 Address</h3>
            <p style="margin: 0; opacity: 0.7;">123 Main St, City, State</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding: 1.5rem; background: rgba(255,255,255,0.2); border-radius: 0.5rem;">
          <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;">Send us a message</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" placeholder="Your Name" style="padding: 0.75rem; border: none; border-radius: 0.25rem; background: rgba(255,255,255,0.8);">
            <input type="email" placeholder="Your Email" style="padding: 0.75rem; border: none; border-radius: 0.25rem; background: rgba(255,255,255,0.8);">
            <textarea placeholder="Your Message" rows="3" style="padding: 0.75rem; border: none; border-radius: 0.25rem; background: rgba(255,255,255,0.8); resize: vertical;"></textarea>
            <button style="padding: 0.75rem 1.5rem; background: #333; color: white; border: none; border-radius: 0.25rem; cursor: pointer; font-weight: bold;">Send Message</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('contact-component', ContactComponent);