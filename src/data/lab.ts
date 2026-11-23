// Illustrative sample data for the Marketing Lab. None of this is client work.
export const plannerObjectives = [
  {
    id: "awareness",
    label: "Awareness",
    objective: "Help more home cooks discover the brand.",
    audience: "Home cooks and food lovers who follow recipe content.",
    channels: ["Instagram", "Facebook", "SEO blog"],
    content: "Short recipe posts, spice stories and how-to tips.",
    cta: "Follow for weekly recipes.",
  },
  {
    id: "engagement",
    label: "Engagement",
    objective: "Give followers a reason to comment, save and share.",
    audience: "People who already follow the brand.",
    channels: ["Instagram", "Facebook"],
    content: "Spice tips, polls and “which masala would you use?” questions.",
    cta: "Save this for your next cook.",
  },
  {
    id: "enquiries",
    label: "Enquiries",
    objective: "Turn interest into direct customer messages.",
    audience: "People comparing masala brands for a purchase.",
    channels: ["WhatsApp", "Instagram", "Meta Ads"],
    content: "Product highlights, pack sizes and ordering information.",
    cta: "Message us on WhatsApp to order.",
  },
] as const;

export const calendarDays = [
  { day: "Monday", content: "Recipe post", objective: "Education", idea: "A simple everyday dish using one signature masala.", format: "Instagram carousel", cta: "Save this recipe." },
  { day: "Tuesday", content: null },
  { day: "Wednesday", content: "Product story", objective: "Awareness", idea: "Where the spices come from and how the blend is made.", format: "Instagram single image + Facebook post", cta: "Follow to learn more." },
  { day: "Thursday", content: null },
  { day: "Friday", content: "Spice tips", objective: "Engagement", idea: "One quick tip on storing or using a spice, ending with a question.", format: "Instagram Reel or carousel", cta: "Comment your own tip." },
  { day: "Saturday", content: null },
  { day: "Sunday", content: "Promotional post", objective: "Conversion", idea: "Highlight a pack with a clear ordering path.", format: "Instagram post + story", cta: "Message us on WhatsApp." },
] as const;

export const funnelStages = [
  { id: "awareness", label: "Awareness", goal: "People discover the brand.", activities: ["Social media discovery", "SEO", "Educational content"] },
  { id: "consideration", label: "Consideration", goal: "People learn what makes it different.", activities: ["Product information", "Engagement", "Brand communication"] },
  { id: "action", label: "Action", goal: "People get in touch or buy.", activities: ["Enquiries", "Purchase intent", "Conversion-oriented CTAs"] },
] as const;
