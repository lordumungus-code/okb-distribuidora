(() => {
  "use strict";
  const CFG = window.OKB_CONFIG;
  const PRODUTOS = window.OKB_PRODUTOS;
  const CATS = window.OKB_CATEGORIAS;
  const CAT = Object.fromEntries(CATS.map(c => [c.id, c]));
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\blts?\b|\blitros?\b/g, "l").replace(/[+]/g, " mais ").replace(/[^\w\s,/%-]/g, " ").replace(/\s+/g, " ").trim();
  const whatsURL = msg => `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(msg)}`;
  const PAGE = 24;

  // índice de busca
  PRODUTOS.forEach(p => {
    p._n = norm(p.nome);
    p._s = norm(`${p.nome} ${p.marca} ${CAT[p.cat].nome} ${p.desc || ""}`);
  });

  // ---------- configurações / contatos ----------
  $$("[data-cfg]").forEach(el => (el.textContent = CFG[el.dataset.cfg] || ""));
  $$("[data-cfg-href]").forEach(el => {
    const v = CFG[el.dataset.cfgHref];
    el.href = el.hasAttribute("data-mailto") ? `mailto:${v}` : v;
  });
  $$("[data-whats]").forEach(el => (el.href = whatsURL(el.dataset.msg || "Olá, OKB Distribuidora! Vim pelo site e gostaria de um orçamento.")));
  $("#year").textContent = new Date().getFullYear();

  // ---------- helpers de render ----------
  const media = (p, big = false) => {
    if (p.img) return `<img src="${esc(p.img)}" alt="${esc(p.nome)}" loading="lazy">`;
    const v = p.id % 3 === 0 ? " ph--t" : p.id % 3 === 1 ? " ph--g" : "";
    return `<div class="ph${v}"><span class="ph__logo">OKB<i>.</i></span>
      <span class="ph__ic"><svg><use href="#c-${CAT[p.cat].icon}"/></svg></span>
      <span class="ph__brand">${esc(p.marca)}</span></div>`;
  };
  const hl = (text, q) => {
    if (!q) return esc(text);
    const toks = norm(q).split(" ").filter(t => t.length > 1);
    if (!toks.length) return esc(text);
    // marca trechos ignorando acentos
    const n = text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    const marks = new Array(text.length).fill(false);
    toks.forEach(t => { let i = n.indexOf(t); while (i > -1) { for (let k = i; k < i + t.length; k++) marks[k] = true; i = n.indexOf(t, i + 1); } });
    let out = "", open = false;
    [...text].forEach((ch, i) => {
      if (marks[i] && !open) { out += "<mark>"; open = true; }
      if (!marks[i] && open) { out += "</mark>"; open = false; }
      out += esc(ch);
    });
    return out + (open ? "</mark>" : "");
  };
  const card = (p, q = "") => `
    <article class="card${cart[p.id] ? " in-cart" : ""}" data-id="${p.id}">
      ${p.top ? `<span class="card__tag">★ Mais vendido</span>` : p.destaque ? `<span class="card__tag card__tag--blue">Destaque</span>` : ""}
      <button class="card__media" data-open="${p.id}" aria-label="Ver ${esc(p.nome)}">${media(p)}</button>
      <div class="card__body">
        <span class="card__cat">${esc(CAT[p.cat].nome)}</span>
        <h3 class="card__name" data-open="${p.id}">${hl(p.nome, q)}</h3>
        <span class="card__brand">${hl(p.marca, q)}</span>
        <div class="card__foot">
          <button class="btn btn--blue btn--add" data-add="${p.id}"><svg><use href="#i-${cart[p.id] ? "check" : "plus"}"/></svg><span>${cart[p.id] ? "Adicionado" : "Orçamento"}</span></button>
          <a class="btn btn--whats" href="${whatsURL(`Olá! Tenho interesse no produto: ${p.nome} (${p.marca}). Pode me passar o valor?`)}" target="_blank" rel="noopener" aria-label="Pedir pelo WhatsApp"><svg><use href="#i-whats"/></svg></a>
        </div>
      </div>
    </article>`;

  // ---------- estatísticas ----------
  const marcas = [...new Set(PRODUTOS.map(p => p.marca))].sort((a, b) => a.localeCompare(b, "pt"));
  const countUp = (el, to) => {
    const t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + (k === 1 ? "+" : ""); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  countUp($("#statProd"), PRODUTOS.length);
  countUp($("#statMarcas"), marcas.length);
  countUp($("#statCats"), CATS.length);

  // ---------- categorias ----------
  const countBy = id => PRODUTOS.filter(p => p.cat === id).length;
  $("#cats").innerHTML = CATS.map(c => `
    <button class="cat" data-cat="${c.id}">
      <span class="cat__ic"><svg><use href="#c-${c.icon}"/></svg></span>
      <b>${esc(c.nome)}</b><small>${countBy(c.id)} produtos</small>
    </button>`).join("");

  // ---------- vitrine destaques ----------
  const dest = PRODUTOS.filter(p => p.destaque);
  $("#showcase").innerHTML = dest.map(p => `
    <button class="flyer" data-open="${p.id}">
      <div class="flyer__img"><img src="${esc(p.img)}" alt="${esc(p.nome)}" loading="lazy"></div>
      <div class="flyer__body"><div><b>${esc(p.nome)}</b><small>${esc(CAT[p.cat].nome)}</small></div>
      <span class="flyer__go"><svg><use href="#i-arrow"/></svg></span></div>
    </button>`).join("");
  const track = $("#showcase");
  $(".showcase__nav.prev").onclick = () => track.scrollBy({ left: -track.clientWidth * .8, behavior: "smooth" });
  $(".showcase__nav.next").onclick = () => track.scrollBy({ left: track.clientWidth * .8, behavior: "smooth" });

  // ---------- mais vendidos ----------
  const renderTop = () => { $("#topGrid").innerHTML = PRODUTOS.filter(p => p.top).slice(0, 12).map(p => card(p)).join(""); };

  // ---------- catálogo ----------
  const state = { q: "", cat: "", brand: "", sort: "relev", limit: PAGE };
  $("#brand").innerHTML += marcas.map(m => `<option>${esc(m)}</option>`).join("");

  const search = (q, list = PRODUTOS) => {
    const toks = norm(q).split(" ").filter(Boolean);
    if (!toks.length) return list.map(p => ({ p, s: (p.top ? 3 : 0) + (p.img ? 2 : 0) }));
    const res = [];
    for (const p of list) {
      if (!toks.every(t => p._s.includes(t))) continue;
      let s = 0;
      toks.forEach(t => { if (p._n.startsWith(t)) s += 6; else if (p._n.includes(" " + t)) s += 4; else if (p._n.includes(t)) s += 2; });
      s += (p.top ? 2 : 0) + (p.img ? 1 : 0);
      res.push({ p, s });
    }
    return res;
  };

  const renderChips = () => {
    const base = search(state.q).filter(r => !state.brand || r.p.marca === state.brand);
    const all = `<button class="chip${state.cat ? "" : " active"}" data-chip="">Todos <small>${base.length}</small></button>`;
    $("#chips").innerHTML = all + CATS.map(c => {
      const n = base.filter(r => r.p.cat === c.id).length;
      return `<button class="chip${state.cat === c.id ? " active" : ""}" data-chip="${c.id}"><svg><use href="#c-${c.icon}"/></svg>${esc(c.nome)} <small>${n}</small></button>`;
    }).join("");
  };

  const renderGrid = () => {
    let r = search(state.q).filter(x => (!state.cat || x.p.cat === state.cat) && (!state.brand || x.p.marca === state.brand));
    const cmp = { relev: (a, b) => b.s - a.s || a.p.id - b.p.id, az: (a, b) => a.p.nome.localeCompare(b.p.nome, "pt"), za: (a, b) => b.p.nome.localeCompare(a.p.nome, "pt"), marca: (a, b) => a.p.marca.localeCompare(b.p.marca, "pt") || a.p.nome.localeCompare(b.p.nome, "pt") };
    r.sort(cmp[state.sort]);
    const shown = r.slice(0, state.limit);
    $("#grid").innerHTML = shown.map(x => card(x.p, state.q)).join("");
    $("#empty").hidden = r.length > 0;
    $("#loadMore").parentElement.hidden = r.length <= state.limit;
    const filtros = [state.q && `“${esc(state.q)}”`, state.cat && esc(CAT[state.cat].nome), state.brand && esc(state.brand)].filter(Boolean).join(" • ");
    $("#resultInfo").innerHTML = r.length ? `Mostrando <b>${shown.length}</b> de <b>${r.length}</b> produtos${filtros ? ` para ${filtros}` : ""}` : "";
    renderChips();
    const url = new URL(location);
    ["q", "cat", "brand"].forEach(k => state[k] ? url.searchParams.set(k, state[k]) : url.searchParams.delete(k));
    history.replaceState(null, "", url);
  };
  const update = (patch, scroll = false) => {
    Object.assign(state, patch, { limit: patch.limit || PAGE });
    $("#q").value = state.q; $("#brand").value = state.brand; $("#sort").value = state.sort;
    renderGrid();
    if (scroll) $("#catalogo").scrollIntoView({ behavior: "smooth" });
  };

  let qTimer;
  $("#q").addEventListener("input", e => { clearTimeout(qTimer); qTimer = setTimeout(() => update({ q: e.target.value.trim() }), 160); });
  $("#brand").onchange = e => update({ brand: e.target.value });
  $("#sort").onchange = e => update({ sort: e.target.value });
  $("#loadMore").onclick = () => update({ limit: state.limit + PAGE });

  // ---------- busca do hero com sugestões ----------
  const heroQ = $("#heroQ"), sug = $("#suggest");
  let sel = -1;
  const showSug = () => {
    const q = heroQ.value.trim();
    if (q.length < 2) { sug.hidden = true; return; }
    const r = search(q).sort((a, b) => b.s - a.s);
    sel = -1;
    sug.innerHTML = r.slice(0, 6).map(x => `
      <button type="button" data-open="${x.p.id}"><span class="s-thumb">${x.p.img ? `<img src="${esc(x.p.img)}" alt="">` : media(x.p)}</span>
      <span>${hl(x.p.nome, q)}<small>${esc(x.p.marca)} • ${esc(CAT[x.p.cat].nome)}</small></span></button>`).join("")
      + `<button type="button" class="s-all" data-all>${r.length ? `Ver todos os ${r.length} resultados` : "Nenhum resultado — perguntar no WhatsApp"} →</button>`;
    sug.hidden = false;
  };
  heroQ.addEventListener("input", showSug);
  heroQ.addEventListener("focus", showSug);
  heroQ.addEventListener("keydown", e => {
    const items = $$("button", sug);
    if (sug.hidden || !items.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((b, i) => b.classList.toggle("active", i === sel));
    } else if (e.key === "Enter" && sel > -1) { e.preventDefault(); items[sel].click(); }
    else if (e.key === "Escape") sug.hidden = true;
  });
  document.addEventListener("click", e => { if (!e.target.closest("#heroSearch")) sug.hidden = true; });
  sug.addEventListener("click", e => {
    if (e.target.closest("[data-all]")) {
      const q = heroQ.value.trim();
      if (!search(q).length) { window.open(whatsURL(`Olá! Procuro o produto: ${q}. Vocês trabalham?`), "_blank"); return; }
      $("#heroSearch").requestSubmit();
    }
    sug.hidden = true;
  });
  $("#heroSearch").addEventListener("submit", e => { e.preventDefault(); sug.hidden = true; update({ q: heroQ.value.trim(), cat: "", brand: "" }, true); });
  $$("[data-q]").forEach(b => (b.onclick = () => { heroQ.value = b.dataset.q; update({ q: b.dataset.q, cat: "", brand: "" }, true); }));
  $$("[data-goto-search]").forEach(b => (b.onclick = () => { $("#catalogo").scrollIntoView({ behavior: "smooth" }); setTimeout(() => $("#q").focus({ preventScroll: true }), 500); }));

  // ---------- modal ----------
  const modal = $("#modal");
  let current = null, lastFocus = null;
  const openModal = id => {
    const p = PRODUTOS.find(x => x.id === +id);
    if (!p) return;
    current = p; lastFocus = document.activeElement;
    $("#mMedia").innerHTML = media(p, true);
    $("#mCat").textContent = CAT[p.cat].nome;
    $("#mTitle").textContent = p.nome;
    $("#mBrand").textContent = p.marca;
    $("#mDesc").textContent = p.desc || `Produto ${p.marca} da linha ${CAT[p.cat].nome.toLowerCase()}. Consulte especificações, embalagens disponíveis e condições especiais para sua empresa com a nossa equipe.`;
    $("#mWhats").href = whatsURL(`Olá! Tenho interesse no produto: ${p.nome} (${p.marca}). Pode me passar o valor e disponibilidade?`);
    syncModalBtn();
    const rel = PRODUTOS.filter(x => x.cat === p.cat && x.id !== p.id).sort((a, b) => (b.marca === p.marca) - (a.marca === p.marca) || (b.top || 0) - (a.top || 0)).slice(0, 4);
    $("#mRelated").innerHTML = rel.length ? `<h4>Veja também</h4><div class="rel">${rel.map(r => `<button data-open="${r.id}">${esc(r.nome)}<small>${esc(r.marca)}</small></button>`).join("")}</div>` : "";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal__close", modal).focus();
  };
  const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; current = null; lastFocus && lastFocus.focus && lastFocus.focus(); };
  const syncModalBtn = () => {
    if (!current) return;
    const inCart = !!cart[current.id];
    $("#mAdd").innerHTML = `<svg><use href="#i-${inCart ? "check" : "plus"}"/></svg>${inCart ? "No orçamento" : "Adicionar ao orçamento"}`;
    $("#mAdd").classList.toggle("btn--green", inCart);
  };
  $("#mAdd").onclick = () => { if (current) { addToCart(current.id); syncModalBtn(); } };
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });

  // ---------- orçamento (carrinho) ----------
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem("okb_cart") || "{}"); } catch { cart = {}; }
  const drawer = $("#drawer");
  const save = () => localStorage.setItem("okb_cart", JSON.stringify(cart));
  const toast = msg => {
    const t = $("#toast");
    t.innerHTML = `<svg><use href="#i-check"/></svg>${esc(msg)}`;
    t.classList.add("show");
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2200);
  };
  const cartMsg = () => {
    const items = Object.entries(cart).map(([id, q]) => [PRODUTOS.find(p => p.id === +id), q]).filter(([p]) => p);
    const nome = $("#cartName").value.trim();
    return `Olá, OKB Distribuidora! ${nome ? `Sou ${nome}. ` : ""}Gostaria de um orçamento para:\n\n` +
      items.map(([p, q]) => `• ${q}x ${p.nome} (${p.marca})`).join("\n") + "\n\nAguardo retorno. Obrigado!";
  };
  const renderCart = () => {
    const ids = Object.keys(cart);
    const total = Object.values(cart).reduce((a, b) => a + b, 0);
    const badge = $("#cartCount");
    if (badge.textContent !== String(total)) { badge.textContent = total; badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump"); }
    $("#cartList").innerHTML = ids.length ? ids.map(id => {
      const p = PRODUTOS.find(x => x.id === +id);
      if (!p) return "";
      return `<div class="ci"><div class="ci__thumb">${media(p)}</div>
        <div class="ci__info"><b>${esc(p.nome)}</b><small>${esc(p.marca)}</small></div>
        <div class="qty"><button data-dec="${p.id}" aria-label="Diminuir"><svg><use href="#i-minus"/></svg></button><span>${cart[id]}</span><button data-inc="${p.id}" aria-label="Aumentar"><svg><use href="#i-plus"/></svg></button></div></div>`;
    }).join("") : `<div class="drawer__empty"><svg><use href="#i-cart"/></svg><p>Sua lista está vazia.<br>Adicione produtos para pedir um orçamento.</p></div>`;
    $("#sendCart").classList.toggle("disabled", !ids.length);
    $("#clearCart").hidden = !ids.length;
    $("#sendCart").href = whatsURL(cartMsg());
  };
  const refreshCards = () => $$(".card").forEach(c => {
    const id = c.dataset.id, inCart = !!cart[id];
    c.classList.toggle("in-cart", inCart);
    const b = $(".btn--add", c);
    if (b) b.innerHTML = `<svg><use href="#i-${inCart ? "check" : "plus"}"/></svg><span>${inCart ? "Adicionado" : "Orçamento"}</span>`;
  });
  function addToCart(id) {
    const p = PRODUTOS.find(x => x.id === +id);
    cart[id] = (cart[id] || 0) + 1;
    save(); renderCart(); refreshCards();
    toast(`${p.nome} adicionado ao orçamento`);
  }
  $("#cartList").addEventListener("click", e => {
    const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
    if (inc) cart[inc.dataset.inc]++;
    if (dec) { const id = dec.dataset.dec; if (--cart[id] <= 0) delete cart[id]; }
    if (inc || dec) { save(); renderCart(); refreshCards(); syncModalBtn(); }
  });
  $("#cartName").addEventListener("input", () => ($("#sendCart").href = whatsURL(cartMsg())));
  $("#clearCart").onclick = () => { cart = {}; save(); renderCart(); refreshCards(); syncModalBtn(); };
  const openCart = () => { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); };
  const closeCart = () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); };
  $("#openCart").onclick = openCart;
  drawer.addEventListener("click", e => { if (e.target.closest("[data-close-cart]")) closeCart(); });

  // ---------- eventos globais ----------
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add); return; }
    const open = e.target.closest("[data-open]");
    if (open) { openModal(open.dataset.open); return; }
    const cat = e.target.closest("[data-cat]");
    if (cat) { update({ cat: cat.dataset.cat, q: "", brand: "" }, true); return; }
    const chip = e.target.closest("[data-chip]");
    if (chip) update({ cat: chip.dataset.chip });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (!modal.hidden) closeModal(); closeCart(); }
  });
  $("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
  $$("#nav a").forEach(a => (a.onclick = () => $("#nav").classList.remove("open")));

  // ---------- init ----------
  const params = new URLSearchParams(location.search);
  state.q = params.get("q") || "";
  state.cat = CAT[params.get("cat")] ? params.get("cat") : "";
  state.brand = marcas.includes(params.get("brand")) ? params.get("brand") : "";
  $("#q").value = state.q; $("#brand").value = state.brand;
  renderTop();
  renderGrid();
  renderCart();
  if (state.q || state.cat || state.brand) setTimeout(() => $("#catalogo").scrollIntoView(), 50);
})();
