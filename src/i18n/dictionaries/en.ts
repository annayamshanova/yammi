const en: {
  meta: { title: string; description: string };
  nav: { home: string; works: string; about: string; contact: string };
  home: {
    kicker: string;
    name: string;
    role: string;
    tagline: string;
    ctaWorks: string;
    ctaAbout: string;
    ctaContact: string;
    tags: string[];
    location: string;
    scrollHint: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string[];
    factsLabel: string;
    facts: { label: string; value: string }[];
    skillsLabel: string;
    skills: string[];
    industriesLabel: string;
    industries: string[];
    ctaContact: string;
    ctaWorks: string;
  };
  works: {
    kicker: string;
    title: string;
    subtitle: string;
    viewProject: string;
    index: string;
  };
  project: {
    backToWorks: string;
    overviewLabel: string;
    roleLabel: string;
    yearLabel: string;
    industryLabel: string;
    platformLabel: string;
    toolsLabel: string;
    challengeLabel: string;
    approachLabel: string;
    outcomeLabel: string;
    resultsLabel: string;
    prevProject: string;
    nextProject: string;
    viewLive: string;
  };
  footer: { rights: string; backToTop: string };
} = {
  meta: {
    title: "YAMMI · Ania Yamshanova, UX/UI Designer",
    description:
      "UX/UI designer focused on interfaces and AI. Based in Germany, open to relocation.",
  },
  nav: {
    home: "Home",
    works: "Works",
    about: "About",
    contact: "Contact",
  },
  home: {
    kicker: "UX/UI DESIGN · AI",
    name: "Ania Yamshanova",
    role: "UX/UI Designer, Interfaces × AI",
    tagline:
      "I design clear, conversion-focused interfaces for B2C products, from e-commerce to AI-driven tools.",
    ctaWorks: "View works",
    ctaAbout: "About me",
    ctaContact: "Say hello",
    tags: ["MENTAL HEALTH", "EDTECH", "AUTOMOTIVE", "E-COMMERCE", "VIBECODING"],
    location: "GERMANY · OPEN TO RELOCATION",
    scrollHint: "SCROLL",
  },
  about: {
    kicker: "ABOUT",
    title: "Ania Yamshanova",
    intro: [
      "UX/UI designer with a focus on interfaces and AI. Three years of experience, based in Germany.",
      "For the past six months I've been exploring vibecoding: AI-assisted prototyping that takes me from concept to a working product faster, without losing design precision.",
      "I design B2C web products, specialising in e-commerce and full-scale website design. I've delivered user-centered solutions across fashion, interior design, FinTech, and art, combining strong UX foundations with clean, conversion-focused UI.",
    ],
    factsLabel: "FACTS",
    facts: [
      { label: "Experience", value: "3 years" },
      { label: "Location", value: "Germany" },
      { label: "Relocation", value: "Open" },
      { label: "Focus", value: "UI × AI" },
      { label: "Vibecoding", value: "6 months" },
    ],
    skillsLabel: "TOOLKIT",
    skills: [
      "UX Research",
      "UI Design",
      "Design Systems",
      "E-commerce UX",
      "Conversion-focused Design",
      "AI-assisted Prototyping",
      "Vibecoding",
    ],
    industriesLabel: "INDUSTRIES",
    industries: ["Mental Health", "EdTech", "Automotive", "E-commerce"],
    ctaContact: "Get in touch",
    ctaWorks: "See the works",
  },
  works: {
    kicker: "SELECTED WORKS",
    title: "Works",
    subtitle: "Four B2C products across mental health, edtech, automotive, and e-commerce.",
    viewProject: "View project",
    index: "INDEX",
  },
  project: {
    backToWorks: "All works",
    overviewLabel: "Overview",
    roleLabel: "Role",
    yearLabel: "Year",
    industryLabel: "Industry",
    platformLabel: "Platform",
    toolsLabel: "Tools",
    challengeLabel: "Challenge",
    approachLabel: "Approach",
    outcomeLabel: "Outcome",
    resultsLabel: "Results",
    prevProject: "Previous",
    nextProject: "Next",
    viewLive: "Open live link",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
