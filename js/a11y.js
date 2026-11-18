// Menu Accessibilité : thème, taille du texte, contraste, animations (préférences gérées par js/prefs-init.js).
export function initA11y() {
  const P = window.MDCPrefs;
  const btn = document.getElementById("a11y-toggle");
  const panel = document.getElementById("a11y-panel");
  if (!P || !btn || !panel) return;

  function render() {
    panel.querySelectorAll(".a11y-choice").forEach((b) => {
      const cle = b.dataset.pref;
      // Thème : « Automatique » reste sélectionné tant que le visiteur n'a rien choisi
      const actif = cle === "theme" || cle === "text" ? P.lire(cle) : P.effectif(cle);
      b.setAttribute("aria-pressed", String(actif === b.dataset.value));
    });
  }

  function ouvrir(oui) {
    panel.hidden = !oui;
    btn.setAttribute("aria-expanded", String(oui));
    if (oui) panel.querySelector(".a11y-choice")?.focus();
  }

  btn.addEventListener("click", () => ouvrir(panel.hidden));
  panel.addEventListener("click", (e) => {
    const b = e.target.closest(".a11y-choice");
    if (b) P.choisir(b.dataset.pref, b.dataset.value);
  });
  document.getElementById("a11y-reset").addEventListener("click", () => P.reinitialiser());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) { ouvrir(false); btn.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !e.target.closest(".a11y")) ouvrir(false);
  });
  document.addEventListener("prefschange", render);
  render();
}
