import React from "react";
import "./portfolio.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Template1 = () => {
  const stack = [
    "⚛️ React",
    "⏭️ Next.js",
    "📱 Responsive UI",
    "🎨 Tailwind / CSS",
    "🔗 REST API",
    "⚡ FastAPI",
    "🔐 JWT Auth",
    "🟩 Node.js",
    "🚀 Express",
    "🍃 MongoDB",
    "🔧 Git & GitHub",
  ];

  const focusAreas = [
    "SaaS dashboards",
    "Internal tools",
    "Marketing sites",
    "APIs & integrations",
  ];
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/your-username",
      Icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/your-username",
      Icon: FaLinkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/your-username",
      Icon: FaTwitter,
    },
  ];

  const projects = [
    {
      label: "NetShareX Admin Portal",
      title: "Subscription & Network Management Dashboard",
      role: "Full-stack Developer – React, Vite, Node.js, MongoDB",
      result:
        "Built a complete admin system with analytics, marketplace, user/provider management, and real-time network health monitoring. Improved operational efficiency by 60% for the client.",
      link: "https://your-demo-or-github-link.com",
    },
    {
      label: "Internal Tool",
      title: "Ops console for managing orders & inventory",
      role: "Backend-heavy – Node, REST API, MongoDB",
      result:
        "Helped team track orders and stock changes without spreadsheets.",
      link: "#",
    },
    {
      label: "Marketing Website",
      title: "High-conversion landing for a local service",
      role: "Frontend – Next.js, SEO, responsive UI",
      result: "Improved lead form submissions and mobile experience.",
      link: "#",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      text: "Short call + requirements: what you need, deadlines, and constraints.",
    },
    {
      step: "02",
      title: "Design & Plan",
      text: "Wireframe screens, define API endpoints, and agree on milestones.",
    },
    {
      step: "03",
      title: "Build",
      text: "Implement frontend (React/Next.js) and backend (Node + MongoDB).",
    },
    {
      step: "04",
      title: "Ship & Support",
      text: "Deploy, handover, and optional ongoing support / small improvements.",
    },
  ];

  return (
    <div className="page-shell">
      {/* NAV */}
      <header className="navbar">
        <div className="brand-block">
          <div className="brand-photo">
            <img src="/myphoto.jpg" alt="Muhammad Hashim" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Hashim Dev</span>
            <span className="brand-role">Full-Stack Developer</span>

            <div className="social-links">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="social-icon" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact" className="nav-cta">
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero-grid">
          <div className="hero-panel">
            <div className="section-label">Full-Stack Web Development</div>
            <h1 className="hero-title">
              I build practical web apps for teams that need to move fast.
            </h1>
            <p className="hero-description">
              I&apos;m a full-stack developer with expertise in{" "}
              <strong>React / Next.js</strong>,{" "}
              <strong>Node.js, MongoDB, REST API & FastAPI</strong>, focused on
              building fast, scalable, and maintainable applications for
              real-world use cases and production environments.
            </p>

            <div className="hero-pills">
              <span className="pill pill-strong">
                Available for freelance work
              </span>
              {focusAreas.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <button
                className="btn-main"
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View selected work
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Share your project idea
              </button>
            </div>

            <div className="metrics">
              <div className="metric-item">
                <div className="metric-label">Projects</div>
                <div className="metric-value">10+ completed</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Focus</div>
                <div className="metric-value">Web apps & APIs</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Location</div>
                <div className="metric-value">Remote / PK</div>
              </div>
            </div>
          </div>
          {/* PROJECTS */}
          <section
            id="work"
            className="card-plain"
            style={{ marginBottom: 28 }}
          >
            <div className="section-label">Selected Work</div>
            <div className="section-title">Projects I&apos;ve worked on</div>
            <p className="section-subtitle">
              Not every project is public, but these examples show the typical
              scope, stack, and outcomes I deliver.
            </p>

            <div className="projects-grid">
              {projects.map((p) => (
                <article key={p.title} className="project-card">
                  <div className="project-label">{p.label}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-meta">{p.role}</div>
                  <p className="project-result">{p.result}</p>
                  <a href={p.link} className="project-link">
                    View case study ↗
                  </a>
                </article>
              ))}
            </div>
          </section>

          <aside className="side-card">
            <div className="side-card-title">What I can help you with</div>
            <p className="side-card-sub">
              Think of me as your “small dev team” in one person.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-bullet">✓</span>
                <span>
                  Design & build React / Next.js interfaces connected to real
                  APIs.
                </span>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <span>
                  Create Node.js backends with MongoDB (auth, CRUD, business
                  logic).
                </span>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <span>
                  Refactor or extend existing projects without breaking things.
                </span>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <span>
                  Deploy to platforms like Vercel, Render, or your preferred
                  hosting.
                </span>
              </li>
            </ul>
            <div className="section-label" style={{ marginBottom: 4 }}>
              Primary Stack
            </div>
            <div className="badge-row">
              {stack.map((tool) => (
                <span key={tool} className="badge">
                  {tool}
                </span>
              ))}
            </div>
            <p className="side-footnote">
              I&apos;m comfortable joining ongoing projects or starting from a
              blank repo.
            </p>
          </aside>
        </section>

        {/* SERVICES + PROCESS */}
        <section id="services" className="split-section">
          <div className="card-plain">
            <div className="section-label">Services</div>
            <h2 className="section-title">How I typically work with clients</h2>
            <p className="section-subtitle">
              I prefer clear scopes, realistic timelines, and frequent
              check-ins. Here are the main types of work I do:
            </p>
            <ul className="process-steps">
              <li className="process-step">
                <div className="step-index">A</div>
                <div>
                  <div className="step-main">New web application</div>
                  <div className="hero-note">
                    From idea → deployed MVP (frontend + backend + database).
                  </div>
                </div>
              </li>
              <li className="process-step">
                <div className="step-index">B</div>
                <div>
                  <div className="step-main">Improving existing product</div>
                  <div className="hero-note">
                    Fix bugs, clean code, add features, or modernize UI.
                  </div>
                </div>
              </li>
              <li className="process-step">
                <div className="step-index">C</div>
                <div>
                  <div className="step-main">Internal tools & dashboards</div>
                  <div className="hero-note">
                    Admin panels, analytics dashboards, simple CRMs, and more.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div id="process" className="card-plain">
            <div className="section-label">Process</div>
            <h2 className="section-title">
              A straightforward, 4-step delivery
            </h2>
            <ul className="process-steps">
              {process.map((p) => (
                <li key={p.step} className="process-step">
                  <div className="step-index">{p.step}</div>
                  <div>
                    <div className="step-main">{p.title}</div>
                    <div className="hero-note">{p.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section id="contact" className="contact-strip">
          <div className="contact-strip-text">
            <div
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#0f172a",
              }}
            >
              Let&apos;s discuss your project
            </div>
            <div style={{ marginTop: 4 }}>
              Share a short description of what you need, and I&apos;ll reply
              with
              <span> a few options </span>
              (timeline + rough budget).
            </div>
          </div>
          <div>
            <a
              href="mailto:youremail@example.com?subject=Project%20inquiry%20for%20web%20app"
              className="contact-email"
            >
              youremail@example.com
            </a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Hashim Dev
        </footer>
      </main>
    </div>
  );
};

export default Template1;
