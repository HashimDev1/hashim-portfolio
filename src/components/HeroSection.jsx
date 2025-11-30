// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({ focusAreas, projects, stack }) => {
  return (
    <section className="hero-grid">
      {/* HERO LEFT */}
      <div className="hero-panel">
        <div className="section-label">Full-Stack Web Development</div>
        <h1 className="hero-title">
          I build practical web apps for teams that need to move fast.
        </h1>
        <p className="hero-description">
          I&apos;m a full-stack developer with expertise in{" "}
          <strong>React / Next.js</strong>,{" "}
          <strong>Node.js, MongoDB, REST API & FastAPI</strong>, focused on
          building fast, scalable, and maintainable applications for real-world
          use cases and production environments.
        </p>

        <div className="hero-pills">
          <span className="pill pill-strong">Available for freelance work</span>
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

      {/* PROJECTS RIGHT TOP */}
      <section id="work" className="card-plain" style={{ marginBottom: 28 }}>
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

      {/* ASIDE LEFT BOTTOM */}
      <aside className="side-card">
        <div className="side-card-title">What I can help you with</div>
        <p className="side-card-sub">
          Think of me as your “small dev team” in one person.
        </p>
        <ul className="check-list">
          <li>
            <span className="check-bullet">✓</span>
            <span>
              Design & build React / Next.js interfaces connected to real APIs.
            </span>
          </li>
          <li>
            <span className="check-bullet">✓</span>
            <span>
              Create Node.js backends with MongoDB (auth, CRUD, business logic).
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
          I&apos;m comfortable joining ongoing projects or starting from a blank
          repo.
        </p>
      </aside>
    </section>
  );
};

export default HeroSection;
