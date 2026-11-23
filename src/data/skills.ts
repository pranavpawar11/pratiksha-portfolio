export type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  skills: string[];
  tools: string[];
  /** Honest pointer to where this skill was practised. */
  output: { label: string; href: string };
};

export const skillCategories: SkillCategory[] = [
  {
    id: "seo",
    title: "SEO & Research",
    summary:
      "Learning how people search, what they mean by it, and how a page can answer them clearly. Applied in a practice keyword research and website audit.",
    skills: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO Fundamentals", "Search Intent"],
    tools: ["Google Sheets"],
    output: { label: "SEO keyword research & website audit", href: "/projects/seo-website-audit" },
  },
  {
    id: "social",
    title: "Social Media & Content",
    summary:
      "Planning content themes, writing captions and calls to action, and organising them into a weekly calendar. Applied in the Raje Masale strategy.",
    skills: [
      "Instagram Marketing",
      "Facebook Marketing",
      "Content Planning",
      "Social Media Strategy",
      "Content Writing",
      "Copywriting",
      "Blog Writing",
    ],
    tools: ["Canva", "ChatGPT"],
    output: { label: "Raje Masale content planning", href: "/projects/raje-masale#content-strategy" },
  },
  {
    id: "ads",
    title: "Digital Advertising",
    summary:
      "Understanding how audiences are targeted and how a paid campaign is structured. Explored through sample campaign planning, not live ad spend.",
    skills: ["Google Ads", "Meta Ads", "Audience Targeting", "Campaign Planning"],
    tools: ["Google Ads", "Meta Ads Manager"],
    output: { label: "Sample Meta Ads campaign plan", href: "/projects/raje-masale#execution" },
  },
  {
    id: "ai",
    title: "AI & Analytics",
    summary:
      "Using AI tools to speed up ideation and drafting, and learning the metrics used to judge whether marketing is working.",
    skills: [
      "ChatGPT",
      "AI Content Creation",
      "Prompt Engineering",
      "Google Analytics",
      "CTR",
      "CPC",
      "ROAS",
      "Marketing Performance Metrics",
    ],
    tools: ["ChatGPT", "Google Analytics"],
    output: { label: "AI Marketing course, Udemy (2026)", href: "/#learning" },
  },
];

export const toolsStrip = ["Canva", "Google Analytics", "Google Ads", "Meta Ads Manager", "ChatGPT", "Google Sheets"];

export const strengths = [
  { title: "Creative Thinking", text: "Turning an idea into a format people want to look at." },
  { title: "Analytical Problem-Solving", text: "A Computer Engineering habit of breaking problems into parts." },
  { title: "Quick Learning", text: "Picking up new tools and platforms without waiting to be shown." },
  { title: "Adaptability", text: "Comfortable moving between creative and technical work." },
  { title: "Communication", text: "Explaining ideas plainly in writing and in conversation." },
  { title: "Continuous Learning", text: "Courses, tutorials and projects, all alongside each other." },
];

export const identityAreas = [
  { title: "SEO & Research", text: "Keywords, intent, audits" },
  { title: "Social Media Marketing", text: "Instagram and Facebook" },
  { title: "Content Strategy", text: "Themes, calendars, copy" },
  { title: "Digital Advertising", text: "Google Ads and Meta Ads" },
  { title: "AI Marketing", text: "Prompting and AI content" },
];

export const approachStages = [
  {
    title: "Discover",
    text: "Understand the brand, market and audience.",
    items: ["Audience research", "Keyword research", "Market understanding"],
  },
  {
    title: "Plan",
    text: "Develop an appropriate marketing direction.",
    items: ["Content strategy", "Campaign planning", "Audience targeting"],
  },
  {
    title: "Create",
    text: "Convert ideas into marketing content.",
    items: ["Social media content", "Copywriting", "Creative concepts"],
  },
  {
    title: "Learn",
    text: "Understand outcomes and identify improvements.",
    items: ["Marketing metrics", "Analytics", "Performance observations"],
  },
];
