// src/Template1.jsx
import React from "react";
import "./portfolio.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

// --- data (kept outside component so it's clean + reusable) ---

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
    result: "Helped team track orders and stock changes without spreadsheets.",
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

const processSteps = [
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

const Porfolio = () => {
  return (
    <div className="page-shell">
      <Navbar />

      <main>
        <HeroSection
          focusAreas={focusAreas}
          projects={projects}
          stack={stack}
        />

        <ServicesSection process={processSteps} />

        <ContactSection />

        <footer className="footer">
          © {new Date().getFullYear()} Hashim Dev
        </footer>
      </main>
    </div>
  );
};

export default Porfolio;
