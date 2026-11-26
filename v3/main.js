// رقم الواتساب المعتمد من أحمد (22-11-2026)
const WA = "971562274226";

const EN = {
  nAbout:"About", nServices:"Services", nProcess:"Approach", nHousing:"Housing", nExpertise:"Expertise", nContact:"Contact us",
  heroEyebrow:"Building Contracting · Dubai · Since 2016",
  heroTitle:"Building homes that last for generations",
  heroLead:"From approved drawings to handing over the keys: construction, MEP and finishing to a standard worthy of your name, under one management.",
  ctaStart:"Start your project with us", ctaMore:"Discover us", scroll:"Explore",
  vsBuild:"Under construction", vsDone:"After handover", vsConcept:"Illustrative concept", sndOn:"Play music", sndOff:"Mute music", vsHint:"Hover or swipe across the image to see the villa before and after handover",
  badge:"years of building in Dubai",
  aKicker:"About us", aTitle:"Your building partner, from the first stone to the final touch.",
  aP1:"Shams Al Nahar Contracting was established in Dubai in 2016. We execute residential and commercial projects of every scale, in line with our clients' requirements, on time and within the agreed budget.",
  aP2:"We have delivered private villas, residential and commercial buildings, clinics and medical centres, warehouses and labour accommodation. The group also includes an electromechanical company and a building materials trading company, so everything your project needs is under one roof.",
  st1:"Year established", st2:"Projects in our record", st3:"Building contracting classification", st4:"Integrated companies",
  svKicker:"Services", svTitle:"Integrated services for every stage of your project",
  s1t:"Design & Build", s1p:"Design and construction of villas and buildings up to G+12, from foundations and structure to final finishing.",
  s2t:"MEP Works", s2p:"HVAC, water supply, electrical, drainage, fire alarm and fire-fighting systems.",
  s3t:"Interior Fit-out", s3p:"Interior finishing and fit-out for villas, offices, clinics and restaurants.",
  s4t:"Project Management", s4p:"Space planning, construction management and coordination with consultants and authorities.",
  s5t:"Low Current & Smart Home", s5p:"CCTV, smart home systems, networks and cabling and telephone systems.",
  s6t:"Annexes & Renovation", s6p:"Annexes, majlis and service blocks, plus repair and extension of existing villas.",
  prKicker:"Our approach", prTitle:"Five stages, one commitment to quality.",
  p1t:"Excavation & Foundations", p1p:"Excavation, footings and waterproofing according to the soil report and approved structural drawings.",
  p2t:"Concrete Structure", p2p:"Columns, slabs and beams, with concrete testing and consultant approval at every stage.",
  p3t:"Blockwork", p3p:"External and internal walls, prepared for building services.",
  p4t:"MEP Installations", p4p:"Electrical, water supply, drainage, HVAC, fire systems and low current.",
  p5t:"Finishing & Handover", p5p:"Plaster, paint, flooring and façades, then final connections and the completion certificate.",
  hKicker:"Housing programme villas", hTitle:"A trusted partner in building citizens' homes.",
  hP:"We build citizens' villas financed by the Mohammed Bin Rashid Housing Establishment and the Sheikh Zayed Housing Programme, according to approved drawings and technical requirements, managing payment stages and reports with the consultant through to the completion certificate.",
  h1:"Experience with the Establishment's procedures and payment stages", h2:"Coordination with the consultant, Dubai Municipality and DEWA", h3:"Annexes and extensions to existing villas",
  hCta:"Consult us about your villa",
  exKicker:"Expertise", exTitle:"Experience in every type of project.", exNote:"From private villas to buildings, clinics and warehouses, in Dubai and beyond.",
  ty1:"Private villas", ty2:"Housing programme villas", ty3:"Residential & commercial buildings", ty4:"Clinics & medical centres", ty5:"Restaurants & offices", ty6:"Warehouses & labour accommodation",
  cKicker:"Contact us", cTitle:"Let's build your next project together.", cP:"Tell us about your project and our team will get back to you shortly.",
  lMail:"E-mail", lWa:"WhatsApp", lLoc:"Location", cCity:"Dubai, United Arab Emirates",
  fTitle:"Request a quotation", fName:"Name", fType:"Project type", fMsg:"Project details", fSend:"Send via WhatsApp",
  o1:"New villa", o2:"MBRHE housing villa", o3:"Annex or extension", o4:"Residential or commercial building", o5:"Interior fit-out", o6:"Other",
  fAbout:"Shams Al Nahar Contracting — building contracting and electromechanical works in Dubai since 2016.",
  fcLinks:"Quick links", fcServices:"Services", fcContact:"Contact us",
  ftCta:"Have a project in mind? Let's make it real.", ftCtaBtn:"Request a quotation",
  legal:"Shams Al Nahar Contracting", rights:"All rights reserved"
};
Object.assign(EN, {
  nProjects:"Projects", pjKicker:"Our projects", pjTitle:"Our work, on the ground.",
  pjTabV:"Villas under construction 2026", pjTabC:"Clinics & medical centres",
  pjNoteV:"Recent photos from our sites in Dubai, August to November 2026.",
  pjNoteC:"Approved 3D design of a day-surgery centre we executed in Dubai.",
  imgNote:"Some images are illustrative; project photos are from our own sites"
});
const PJ_NOTE = { v:["صور حديثة من مواقعنا في دبي، من أغسطس إلى نوفمبر 2026.", EN.pjNoteV], c:["التصميم ثلاثي الأبعاد المعتمد لمركز جراحة اليوم الواحد الذي نفّذناه في دبي.", EN.pjNoteC] };
const PJ = {
  v: [["v03","فيلا سكنية — واجهة كلاسيكية","Residential villa — classic façade"],["v11","فيلا حديثة — دبي","Modern villa — Dubai"],["v07","فيلا سكنية — أعمال التشطيب","Residential villa — finishing works"],
      ["v05","مبنى بواجهة زجاجية","Glass-façade building"],["v09","فيلا حديثة — الواجهات","Modern villa — façades"],["v06","فيلا سكنية — واجهة كلاسيكية","Residential villa — classic façade"],
      ["v12","فيلا حديثة — زجاج وواجهات","Modern villa — glazing & façade"],["v02","فيلا حديثة — اللياسة الخارجية","Modern villa — external plaster"],["v14","فيلا — تفاصيل الواجهة","Villa — façade details"],
      ["v10","فيلا — أعمال الواجهات","Villa — façade works"],["v13","فيلا سكنية — قيد التنفيذ","Residential villa — in progress"],["v08","فيلا سكنية — المدخل","Residential villa — entrance"],
      ["v01","الهيكل الخرساني","Concrete structure"],["v15","الهيكل والبلوك","Structure & blockwork"],["v04","أعمال البلوك والهيكل","Blockwork & structure"]],
  c: [["c01","الاستقبال","Reception"],["c02","الاستقبال والسلم","Reception & staircase"],["c03","منطقة الانتظار","Waiting area"],["c04","مكتب الاستقبال","Reception desk"],
      ["c05","عيادة الأسنان","Dental clinic"],["c06","عيادة الأسنان","Dental clinic"],["c07","غرفة العلاج","Treatment room"],["c08","غرفة الفحص","Examination room"],
      ["c09","الممرات","Corridors"],["c10","استراحة","Lounge"],["c11","الواجهة الخارجية","Exterior"]]
};
const MQ = {
  ar:["التصميم والبناء","الأعمال الكهروميكانيكية","التشطيبات الداخلية","فلل الإسكان","إدارة المشاريع","المنزل الذكي"],
  en:["Design & Build","MEP Works","Interior Fit-out","Housing Villas","Project Management","Smart Home"]
};

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- language (applied before animations) ---------- */
let lang = "ar";
try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang") || "ar"; } catch (e) {}
lang = lang === "en" ? "en" : "ar";
if (lang === "en") {
  document.documentElement.lang = "en"; document.documentElement.dir = "ltr";
  $$("[data-i]").forEach(el => { const t = EN[el.dataset.i]; if (t) el.textContent = t; });
  document.title = "Shams Al Nahar Contracting | شمس النهار للمقاولات";
  $("#vid source").setAttribute("src", "video/intro-en.mp4");
  $("#vid").setAttribute("poster", "../img/poster-en.jpg");
  $("#vid").load();
}
$("#lang").textContent = lang === "ar" ? "EN" : "عربي";
$("#lang").onclick = () => {
  const n = lang === "ar" ? "en" : "ar";
  try { localStorage.setItem("lang", n); } catch (e) {}
  location.search = "?lang=" + n;
};
const RTL = lang === "ar";

/* marquee content */
const mq = $("#mq");
const items = MQ[lang].map(t => `<span>${t}</span>`).join("");
mq.innerHTML = items + items + items + items;

/* split headings into words */
$$(".split").forEach(el => {
  el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="w"><span>${w}</span></span>`).join(" ");
});

/* WhatsApp links */
const waBase = `https://wa.me/${WA}`;
["#waFloat", "#waLine", "#waFoot"].forEach(s => $(s).href = waBase);
$("#form").onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = RTL
    ? `مرحباً شمس النهار، أرغب في عرض سعر.\nالاسم: ${f.get("n")}\nنوع المشروع: ${f.get("t")}\nالتفاصيل: ${f.get("m")}`
    : `Hello Shams Al Nahar, I would like a quotation.\nName: ${f.get("n")}\nProject type: ${f.get("t")}\nDetails: ${f.get("m")}`;
  window.open(`${waBase}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
};
$("#yr").textContent = new Date().getFullYear();
/* localized accessible labels */
const A11Y = RTL ? { burger:"القائمة", x:"إغلاق", p:"السابق", n:"التالي", top:"إلى الأعلى", wa:"واتساب" }
                 : { burger:"Menu", x:"Close", p:"Previous", n:"Next", top:"Back to top", wa:"WhatsApp" };
[["#burger","burger"],[".lb-x","x"],[".lb-p","p"],[".lb-n","n"],[".to-top","top"],["#waFloat","wa"]].forEach(([s,k]) => { const el = $(s); if (el) el.setAttribute("aria-label", A11Y[k]); });

/* projects gallery + lightbox */
const pjGrid = $("#pjGrid"), lb = $("#lb");
let pjSet = "v", lbIdx = 0;
function renderPJ(t) {
  pjSet = t;
  pjGrid.innerHTML = PJ[t].map(([f, ar, en], i) =>
    `<figure class="pj" data-index="${i}"><img src="../photos/projects/${f}.webp" alt="${RTL ? ar : en}" loading="lazy"><figcaption>${RTL ? ar : en}</figcaption></figure>`).join("");
  $("#pjNote").textContent = PJ_NOTE[t][RTL ? 0 : 1];
  $$("#pjTabs button").forEach(b => b.classList.toggle("on", b.dataset.t === t));
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}
$("#pjTabs").onclick = e => { const b = e.target.closest("button"); if (b) renderPJ(b.dataset.t); };
function lbShow(i) {
  const L = PJ[pjSet]; lbIdx = (i + L.length) % L.length;
  $("img", lb).src = `../photos/projects/${L[lbIdx][0]}.webp`; $(".lb-c", lb).textContent = L[lbIdx][RTL ? 1 : 2];
}
pjGrid.onclick = e => { const f = e.target.closest(".pj"); if (!f) return; lbShow(+f.dataset.index); lb.classList.add("open"); };
lb.onclick = e => {
  if (e.target.closest(".lb-n")) return lbShow(lbIdx + (RTL ? -1 : 1));
  if (e.target.closest(".lb-p")) return lbShow(lbIdx + (RTL ? 1 : -1));
  if (e.target.tagName !== "IMG") lb.classList.remove("open");
};
addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lb.classList.remove("open");
  if (e.key === "ArrowRight") lbShow(lbIdx + (RTL ? -1 : 1));
  if (e.key === "ArrowLeft") lbShow(lbIdx + (RTL ? 1 : -1));
});
renderPJ("v");

/* film */
// silent, auto-plays only while visible
const vid = $("#vid");
vid.muted = true;
if ("IntersectionObserver" in window) {
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? vid.play().catch(() => {}) : vid.pause()), { threshold: .25 }).observe(vid);
} else { vid.play().catch(() => {}); }
const snd = $("#snd"), sndL = $("span", snd);
snd.onclick = () => {
  vid.muted = !vid.muted;
  if (!vid.muted) { vid.volume = .6; vid.play().catch(() => {}); }
  snd.classList.toggle("is-on", !vid.muted); snd.setAttribute("aria-pressed", String(!vid.muted));
  sndL.textContent = vid.muted ? (RTL ? "تشغيل الموسيقى" : EN.sndOn) : (RTL ? "كتم الموسيقى" : EN.sndOff);
};

/* nav */
const nav = $("#nav"), links = $("#links"), burger = $("#burger");
burger.onclick = () => { links.classList.toggle("open"); burger.classList.toggle("x"); };

/* hero villa: construction -> handover reveal */
const vs = $("#vstage"), vsBeam = $("#vsBeam"), heroEl = $(".hero");
let vsDone = false, vsUser = false;
const vsSet = p => vs.style.setProperty("--p", p + "%");
function vsFinish() { vsDone = true; vsSet(100); vs.classList.remove("live"); vs.classList.add("ready"); heroEl.classList.add("vs-ready"); }
function vsIntro() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { vsFinish(); return; }
  vsSet(0); vs.classList.add("live");
  const t0 = performance.now(), D = 2800;
  (function f(t) { if (vsUser) return; const k = Math.min(1, (t - t0) / D), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    vsSet(e * 100); if (k < 1) requestAnimationFrame(f); else vsFinish(); })(t0);
}
function vsPoint(x) { const r = vs.getBoundingClientRect(); let p = (x - r.left) / r.width * 100; if (document.documentElement.dir !== "rtl") p = 100 - p; return Math.max(0, Math.min(100, p)); }
heroEl.addEventListener("pointermove", e => { if (!vsDone || e.pointerType === "touch") return; vsUser = true; vs.classList.add("live"); vsSet(vsPoint(e.clientX)); });
heroEl.addEventListener("pointerleave", () => { if (!vsDone) return; vs.classList.remove("live"); const from = parseFloat(getComputedStyle(vs).getPropertyValue("--p")) || 100, t0 = performance.now();
  (function f(t) { const k = Math.min(1, (t - t0) / 700); vsSet(from + (100 - from) * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0); });
heroEl.addEventListener("touchmove", e => { if (!vsDone) return; vsSet(vsPoint(e.touches[0].clientX)); vs.classList.add("live"); }, { passive: true });
heroEl.addEventListener("touchend", () => vs.classList.remove("live"));
setTimeout(() => { if (!vsDone && !vsUser) vsFinish(); }, 7000);

/* ---------- motion ---------- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";

function start() {
  document.body.classList.remove("loading");
  $("#loader").classList.add("out");
  setTimeout(vsIntro, 900);

  if (!hasGsap || reduce) {
    $$(".reveal-img").forEach(x => x.style.clipPath = "none");
    initFallback();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* smooth scroll */
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href"); if (id.length < 2) return;
    const t = $(id); if (!t) return;
    e.preventDefault(); links.classList.remove("open"); burger.classList.remove("x");
    lenis ? lenis.scrollTo(t, { offset: id === "#top" ? 0 : -60, duration: 1.6 }) : t.scrollIntoView({ behavior: "smooth" });
  }));

  /* nav state */
  const navState = () => nav.classList.toggle("solid", scrollY > 80);
  ScrollTrigger.create({ start: 0, end: "max", onUpdate: navState }); navState();

  /* hero intro */
  const tl = gsap.timeline({ delay: .55, defaults: { ease: "expo.out" } });
  tl.from(".hero .eyebrow", { y: 30, opacity: 0, duration: 1.2 })
    .from(".hero h1 .w>span", { yPercent: 110, duration: 1.5, stagger: .08 }, "-=.9")
    .from(".hero-lead", { y: 30, opacity: 0, duration: 1.2 }, "-=1.1")
    .fromTo(".hero-cta .btn", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: .1, clearProps: "opacity,transform" }, "-=1")
    .from(".hero-bottom", { opacity: 0, duration: 1.2 }, "-=.8")
    .from(".nav-in", { y: -30, opacity: 0, duration: 1.2 }, "-=1.4");
  gsap.to(".hero-in", { yPercent: 18, opacity: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* marquee */
  const w = mq.scrollWidth / 4;
  gsap.fromTo(mq, { x: 0 }, { x: RTL ? w : -w, duration: 32, ease: "none", repeat: -1 });

  /* split headings on scroll */
  $$(".split").forEach(h => {
    if (h.closest(".hero")) return;
    gsap.from($$(".w>span", h), { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: .05, scrollTrigger: { trigger: h, start: "top 85%" } });
  });
  $$(".kicker,.fade,.ex-note,.hs-card p,.ticks li,.ct-text p,.ct-lines>*").forEach(el => {
    gsap.from(el, { y: 26, opacity: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } });
  });

  /* about images */
  $$(".reveal-img").forEach((el, i) => {
    gsap.to(el, { clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "expo.inOut", delay: i * .15, scrollTrigger: { trigger: ".about-media", start: "top 75%" } });
    gsap.fromTo($("img", el), { yPercent: -8 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });
  gsap.from(".badge", { scale: 0, rotate: -40, duration: 1.4, ease: "back.out(1.6)", scrollTrigger: { trigger: ".about-media", start: "top 60%" } });

  /* counters */
  $$("[data-to]").forEach(el => {
    const to = +el.dataset.to, plain = el.dataset.plain, from = plain ? to - 30 : 0, o = { v: from };
    gsap.to(o, { v: to, duration: 2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => el.textContent = Math.round(o.v) });
  });

  /* services horizontal pin */
  const mm = gsap.matchMedia();
  mm.add("(min-width: 701px)", () => {
    const track = $("#svcTrack");
    const dist = () => track.scrollWidth - innerWidth;
    gsap.to(track, {
      x: () => RTL ? dist() : -dist(), ease: "none",
      scrollTrigger: { trigger: ".services", start: "top top", end: () => "+=" + dist(), pin: ".svc-pin", scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: s => gsap.set("#svcBar", { scaleX: s.progress }) }
    });
  });
  gsap.from(".svc", { y: 80, opacity: 0, duration: 1.3, ease: "expo.out", stagger: .08, scrollTrigger: { trigger: ".services", start: "top 70%" } });

  /* process */
  const steps = $$("#steps li"), pvs = $$(".pv"), pvNum = $("#pvNum");
  steps.forEach((li, i) => ScrollTrigger.create({
    trigger: li, start: "top 60%", end: "bottom 60%",
    onToggle: s => { if (!s.isActive) return;
      steps.forEach((x, j) => x.classList.toggle("on", j === i));
      pvs.forEach((x, j) => x.classList.toggle("on", j === i));
      pvNum.textContent = String(i + 1).padStart(2, "0"); }
  }));

  /* parallax backgrounds */
  [".hs-bg", ".ct-bg"].forEach(s => gsap.fromTo(s, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: $(s).parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
  gsap.from(".hs-card", { y: 80, opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".housing", start: "top 60%" } });

  /* bento */
  $$(".tile").forEach((t, i) => gsap.from(t, { y: 70, opacity: 0, duration: 1.3, ease: "expo.out", delay: (i % 3) * .08, scrollTrigger: { trigger: t, start: "top 92%" } }));
  $$(".geo span").forEach((s, i) => gsap.fromTo(s, { y: (i % 2 ? 60 : -60) }, { y: (i % 2 ? -60 : 60), rotation: (i % 3 === 0 ? 25 : 0), ease: "none",
    scrollTrigger: { trigger: ".film", start: "top bottom", end: "bottom top", scrub: true } }));
  gsap.from(".film-box", { scale: .92, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: ".film-box", start: "top 85%", end: "top 30%", scrub: 1 } });
  gsap.from(".ct-form", { y: 80, opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".contact", start: "top 60%" } });

  /* nav active link — created last so the pinned section's spacing is known */
  $$(".links a[href^='#']").forEach(a => {
    const sec = $(a.getAttribute("href")); if (!sec) return;
    ScrollTrigger.create({ trigger: sec, start: "top 50%", end: "bottom 50%", onToggle: s => a.classList.toggle("act", s.isActive) });
  });
  addEventListener("load", () => ScrollTrigger.refresh());
}

function initFallback() {
  document.documentElement.classList.add("no-motion");
  addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 80), { passive: true });
  const steps = $$("#steps li"), pvs = $$(".pv");
  links.onclick = () => { links.classList.remove("open"); burger.classList.remove("x"); };
  if (!("IntersectionObserver" in window)) { steps.forEach(x => x.classList.add("on")); pvs.forEach((x, j) => x.classList.toggle("on", j === 0)); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const i = steps.indexOf(e.target);
    steps.forEach((x, j) => x.classList.toggle("on", j === i)); pvs.forEach((x, j) => x.classList.toggle("on", j === i)); $("#pvNum").textContent = String(i + 1).padStart(2, "0"); } }), { rootMargin: "-45% 0px -45% 0px" });
  steps.forEach(s => io.observe(s));
}

/* wait for hero image + fonts, max 1.6s */
Promise.race([
  Promise.all([document.fonts ? document.fonts.ready : 0, new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = "../photos/hero-villa/villa.webp"; })]),
  new Promise(r => setTimeout(r, 1600))
]).then(() => setTimeout(start, 350));
