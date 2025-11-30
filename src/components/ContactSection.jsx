// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
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
          Share a short description of what you need, and I&apos;ll reply with
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
  );
};

export default ContactSection;
