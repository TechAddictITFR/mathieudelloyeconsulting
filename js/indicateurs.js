// Ligne « Depuis septembre 2026 » et compteur Daily AI, lus dans data/indicateurs.json
// (généré par tools/exporter_indicateurs_site.py ; clients désignés par leur secteur).
import { ui, dataLabel } from "./i18n.js";

let data = null;

// Secteur court pour la phrase de synthèse (le nom complet reste dans les données)
const COURT = {
  "Cabinet de conseil en management": "conseil en management",
  "Éditeur de logiciels médias": "édition de logiciels",
  "Société de conseil informatique": "conseil informatique",
};

function render() {
  if (!data) return;
  const u = ui();
  const s = data.synthese;
  const secteurs = [...new Set(data.formations.map((f) => dataLabel(COURT[f.secteur] ?? f.secteur)))].join(", ");
  const now = document.getElementById("act-now");
  if (now) now.textContent = u.now(s.formations, secteurs, s.audits_realises);
  const daily = document.getElementById("np2-count");
  if (daily) daily.textContent = u.daily_count(s.editions_daily_ai);
}

export async function initIndicateurs() {
  try {
    const r = await fetch("data/indicateurs.json");
    if (!r.ok) throw new Error(r.status);
    data = await r.json();
  } catch {
    return; // la ligne reste vide : le reste du bloc ne dépend pas de ces données
  }
  render();
  document.addEventListener("langchange", render);
}
