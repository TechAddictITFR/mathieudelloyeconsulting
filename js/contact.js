// Liens de contact construits à partir de js/config.js.
import { CONFIG } from "./config.js";
import { ui } from "./i18n.js";

function safeHttps(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" ? u : null;
  } catch { return null; }
}

// Lien de rendez-vous ; le résumé du diagnostic (scores seulement) est joint s'il existe.
export function bookingHref(note = "") {
  const u = safeHttps(CONFIG.bookingUrl);
  if (u) {
    if (note) u.searchParams.set(CONFIG.bookingNoteParam, note);
    return u.href;
  }
  const subject = encodeURIComponent(ui().mail_subject);
  const body = note ? `&body=${encodeURIComponent(note)}` : "";
  return `mailto:${CONFIG.email}?subject=${subject}${body}`;
}

export function initContact() {
  const render = () => {
    document.querySelectorAll(".js-booking").forEach((a) => {
      if (a.id === "res-cta") return; // géré par le diagnostic
      a.href = bookingHref();
      if (safeHttps(CONFIG.bookingUrl)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    });
    document.querySelectorAll(".js-email").forEach((a) => { a.href = `mailto:${CONFIG.email}`; a.textContent = CONFIG.email; });
    const li = safeHttps(CONFIG.linkedin), gh = safeHttps(CONFIG.github);
    document.querySelectorAll(".js-linkedin").forEach((a) => { if (li) a.href = li.href; });
    document.querySelectorAll(".js-github").forEach((a) => { if (gh) a.href = gh.href; });
  };
  render();
  document.addEventListener("langchange", render);
}
