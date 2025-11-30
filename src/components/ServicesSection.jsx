// src/components/ServicesSection.jsx
import React from "react";

const ServicesSection = ({ process }) => {
  return (
    <section id="services" className="split-section">
      <div className="card-plain">
        <div className="section-label">Services</div>
        <h2 className="section-title">How I typically work with clients</h2>
        <p className="section-subtitle">
          I prefer clear scopes, realistic timelines, and frequent check-ins.
          Here are the main types of work I do:
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
        <h2 className="section-title">A straightforward, 4-step delivery</h2>
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
  );
};

export default ServicesSection;
