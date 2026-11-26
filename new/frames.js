/* شمس النهار — فيلا ريندر حقيقي بتتبني قدام الزائر (8 مراحل) ومتنوّرة حسب ساعة دبي دلوقتي */
(function () {
  const $ = s => document.querySelector(s);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 900px)').matches;
  const box = $('#frames'), R = 'renders/', sfx = small ? '-sm.webp' : '.webp';
  const NAMES = ['', 'الأرض والرخصة', 'الحفر والأساسات', 'أعمدة وسقف الأرضي', 'الهيكل الخرساني', 'البلوك', 'التمديدات واللياسة', 'التشطيب والواجهات', 'تسليم المفتاح'];

  const mk = n => { const i = new Image(); i.alt = ''; i.decoding = 'async'; i.src = R + n + sfx; i.onerror = () => { i.dataset.bad = 1; }; box.appendChild(i); return i; };
  const st = [null]; for (let s = 1; s <= 8; s++) st.push(mk('stage' + s));
  const fin = { day: mk('final_day'), golden: mk('final_golden'), night: mk('final_night') };

  /* real Dubai sun */
  const LAT = 25.2048, LON = 55.2708;
  function sunAt(date) {
    const rad = Math.PI / 180, d = (date - Date.UTC(2000, 0, 1, 12)) / 864e5;
    const g = (357.529 + .98560028 * d) * rad, q = 280.459 + .98564736 * d;
    const L = (q + 1.915 * Math.sin(g) + .02 * Math.sin(2 * g)) * rad, e = (23.439 - 3.6e-7 * d) * rad;
    const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L)), dec = Math.asin(Math.sin(e) * Math.sin(L));
    const gmst = ((18.697374558 + 24.06570982441908 * d) % 24 + 24) % 24, H = (gmst * 15 + LON) * rad - ra, lat = LAT * rad;
    const el = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(H));
    const az = Math.atan2(-Math.sin(H), Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(H));
    return { deg: el * 180 / Math.PI, az };
  }
  const nowH = () => { const n = new Date(); return ((n.getUTCHours() + 4) % 24) + n.getUTCMinutes() / 60; };
  const dateFor = h => { const n = new Date(Date.now() + 4 * 36e5); return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()) + (h - 4) * 36e5; };
  const ar = n => String(n).padStart(2, '0').replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  const fmtH = h => { const hh = Math.floor(h) % 24, mm = Math.floor((h % 1) * 60); return `${ar(hh % 12 || 12)}:${ar(mm)} ${hh < 12 ? 'ص' : 'م'}`; };
  const dirName = az => ['الشمال', 'الشمال الشرقي', 'الشرق', 'الجنوب الشرقي', 'الجنوب', 'الجنوب الغربي', 'الغرب', 'الشمال الغربي'][Math.round((((az * 180 / Math.PI) % 360) + 360) % 360 / 45) % 8];
  let hour = nowH(), live = true, light = { day: 1, golden: 0, night: 0 };
  function applySun() {
    const { deg, az } = sunAt(dateFor(hour));
    const night = 1 - sstep(-6, 0, deg), golden = (1 - night) * (1 - sstep(4, 14, deg));
    light = { night, golden, day: Math.max(0, 1 - night - golden) };
    document.body.classList.toggle('is-night', night > .5);
    $('#clkTx').textContent = `دبي · ${fmtH(hour)}`;
    $('#clkSun').textContent = deg > 0 ? `الشمس في ${dirName(az)} · ارتفاعها ${Math.round(deg)}°` : 'الشمس تحت الأفق · الإنارة تعمل';
    const r = $('#clkR'); if (document.activeElement !== r) r.value = hour;
  }
  const r = $('#clkR');
  r.addEventListener('input', () => { live = false; hour = +r.value; applySun(); $('#clkNow').classList.add('show'); });
  $('#clkNow').addEventListener('click', () => { live = true; hour = nowH(); applySun(); $('#clkNow').classList.remove('show'); });
  setInterval(() => { if (live) { hour = nowH(); applySun(); } }, 30000);
  applySun();
  const q = parseFloat(new URLSearchParams(location.search).get('t')); if (!isNaN(q)) { live = false; hour = q; applySun(); }

  /* build progress: intro time-lapse, then scroll-driven */
  const journey = $('#journey'); let t0 = null, introDone = reduce, P = reduce ? 8 : 0;
  const INTRO = 5200;
  window.startVilla = () => { t0 = performance.now(); };
  function tick(now) {
    const jt = journey.getBoundingClientRect(), inJ = jt.top < innerHeight * .35;
    let target, mode = 'hero';
    if (inJ) { mode = 'journey'; introDone = true; target = .6 + clamp((innerHeight * .5 - jt.top) / (jt.height - innerHeight * .2)) * 7.4; }
    else if (introDone) target = 8.999;
    else if (t0 == null) target = 1;
    else { const k = clamp((now - t0) / INTRO); target = 1 + k * 7.999; if (k >= 1) introDone = true; }
    P = (mode === 'hero' && !introDone) || reduce ? target : P + (target - P) * .12;
    document.body.classList.toggle('in-journey', mode === 'journey');
    document.body.classList.toggle('built', introDone);

    const s = clamp(Math.floor(P), 1, 8), f = sstep(.55, 1, P - s); // hold, then crossfade to next
    for (let k = 1; k <= 8; k++) st[k].style.opacity = k === s ? 1 : (k === s + 1 ? f : 0);
    const finalK = mode === 'hero' && introDone ? 1 : (s === 8 ? sstep(8.2, 8.9, P) : 0);
    fin.day.style.opacity = finalK * (light.day + (fin.golden.dataset.bad ? light.golden : 0) + (fin.night.dataset.bad ? light.night : 0));
    fin.golden.style.opacity = finalK * light.golden; fin.night.style.opacity = finalK * light.night;
    if (fin.day.dataset.bad) fin.day.style.opacity = 0;

    $('#hudN').textContent = NAMES[s]; $('#hudI').textContent = `${s}/8`;
    $('#hudRing').style.strokeDashoffset = 213.6 * (1 - clamp(P / 8.999));
    document.querySelectorAll('.ch').forEach(c => c.classList.toggle('on', mode === 'journey' && +c.dataset.s === s));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  if (reduce) document.body.classList.add('built');
})();
