class ContactUs extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute('name') || 'Guest';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-header h2 {
          margin: 0 0 0.5rem 0;
          font-size: 2rem;
          font-weight: 700;
        }

        .contact-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 1.1rem;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.2);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .contact-info {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.9;
        }
      </style>

      <div class="contact-container">
        <div class="contact-header">
          <h2>Get in Touch</h2>
          <p>Hello, ${name}! We'd love to hear from you.</p>
        </div>

        <form class="contact-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="your.email@example.com" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="How can we help you?" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Tell us more about your inquiry..." required></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>

        <div class="contact-info">
          <p>Or reach us directly at: hello@example.com</p>
        </div>
      </div>
    `;

    const form = this.shadowRoot.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = this.shadowRoot.querySelector('#email').value;
      const subject = this.shadowRoot.querySelector('#subject').value;
      const message = this.shadowRoot.querySelector('#message').value;

      this.dispatchEvent(new CustomEvent('contact-submit', {
        detail: { email, subject, message },
        bubbles: true,
        composed: true
      }));

      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }
}

customElements.define('contact-us', ContactUs);
