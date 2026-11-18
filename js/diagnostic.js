// Diagnostic en ligne : questions, scores par axe, anneau « IRM » et parcours recommandé.
// Tout reste dans le navigateur ; seul un résumé des scores part dans le lien de rendez-vous.
import { lang, ui } from "./i18n.js";
import { bookingHref } from "./contact.js";

const SVG = "http://www.w3.org/2000/svg";
const C = 180;                       // centre de l'anneau
const RADII = [150, 122, 94, 66];    // un anneau par axe, de l'extérieur vers l'intérieur
const MATURITY = ["usages", "donnees", "equipe"];

let D = null;          // contenu de data/diagnostic.json
let answers = [];      // index de l'option choisie, par question
let step = 0;
let arcs = {};

const $ = (id) => document.getElementById(id);
const t = (o, key = "") => o[(key ? key + "_" : "") + lang()] ?? o[lang()] ?? o.fr;
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
};

function scores() {
  const out = {};
  for (const a of D.axes) {
    const idx = D.questions.map((q, i) => (q.axe === a.id ? i : -1)).filter((i) => i >= 0 && answers[i] != null);
    out[a.id] = idx.length ? Math.round((idx.reduce((s, i) => s + answers[i], 0) / (idx.length * 3)) * 100) : null;
  }
  return out;
}

function maturity(s) {
  const v = MATURITY.map((k) => s[k]).filter((x) => x != null);
  return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
}

function questionIndex(axe, n) {
  return D.questions.map((q, i) => (q.axe === axe ? i : -1)).filter((i) => i >= 0)[n];
}

function recommend(s) {
  const m = maturity(s);
  const porteur = answers[questionIndex("equipe", 1)] ?? 0;
  const path = [];
  if (s.equipe < 67 || s.usages < 50) path.push(m < 50 ? "formation" : "formation_avancee");
  if (s.donnees < 40 && s.processus >= 50) path.push("donnees");
  if (s.processus >= 50 && s.donnees >= 40) path.push("automatisation");
  if (porteur <= 1 && (s.processus >= 50 || path.length >= 2)) path.push("pilotage");
  if (!path.length) path.push(s.processus >= 34 ? "automatisation" : "formation_avancee");
  return path.slice(0, 3);
}

/* ---------- Anneau ---------- */

function buildRing() {
  const svg = $("ring");
  svg.textContent = "";
  arcs = {};
  D.axes.forEach((a, i) => {
    const r = RADII[i];
    const track = document.createElementNS(SVG, "circle");
    track.setAttribute("class", "ring-track");
    track.setAttribute("cx", C); track.setAttribute("cy", C); track.setAttribute("r", r);
    const arc = document.createElementNS(SVG, "circle");
    arc.setAttribute("class", `ring-arc ring-arc-${i}`);
    arc.setAttribute("cx", C); arc.setAttribute("cy", C); arc.setAttribute("r", r);
    arc.setAttribute("transform", `rotate(-90 ${C} ${C})`);
    const len = 2 * Math.PI * r;
    arc.setAttribute("stroke-dasharray", `${len} ${len}`);
    arc.setAttribute("stroke-dashoffset", len);
    const label = document.createElementNS(SVG, "text");
    label.setAttribute("class", "ring-label");
    label.setAttribute("x", C - 8); label.setAttribute("y", C - r + 4);
    label.setAttribute("text-anchor", "end");
    svg.append(track, arc, label);
    arcs[a.id] = { arc, len, label };
  });
  const sweep = document.createElementNS(SVG, "g");
  sweep.setAttribute("class", "ring-sweep");
  const line = document.createElementNS(SVG, "line");
  line.setAttribute("x1", C); line.setAttribute("y1", C); line.setAttribute("x2", C); line.setAttribute("y2", C - 162);
  sweep.append(line);
  const value = document.createElementNS(SVG, "text");
  value.setAttribute("class", "ring-value"); value.setAttribute("x", C); value.setAttribute("y", C + 14);
  value.setAttribute("text-anchor", "middle"); value.id = "ring-value";
  svg.append(sweep, value);
}

function renderRing() {
  const s = scores();
  D.axes.forEach((a) => {
    const { arc, len, label } = arcs[a.id];
    const v = s[a.id] ?? 0;
    arc.setAttribute("stroke-dashoffset", len * (1 - Math.max(v, 2) / 100));
    label.textContent = s[a.id] == null ? t(a) : `${t(a)}  ${s[a.id]}`;
  });
  const m = maturity(s);
  $("ring-value").textContent = m == null ? "–" : String(m);
  const legend = $("ring-caption");
  legend.textContent = "";
  if (m == null) { legend.textContent = ui().ring_idle; return; }
  const ul = el("ul", "visually-hidden");
  D.axes.forEach((a) => {
    if (s[a.id] != null) ul.append(el("li", null, ui().ring_axis(t(a), s[a.id])));
  });
  legend.append(ul);
}

function pulse() {
  const g = document.querySelector(".ring-sweep");
  if (!g) return;
  g.classList.remove("is-sweeping");
  void g.getBoundingClientRect(); // relance l'animation
  g.classList.add("is-sweeping");
}

/* ---------- Questions ---------- */

function renderQuestion(focus = false) {
  const q = D.questions[step];
  $("quiz-progress").textContent = ui().progress(step + 1, D.questions.length);
  $("quiz-question").textContent = t(q);
  const box = $("quiz-options");
  box.textContent = "";
  q.options.forEach((o, i) => {
    const b = el("button", "option", t(o));
    b.type = "button";
    b.setAttribute("aria-pressed", String(answers[step] === i));
    b.addEventListener("click", () => choose(i));
    box.append(b);
  });
  $("quiz-back").hidden = step === 0;
  if (focus) box.querySelector(".option")?.focus({ preventScroll: true });
}

function choose(i) {
  answers[step] = i;
  pulse();
  renderRing();
  if (step < D.questions.length - 1) {
    step++;
    renderQuestion(true);
  } else {
    showResult();
  }
}

/* ---------- Résultat ---------- */

function showResult() {
  const s = scores();
  const m = maturity(s);
  const lvl = D.niveaux.find((n) => m <= n.max);
  $("res-level").textContent = t(lvl);
  $("res-score").textContent = ui().score(m);
  $("res-text").textContent = t(lvl, "texte");

  const path = recommend(s);
  const ol = $("res-path");
  ol.textContent = "";
  for (const key of path) {
    const o = D.offres[key];
    const li = el("li");
    li.append(el("strong", null, t(o)), el("span", null, t(o, "detail")));
    ol.append(li);
  }

  const f = $("res-funding");
  const taille = answers[questionIndex("taille", 0)];
  const hasTraining = path.some((k) => k.startsWith("formation"));
  f.hidden = !hasTraining;
  f.textContent = hasTraining ? t(D.financement, taille === 0 ? "independant" : taille === 3 ? "grande" : "pme") : "";

  const axes = D.axes.map((a) => `${t(a)} ${s[a.id]}`).join(", ");
  const note = ui().note(t(lvl), m, axes, path.map((k) => t(D.offres[k])).join(", "));
  const cta = $("res-cta");
  cta.href = bookingHref(note);
  if (cta.href.startsWith("https:")) { cta.target = "_blank"; cta.rel = "noopener noreferrer"; }

  $("diag-form").hidden = true;
  const res = $("diag-result");
  res.hidden = false;
  res.focus({ preventScroll: true });
}

function restart() {
  answers = [];
  step = 0;
  $("diag-result").hidden = true;
  $("diag-form").hidden = false;
  renderRing();
  renderQuestion(true);
}

export async function initDiagnostic() {
  const r = await fetch("data/diagnostic.json");
  D = await r.json();
  buildRing();
  renderRing();
  renderQuestion();
  $("quiz-back").addEventListener("click", () => { if (step > 0) { step--; renderQuestion(true); } });
  $("res-restart").addEventListener("click", restart);
  $("diag-form").addEventListener("submit", (e) => e.preventDefault());
  document.addEventListener("langchange", () => {
    renderRing();
    if ($("diag-result").hidden) renderQuestion(); else showResult();
  });
}
