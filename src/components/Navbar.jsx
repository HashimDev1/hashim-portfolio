// src/components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/HashimDev1",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-hashim-82518b280",
    Icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/HashimKhan43875",
    Icon: FaTwitter,
  },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="brand-block">
        <div className="brand-photo">
          <img src="/myphoto.jpg" alt="Hashim" />
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

      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact" className="nav-cta">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
