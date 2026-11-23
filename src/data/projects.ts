export type ProjectType = "Self-Initiated Brand Marketing Project" | "Practice Project";

export type Deliverable = {
  title: string;
  note: string;
  /** "ready" once a genuine file/preview has been added under /public/images/projects. */
  status: "ready" | "pending";
  image?: { src: string; alt: string; width: number; height: number };
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  type: ProjectType;
  summary: string; // card + meta description
  metaTitle: string;
  metaDescription: string;
  overview: string;
  objective: string;
  audience: string[];
  research: string[];
  strategy: { title: string; text: string }[];
  execution: { id?: string; title: string; text: string }[];
  deliverables: Deliverable[];
  tools: string[];
  learnings: string[];
  activities: string[];
  keywords: string[];
};

export const projects: Project[] = [
  {
    slug: "raje-masale",
    title: "Raje Masale: Digital Marketing Strategy",
    shortTitle: "Raje Masale",
    type: "Self-Initiated Brand Marketing Project",
    summary:
      "A digital marketing strategy concept for a traditional Indian masala brand: audience, positioning, SEO keywords, Instagram and Facebook content, and a WhatsApp enquiry flow.",
    metaTitle: "Raje Masale Digital Marketing Strategy Case Study | Pratiksha Shelke",
    metaDescription:
      "Self-initiated digital marketing case study for a traditional masala brand: audience research, brand positioning, SEO keywords, social media content planning and WhatsApp enquiry strategy.",
    overview:
      "Developed a digital marketing strategy concept for a traditional Indian masala brand, exploring how digital channels can support brand positioning, visibility and customer enquiries. This is a self-initiated learning project, not paid client work.",
    objective:
      "Explore how a traditional spice brand could use search, social media and WhatsApp to be found, remembered and contacted.",
    audience: [
      "Home cooks who want authentic, reliable masalas",
      "Families buying for regular household cooking",
      "Food lovers who follow recipe and cooking content on Instagram",
    ],
    research: [
      "Target audience identification",
      "SEO keyword exploration for masala-related searches",
      "Observation of how food brands present themselves on Instagram and Facebook",
    ],
    strategy: [
      { title: "Brand positioning", text: "Position the brand around tradition, freshness and everyday cooking." },
      { title: "Channel roles", text: "SEO for discovery, Instagram and Facebook for brand awareness, WhatsApp for enquiries." },
      { title: "Content direction", text: "Recipes, product stories and spice tips with a clear call to action." },
    ],
    execution: [
      { id: "content-strategy", title: "Instagram and Facebook content planning", text: "Content themes, promotional post concepts, recipe content, captions and calls to action, arranged into a one-week content calendar." },
      { title: "Promotional campaign concepts", text: "Campaign ideas focused on WhatsApp enquiries and customer acquisition." },
      { id: "execution", title: "WhatsApp enquiry strategy", text: "A simple path from social post to WhatsApp message." },
      { title: "Sample Meta Ads campaign planning", text: "A planning exercise covering objective, audience and creative direction. No ads were run and no results exist." },
    ],
    deliverables: [
      { title: "Brand strategy snapshot", note: "Audience, positioning and channel plan.", status: "pending" },
      { title: "Sample social media post designs", note: "Five Canva designs for Instagram.", status: "pending" },
      { title: "One-week content calendar", note: "Posting days, formats, objectives and CTAs.", status: "pending" },
      { title: "Captions and hashtags", note: "Written copy for each planned post.", status: "pending" },
      { title: "Keyword research preview", note: "Primary and secondary masala keywords.", status: "pending" },
    ],
    tools: ["Canva", "ChatGPT"],
    learnings: [
      "A strategy gets clearer when each channel has one job.",
      "Calls to action need to match how customers already prefer to reach a brand.",
      "Without real performance data, a plan stays a hypothesis. Measuring comes next.",
    ],
    activities: [
      "Target audience identification",
      "Brand positioning",
      "SEO keyword exploration",
      "Instagram and Facebook content planning",
      "Promotional campaign concepts",
      "WhatsApp enquiry strategy",
      "Sample Meta Ads campaign planning",
    ],
    keywords: ["social media marketing strategy", "content marketing", "digital marketing case study"],
  },
  {
    slug: "seo-website-audit",
    title: "SEO Keyword Research and Website Audit",
    shortTitle: "SEO & Website Audit",
    type: "Practice Project",
    summary:
      "A practice exercise in keyword research, search intent analysis and on-page SEO review: titles, meta descriptions, headings, internal links and basic technical fixes.",
    metaTitle: "SEO Keyword Research & Website Audit Practice Project | Pratiksha Shelke",
    metaDescription:
      "Practice project covering SEO keyword research, search intent analysis, title tag and meta description review, heading structure and internal linking recommendations.",
    overview:
      "A practice project to learn the SEO workflow end to end: find keywords, understand what searchers want, then review a website against them. It is a learning exercise and does not describe results for a real business.",
    objective: "Practise turning keyword research into specific, prioritised on-page recommendations.",
    audience: ["People searching for the target topic", "A site owner who needs plain-language fixes"],
    research: [
      "Primary and secondary keyword research",
      "Search intent analysis (informational, commercial, transactional)",
      "Review of how competing pages answer the same query",
    ],
    strategy: [
      { title: "Match intent first", text: "Each page targets one primary keyword and the intent behind it." },
      { title: "Fix the basics before the advanced", text: "Titles, descriptions, headings and links come before technical extras." },
    ],
    execution: [
      { title: "Title tag review", text: "Check length, keyword placement and clarity." },
      { title: "Meta description recommendations", text: "Rewrite descriptions to earn the click." },
      { title: "Heading structure review", text: "One H1, logical H2 and H3 order." },
      { title: "Internal linking", text: "Connect related pages with descriptive anchor text." },
      { title: "Basic technical SEO improvements", text: "Observations on crawlability and page basics." },
    ],
    deliverables: [
      { title: "Keyword research spreadsheet", note: "Keywords with intent notes.", status: "pending" },
      { title: "Sample SEO audit", note: "Findings by priority.", status: "pending" },
      { title: "On-page recommendations", note: "Before-and-after title and description suggestions.", status: "pending" },
    ],
    tools: ["Google Sheets"],
    learnings: [
      "Search intent decides whether a page deserves to rank, not keyword count.",
      "Small fixes such as titles and headings are often the quickest improvements to find.",
    ],
    activities: [
      "Primary and secondary keyword research",
      "Search intent analysis",
      "Title tag review",
      "Meta description recommendations",
      "Heading structure review",
      "Internal linking",
      "Basic technical SEO improvements",
    ],
    keywords: ["SEO keyword research", "website audit", "on-page SEO"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
