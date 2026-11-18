// Bascule FR / EN. Le français est écrit dans le HTML ; l'anglais est ici.
const LANGS = ["fr", "en"];
const NB = " ";

const EN = {
  skip: "Skip to the diagnostic",
  a11y_btn: "Accessibility",
  a11y_title: "Display settings",
  a11y_theme: "Theme",
  a11y_auto: "Automatic",
  a11y_light: "Light",
  a11y_dark: "Dark",
  a11y_text: "Text size",
  a11y_t1: "Normal",
  a11y_t2: "Large",
  a11y_t3: "Extra large",
  a11y_contrast: "Contrast",
  a11y_c1: "Normal",
  a11y_c2: "High",
  a11y_motion: "Animations",
  a11y_m1: "Normal",
  a11y_m2: "Reduced",
  a11y_reset: "Reset",
  brand_aria: "Mathieu Delloye Consulting, back to top",
  nav_aria: "Main navigation",
  nav_diag: "Diagnostic",
  nav_offers: "Services",
  nav_proof: "Track record",
  nav_projects: "Projects",
  nav_book: "Book a call",
  hero_title: `Put your business through an AI${NB}scan.`,
  hero_lead: "Nine questions, three minutes. See where AI can save your team time, and where to start.",
  hero_cta: "Start the diagnostic",
  hero_hint: "or scroll to watch the scan",
  hero_who: "Mathieu Delloye, AI trainer and consultant. 13 years of IT project management in nuclear, banking and human resources.",
  phases_aria: "The three stages of the diagnostic",
  p1_t: "Observe your usage",
  p1_d: "Who uses AI, for what, under which rules.",
  p2_t: "Read your processes",
  p2_d: "Repetitive tasks, scattered data, tools that don't talk to each other.",
  p3_t: "Reveal the potential",
  p3_d: "A concrete path: train, automate, lead.",
  diag_title: "The online diagnostic",
  diag_lead: "Answer as close to reality as you can. Your answers stay in your browser: nothing is sent.",
  back: "Previous question",
  level: "Level:",
  path_title: "Recommended path",
  res_cta: "Book the in-depth diagnostic",
  restart: "Retake the diagnostic",
  res_note: "A video call to check these results with you and price the path. Your score summary is attached to the request.",
  offers_title: "Three ways to work together",
  o1_t: "AI training",
  o1_d: "Hands-on training on Claude Code first, as well as ChatGPT, DeepSeek and Gemini, built on your own documents and tasks rather than generic examples. It starts with an audit of how you use AI today.",
  o1_f1: "14 to 28 hours",
  o1_f2: `Remote, in 3.5${NB}h sessions`,
  o1_f3: "Fundable by French OPCOs",
  o2_t: "Custom automation",
  o2_d: "I build with you the agent or workflow that removes a repetitive task: monitoring, meeting notes, document sorting, follow-ups.",
  o2_f2: "Runs on your own machines if needed",
  o2_f3: "Documentation handed over to the team",
  o3_t: "AI project leadership",
  o3_d: "I scope and run your AI projects as Scrum Master and Product Owner: needs, priorities, governance, delivery.",
  o3_f1: `PSM${NB}I certified`,
  o3_f3: "Jira power user and administrator",
  proof_title: "Track record",
  portrait_alt: "Portrait of Mathieu Delloye",
  about: "For 13 years I have led IT projects in demanding sectors: nuclear, banking and human resources. I have worked in turn as PMO, project manager, Scrum Master and Product Owner, at Adecco, Devoteam, Atos and Framatome. Since September 2026 I have been independent and fully dedicated to artificial intelligence training: Claude Code first, but also ChatGPT, DeepSeek and Gemini. I train teams, automate what should be automated and lead AI projects through to delivery.",
  f1: "years of IT project management",
  f2: "users supported through a migration",
  f3: "of AI, automation and data projects managed",
  f3v: "€600k+",
  f4: "of sprints delivered on time",
  act_title: "Training and automation activity",
  act_caption: "Training engagements by client sector",
  th_sector: "Client",
  th_theme: "Topic",
  th_hours: "Length",
  th_stage: "Stage",
  career_title: "Career",
  m_where_t: "Where",
  m_where: "Based near Naples, working remotely across France and Italy",
  m_edu_t: "Education",
  m_edu: `International Master in Artificial Intelligence, Rome Business School (in progress). Master's degree and two level${NB}1 French professional titles (RNCP, former classification), ECEMA Lyon`,
  m_cert_t: "Certifications",
  m_lang_t: "Languages",
  m_lang: "French (native), English C2, Italian C2, Spanish B2",
  o3_f4: "AI governance, AI Act, GDPR",
  y0: "since Sep 2026",
  c0o: "Mathieu Delloye Consulting, independent",
  c0: "AI trainer and consultant. Tailored training on Claude Code first, as well as ChatGPT, DeepSeek and Gemini; AI usage audits and automations for businesses.",
  y1: "Oct 2025 – Sep 2026",
  y2: "Oct 2019 – Oct 2025",
  y3: "2017 – Sep 2019",
  y4: "2014 – Sep 2017",
  c1o: "Framatome, freelance",
  c1: `AI and digital solutions Product Owner, Scrum Master. Enterprise generative AI platform (OpenAI, Azure OpenAI), 38 UiPath automations cutting testing by 70${NB}%, Microsoft Copilot agents.`,
  c2o: "Atos, Framatome Digital Factory",
  c2: `Senior Project Manager, AI Product Owner and Scrum Master. 50+ applications delivered, 3 Scrum teams in parallel (15 people), +40${NB}% developer productivity, 98${NB}% satisfaction.`,
  c3o: "Devoteam, at BPCE-IT",
  c3: `Project manager, quality and IT processes. 150+ ServiceNow requests automated every month (98${NB}% satisfaction), Power BI dashboards.`,
  c4: `Programme PMO, then country PMO. Financial steering of an agile portfolio worth €30${NB}M+ a year.`,
  c5o: "Framatome (formerly Areva)",
  c5: "Technical project manager. Quantified progress reporting for decommissioning operations.",
  proj_title: "Projects built with Claude Code",
  proj_lead: "Tools in production or in testing, built end to end with Claude Code, agents and MCP connectors.",
  st_service: "In production",
  st_cloud: "Deployed or in testing",
  np1_t: "Training factory",
  np1: "From the client's needs form, Claude Code produces the programme, a branded deck (up to 81 slides), the quiz, the case study, the exercise book and the audit board. The form arrives straight from Gmail.",
  np1r: "5 decks, 27 training documents and 4 audit boards produced with one workflow.",
  np2: "A daily AI news journal published since 22 October 2026: French and Italian editions, audio reading, LinkedIn drafts and visuals.",
  np2r: "Issues published",
  np2l: "Read the journal",
  np2s: "Claude Code, GitHub Pages, text-to-speech",
  np3_t: "Claude connected to your tools (MCP)",
  np3: "With MCP connectors, Claude reads your emails, fetches web pages, files deliverables and deploys automations, with no copy-pasting.",
  np3r: "Used every day for training and monitoring.",
  np4_t: "Animated sites from a video",
  np4: "A short video becomes a page that animates as you scroll, in 3D if needed: watermarks cropped, frames upscaled by AI, colours taken from the video.",
  np4r: "This site is the example.",
  np5_t: "Agents deployed in the cloud",
  np5a_t: "YouTube monitoring on AI governance",
  np5a: `Selects relevant videos and emails a report every Monday at 7${NB}am. Trigger.dev, status: built.`,
  np5b_t: "Competitive analysis of AI training in Italy",
  np5b: "Scoring and report run on Modal. Status: prototype.",
  np5c: "Agentic pipeline analysing job offers. Firecrawl, Adzuna, Vercel, Trigger.dev, Modal.",
  proto: `Early prototypes: offline RAG assistant on a 2013 MacBook (−77% measured latency), multi-source ETL dashboard, Chrome study assistant, n8n monitoring, Hermes / Solar Mini agent orchestration.`,
  contact_title: "Let's talk about your diagnostic",
  contact_lead: "A first video call to understand your context and see whether I can help.",
  footer_privacy: "No cookies, no analytics.",
};

// Libellés des données (indicateurs, diagnostic) qui viennent en français.
const DATA_EN = {
  "Cabinet de conseil en management": "Management consulting firm",
  "Éditeur de logiciels médias": "Media software publisher",
  "Société de conseil informatique": "IT consulting company",
  "Claude IA : analyser, sélectionner et répondre aux appels d'offres": "Claude AI: analysing, selecting and answering public tenders",
  "Apprentissage automatique et indexation d'images et vidéos": "Machine learning and image and video indexing",
  "Agents IA, RAG et réglage fin": "AI agents, RAG and fine-tuning",
  "Programme en préparation": "Programme in preparation",
  "Audit réalisé": "Audit done",
  "En cours": "In progress",
  "Terminée": "Completed",
};

const UI = {
  fr: {
    progress: (i, n) => `Question ${i} sur ${n}`,
    updated: (d) => `Mis à jour le ${d}`,
    sum_formations: (n) => [n, n > 1 ? "formations engagées" : "formation engagée"],
    sum_hours: (n) => [`${n}${NB}h`, "de formation programmées"],
    sum_audits: (n) => [n, n > 1 ? "audits réalisés" : "audit réalisé"],
    sum_auto: (n, s) => [n, `automatisations conçues, dont ${s} en service`],
    sum_daily: (n) => [n, "éditions du journal Daily AI"],
    daily_count: (n) => `${n} éditions publiées`,
    hours: (h, s) => `${h}${NB}h, ${s} séances`,
    stage_of: (i, n) => `étape ${i} sur ${n}`,
    ring_axis: (label, v) => `${label}${NB}: ${v}${NB}%`,
    ring_idle: "Les anneaux se remplissent à mesure que vous répondez.",
    score: (v) => `(${v}/100)`,
    mail_subject: "Demande de diagnostic approfondi",
    note: (lvl, v, axes, path) => `Diagnostic en ligne : niveau ${lvl} (${v}/100). ${axes}. Parcours : ${path}.`,
    locale: "fr-FR",
  },
  en: {
    progress: (i, n) => `Question ${i} of ${n}`,
    updated: (d) => `Updated ${d}`,
    sum_formations: (n) => [n, n > 1 ? "training engagements" : "training engagement"],
    sum_hours: (n) => [`${n}${NB}h`, "of training scheduled"],
    sum_audits: (n) => [n, n > 1 ? "audits completed" : "audit completed"],
    sum_auto: (n, s) => [n, `automations designed, ${s} in production`],
    sum_daily: (n) => [n, "issues of the Daily AI journal"],
    daily_count: (n) => `${n} issues published`,
    hours: (h, s) => `${h}${NB}h, ${s} sessions`,
    stage_of: (i, n) => `stage ${i} of ${n}`,
    ring_axis: (label, v) => `${label}: ${v}%`,
    ring_idle: "The rings fill up as you answer.",
    score: (v) => `(${v}/100)`,
    mail_subject: "In-depth diagnostic request",
    note: (lvl, v, axes, path) => `Online diagnostic: level ${lvl} (${v}/100). ${axes}. Path: ${path}.`,
    locale: "en-GB",
  },
};

let current = "fr";
const frTexts = new Map();
const frAttrs = new Map();

function storedLang() {
  try { return localStorage.getItem("lang"); } catch { return null; }
}
function storeLang(l) {
  try { localStorage.setItem("lang", l); } catch { /* stockage indisponible : sans effet */ }
}

export function lang() { return current; }
export function ui() { return UI[current]; }
export function dataLabel(fr) { return current === "en" ? (DATA_EN[fr] ?? fr) : fr; }

function apply() {
  document.documentElement.lang = current;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!frTexts.has(el)) frTexts.set(el, el.textContent);
    el.textContent = current === "en" && EN[key] ? EN[key] : frTexts.get(el);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (!frAttrs.has(el)) frAttrs.set(el, el.getAttribute(attr));
    el.setAttribute(attr, current === "en" && EN[key] ? EN[key] : frAttrs.get(el));
  });
  const t = document.getElementById("lang-toggle");
  const other = current === "fr" ? "en" : "fr";
  t.textContent = other.toUpperCase();
  t.setAttribute("lang", other);
  t.setAttribute("aria-label", other === "en" ? "Switch to English" : "Passer en français");
  document.title = current === "en" ? "Mathieu Delloye Consulting · AI diagnostic" : "Mathieu Delloye Consulting · Diagnostic IA";
  document.dispatchEvent(new CustomEvent("langchange"));
}

export function setLang(l) {
  if (!LANGS.includes(l)) return;
  current = l;
  storeLang(l);
  const url = new URL(location.href);
  url.searchParams.set("lang", l);
  history.replaceState(null, "", url);
  apply();
}

export function initI18n() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const wanted = [fromUrl, storedLang()].find((l) => LANGS.includes(l)) ?? "fr";
  current = wanted;
  apply();
  document.getElementById("lang-toggle").addEventListener("click", () => setLang(current === "fr" ? "en" : "fr"));
}
