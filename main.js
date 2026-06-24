// Manzara — lightweight bilingual (DE/EN) toggle. No dependencies.
const I18N = {
  de: {
    meta_title: "Manzara — Photorealistische Immobilien-Rundgänge in Zürich",
    meta_desc: "Fotorealistische 3D-Rundgänge Ihrer Immobilien — lokal in Zürich aufgenommen, innert 48 Stunden online.",
    nav_benefits: "Vorteile",
    nav_how: "So funktioniert's",
    nav_cta: "Pilot anfragen",
    hero_eyebrow: "PHOTOREALISTISCHE 3D-RUNDGÄNGE · ZÜRICH",
    hero_h1: "Die schönste Aussicht auf jede Immobilie.",
    hero_lead: "Fotorealistische 3D-Rundgänge Ihrer Objekte — lokal in Zürich aufgenommen, innert 48 Stunden online. Kein Abo. Ihre Daten.",
    hero_cta1: "Demo ansehen",
    hero_cta2: "Pilot anfragen",
    demo_pill: "Live-Demo-Rundgang",
    demo_cap: "Echtzeit-3D · bewegen Sie sich frei durch den Raum",
    pillars_title: "Warum Manzara",
    p1_t: "Fotorealistisch",
    p1_b: "Modernste Gaussian-Splat-Technologie: ein echter, lichtdurchfluteter Gang durch den Raum — kein klobiger 360°-Rundgang.",
    p2_t: "Lokal & schnell",
    p2_b: "Ein Zürcher Team, vor Ort. Fertiger Rundgang innert 48 Stunden — statt wochenlangem Warten.",
    p3_t: "Ihre Daten, kein Abo",
    p3_b: "Gehostet ohne Lock-in. Der Rundgang gehört Ihnen — keine monatliche Abo-Falle.",
    how_title: "So funktioniert's",
    how_1_t: "Scannen", how_1_b: "Wir scannen das Objekt vor Ort — ca. 1 Stunde, minimal störend.",
    how_2_t: "48 Stunden", how_2_b: "Sie erhalten einen gehosteten, gebrandeten Rundgang — Link + Einbettung.",
    how_3_t: "Verkaufen", how_3_b: "Mehr Aufmerksamkeit, mehr Besichtigungen, schnellerer Verkauf.",
    cta_h: "Bereit, Ihr nächstes Objekt zum Strahlen zu bringen?",
    cta_sub: "Erstkunden-Pilot zum Einführungspreis — begrenzt verfügbar.",
    cta_btn: "Pilot anfragen",
    footer_info: "Zürich · manzara.ch · hallo@manzara.ch",
    _toggle: "EN"
  },
  en: {
    meta_title: "Manzara — Photorealistic property tours in Zürich",
    meta_desc: "Photorealistic 3D tours of your listings — captured locally in Zürich, live within 48 hours.",
    nav_benefits: "Benefits",
    nav_how: "How it works",
    nav_cta: "Request a pilot",
    hero_eyebrow: "PHOTOREALISTIC 3D TOURS · ZÜRICH",
    hero_h1: "The most beautiful view of any property.",
    hero_lead: "Photorealistic 3D tours of your listings — captured locally in Zürich, live within 48 hours. No subscription. Your data.",
    hero_cta1: "Watch demo",
    hero_cta2: "Request a pilot",
    demo_pill: "Live demo tour",
    demo_cap: "Real-time 3D · move freely through the space",
    pillars_title: "Why Manzara",
    p1_t: "Photorealistic",
    p1_b: "State-of-the-art Gaussian-splat technology: a real, light-filled walk through the space — not a clunky 360° tour.",
    p2_t: "Local & fast",
    p2_b: "A Zürich team, on-site. Finished tour within 48 hours — instead of weeks of waiting.",
    p3_t: "Your data, no subscription",
    p3_b: "Hosted without lock-in. The tour is yours — no monthly subscription trap.",
    how_title: "How it works",
    how_1_t: "Scan", how_1_b: "We scan the property on-site — about 1 hour, minimally disruptive.",
    how_2_t: "48 hours", how_2_b: "You get a hosted, branded tour — link + embed.",
    how_3_t: "Sell", how_3_b: "More attention, more viewings, a faster sale.",
    cta_h: "Ready to make your next property shine?",
    cta_sub: "Founding-customer pilot at an introductory price — limited availability.",
    cta_btn: "Request a pilot",
    footer_info: "Zürich · manzara.ch · hallo@manzara.ch",
    _toggle: "DE"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.de;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in dict)) return;
    if (el.tagName === "TITLE") document.title = dict[key];
    else if (el.tagName === "META") el.setAttribute("content", dict[key]);
    else el.textContent = dict[key];
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = dict._toggle;
  try { localStorage.setItem("manzara_lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = "de";
  try { lang = localStorage.getItem("manzara_lang") || "de"; } catch (e) {}
  if (!I18N[lang]) lang = "de";
  applyLang(lang);
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.addEventListener("click", () => {
    applyLang(document.documentElement.lang === "de" ? "en" : "de");
  });
});
