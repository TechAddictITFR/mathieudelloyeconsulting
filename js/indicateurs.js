// Métriques d'activité lues dans data/indicateurs.json (généré par tools/exporter_indicateurs_site.py).
import { ui, dataLabel } from "./i18n.js";

const ETAPES = ["Programme en préparation", "Audit réalisé", "En cours", "Terminée"];
let data = null;

const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
};

function render() {
  if (!data) return;
  const u = ui();
  const s = data.synthese;
  const date = new Date(data.mis_a_jour + "T12:00:00");
  document.getElementById("act-date").textContent = u.updated(date.toLocaleDateString(u.locale, { day: "numeric", month: "long", year: "numeric" }));

  const sum = document.getElementById("act-sum");
  sum.textContent = "";
  const items = [
    u.sum_formations(s.formations),
    u.sum_hours(s.heures_programmees),
    u.sum_audits(s.audits_realises),
    u.sum_auto(s.automatisations, s.automatisations_en_service),
    u.sum_daily(s.editions_daily_ai),
  ];
  for (const [value, label] of items) {
    const li = el("li");
    li.append(el("span", "sum-value", String(value)), el("span", "sum-label", label));
    sum.append(li);
  }

  const daily = document.getElementById("np2-count");
  if (daily) daily.textContent = u.daily_count(s.editions_daily_ai);

  const body = document.getElementById("act-rows");
  body.textContent = "";
  for (const f of data.formations) {
    const tr = el("tr");
    const n = ETAPES.indexOf(f.etape) + 1;
    const stage = el("td", "stage");
    const dots = el("span", "stage-dots");
    dots.setAttribute("aria-hidden", "true");
    ETAPES.forEach((_, i) => dots.append(el("span", i < n ? "on" : null)));
    stage.append(dots, el("span", null, dataLabel(f.etape)));
    stage.title = u.stage_of(n, ETAPES.length);
    tr.append(el("td", null, dataLabel(f.secteur)), el("td", null, dataLabel(f.theme)), el("td", "nowrap", u.hours(f.heures, f.seances)), stage);
    body.append(tr);
  }
}

export async function initIndicateurs() {
  try {
    const r = await fetch("data/indicateurs.json");
    if (!r.ok) throw new Error(r.status);
    data = await r.json();
  } catch {
    document.getElementById("activity").hidden = true;
    return;
  }
  render();
  document.addEventListener("langchange", render);
}
