// Vidéo IRM pilotée par le défilement : les images de frames/ sont dessinées sur un <canvas>.
const COUNT = 97;
// Deux tailles agrandies par IA (tools/upscale_frames.py) : 1920 px pour les grands écrans, 960 px sinon.
const DIR = Math.max(innerWidth, innerHeight) * (window.devicePixelRatio || 1) > 1100 ? "frames/1920" : "frames/960";
const SRC = (i) => `${DIR}/scan_${String(i + 1).padStart(4, "0")}.webp`;
const VIDEO_END = 0.9; // la vidéo se termine à 90 % du défilement de la section

export function initScan() {
  const section = document.getElementById("scan");
  const canvas = document.getElementById("scan-canvas");
  const ctx = canvas.getContext("2d");
  const hero = document.getElementById("hero");
  const scrim = document.getElementById("hero-scrim");
  const phases = [...document.querySelectorAll(".phase")];
  const bar = document.getElementById("scan-loader-bar");
  const loader = document.getElementById("scan-loader");
  const frames = new Array(COUNT);
  let loaded = 0;
  let drawn = -1;
  let ticking = false;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    drawn = -1;
    update();
  }

  function nearestLoaded(i) {
    for (let d = 0; d < COUNT; d++) {
      if (frames[i - d]?.complete) return frames[i - d];
      if (frames[i + d]?.complete) return frames[i + d];
    }
    return null;
  }

  function draw(i) {
    const img = nearestLoaded(i);
    if (!img || !img.naturalWidth) return;
    const cw = canvas.width, ch = canvas.height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * s, h = img.naturalHeight * s;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    drawn = i;
  }

  function progress() {
    const r = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight;
    return total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
  }

  const header = document.querySelector(".site-header");

  function update() {
    ticking = false;
    const p = progress();
    header.classList.toggle("is-solid", section.getBoundingClientRect().bottom < 80);
    const i = Math.min(COUNT - 1, Math.round((Math.min(p, VIDEO_END) / VIDEO_END) * (COUNT - 1)));
    if (i !== drawn) draw(i);
    const fade = Math.min(1, Math.max(0, (p - 0.04) / 0.12));
    hero.style.opacity = String(1 - fade);
    scrim.style.opacity = String(1 - fade);
    hero.style.transform = `translate3d(0, ${-fade * 40}px, 0)`;
    // Une fois effacé, l'accueil n'est plus cliquable ni atteignable au clavier ; le titre reste lisible par les lecteurs d'écran
    hero.classList.toggle("is-faded", fade >= 1);
    for (const el of phases) {
      el.classList.toggle("is-active", p >= Number(el.dataset.from) && p < Number(el.dataset.to));
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  function load(i) {
    const img = new Image();
    img.decoding = "async";
    img.onload = img.onerror = () => {
      loaded++;
      bar.style.transform = `scaleX(${loaded / COUNT})`;
      if (loaded === COUNT) loader.classList.add("is-done");
      if (Math.abs(i - drawn) < 3 || drawn === -1) { drawn = -1; update(); }
    };
    img.src = SRC(i);
    frames[i] = img;
  }

  // La première image d'abord, puis les autres par ordre d'apparition.
  load(0);
  for (let i = 1; i < COUNT; i++) load(i);

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", resize);
  resize();
}
