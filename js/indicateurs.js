// Ligne « Depuis septembre 2026 » (comptages anonymes du CRM) et compteur Daily AI, lus dans data/indicateurs.json
// (généré par tools/exporter_indicateurs_site.py ; aucun nom de client).
import { ui } from "./i18n.js";

let data = null;


function render() {
  if (!data) return;
  const u = ui();
  const now = document.getElementById("act-now");
  if (now && data.crm) now.textContent = u.now(data.crm);
  const daily = document.getElementById("np2-count");
  if (daily) daily.textContent = u.daily_count(data.synthese.editions_daily_ai);
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
