// Préférences d'affichage, appliquées avant le premier rendu (script classique et synchrone, chargé dans le <head>).
// Thème (clair par défaut), taille du texte, contraste, animations : choix du visiteur, sinon valeurs par défaut.
(function () {
  var root = document.documentElement;
  var CHOIX = {
    theme: ["light", "dark", "auto"], // clair par défaut ; « auto » suit l'appareil
    text: ["normal", "large", "xlarge"],
    contrast: ["auto", "normal", "more"],
    motion: ["auto", "reduce"],
  };
  var mq = {
    light: window.matchMedia("(prefers-color-scheme: light)"),
    more: window.matchMedia("(prefers-contrast: more)"),
    reduce: window.matchMedia("(prefers-reduced-motion: reduce)"),
  };

  function lire(cle) {
    var v = null;
    try { v = localStorage.getItem("pref-" + cle); } catch (e) { /* stockage indisponible */ }
    return CHOIX[cle].indexOf(v) >= 0 ? v : CHOIX[cle][0];
  }
  function ecrire(cle, v) {
    try {
      if (v === CHOIX[cle][0]) localStorage.removeItem("pref-" + cle);
      else localStorage.setItem("pref-" + cle, v);
    } catch (e) { /* stockage indisponible */ }
  }

  function appliquer() {
    var t = lire("theme"), c = lire("contrast"), m = lire("motion");
    root.setAttribute("data-theme", t === "auto" ? (mq.light.matches ? "light" : "dark") : t);
    root.setAttribute("data-text", lire("text"));
    root.setAttribute("data-contrast", c === "auto" ? (mq.more.matches ? "more" : "normal") : c);
    root.setAttribute("data-motion", m === "reduce" || mq.reduce.matches ? "reduce" : "auto");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", root.getAttribute("data-theme") === "light" ? "#F6F8FB" : "#071528");
    document.dispatchEvent(new CustomEvent("prefschange"));
  }

  for (var k in mq) {
    if (mq[k].addEventListener) mq[k].addEventListener("change", appliquer);
  }

  window.MDCPrefs = {
    CHOIX: CHOIX,
    lire: lire,
    // Valeur effective (après prise en compte des réglages de l'appareil), pour l'affichage du menu
    effectif: function (cle) {
      if (cle === "theme") return root.getAttribute("data-theme");
      if (cle === "contrast") return root.getAttribute("data-contrast");
      if (cle === "motion") return root.getAttribute("data-motion");
      return lire(cle);
    },
    choisir: function (cle, v) {
      if (CHOIX[cle].indexOf(v) < 0) return;
      ecrire(cle, v);
      appliquer();
    },
    reinitialiser: function () {
      for (var cle in CHOIX) ecrire(cle, CHOIX[cle][0]);
      appliquer();
    },
  };

  appliquer();
})();
