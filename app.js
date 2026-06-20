/* =========================================================================
   AI4Sales Mobile — app logic
   Trợ lý tri thức · Trợ lý Push-sale · Bản đồ dịch bệnh
   Mọi câu trả lời được sinh từ dữ liệu nhúng trong data.js (không gọi mạng).
   ========================================================================= */
(() => {
  'use strict';
  const DB = window.DB;

  const SVG = {
    alert: `<svg class="ico" viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`,
    package: `<svg class="ico" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    shield: `<svg class="ico" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    gift: `<svg class="ico" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
    phone: `<svg class="ico" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    arrowRight: `<svg class="ico" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
    science: `<svg class="ico" viewBox="0 0 24 24"><path d="M6 18h8M3 22h18m-4-8-4-4m7 2-3-3M16 3l-7 7M14 22a7 7 0 1 0-14 0"></path></svg>`,
    list: `<svg class="ico" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
    help: `<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    flag: `<svg class="ico" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
    chat: `<svg class="ico" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    trendingUp: `<svg class="ico" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    mapPin: `<svg class="ico" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    sparkles: `<svg class="ico" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>`
  };

  /* ----------------------------------------------------------- Tiny helpers */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const norm = (s) => String(s || '')
    .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const fmtVnd = (n) => (n == null ? '—' : Number(n).toLocaleString('vi-VN') + 'đ');
  const fmtVndShort = (n) => {
    if (n == null) return '—';
    if (n >= 1e9) return (n / 1e9).toFixed(n % 1e9 ? 1 : 0) + ' tỷ';
    if (n >= 1e6) return (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + ' tr';
    return Number(n).toLocaleString('vi-VN');
  };

  /* --------------------------------------------------------------- Indexes */
  const prodById = Object.fromEntries(DB.products.map(p => [p.ma_sp, p]));
  const disById = Object.fromEntries(DB.diseases.map(d => [d.id, d]));
  const coordOf = Object.fromEntries(DB.provinces.map(p => [p.ten, p]));

  const SEV = {                 // mức độ cảnh báo -> hạng rủi ro
    nang: 'high', nguy_hiem: 'high',
    trung_binh: 'med',
    nhe: 'low',
  };
  const SEV_LABEL = { high: 'Cao', med: 'Theo dõi', low: 'Ổn định' };
  const LOAI_LABEL = {
    vaccine: 'Vaccine', khang_sinh: 'Kháng sinh', sat_trung: 'Sát trùng',
    bo_tro: 'Bổ trợ', ho_tro: 'Hỗ trợ', dac_tri: 'Đặc trị',
  };
  const ROLE = {
    vaccine: 'Phòng bệnh', sat_trung: 'Sát trùng chuồng trại',
    khang_sinh: 'Kiểm soát kế phát', dac_tri: 'Đặc trị',
    bo_tro: 'Hỗ trợ – phục hồi', ho_tro: 'Hỗ trợ – phục hồi',
  };
  const sevRank = (m) => SEV[m] === 'high' ? 3 : SEV[m] === 'med' ? 2 : 1;

  /* ------------------------------------------------------------- App state */
  const state = {
    screen: 'home',
    alerts: DB.alerts.slice(),     // có thể được Sale bổ sung tại tab thị trường
    mapFilter: { animal: 'all', sev: 'all', benh: 'all' },
    selectedAlert: null,
    mapZoom: 1,
    mapFocus: { x: 50, y: 50 },
    mapPan: { x: 0, y: 0 },
    kbMode: 'diagnose',
    pushCustomer: DB.distributors[0].id,
  };

  /* =======================================================================
     NAVIGATION
     ===================================================================== */
  function go(id) {
    state.screen = id;
    $$('.screen').forEach(s => s.classList.toggle('active', s.id === id));
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.go === id));
    const active = $('.screen.active');
    if (active) active.scrollTop = 0;
    if (id === 'knowledge') ensureKnowledge();
    if (id === 'push') renderPush();
    if (id === 'market') renderMarket();
  }
  document.addEventListener('click', (e) => {
    // Chạm vào một sản phẩm bất kỳ -> mở chi tiết đầy đủ trong bottom sheet
    const pe = e.target.closest('[data-prod]');
    if (pe) { const p = prodById[pe.dataset.prod]; if (p) { openSheet(answerProduct(p)); return; } }
    const t = e.target.closest('[data-go]');
    if (t) { go(t.dataset.go); }
  });

  /* --------------------------------------------------------------- Toast */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ------------------------------------------------------- Bottom sheet */
  function openSheet(html) {
    $('#sheet').innerHTML = '<div class="grip"></div>' + html;
    $('#sheet').classList.add('show');
    $('#sheetBackdrop').classList.add('show');
  }
  function closeSheet() {
    $('#sheet').classList.remove('show');
    $('#sheetBackdrop').classList.remove('show');
  }
  $('#sheetBackdrop').addEventListener('click', closeSheet);

  /* =======================================================================
     HOME
     ===================================================================== */
  function alertStats(list = state.alerts) {
    const provinces = new Set(list.map(a => a.tinh));
    const severe = list.filter(a => SEV[a.muc_do] === 'high');
    const byDisease = {};
    list.forEach(a => { byDisease[a.ten_benh] = (byDisease[a.ten_benh] || 0) + 1; });
    const topDisease = Object.entries(byDisease).sort((a, b) => b[1] - a[1])[0] || ['—', 0];
    const byProvSevere = {};
    severe.forEach(a => { byProvSevere[a.tinh] = (byProvSevere[a.tinh] || 0) + 1; });
    const byProvAll = {};
    list.forEach(a => { byProvAll[a.tinh] = (byProvAll[a.tinh] || 0) + 1; });
    const hotProv = (Object.entries(byProvSevere).sort((a, b) => b[1] - a[1])[0]
      || Object.entries(byProvAll).sort((a, b) => b[1] - a[1])[0] || ['—', 0]);
    return { provinces, severe, topDisease, hotProv, byProvAll };
  }

  function renderHome() {
    $('#repRegion').textContent = 'Trợ lý Sale thuốc thú y · Khu vực Đông Nam Bộ';
    const s = alertStats();
    $('#bellBadge').textContent = s.severe.length;

    // Hero
    const hot = s.hotProv[0];
    const hotDisease = (state.alerts.filter(a => a.tinh === hot && SEV[a.muc_do] === 'high')[0]
      || state.alerts.filter(a => a.tinh === hot)[0] || {}).ten_benh || s.topDisease[0];
    const upsell = DB.distributors.filter(d => state.alerts.some(a => a.tinh === d.khu_vuc)).length;
    $('#homeHero').innerHTML = `
      <p class="eyebrow">Hôm nay nên chú ý gì?</p>
      <h3>${esc(hot)} đang có tín hiệu ${esc(hotDisease)}</h3>
      <p>${s.severe.length} cảnh báo mức cao trên ${s.provinces.size} tỉnh/thành. ${upsell || 'Vài'} khách hàng trong vùng cảnh báo nên được tư vấn lại theo dữ liệu mua gần đây.</p>
      <div class="hero-foot">
        <span class="hero-pill">🔥 ${s.severe.length} điểm nóng</span>
        <span class="hero-pill">🦠 ${esc(s.topDisease[0].split(' (')[0])}</span>
      </div>`;

    // Stats
    $('#homeStats').innerHTML = [
      `<div class="stat"><strong>${s.provinces.size}</strong><span>tỉnh/thành có cảnh báo</span></div>`,
      `<div class="stat warnval"><strong>${s.severe.length}</strong><span>cảnh báo mức cao</span></div>`,
      `<div class="stat"><strong>${esc(s.topDisease[0].split(' (')[0])}</strong><span>bệnh ghi nhận nhiều nhất</span></div>`,
      `<div class="stat warnval"><strong>${esc(s.hotProv[0])}</strong><span>khu vực nguy cơ cao</span></div>`,
    ].join('');

    // Quick questions
    const quicks = [
      { t: 'Heo sốt cao, bỏ ăn, chết nhanh là bệnh gì?', go: 'knowledge', mode: 'diagnose', run: 'Heo thịt sốt cao 41 độ, bỏ ăn, da tai bụng đỏ tím, chết nhanh tỷ lệ cao' },
      { t: 'Tra cứu Anova Enroflox 10%', go: 'knowledge', mode: 'product', run: 'Anova Enroflox 10%' },
      { t: 'Đang có chương trình khuyến mãi gì?', go: 'knowledge', mode: 'promo', run: 'Có khuyến mãi gì đang áp dụng?' },
      { t: 'Phân tích Đại lý Minh Phát', go: 'push', cust: 'NPP001' },
      { t: 'Mở bản đồ dịch bệnh heat-map', go: 'market' },
    ];
    $('#homeQuick').innerHTML = quicks.map((q, i) => `<button class="quick" data-q="${i}">${esc(q.t)}</button>`).join('');
    $('#homeQuick').onclick = (e) => {
      const b = e.target.closest('[data-q]'); if (!b) return;
      const q = quicks[+b.dataset.q];
      if (q.go === 'knowledge') { setMode(q.mode, true); go('knowledge'); if (q.run) ask(q.run); }
      else if (q.go === 'push') { go('push'); if (q.cust) analyzeCustomer(q.cust); }
      else go(q.go);
    };
  }

  $('#homeSearch').addEventListener('click', () => { go('knowledge'); setTimeout(() => $('#kbInput').focus(), 250); });
  $('#bellBtn').addEventListener('click', () => {
    const severe = state.alerts.filter(a => SEV[a.muc_do] === 'high')
      .sort((a, b) => new Date(b.ngay) - new Date(a.ngay));
    openSheet(`
      <h3>Cảnh báo dịch bệnh</h3>
      <p class="sub">${severe.length} cảnh báo mức cao đang cần chú ý trong khu vực.</p>
      ${severe.map(a => `
        <div class="alert-row" data-prov="${esc(a.tinh)}">
          <span class="alert-dot high"></span>
          <div><h4>${esc(a.tinh)} · ${esc(a.ten_benh.split(' (')[0])}</h4>
          <p>${esc(a.note)}</p></div>
          <span class="risk-badge high">Cao</span>
        </div>`).join('')}
      <div class="spacer-12"></div>
      <button class="btn btn-secondary" id="sheetToMap">Xem trên bản đồ dịch bệnh</button>`);
    $('#sheetToMap').onclick = () => { closeSheet(); go('market'); };
  });

  /* =======================================================================
     KNOWLEDGE ASSISTANT
     ===================================================================== */
  const KB_MODES = {
    diagnose: {
      title: 'Gợi ý mô tả triệu chứng',
      placeholder: 'Mô tả triệu chứng đàn vật nuôi…',
      intro: 'Anh/chị mô tả loài vật nuôi, tuổi, dấu hiệu và diễn biến — tôi sẽ đưa ra <b>chẩn đoán hỗ trợ</b>, mức rủi ro, cảnh báo sớm và hướng xử lý tham khảo. Tôi chỉ hỗ trợ tư vấn ban đầu, không thay thế bác sĩ thú y.',
      quick: [
        'Heo thịt 60 ngày sốt cao 41°C, bỏ ăn, da tai bụng đỏ tím, chết nhanh tỷ lệ cao',
        'Nái sảy thai – đẻ non, heo con sơ sinh yếu, heo thịt ho khó thở cụm theo ô, tai tím từng đợt',
        'Heo sau cai sữa còi cọc, gầy dần dù vẫn ăn, kém đồng đều, hạch bẹn to, đáp ứng kháng sinh kém',
        'Gà 3–6 tuần ủ rũ đột ngột, tiêu chảy phân trắng nhớt, run rẩy, chết tăng nhanh rồi giảm',
        'Đàn gà mào tích tím tái, phù đầu, xuất huyết da chân, chết đột ngột hàng loạt trong 1–2 ngày',
        'Heo con sau cai sữa tiêu chảy phân vàng tanh, mất nước, sút cân',
      ],
    },
    protocol: {
      title: 'Chọn bệnh để xem phác đồ',
      placeholder: 'Hỏi phác đồ xử lý cho bệnh…',
      intro: 'Chọn một bệnh để xem <b>hướng xử lý tham khảo</b>, vaccine phòng và nhóm sản phẩm đi kèm — tổng hợp từ thư viện tri thức đã được duyệt.',
      quick: ['Dịch tả lợn châu Phi (ASF)', 'Tai xanh (PRRS)', 'Tiêu chảy heo con do E.coli', 'Suyễn heo', 'Newcastle (gà rù)', 'Cầu trùng gà'],
    },
    product: {
      title: 'Tra cứu nhanh sản phẩm',
      placeholder: 'Nhập tên sản phẩm cần tra cứu…',
      intro: 'Tra cứu <b>công dụng, chỉ định, liều dùng, đường dùng, giá tham khảo</b> và lưu ý an toàn (chống chỉ định, thời gian ngừng thuốc) của sản phẩm trong danh mục.',
      quick: ['Anova Enroflox 10%', 'Anova Florfen-200', 'NAVET-ASFVAC', 'Anova Electrolyte-Plus', 'Anova Iodine 10%', 'Anova ProGut'],
    },
    promo: {
      title: 'Hỏi nhanh về khuyến mãi',
      placeholder: 'Hỏi về chương trình khuyến mãi…',
      intro: 'Dưới đây là các <b>chương trình khuyến mãi đang áp dụng</b>. Anh/chị có thể hỏi theo sản phẩm, đối tượng khách hàng hoặc điều kiện áp dụng.',
      quick: ['Khuyến mãi cám heo thịt?', 'Có combo nào cho an toàn sinh học?', 'Ưu đãi cho khách hàng mới?', 'Chính sách tích điểm đại lý?'],
    },
  };

  let kbReady = false;
  function ensureKnowledge() {
    if (!kbReady) { setMode('diagnose', true); kbReady = true; }
  }

  function setMode(mode, reset) {
    state.kbMode = mode;
    $$('#kbSeg .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    const cfg = KB_MODES[mode];
    $('#kbInput').placeholder = cfg.placeholder;
    $('#kbQuickTitle').textContent = cfg.title;
    $('#kbQuick').innerHTML = cfg.quick.map(q => `<button class="quick">${esc(q)}</button>`).join('');
    if (reset) {
      $('#kbChat').innerHTML = '';
      addBubble('ai', cfg.intro);
      if (mode === 'promo') setTimeout(() => addBubble('ai', answerPromo('')), 220);
    }
  }
  $('#kbSeg').addEventListener('click', (e) => {
    const b = e.target.closest('.seg-btn'); if (!b) return;
    setMode(b.dataset.mode, true);
  });
  $('#kbQuick').addEventListener('click', (e) => {
    const b = e.target.closest('.quick'); if (!b) return;
    ask(b.textContent);
  });
  $('#kbSend').addEventListener('click', sendKb);
  $('#kbInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendKb(); });
  function sendKb() {
    const v = $('#kbInput').value.trim();
    if (!v) return;
    $('#kbInput').value = '';
    ask(v);
  }

  function addBubble(who, html) {
    const div = document.createElement('div');
    div.className = 'bubble ' + who;
    div.innerHTML = html;
    $('#kbChat').appendChild(div);
    scrollChat();
    return div;
  }
  function scrollChat() {
    const sc = $('#knowledge');
    requestAnimationFrame(() => { sc.scrollTop = sc.scrollHeight; });
  }
  function thinking() {
    const div = document.createElement('div');
    div.className = 'bubble ai typing';
    div.innerHTML = '<i></i><i></i><i></i>';
    $('#kbChat').appendChild(div);
    scrollChat();
    return div;
  }

  /* Tap a suggestion / type a question */
  function ask(text) {
    addBubble('user', esc(text));
    const t = thinking();
    setTimeout(() => {
      const html = route(text);
      t.outerHTML = '<div class="bubble ai">' + html + '</div>';
      scrollChat();
    }, 480);
  }

  /* Intent router (ưu tiên ý định rõ ràng, nếu không dùng tab đang chọn) */
  function route(text) {
    const q = norm(text);
    const mode = state.kbMode;
    const prod = findProduct(text);
    const isPromo = /(khuyen mai|uu dai|combo|tang|chiet khau|tich diem|km|khach moi)/.test(q);
    const dis = findDiseaseByName(text);

    if (isPromo) { setMode('promo'); return answerPromo(text, true); }
    if (prod && (mode === 'product' || /(gia|lieu|cong dung|tra cuu|san pham|thuoc|vaccine|bao quan|chong chi dinh|ngung thuoc)/.test(q) || mode !== 'diagnose')) {
      setMode('product'); return answerProduct(prod);
    }
    if (mode === 'protocol' && dis) { return answerProtocol(dis); }
    if (mode === 'product') { return prod ? answerProduct(prod) : notFoundProduct(text); }
    if (mode === 'promo') { return answerPromo(text, true); }
    if (mode === 'protocol') { return dis ? answerProtocol(dis) : notFoundDisease(); }
    // diagnose mode (default) — but if user just names a disease, show protocol
    const scores = diagnose(text);
    if (scores.length) return answerDiagnose(text, scores);
    if (dis) return answerProtocol(dis);
    if (prod) { setMode('product'); return answerProduct(prod); }
    return fallback();
  }

  function srcRow(docs) {
    return `<div class="src-row">${docs.map(d => `<span class="src approved">${esc(d)}</span>`).join('')}</div>`;
  }

  /* ---------------------------------------------------- Diagnose engine */
  function detectAnimal(q) {
    const tok = new Set(q.split(' '));
    if (tok.has('heo') || tok.has('lon') || tok.has('nai') || q.includes('heo con')) return 'heo';
    if (tok.has('ga') || q.includes('gia cam') || tok.has('vit') || q.includes('gia cầm')) return 'ga';
    return null;
  }
  function diagnose(text) {
    const q = norm(text);
    const animal = detectAnimal(q);
    return DB.diseases.map(d => {
      if (animal && norm(d.vat_nuoi) !== animal) return { d, score: 0 };
      let score = 0; const hits = [];
      d.trieu_chung.forEach(sym => {
        const words = norm(sym).split(' ').filter(w => w.length >= 3 && !STOP.has(w));
        if (words.some(w => q.includes(w))) { score++; hits.push(sym); }
      });
      norm(d.ten_benh).split(' ').filter(w => w.length >= 4).forEach(w => { if (q.includes(w)) score += 2; });
      return { d, score, hits };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  }
  const STOP = new Set(['cao', 'cac', 'mot', 'con', 'theo', 'ngay', 'cua', 'cho', 'lai', 'rat', 'hay', 'tung', 'dot', 'sau', 'dan', 'tang', 'giam']);

  function answerDiagnose(text, scores) {
    const top = scores[0];
    const d = top.d;
    const conf = Math.min(94, 56 + top.score * 7);
    const animal = d.vat_nuoi === 'heo' ? 'Heo' : 'Gà';
    const risk = SEV[d.muc_do];
    const riskTxt = risk === 'high' ? (d.muc_do === 'nguy_hiem' ? 'Khẩn cấp' : 'Cao') : risk === 'med' ? 'Trung bình' : 'Thấp';
    const diff = scores.slice(1).map(s => s.d.ten_benh.split(' (')[0]);

    const prods = (d.san_pham_lien_quan || []).map(c => prodById[c]).filter(Boolean);
    const prodHtml = prods.map(p => `
      <div class="product-line" data-prod="${esc(p.ma_sp)}">
        <div class="pl-main"><span class="role-tag">${ROLE[p.loai] || 'Sản phẩm'}</span>
          <b>${esc(p.ten)}</b><small>${esc(p.lieu_luong || '')}</small></div>
        <div class="pl-price">${fmtVnd(p.gia_vnd)}</div>
      </div>`).join('');

    const needExpert = d.muc_do === 'nguy_hiem' || d.co_thuoc_dac_tri === false || d.can_chuyen_gia;
    const expertMsg = typeof d.can_chuyen_gia === 'string' ? d.can_chuyen_gia
      : 'Trường hợp diễn biến nhanh / lan rộng — chuyển bộ phận kỹ thuật hoặc bác sĩ thú y xác minh, không tự kê đơn đặc trị.';

    return `
      <p class="ans-lead">Dựa trên mô tả (${animal}), khả năng cao nhất là <b>${esc(d.ten_benh)}</b>.</p>
      <div class="confidence"><i style="width:${conf}%"></i></div>
      <div class="muted-note">Độ tin cậy gợi ý ~${conf}% · mức rủi ro:
        <b style="color:${risk === 'high' ? 'var(--danger)' : risk === 'med' ? 'var(--warn)' : 'var(--ok)'}">${riskTxt}</b></div>

      <div class="panel"><h5>🧪 Hồ sơ ca & chẩn đoán phân biệt</h5>
        <p>${esc(d.chan_doan)}</p>
        ${diff.length ? `<div class="kv"><b>Phân biệt với</b><span>${esc(diff.join(', '))}</span></div>` : ''}
        <div class="kv"><b>Cần xét nghiệm</b><span>${esc(d.xet_nghiem || 'Theo chỉ định kỹ thuật')}</span></div>
      </div>

      <div class="panel"><h5>${SVG.science} Cơ sở khoa học & dịch tễ</h5>
        <p>${esc(d.co_che_benh_sinh || '')}</p>
        ${d.benh_tich ? `<div class="kv"><b>Bệnh tích</b><span>${esc(d.benh_tich)}</span></div>` : ''}
      </div>

      ${d.chi_so_canh_bao ? `<div class="panel"><h5>${SVG.alert} Cảnh báo sớm tại trại</h5><p>${esc(d.chi_so_canh_bao)}</p></div>` : ''}

      <div class="panel green"><h5>${SVG.list} Hướng xử lý tham khảo</h5>
        <ul>${splitSteps(d.buoc_xu_ly).map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        ${d.vaccine_phong && prodById[d.vaccine_phong] ? `<div class="kv" style="margin-top:6px"><b>Vaccine phòng</b><span>${esc(prodById[d.vaccine_phong].ten)}</span></div>` : ''}
      </div>

      ${prods.length ? `<div class="panel"><h5>${SVG.package} Sản phẩm theo vai trò (tham khảo)</h5>${prodHtml}</div>` : ''}

      <div class="panel"><h5>${SVG.help} Nên hỏi thêm để chắc chắn</h5>
        <ul>
          <li>Tỷ lệ chết / tỷ lệ mắc và tốc độ lan trong đàn?</li>
          <li>Lịch tiêm phòng, tình trạng nhập đàn mới, nguồn nước – thức ăn?</li>
          <li>Các hộ/trại xung quanh có dấu hiệu tương tự không?</li>
        </ul>
      </div>

      ${needExpert ? `<div class="flag-expert">${SVG.flag} <span><b>Chuyển chuyên gia.</b> ${esc(expertMsg)}</span></div>` : ''}
      <div class="warning">AI chỉ hỗ trợ tư vấn ban đầu. Hướng điều trị và liều dùng cần đối chiếu nhãn sản phẩm, tài liệu kỹ thuật và ý kiến chuyên môn.</div>
      ${srcRow(['Dịch tễ học & cảnh báo sớm', 'An toàn sinh học & vaccine', 'Catalogue sản phẩm'])}`;
  }
  function splitSteps(s) {
    return String(s || '').split(/[;.]\s+/).map(x => x.trim()).filter(x => x.length > 3);
  }

  /* ---------------------------------------------------- Protocol engine */
  function findDiseaseByName(text) {
    const q = norm(text);
    let best = null, bestLen = 0;
    DB.diseases.forEach(d => {
      const keys = [norm(d.ten_benh), norm(d.ten_khoa_hoc)];
      const abbr = (d.ten_benh.match(/\(([^)]+)\)/) || [])[1];
      if (abbr) keys.push(norm(abbr));
      keys.forEach(k => { if (k && q.includes(k) && k.length > bestLen) { best = d; bestLen = k.length; } });
    });
    return best;
  }
  function answerProtocol(d) {
    const prods = (d.san_pham_lien_quan || []).map(c => prodById[c]).filter(Boolean);
    return `
      <p class="ans-lead">Phác đồ xử lý tham khảo cho <b>${esc(d.ten_benh)}</b> (${d.vat_nuoi === 'heo' ? 'heo' : 'gà'}).</p>
      <div class="muted-note">Tác nhân: ${esc(d.tac_nhan || '—')} · ${d.co_thuoc_dac_tri === false ? '<b style="color:var(--danger)">Không có thuốc đặc trị</b>' : 'Có hướng điều trị đặc hiệu'}</div>
      <div class="panel green"><h5>${SVG.list} Các bước xử lý</h5>
        <ul>${splitSteps(d.buoc_xu_ly).map(s => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>
      ${d.vaccine_phong && prodById[d.vaccine_phong] ? `<div class="panel"><h5>${SVG.activity || SVG.shield} Vaccine phòng</h5><p>${esc(prodById[d.vaccine_phong].ten)} — ${esc(prodById[d.vaccine_phong].chi_dinh || '')}</p></div>` : ''}
      ${prods.length ? `<div class="panel"><h5>${SVG.package} Nhóm sản phẩm đi kèm</h5>${prods.map(p => `
        <div class="product-line" data-prod="${esc(p.ma_sp)}"><div class="pl-main"><span class="role-tag">${ROLE[p.loai] || ''}</span><b>${esc(p.ten)}</b><small>${esc(p.lieu_luong || '')}</small></div><div class="pl-price">${fmtVnd(p.gia_vnd)}</div></div>`).join('')}</div>` : ''}
      <div class="warning">Phác đồ mang tính tham khảo theo thư viện tri thức; cần đối chiếu nhãn sản phẩm và ý kiến bác sĩ thú y trước khi áp dụng.</div>
      ${srcRow(['An toàn sinh học & vaccine', 'Dược lý thú y (cơ chế & PK/PD)', 'Kỹ thuật chăn nuôi'])}`;
  }
  function notFoundDisease() {
    return `Tôi chưa nhận ra tên bệnh. Anh/chị thử chọn một bệnh ở gợi ý nhanh bên dưới, hoặc chuyển sang tab <b>Chẩn đoán</b> để mô tả triệu chứng.`;
  }

  /* ---------------------------------------------------- Product engine */
  function findProduct(text) {
    const q = norm(text);
    let best = null, bestScore = 0;
    DB.products.forEach(p => {
      const name = norm(p.ten);
      let sc = 0;
      if (q.includes(name)) sc = 100 + name.length;
      else {
        const words = name.split(' ').filter(w => w.length >= 3);
        sc = words.filter(w => q.includes(w)).length;
        if (q.includes(norm(p.ma_sp))) sc += 5;
      }
      if (sc > bestScore) { bestScore = sc; best = p; }
    });
    return bestScore >= 2 ? best : null;
  }
  function answerProduct(p) {
    const kv = (k, v) => v ? `<div class="kv"><b>${k}</b><span>${esc(v)}</span></div>` : '';
    const warn = p.chong_chi_dinh || p.thoi_gian_ngung || p.tuong_tac_luu_y;
    return `
      <p class="ans-lead"><b>${esc(p.ten)}</b> — ${esc(LOAI_LABEL[p.loai] || p.loai)} · ${esc(p.hang || '')}</p>
      <div class="panel"><h5>${SVG.package} Thông tin sản phẩm</h5>
        ${kv('Công dụng', p.cong_dung)}
        ${kv('Chỉ định', p.chi_dinh)}
        ${kv('Liều dùng', p.lieu_luong)}
        ${kv('Đường dùng', p.duong_dung)}
        ${kv('Đối tượng', p.doi_tuong)}
        <div class="kv"><b>Giá tham khảo</b><span><b style="color:var(--primary-dark)">${fmtVnd(p.gia_vnd)}</b> · ${esc(p.quy_cach || '')}</span></div>
      </div>
      ${warn ? `<div class="panel danger"><h5>${SVG.shield} Lưu ý an toàn</h5>
        ${kv('Chống chỉ định', p.chong_chi_dinh)}
        ${kv('Thời gian ngừng thuốc', p.thoi_gian_ngung)}
        ${kv('Tương tác – lưu ý', p.tuong_tac_luu_y)}
        ${kv('Bảo quản', p.bao_quan)}
      </div>` : ''}
      <div class="warning">Giá mang tính tham khảo; luôn đối chiếu bảng giá và nhãn sản phẩm hiện hành.</div>
      ${srcRow(['Catalogue sản phẩm', 'Dược lý thú y (cơ chế & PK/PD)', 'Tiêu chuẩn chất lượng & chuỗi lạnh'])}`;
  }
  function notFoundProduct(text) {
    const sample = DB.products.slice(0, 6).map(p => p.ten).join(', ');
    return `Tôi chưa tìm thấy sản phẩm khớp với “${esc(text)}”. Anh/chị thử tên đầy đủ, ví dụ: ${esc(sample)}…`;
  }

  /* ---------------------------------------------------- Promo engine */
  function answerPromo(text, filterByQuery) {
    const q = norm(text);
    let list = DB.promotions;
    if (filterByQuery && q) {
      const f = list.filter(p =>
        norm(p.ten + ' ' + p.san_pham + ' ' + p.doi_tuong + ' ' + p.tag).split(' ')
          .some(w => w.length >= 3 && q.includes(w)));
      if (f.length) list = f;
    }
    const cards = list.map(p => `
      <div class="panel"><h5>${SVG.gift} ${esc(p.ten)}</h5>
        <div class="kv"><b>Ưu đãi</b><span>${esc(p.uu_dai)}</span></div>
        <div class="kv"><b>Áp dụng cho</b><span>${esc(p.san_pham)} · ${esc(p.doi_tuong)}</span></div>
        <div class="kv"><b>Điều kiện</b><span>${esc(p.dieu_kien)}</span></div>
      </div>`).join('');
    return `<p class="ans-lead">${list.length === DB.promotions.length ? 'Các chương trình khuyến mãi đang áp dụng:' : `${list.length} chương trình phù hợp:`}</p>${cards}${srcRow(['Chương trình khuyến mãi', 'Chính sách bán hàng'])}`;
  }
  function fallback() {
    return `Tôi có thể giúp: <b>chẩn đoán hỗ trợ</b> theo triệu chứng, <b>phác đồ</b> theo bệnh, <b>tra cứu sản phẩm</b> (liều, giá) và <b>khuyến mãi</b>. Anh/chị chọn một tab phía trên hoặc bấm gợi ý nhanh bên dưới nhé.`;
  }

  /* =======================================================================
     PUSH-SALE ASSISTANT
     ===================================================================== */
  function custAgg(d) {
    const byMonth = {}, byProd = {};
    let total = 0;
    d.lich_su_don.forEach(o => {
      byMonth[o.thang] = (byMonth[o.thang] || 0) + o.gia_tri_vnd;
      byProd[o.ma_sp] = byProd[o.ma_sp] || { ten: o.ten_sp, val: 0, qty: 0, ma: o.ma_sp };
      byProd[o.ma_sp].val += o.gia_tri_vnd;
      byProd[o.ma_sp].qty += o.so_luong;
      total += o.gia_tri_vnd;
    });
    const months = Object.keys(byMonth).sort();
    const topProd = Object.values(byProd).sort((a, b) => b.val - a.val);
    return { byMonth, months, topProd, total, bought: new Set(Object.keys(byProd)) };
  }

  function tierSuggestions(d, agg) {
    // loài chủ lực của khách (suy từ sản phẩm đã mua)
    const animalCount = {};
    agg.topProd.forEach(tp => {
      const p = prodById[tp.ma]; if (!p) return;
      (p.vat_nuoi || '').split('/').forEach(a => { const k = norm(a); if (k) animalCount[k] = (animalCount[k] || 0) + tp.val; });
    });
    const mainAnimal = Object.entries(animalCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'heo';

    const safe = agg.topProd.slice(0, 2).map(tp => prodById[tp.ma]).filter(Boolean);

    const crossLoai = ['sat_trung', 'bo_tro', 'ho_tro'];
    const suggest = DB.products.filter(p => crossLoai.includes(p.loai) && !agg.bought.has(p.ma_sp)
      && norm(p.vat_nuoi).includes(mainAnimal)).slice(0, 2);
    if (!suggest.length) {
      DB.products.filter(p => crossLoai.includes(p.loai) && !agg.bought.has(p.ma_sp)).slice(0, 2).forEach(p => suggest.push(p));
    }

    const grow = DB.products.filter(p => p.loai === 'vaccine' && !agg.bought.has(p.ma_sp)
      && norm(p.vat_nuoi).includes(mainAnimal)).slice(0, 2);

    return { safe, suggest, grow, mainAnimal };
  }

  /* ---- Push-sale là một luồng CHAT: chọn khách -> phân tích -> hỏi tiếp ---- */
  let pushReady = false;
  function renderPush() {
    renderCustChips();
    if (!pushReady) { seedPushIntro(); pushReady = true; }
  }

  function renderCustChips() {
    $('#custPick').innerHTML = DB.distributors.map(d => `
      <button class="cust-chip ${d.id === state.pushCustomer ? 'active' : ''}" data-cust="${d.id}">
        <b>${esc(d.ten)}</b><small>${esc(d.khu_vuc)} · ${esc(d.loai_hinh)}</small>
      </button>`).join('');
    $('#custPick').onclick = (e) => {
      const b = e.target.closest('[data-cust]'); if (!b) return;
      analyzeCustomer(b.dataset.cust);
    };
  }

  function pushBubble(who, html) {
    const div = document.createElement('div');
    div.className = 'bubble ' + who;
    div.innerHTML = html;
    $('#pushChat').appendChild(div);
    pushScroll();
    return div;
  }
  function pushScroll() { const sc = $('#push'); requestAnimationFrame(() => { sc.scrollTop = sc.scrollHeight; }); }
  function pushThinking() {
    const div = document.createElement('div');
    div.className = 'bubble ai typing';
    div.innerHTML = '<i></i><i></i><i></i>';
    $('#pushChat').appendChild(div); pushScroll(); return div;
  }
  function setPushQuick(arr) {
    $('#pushQuick').innerHTML = arr.map(q => `<button class="quick">${esc(q)}</button>`).join('');
  }

  function priorityHtml() {
    return DB.distributors.map(x => {
      const a = custAgg(x);
      const ra = state.alerts.filter(al => al.tinh === x.khu_vuc);
      const sev = ra.some(al => SEV[al.muc_do] === 'high');
      const note = sev
        ? 'Khu vực có cảnh báo dịch mức cao — ưu tiên nội dung phòng dịch & sát trùng.'
        : `Theo dõi nhịp mua nhóm ${esc(a.topProd[0] ? a.topProd[0].ten : 'chủ lực')}; gợi ý bổ sung phục hồi.`;
      return `<div class="insight" data-cust="${x.id}"><h4>${esc(x.ten)} <span class="risk-badge ${sev ? 'high' : 'low'}">${sev ? 'Ưu tiên cao' : 'Theo dõi'}</span></h4><p>${note}</p></div>`;
    }).join('');
  }

  function seedPushIntro() {
    $('#pushChat').innerHTML = '';
    pushBubble('ai', `Tôi là trợ lý Push-sale. Chọn một khách hàng phía trên (hoặc chạm thẻ bên dưới) để tôi phân tích <b>lịch sử mua</b> và gợi ý cơ hội <b>up-sale / cross-sale</b>.
      <div class="panel"><h5>⭐ Gợi ý ưu tiên hôm nay</h5>${priorityHtml()}</div>`);
    setPushQuick(['Phân tích Đại lý Minh Phát', 'Khách nào nên ưu tiên hôm nay?']);
  }

  function analyzeCustomer(id) {
    const d = DB.distributors.find(x => x.id === id); if (!d) return;
    state.pushCustomer = id;
    renderCustChips();
    pushBubble('user', 'Phân tích ' + esc(d.ten));
    const t = pushThinking();
    setTimeout(() => {
      t.outerHTML = '<div class="bubble ai">' + analysisHtml(d) + '</div>';
      pushScroll();
      setPushQuick(['Khách kêu giá cao thì nói sao?', 'Nên bán kèm sản phẩm gì?', 'Vì sao gợi ý vaccine này?', 'Nên nói gì khi gọi khách?']);
    }, 500);
  }

  function analysisHtml(d) {
    const agg = custAgg(d);
    const tiers = tierSuggestions(d, agg);
    const ra = state.alerts.filter(a => a.tinh === d.khu_vuc);
    const maxMonth = Math.max(...agg.months.map(m => agg.byMonth[m]), 1);
    const tierBlock = (cls, tag, title, why, items, action) => `
      <div class="tier ${cls}"><h5><span class="tier-tag">${tag}</span> ${title}</h5>
        <p class="muted-note" style="margin:0 0 6px">${why}</p>
        ${items.map(p => `<div class="product-line" data-prod="${esc(p.ma_sp)}"><div class="pl-main"><b>${esc(p.ten)}</b><small>${esc(LOAI_LABEL[p.loai])} · ${esc(p.lieu_luong || '')}</small></div><div class="pl-price">${fmtVnd(p.gia_vnd)}</div></div>`).join('') || '<p class="muted-note">—</p>'}
        <div class="muted-note" style="margin-top:6px">${SVG.arrowRight} ${action}</div>
      </div>`;
    return `
      <p class="ans-lead"><b>${esc(d.ten)}</b> · ${esc(d.khu_vuc)} · ${esc(d.loai_hinh)}.</p>
      <div class="kv"><b>Tổng mua (6th)</b><span>${fmtVnd(agg.total)} · công nợ ${fmtVnd(d.cong_no_vnd)}</span></div>
      <div class="kv"><b>Quy mô</b><span>${esc(d.quy_mo)}</span></div>

      <div class="panel"><h5>${SVG.trendingUp} Lịch sử mua hàng (${agg.months.length} tháng)</h5>
        <div class="history-bars">
          ${agg.months.map(m => `<div class="hbar"><div class="bar" style="height:${Math.max(8, agg.byMonth[m] / maxMonth * 100)}%"></div><small>${esc(m.slice(5))}/${esc(m.slice(2, 4))}</small></div>`).join('')}
        </div>
        <div style="height:8px"></div>
        ${agg.topProd.slice(0, 4).map(tp => `<div class="product-line"${prodById[tp.ma] ? ` data-prod="${esc(tp.ma)}"` : ''}><div class="pl-main"><b>${esc(tp.ten)}</b><small>${tp.qty.toLocaleString('vi-VN')} đơn vị</small></div><div class="pl-price">${fmtVndShort(tp.val)}</div></div>`).join('')}
      </div>

      ${ra.length ? `<div class="panel danger"><h5>${SVG.mapPin} Bối cảnh dịch vùng ${esc(d.khu_vuc)}</h5><p>${esc(ra[0].ten_benh.split(' (')[0])}${ra.length > 1 ? ` và ${ra.length - 1} tín hiệu khác` : ''} đang được ghi nhận → nhu cầu phòng dịch & sát trùng tăng.</p></div>` : ''}

      <div class="panel"><h5>${SVG.sparkles} Gợi ý đẩy hàng theo 3 mức</h5>
        ${tierBlock('safe', 'An toàn', 'Nhập lại theo nhịp', 'Sản phẩm chủ lực khách vẫn mua đều — rủi ro thấp, dễ chốt.', tiers.safe, 'Mở đầu bằng đơn nhập lại đúng nhịp khách quen.')}
        ${tierBlock('suggest', 'Cross-sale', 'Bán kèm', 'Nhóm bổ trợ / sát trùng khách chưa mua nhưng hợp với đàn & bối cảnh dịch.', tiers.suggest, 'Gợi ý theo tình huống phòng dịch, phục hồi sau stress.')}
        ${tierBlock('grow', 'Up-sale', 'Mở SKU mới', 'Vaccine phòng bệnh khách chưa nhập dù quy mô lớn — tăng giá trị đơn.', tiers.grow, 'Tư vấn ROI phòng bệnh so với chi phí một ổ dịch.')}
      </div>
      <div class="muted-note">Chạm vào tên sản phẩm để xem chi tiết. Hỏi tiếp ở ô bên dưới để mình gợi ý lời thoại.</div>`;
  }

  // Chạm vào khách trong bong bóng "ưu tiên hôm nay" -> phân tích
  $('#pushChat').addEventListener('click', (e) => {
    const b = e.target.closest('.insight[data-cust]'); if (b) analyzeCustomer(b.dataset.cust);
  });
  $('#pushQuick').addEventListener('click', (e) => { const b = e.target.closest('.quick'); if (b) askPush(b.textContent); });
  $('#pushSend').addEventListener('click', sendPush);
  $('#pushInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendPush(); });
  function sendPush() { const v = $('#pushInput').value.trim(); if (!v) return; $('#pushInput').value = ''; askPush(v); }

  function askPush(text) {
    const byName = DB.distributors.find(x => norm(text).includes(norm(x.ten)));
    if (byName) { analyzeCustomer(byName.id); return; }
    if (/(uu tien|hom nay|khach nao)/.test(norm(text))) {
      pushBubble('user', esc(text));
      const t = pushThinking();
      setTimeout(() => { t.outerHTML = '<div class="bubble ai"><p class="ans-lead">Thứ tự ưu tiên hôm nay:</p><div class="panel"><h5>⭐ Gợi ý ưu tiên</h5>' + priorityHtml() + '</div></div>'; pushScroll(); }, 450);
      return;
    }
    pushBubble('user', esc(text));
    const t = pushThinking();
    setTimeout(() => { t.outerHTML = '<div class="bubble ai">' + pushAnswer(text) + '</div>'; pushScroll(); }, 480);
  }

  function pushAnswer(text) {
    const q = norm(text);
    const d = DB.distributors.find(x => x.id === state.pushCustomer);
    if (!d) return 'Anh/chị chọn một khách hàng phía trên để tôi phân tích trước nhé.';
    const agg = custAgg(d);
    const tiers = tierSuggestions(d, agg);
    const ra = state.alerts.filter(a => a.tinh === d.khu_vuc);
    const safe = tiers.safe[0], cross = tiers.suggest[0], up = tiers.grow[0];
    const line = (p, role) => `<div class="product-line" data-prod="${esc(p.ma_sp)}"><div class="pl-main"><span class="role-tag">${role || ROLE[p.loai] || ''}</span><b>${esc(p.ten)}</b><small>${esc(p.lieu_luong || '')}</small></div><div class="pl-price">${fmtVnd(p.gia_vnd)}</div></div>`;

    if (/(gia cao|gia dat|dat qua|chiet khau| gia )/.test(' ' + q + ' ')) {
      return `<p class="ans-lead">Khi <b>${esc(d.ten)}</b> kêu giá cao:</p><div class="panel green"><h5>💬 Hướng xử lý</h5><ul>
        <li>So sánh trên <b>hiệu quả / đầu con</b> thay vì giá đơn vị (chi phí phòng bệnh so với thiệt hại một ổ dịch).</li>
        <li>Gắn <b>chiết khấu theo sản lượng</b> / chính sách tích điểm đại lý.</li>
        <li>Bắt đầu ở <b>mức An toàn</b> (${esc(safe ? safe.ten : 'sản phẩm chủ lực')}) để giảm áp lực quyết định.</li></ul></div>`;
    }
    if (/(ban kem|cross|kem|bo sung|them gi|phu hop)/.test(q)) {
      return `<p class="ans-lead">Cơ hội bán kèm (cross-sale) cho <b>${esc(d.ten)}</b>:</p>${cross ? line(cross, ROLE[cross.loai] || 'Bổ trợ') : '<p class="muted-note">Khách đã phủ nhóm bổ trợ.</p>'}<div class="panel"><h5>Lý do</h5><p>Khách chưa mua nhóm này nhưng hợp với đàn${ra.length ? ' và bối cảnh dịch ' + esc(d.khu_vuc) : ''} — dễ gợi mở theo nhu cầu phục hồi / sát trùng.</p></div>`;
    }
    if (/(vaccine|up ?sale|sku moi|mo rong|tang truong|vi sao)/.test(q)) {
      return `<p class="ans-lead">Cơ hội up-sale (SKU mới) cho <b>${esc(d.ten)}</b>:</p>${up ? line(up, 'Phòng bệnh') : '<p class="muted-note">Khách đã phủ vaccine chính.</p>'}<div class="panel"><h5>Lý do</h5><p>Quy mô ${esc(d.quy_mo)} nhưng chưa nhập nhóm vaccine này → rủi ro dịch lớn + cơ hội tăng giá trị đơn. Tư vấn theo <b>ROI phòng bệnh</b>.</p></div>`;
    }
    if (/(lich su|mua gi|mua nhieu|gan day|chu luc)/.test(q)) {
      return `<p class="ans-lead">Lịch sử mua của <b>${esc(d.ten)}</b>:</p>${agg.topProd.slice(0, 4).map(tp => `<div class="product-line"${prodById[tp.ma] ? ` data-prod="${esc(tp.ma)}"` : ''}><div class="pl-main"><b>${esc(tp.ten)}</b><small>${tp.qty.toLocaleString('vi-VN')} đơn vị</small></div><div class="pl-price">${fmtVndShort(tp.val)}</div></div>`).join('')}<div class="muted-note" style="margin-top:6px">Tổng ${fmtVnd(agg.total)} qua ${agg.months.length} tháng · công nợ ${fmtVnd(d.cong_no_vnd)}. ${esc(d.ghi_chu)}</div>`;
    }
    if (/(cong no)/.test(q)) {
      return `<p class="ans-lead">Công nợ <b>${esc(d.ten)}</b>: ${fmtVnd(d.cong_no_vnd)}.</p><div class="panel green"><h5>${SVG.chat} Gợi ý</h5><p>Xếp lịch giao theo đợt bán để giãn áp lực dòng tiền; ưu tiên đơn mức An toàn (${esc(safe ? safe.ten : 'chủ lực')}) trước khi mở SKU mới.</p></div>`;
    }
    // mặc định: lời thoại gọi khách + xử lý từ chối
    return `<p class="ans-lead">Gợi ý lời thoại khi gọi <b>${esc(d.ten)}</b>:</p><div class="panel"><h5>${SVG.phone} Có thể nói</h5><p>“Đợt này khu ${esc(d.khu_vuc)} ${ra.length ? `đang có tín hiệu ${esc(ra[0].ten_benh.split(' (')[0])}` : 'cần chủ động phòng bệnh'}. Em gợi ý mình giữ nhịp nhập <b>${esc(safe ? safe.ten : 'sản phẩm chủ lực')}</b>${cross ? `, dùng thử thêm <b>${esc(cross.ten)}</b>` : ''}. Bên em có chính sách theo sản lượng, anh/chị cân nhắc giúp em.”</p></div><div class="panel green"><h5>${SVG.shield} Nếu khách từ chối</h5><ul><li><b>Sợ tồn:</b> bắt đầu mức An toàn, đúng nhịp đã mua.</li><li><b>Giá cao:</b> so hiệu quả/đầu con + chiết khấu sản lượng.</li><li><b>Chưa cần:</b> dẫn bối cảnh vùng đang có áp lực dịch.</li></ul></div>`;
  }


  /* =======================================================================
     DISEASE MAP + MARKET INPUT
     ===================================================================== */
  // Việt Nam bounds (xấp xỉ) để chiếu lat/lng -> toạ độ trong khung bản đồ
  const VN = { latMin: 8.3, latMax: 23.5, lngMin: 102.0, lngMax: 110.2 };
  function project(lat, lng) {
    const x = (lng - VN.lngMin) / (VN.lngMax - VN.lngMin);
    const y = (VN.latMax - lat) / (VN.latMax - VN.latMin);
    return { x: 10 + x * 78, y: 5 + y * 72 };   // padding + chừa chỗ cho chú thích phía dưới
  }

  function filteredAlerts() {
    const f = state.mapFilter;
    return state.alerts.filter(a => {
      if (f.animal !== 'all' && norm(a.vat_nuoi) !== f.animal) return false;
      if (f.sev === 'high' && SEV[a.muc_do] !== 'high') return false;
      if (f.benh !== 'all' && !norm(a.ten_benh).includes(f.benh)) return false;
      return true;
    });
  }

  function renderMarket() {
    renderMapFilters();
    renderMap();
    renderMarketForm();
  }

  function renderMapFilters() {
    const f = state.mapFilter;
    const opts = [
      { k: 'all', g: 'animal', t: 'Tất cả' },
      { k: 'heo', g: 'animal', t: 'Heo' },
      { k: 'ga', g: 'animal', t: 'Gà' },
      { k: 'dich ta lon', g: 'benh', t: 'ASF' },
      { k: 'cum gia cam', g: 'benh', t: 'Cúm gia cầm' },
      { k: 'high', g: 'sev', t: 'Mức nặng' },
    ];
    $('#mapFilters').innerHTML = opts.map(o => {
      const on = f[o.g] === o.k;
      return `<button class="seg-btn ${on ? 'active' : ''}" data-g="${o.g}" data-k="${o.k}">${o.t}</button>`;
    }).join('');
    $('#mapFilters').onclick = (e) => {
      const b = e.target.closest('.seg-btn'); if (!b) return;
      const g = b.dataset.g, k = b.dataset.k;
      state.mapFilter[g] = (state.mapFilter[g] === k && k !== 'all') ? 'all' : k;
      if (g === 'animal' && k === 'all') state.mapFilter.animal = 'all';
      state.selectedAlert = null;
      state.mapZoom = 1; state.mapFocus = { x: 50, y: 50 }; state.mapPan = { x: 0, y: 0 };
      renderMarket();
    };
  }

  // ----- Bản đồ thật (Leaflet) -----
  const SEV_COLOR = { high: '#9E5564', med: '#C77700', low: '#4C825C' };
  let LMap = null, LMarkers = null, LHeat = null, LById = {};

  function ensureLeaflet() {
    if (LMap) return true;
    const shell = $('#mapShell');
    shell.innerHTML = `
      <div id="mapLeaflet"></div>
      <div class="map-tools"><div class="map-tool" data-z="in" title="Phóng to">+</div><div class="map-tool" data-z="out" title="Thu nhỏ">−</div><div class="map-tool" data-z="loc" title="Khu vực phụ trách">⌖</div></div>
      <div class="map-callout" id="mapCallout"></div>
      <div class="map-legend">
        <div class="ml-top"><span>Nguy cơ dịch bệnh · <span id="mapCount">0</span> ghi nhận</span><span id="mapZoomLabel">${$('#mapUpdated').textContent}</span></div>
        <div class="heat-scale"></div>
        <div class="scale-labels"><span>Ổn định</span><span>Theo dõi</span><span>Cao</span></div>
      </div>`;

    if (typeof L === 'undefined') {
      $('#mapLeaflet').innerHTML = '<div class="map-offline">Không tải được bản đồ — kiểm tra kết nối mạng rồi tải lại.</div>';
      return false;
    }

    LMap = L.map('mapLeaflet', { zoomControl: false, minZoom: 4, maxZoom: 12, scrollWheelZoom: true, attributionControl: true })
      .setView([16.2, 106.3], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd', maxZoom: 19, attribution: '© OpenStreetMap · © CARTO'
    }).addTo(LMap);
    LMap.fitBounds([[8.3, 102.0], [23.6, 110.2]], { padding: [12, 12] });   // khung vừa lãnh thổ Việt Nam
    LMap.createPane('pins'); LMap.getPane('pins').style.zIndex = 450;
    LMarkers = L.layerGroup().addTo(LMap);

    shell.querySelector('.map-tools').addEventListener('click', (e) => {
      const t = e.target.closest('[data-z]'); if (!t) return;
      if (t.dataset.z === 'in') LMap.zoomIn();
      else if (t.dataset.z === 'out') LMap.zoomOut();
      else { const c = coordOf['Đồng Nai']; if (c) { LMap.flyTo([c.lat, c.lng], 8); toast('Đã phóng vào khu vực phụ trách — Đông Nam Bộ'); } }
    });
    LMap.on('click', () => { const co = $('#mapCallout'); if (co) co.classList.remove('show'); state.selectedAlert = null; });
    LMap.on('zoomend', updateZoomLabel);
    return true;
  }

  function updateZoomLabel() {
    const zl = $('#mapZoomLabel'); if (!zl || !LMap) return;
    const z = LMap.getZoom();
    zl.textContent = z > 5 ? 'Zoom ' + z + '×' : $('#mapUpdated').textContent;
  }

  function renderMap() {
    const list = filteredAlerts();
    const ok = ensureLeaflet();
    const cnt = $('#mapCount'); if (cnt) cnt.textContent = list.length;

    if (ok) {
      LMarkers.clearLayers();
      if (LHeat) { LMap.removeLayer(LHeat); LHeat = null; }
      LById = {};
      const seen = {}, heatPts = [];
      list.forEach(a => {
        const c = coordOf[a.tinh]; if (!c) return;
        const n = seen[a.tinh] = (seen[a.tinh] || 0) + 1;
        const ang = (n - 1) * 1.1, rad = (n - 1) * 0.07;   // toả nhẹ khi nhiều cảnh báo cùng tỉnh
        const lat = c.lat + Math.sin(ang) * rad, lng = c.lng + Math.cos(ang) * rad;
        const sev = SEV[a.muc_do];
        const m = L.circleMarker([lat, lng], {
          pane: 'pins', radius: sev === 'high' ? 8 : 6, color: '#fff', weight: 2,
          fillColor: SEV_COLOR[sev], fillOpacity: .95
        });
        m.on('click', (e) => { L.DomEvent.stopPropagation(e); selectAlert(a.id); });
        m.addTo(LMarkers);
        LById[a.id] = { m, sev };
        heatPts.push([c.lat, c.lng, sevRank(a.muc_do) / 3]);
      });
      if (typeof L.heatLayer === 'function' && heatPts.length) {
        LHeat = L.heatLayer(heatPts, { radius: 34, blur: 24, minOpacity: .25, max: 1,
          gradient: { 0.2: '#4C825C', 0.5: '#C77700', 0.85: '#9E5564' } }).addTo(LMap);
      }
      // Leaflet cần đo lại kích thước sau khi tab hiện ra
      setTimeout(() => LMap && LMap.invalidateSize(), 60);
    }

    renderMapStats(list);
    renderAlertList(list);
  }

  function selectAlert(id) {
    const a = state.alerts.find(x => x.id === id); if (!a) return;
    state.selectedAlert = id;
    Object.values(LById).forEach(o => o.m.setStyle({ radius: o.sev === 'high' ? 8 : 6, weight: 2 }));
    const sel = LById[id];
    if (sel) { sel.m.setStyle({ radius: 11, weight: 3 }); sel.m.bringToFront(); if (LMap) LMap.panTo(sel.m.getLatLng()); }
    const sev = SEV[a.muc_do];
    const co = $('#mapCallout');
    if (co) {
      co.innerHTML = `<h5>${esc(a.tinh)} · ${esc(a.ten_benh.split(' (')[0])}</h5>
        <p>${esc(a.note)}</p>
        <div class="mc-meta"><span class="risk-badge ${sev}">${SEV_LABEL[sev]}</span><span class="muted-note">${esc(a.vat_nuoi)} · ${esc(a.ngay)}</span></div>`;
      co.classList.add('show');
    }
  }

  function renderMapStats(list) {
    const s = alertStats(list);
    $('#mapStats').innerHTML = [
      `<div class="stat"><strong>${s.provinces.size}</strong><span>tỉnh/thành điểm nóng</span></div>`,
      `<div class="stat warnval"><strong>${s.severe.length}</strong><span>cảnh báo mức cao</span></div>`,
      `<div class="stat"><strong>${esc((s.topDisease[0] || '—').split(' (')[0])}</strong><span>bệnh nổi bật</span></div>`,
      `<div class="stat warnval"><strong>${esc(s.hotProv[0] || '—')}</strong><span>vùng nóng nhất</span></div>`,
    ].join('');
  }

  function renderAlertList(list) {
    const sorted = list.slice().sort((a, b) => sevRank(b.muc_do) - sevRank(a.muc_do) || new Date(b.ngay) - new Date(a.ngay));
    $('#alertCount').textContent = `${list.length} cảnh báo`;
    $('#alertList').innerHTML = sorted.slice(0, 8).map(a => {
      const sev = SEV[a.muc_do];
      return `<div class="alert-row" data-id="${esc(a.id)}">
        <span class="alert-dot ${sev}"></span>
        <div><h4>${esc(a.tinh)} · ${esc(a.ten_benh.split(' (')[0])}</h4><p>${esc(a.note)}</p></div>
        <span class="risk-badge ${sev}">${SEV_LABEL[sev]}</span>
      </div>`;
    }).join('') || '<div class="empty">Không có cảnh báo nào khớp bộ lọc.</div>';
    $('#alertList').onclick = (e) => {
      const r = e.target.closest('[data-id]'); if (!r) return;
      $('#market').scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => selectAlert(r.dataset.id), 280);
    };
  }

  /* ---------------------------------------------------- Market data form */
  const FORM = {
    loaiTT: 'Dịch bệnh',
    dauHieu: new Set(['Sốt', 'Bỏ ăn']),
  };
  function renderMarketForm() {
    const provOpts = DB.provinces.map(p => `<option ${p.ten === 'Đồng Nai' ? 'selected' : ''}>${esc(p.ten)}</option>`).join('');
    const loaiTT = ['Dịch bệnh', 'Tăng đàn', 'Giảm đàn', 'Nhu cầu thuốc', 'Biến động giá'];
    const dauHieu = ['Sốt', 'Bỏ ăn', 'Tiêu chảy', 'Ho – khó thở', 'Chết nhanh', 'Nhu cầu sát trùng tăng'];
    $('#marketForm').innerHTML = `
      <div class="form-row">
        <div class="field"><label class="lbl">Khu vực</label><select class="in" id="mfProv">${provOpts}</select></div>
        <div class="field"><label class="lbl">Nhóm vật nuôi</label><select class="in" id="mfAnimal"><option>Heo</option><option>Gà</option><option>Bò</option><option>Khác</option></select></div>
      </div>
      <div class="field"><label class="lbl">Loại thông tin</label><div class="toggle-group" id="mfLoai">
        ${loaiTT.map(t => `<button class="toggle ${t === FORM.loaiTT ? 'on' : ''}" data-loai="${t}">${t}</button>`).join('')}</div></div>
      <div class="field"><label class="lbl">Dấu hiệu ghi nhận</label><div class="toggle-group" id="mfDauHieu">
        ${dauHieu.map(t => `<button class="toggle ${FORM.dauHieu.has(t) ? 'on' : ''}" data-dh="${t}">${t}</button>`).join('')}</div></div>
      <div class="field"><label class="lbl">Mô tả ngắn</label><textarea class="in" id="mfNote">Một số hộ phản ánh đàn có dấu hiệu sốt, bỏ ăn; nhu cầu hỏi sản phẩm sát trùng và phục hồi tăng so với tuần trước.</textarea></div>
      <div class="form-row">
        <div class="field"><label class="lbl">Mức độ</label><select class="in" id="mfSev"><option value="trung_binh">Trung bình</option><option value="nang">Nặng</option><option value="nhe">Nhẹ</option></select></div>
        <div class="field"><label class="lbl">Số nguồn ghi nhận</label><input class="in" id="mfSrc" type="number" value="5" min="1" /></div>
      </div>
      <button class="btn btn-primary" id="mfSave">Lưu tín hiệu thị trường</button>
      <button class="btn btn-secondary" id="mfSaveAsk">Lưu &amp; hỏi Trợ lý tri thức phân tích</button>`;

    $('#mfLoai').onclick = (e) => {
      const b = e.target.closest('[data-loai]'); if (!b) return;
      FORM.loaiTT = b.dataset.loai;
      $$('#mfLoai .toggle').forEach(t => t.classList.toggle('on', t === b));
    };
    $('#mfDauHieu').onclick = (e) => {
      const b = e.target.closest('[data-dh]'); if (!b) return;
      b.classList.toggle('on');
      const v = b.dataset.dh;
      if (FORM.dauHieu.has(v)) FORM.dauHieu.delete(v); else FORM.dauHieu.add(v);
    };
    $('#mfSave').onclick = () => saveSignal(false);
    $('#mfSaveAsk').onclick = () => saveSignal(true);
  }

  let signalSeq = 0;
  function saveSignal(thenAsk) {
    const prov = $('#mfProv').value;
    const animal = $('#mfAnimal').value;
    const muc = $('#mfSev').value;
    const note = $('#mfNote').value.trim() || 'Tín hiệu thị trường do Sale ghi nhận.';
    const dh = Array.from(FORM.dauHieu);
    // suy ra bệnh khả năng từ dấu hiệu (nếu có)
    const guess = diagnose(`${animal} ${dh.join(' ')} ${note}`)[0];
    const benhName = guess ? guess.d.ten_benh : (FORM.loaiTT === 'Dịch bệnh' ? 'Tín hiệu dịch bệnh' : FORM.loaiTT);

    const alert = {
      id: 'MF' + (++signalSeq),
      vat_nuoi: animal,
      tinh: prov,
      benh_id: guess ? guess.d.id : '',
      ten_benh: benhName,
      muc_do: muc,
      note: `${FORM.loaiTT}${dh.length ? ' · ' + dh.join(', ') : ''}. ${note}`,
      ngay: '2026-06-19',
    };
    state.alerts.unshift(alert);
    state.selectedAlert = alert.id;
    renderHome();
    if (thenAsk && guess) {
      setMode('diagnose', true);
      go('knowledge');
      ask(`${animal} có dấu hiệu ${dh.join(', ')}. ${note}`);
      return;
    }
    renderMarket();
    setTimeout(() => selectAlert(alert.id), 120);
    toast(`Đã lưu tín hiệu tại ${prov} → cập nhật bản đồ & dashboard.`);
  }

  /* =======================================================================
     BOOT
     ===================================================================== */
  renderHome();

  // Deep-link: mở thẳng một tab qua #knowledge / #push / #market
  const start = (location.hash || '').replace('#', '');
  if (['knowledge', 'push', 'market'].includes(start)) go(start);
  window.addEventListener('hashchange', () => {
    const h = (location.hash || '').replace('#', '');
    if (['home', 'knowledge', 'push', 'market'].includes(h)) go(h);
  });
})();
