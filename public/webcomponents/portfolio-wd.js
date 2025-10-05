class PortfolioWd extends HTMLElement {
  static get observedAttributes() {
    return ['url'];
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
    const url = this.getAttribute('url') || 'myportfolio.com';

    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack online store with payment integration',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '🛍️'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative project management tool',
        tech: ['Vue.js', 'Firebase', 'Tailwind'],
        image: '📋'
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather data visualization',
        tech: ['TypeScript', 'D3.js', 'Express'],
        image: '🌤️'
      },
      {
        title: 'Social Media Analytics',
        description: 'Advanced metrics and reporting platform',
        tech: ['Next.js', 'PostgreSQL', 'Redis'],
        image: '📊'
      }
    ];

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .portfolio-header h1 {
          margin: 0 0 1rem 0;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .portfolio-url {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f1f5f9;
          border-radius: 20px;
          color: #475569;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .portfolio-url:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          height: 150px;
          background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          margin: 0 0 0.75rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }

        .project-description {
          margin: 0 0 1rem 0;
          color: #64748b;
          line-height: 1.5;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: #dbeafe;
          color: #1e40af;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .stats-section {
          margin-top: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          border-radius: 12px;
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        .contact-cta {
          text-align: center;
          margin-top: 3rem;
        }

        .contact-btn {
          padding: 1rem 2rem;
          background: #1e3a8a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(30, 58, 138, 0.3);
        }

        .contact-btn:active {
          transform: translateY(0);
        }
      </style>

      <div class="portfolio-container">
        <div class="portfolio-header">
          <h1>My Portfolio</h1>
          <a href="https://${url}" target="_blank" class="portfolio-url">
            <span>🌐</span>
            <span>${url}</span>
          </a>
        </div>

        <div class="projects-grid">
          ${projects.map((project, index) => `
            <div class="project-card" data-project-index="${index}">
              <div class="project-image">${project.image}</div>
              <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                  ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="stats-section">
          <h2 style="margin: 0 0 1rem 0; text-align: center;">Career Highlights</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">30+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Technologies Mastered</span>
            </div>
          </div>
        </div>

        <div class="contact-cta">
          <button class="contact-btn" id="contactBtn">Interested? Contact Me</button>
        </div>
      </div>
    `;

    this.attachEventListeners(projects);
  }

  attachEventListeners(projects) {
    const contactBtn = this.shadowRoot.querySelector('#contactBtn');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('portfolio-contact-request', {
          detail: {
            url: this.getAttribute('url'),
            timestamp: new Date().toISOString(),
            message: 'User wants to inquire about portfolio projects'
          },
          bubbles: true,
          composed: true
        }));
      });
    }

    const projectCards = this.shadowRoot.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const project = projects[index];
        this.dispatchEvent(new CustomEvent('project-selected', {
          detail: {
            project: project,
            url: this.getAttribute('url'),
            timestamp: new Date().toISOString()
          },
          bubbles: true,
          composed: true
        }));
      });
    });
  }
}

customElements.define('portfolio-wd', PortfolioWd);
