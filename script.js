(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const SECTIONS = ["about", "experience", "projects", "education", "resume", "contact"];

  /* Theme toggle: remembers the visitor's choice */
  try { const s = localStorage.getItem("theme"); if (s) root.setAttribute("data-theme", s); } catch (e) {}
  $("#theme").addEventListener("click", () => {
    const t = root.getAttribute("data-theme");
    const dark = t === "dark" || (!t && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  async function read(path) {
    const r = await fetch(path);
    if (!r.ok) throw new Error(path);
    return r.text();
  }

  /* Turn "### Heading" blocks into separate entries (jobs, projects) */
  function group(el, cls) {
    const wrap = document.createElement("div");
    wrap.className = cls;
    let cur = null;
    Array.from(el.children).forEach((n) => {
      if (n.tagName === "H3") { cur = document.createElement("article"); cur.className = "entry"; wrap.appendChild(cur); }
      (cur || wrap).appendChild(n);
    });
    el.replaceChildren(wrap);
  }

  async function loadHeader() {
    try {
      const t = (await read("content/header.md")).trim();
      const nl = t.indexOf("\n");
      const name = t.slice(0, nl < 0 ? undefined : nl).replace(/^#\s*/, "").trim();
      $("#name").textContent = name;
      $("#foot-name").textContent = name;
      document.title = name;
      $("#role").innerHTML = nl < 0 ? "" : marked.parse(t.slice(nl + 1));
    } catch (e) {}
    $("#year").textContent = new Date().getFullYear();
  }

  async function loadSection(id) {
    const el = $("#" + id + " .body");
    try {
      el.innerHTML = marked.parse(await read("content/" + id + ".md"));
      if (id === "experience") group(el, "timeline");
      if (id === "projects") group(el, "cards");
      if (id === "resume") el.querySelectorAll("a").forEach((a) => { a.classList.add("btn"); a.setAttribute("download", ""); });
    } catch (e) {
      el.innerHTML = '<p class="err">Could not load content/' + id + '.md. If you opened index.html straight from your files, run a local server instead (python -m http.server) or view the site on GitHub Pages.</p>';
    }
  }

  /* Effect 1: letters in the name get heavier as the pointer comes near */
  function nameEffect() {
    if (reduce || !fine) return;
    const h = $("#name");
    const text = h.textContent;
    h.setAttribute("aria-label", text);
    h.textContent = "";
    const letters = [];
    text.split(" ").forEach((word, i) => {
      if (i) h.appendChild(document.createTextNode(" "));
      const w = document.createElement("span");
      w.className = "w";
      w.setAttribute("aria-hidden", "true");
      Array.from(word).forEach((c) => {
        const s = document.createElement("span");
        s.className = "ch"; s.textContent = c;
        w.appendChild(s); letters.push(s);
      });
      h.appendChild(w);
    });
    let x = 0, y = 0, queued = false;
    const paint = () => {
      queued = false;
      letters.forEach((s) => {
        const r = s.getBoundingClientRect();
        const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
        const k = Math.max(0, 1 - d / 150);
        s.style.fontVariationSettings = '"wght" ' + Math.round(500 + k * 300);
      });
    };
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; if (!queued) { queued = true; requestAnimationFrame(paint); } });
  }

  /* Effect 2: the work experience line draws itself as you scroll */
  function timelineEffect() {
    const t = $(".timeline");
    if (!t) return;
    if (reduce) { t.classList.add("static"); return; }
    const items = Array.from(t.children).filter((n) => n.classList.contains("entry"));
    const update = () => {
      const line = innerHeight * 0.6, r = t.getBoundingClientRect();
      t.style.setProperty("--p", Math.min(1, Math.max(0, (line - r.top) / r.height)));
      items.forEach((i) => i.classList.toggle("reached", i.getBoundingClientRect().top < line));
    };
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    update();
  }

  /* Effect 3: a soft light follows the pointer across project cards */
  function cardEffect() {
    if (reduce || !fine) return;
    document.querySelectorAll(".cards .entry").forEach((c) => {
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px");
        c.style.setProperty("--my", e.clientY - r.top + "px");
      });
      c.addEventListener("pointerleave", () => { c.style.setProperty("--mx", "-999px"); c.style.setProperty("--my", "-999px"); });
    });
  }

  /* Highlight the current section in the nav */
  function navHighlight() {
    const links = document.querySelectorAll("nav a");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("main section").forEach((s) => io.observe(s));
  }

  Promise.all([loadHeader()].concat(SECTIONS.map(loadSection))).then(() => {
    nameEffect(); timelineEffect(); cardEffect(); navHighlight();
    if (location.hash) { const t = $(location.hash); if (t) t.scrollIntoView(); }
  });
})();
