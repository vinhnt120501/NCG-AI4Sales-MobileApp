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
    sparkles: `<svg class="ico" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>`,
    calc: `<svg class="ico" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="8" y2="14"></line><line x1="12" y1="14" x2="12" y2="14"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="18" x2="12" y2="18"></line></svg>`,
    mail: `<svg class="ico" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>`,
    receipt: `<svg class="ico" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><line x1="8" y1="7" x2="16" y2="7"></line><line x1="8" y1="11" x2="16" y2="11"></line><line x1="8" y1="15" x2="13" y2="15"></line></svg>`,
    megaphone: `<svg class="ico" viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`,
    user: `<svg class="ico" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
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

  /* ----------------------------------------------- Hồ sơ nhân viên Sale */
  const REP = {
    name: 'Nguyễn Văn Sơn',
    short: 'Sơn',
    role: 'Trình dược viên · Anova',   // chức danh do quản lý/admin phân công
    code: 'SR-0142',                   // mã NV từ hệ thống tài khoản
    phone: '0938 217 142',
    email: 'son.nguyen@anova.com.vn',
  };
  const repInitials = REP.name.trim().split(/\s+/).slice(-1)[0].charAt(0).toUpperCase();

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

    // Multi-turn Diagnosis state
    diagStep: 0,
    diagQuery: null,
    diagScores: null,
    diagFollowUpAsked: null,

    // Sổ ca bệnh
    cases: [],
    currentCase: null,

    // Công cụ bán hàng (đơn nháp · ticket chuyên gia · chiến dịch)
    orders: [],
    tickets: [],
    campaigns: [],

    // Quyền truy cập thiết bị (tab Hồ sơ) — nạp lại từ localStorage khi boot
    profile: { camera: true, micRecord: true }
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
    if (id === 'cases') renderCases();
    if (id === 'profile') renderProfile();
  }
  document.addEventListener('click', (e) => {
    // Hành động bán hàng (đơn nháp · tính số lượng · soạn tin · ticket · chiến dịch)
    const av = e.target.closest('[data-act]');
    if (av) { handleSalesAction(av.dataset); return; }
    // Tạo ca bệnh mới (từ Home / Sổ ca bệnh)
    const nc = e.target.closest('[data-newcase]');
    if (nc) { openCaseForm(); return; }
    // Mở chi tiết một ca bệnh
    const ce = e.target.closest('[data-case]');
    if (ce) { openCaseDetail(ce.dataset.case); return; }
    // Chạm vào một sản phẩm bất kỳ -> mở chi tiết đầy đủ trong bottom sheet
    const pe = e.target.closest('[data-prod]');
    if (pe) { const p = prodById[pe.dataset.prod]; if (p) { openSheet(answerProduct(p)); return; } }
    // Công tắc bật/tắt trong tab Hồ sơ
    const pft = e.target.closest('[data-pftoggle]');
    if (pft) { toggleProfile(pft.dataset.pftoggle, pft); return; }
    // Hành động trong tab Hồ sơ (chỉnh sửa, cài đặt, đăng xuất…)
    const pf = e.target.closest('[data-pf]');
    if (pf) { handleProfileAction(pf.dataset.pf); return; }
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

    // Quick questions
    const quicks = [
      { t: 'Heo sốt cao, bỏ ăn, chết nhanh?', go: 'knowledge', mode: 'diagnose', run: 'Heo thịt sốt cao 41 độ, bỏ ăn, da tai bụng đỏ tím, chết nhanh tỷ lệ cao' },
      { t: 'Phác đồ Dịch tả lợn (ASF)', go: 'knowledge', mode: 'protocol', run: 'Cách phòng dịch và điều trị bệnh Dịch tả lợn châu Phi (ASF)' },
      { t: 'Tra cứu Anova Enroflox 10%', go: 'knowledge', mode: 'product', run: 'Anova Enroflox 10%' },
      { t: 'Đang có khuyến mãi gì?', go: 'knowledge', mode: 'promo', run: 'Có khuyến mãi gì đang áp dụng?' },
    ];
    $('#homeQuick').innerHTML = quicks.map((q, i) => `<button class="quick" data-q="${i}">${esc(q.t)}</button>`).join('');
    $('#homeQuick').onclick = (e) => {
      const b = e.target.closest('[data-q]'); if (!b) return;
      const q = quicks[+b.dataset.q];
      if (q.go === 'knowledge') { setMode(q.mode, true); go('knowledge'); if (q.run) ask(q.run); }
      else go(q.go);
    };

    renderCaseHome();
  }

  /* Chat box ngay trên màn hình chính: gõ câu hỏi -> mở Trợ lý tri thức và hỏi luôn.
     Không cần hướng dẫn — đặt câu hỏi là dùng được ngay (easy onboarding). */
  function homeAsk(text, mode) {
    const v = (text || '').trim();
    setMode(mode || 'diagnose', true);
    go('knowledge');
    if (v) ask(v);
    else setTimeout(() => { const i = $('#kbInput'); if (i) i.focus(); }, 250);
  }
  const homeAskForm = $('#homeAskForm');
  if (homeAskForm) {
    homeAskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = $('#homeAsk');
      const v = inp.value.trim();
      inp.value = '';
      homeAsk(v);
    });
  }
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
    state.diagStep = 0;
    state.diagQuery = null;
    state.diagScores = null;
    state.diagFollowUpAsked = null;
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

  // Expose to window for quick reply buttons
  window.askDiagReply = (val) => {
    ask(val);
  };

  /* Intent router (ưu tiên ý định rõ ràng, nếu không dùng tab đang chọn) */
  function route(text) {
    const q = norm(text);
    const mode = state.kbMode;
    const prod = findProduct(text);
    const isPromo = /(khuyen mai|uu dai|combo|tang|chiet khau|tich diem|km|khach moi)/.test(q);
    const dis = findDiseaseByName(text);

    if (mode === 'diagnose' && state.diagStep === 1) {
      if (!isPromo && !(prod && /(gia|lieu|cong dung|tra cuu|san pham|thuoc|vaccine|bao quan|chong chi dinh|ngung thuoc)/.test(q))) {
        return answerDiagnoseFollowUp(text);
      }
    }

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

    // Save state
    state.diagStep = 1;
    state.diagQuery = text;
    state.diagScores = scores;

    // Find unmatched symptoms of the top disease
    const normQ = norm(text);
    const unmatched = top.d.trieu_chung.filter(sym => {
      const symNorm = norm(sym);
      const words = symNorm.split(' ').filter(w => w.length >= 3 && !STOP.has(w));
      return !words.some(w => normQ.includes(w));
    });

    let followUpQ = "";
    if (unmatched.length > 0) {
      const qs = unmatched.slice(0, 2).map(s => `<b>${esc(s)}</b>`);
      if (qs.length === 1) {
        followUpQ = `Đàn vật nuôi có biểu hiện bị ${qs[0]} hay không?`;
      } else {
        followUpQ = `Đàn vật nuôi có biểu hiện bị ${qs.join(' hoặc ')} hay không?`;
      }
    } else {
      followUpQ = `Đàn bị bao lâu rồi và có lây lan nhanh không? Trại đã tiêm vaccine phòng bệnh này chưa?`;
    }
    state.diagFollowUpAsked = followUpQ;

    const animal = top.d.vat_nuoi === 'heo' ? 'Heo' : 'Gà';
    const matchesHtml = scores.slice(0, 2).map((x, idx) => {
      const d = x.d;
      const conf = Math.min(88, 50 + x.score * 8);
      return `
        <div class="diag-match-card">
          <div class="dm-header">
            <span class="dm-rank">#${idx + 1}</span>
            <span class="dm-name">${esc(d.ten_benh)}</span>
            <span class="dm-conf">${conf}%</span>
          </div>
          <div class="dm-body">
            <small>Triệu chứng khớp: ${esc(x.hits.join(', '))}</small>
          </div>
        </div>
      `;
    }).join('');

    return `
      <p class="ans-lead">Dựa trên mô tả ban đầu (${animal}), tôi phát hiện <b>${scores.slice(0, 2).length} bệnh</b> có khả năng phù hợp nhất:</p>
      <div class="diag-matches">
        ${matchesHtml}
      </div>

      <div class="panel question-panel">
        <h5><span class="pulse-dot"></span> Câu hỏi xác minh từ Trợ lý</h5>
        <p>${followUpQ}</p>
      </div>

      <div class="quick-reply-row">
        <button class="qr-btn" onclick="window.askDiagReply('Có, có triệu chứng này')">Có, có triệu chứng trên</button>
        <button class="qr-btn" onclick="window.askDiagReply('Không bị')">Không bị</button>
        <button class="qr-btn" onclick="window.askDiagReply('Bị nhẹ / Chưa rõ')">Bị nhẹ / Chưa rõ</button>
      </div>
      <div class="muted-note" style="margin-top: 8px;">Vui lòng phản hồi thông tin trên để tôi đưa ra chẩn đoán chính xác nhất kèm phác đồ và sản phẩm điều trị.</div>
    `;
  }

  function answerDiagnoseFollowUp(text) {
    const combinedText = state.diagQuery + ' ' + text;
    const updatedScores = diagnose(combinedText);
    const finalScores = updatedScores.length ? updatedScores : state.diagScores;

    const top = finalScores[0];
    const d = top.d;
    const conf = Math.min(94, 56 + top.score * 7);
    const animal = d.vat_nuoi === 'heo' ? 'Heo' : 'Gà';
    const risk = SEV[d.muc_do];
    const riskTxt = risk === 'high' ? (d.muc_do === 'nguy_hiem' ? 'Khẩn cấp' : 'Cao') : risk === 'med' ? 'Trung bình' : 'Thấp';
    const diff = finalScores.slice(1).map(s => s.d.ten_benh.split(' (')[0]);

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

    // Reset diagnostic state
    state.diagStep = 0;
    state.diagQuery = null;
    state.diagScores = null;
    state.diagFollowUpAsked = null;

    return `
      <p class="ans-lead">Kết hợp với thông tin bổ sung, tôi chẩn đoán đàn **${animal}** khả năng cao nhất bị: <b>${esc(d.ten_benh)}</b>.</p>
      <div class="confidence"><i style="width:${conf}%"></i></div>
      <div class="muted-note">Độ tin cậy sau xác minh ~${conf}% · mức rủi ro:
        <b style="color:${risk === 'high' ? 'var(--danger)' : risk === 'med' ? 'var(--warn)' : 'var(--ok)'}">${riskTxt}</b></div>

      <div class="panel"><h5>🧪 Chẩn đoán phân biệt & xét nghiệm</h5>
        <p>${esc(d.chan_doan)}</p>
        ${diff.length ? `<div class="kv"><b>Phân biệt với</b><span>${esc(diff.join(', '))}</span></div>` : ''}
        <div class="kv"><b>Cần xét nghiệm</b><span>${esc(d.xet_nghiem || 'Theo chỉ định kỹ thuật')}</span></div>
      </div>

      <div class="panel green"><h5>${SVG.list} Khuyến nghị hành động (Phác đồ xử lý)</h5>
        <ul>${splitSteps(d.buoc_xu_ly).map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        ${d.vaccine_phong && prodById[d.vaccine_phong] ? `<div class="kv" style="margin-top:6px"><b>Vaccine phòng</b><span>${esc(prodById[d.vaccine_phong].ten)}</span></div>` : ''}
      </div>

      ${prods.length ? `<div class="panel"><h5>${SVG.package} Thuốc điều trị & Liều lượng sử dụng</h5>${prodHtml}</div>` : ''}

      ${needExpert ? `<div class="flag-expert">${SVG.flag} <span><b>Chuyển chuyên gia.</b> ${esc(expertMsg)}</span></div>` : ''}
      ${salesActionsRow({ dxId: d.id, escalate: needExpert })}
      <div class="warning">AI chỉ hỗ trợ tư vấn ban đầu. Hướng điều trị và liều dùng cần đối chiếu nhãn sản phẩm, tài liệu kỹ thuật và ý kiến chuyên môn từ Anova.</div>
      ${srcRow(['Dịch tễ học Anova', 'An toàn sinh học & vaccine', 'Catalogue sản phẩm'])}`;
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
    const hasSci = p.co_che_tac_dong || p.duoc_dong_hoc || p.pho_tac_dong || p.bang_chung || p.tieu_chuan;
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
      ${hasSci ? `<div class="panel"><h5>${SVG.science} Cơ chế &amp; bằng chứng</h5>
        ${kv('Cơ chế tác động', p.co_che_tac_dong)}
        ${kv('Phổ tác động', p.pho_tac_dong)}
        ${kv('Dược động học (PK/PD)', p.duoc_dong_hoc)}
        ${kv('Bằng chứng hiệu quả', p.bang_chung)}
        ${kv('Tiêu chuẩn', p.tieu_chuan)}
      </div>` : ''}
      ${warn ? `<div class="panel danger"><h5>${SVG.shield} Lưu ý an toàn</h5>
        ${kv('Chống chỉ định', p.chong_chi_dinh)}
        ${kv('Thời gian ngừng thuốc', p.thoi_gian_ngung)}
        ${kv('Tương tác – lưu ý', p.tuong_tac_luu_y)}
        ${kv('Bảo quản', p.bao_quan)}
      </div>` : ''}
      <div class="act-row"><button class="act-btn" data-act="qty" data-pid="${esc(p.ma_sp)}">${SVG.calc} Tính số lượng cần đặt</button></div>
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
    const cp = $('#custPick');
    if (!cp) return;
    cp.innerHTML = DB.distributors.map(d => `
      <button class="cust-chip ${d.id === state.pushCustomer ? 'active' : ''}" data-cust="${d.id}">
        <b>${esc(d.ten)}</b><small>${esc(d.khu_vuc)} · ${esc(d.loai_hinh)}</small>
      </button>`).join('');
    cp.onclick = (e) => {
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
      ${salesActionsRow({ custId: d.id })}
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
        <div class="ar-body"><h4>${esc(a.tinh)} · ${esc(a.ten_benh.split(' (')[0])}</h4><p>${esc(a.note)}</p>
          <button class="act-btn sm" data-act="campaign" data-prov="${esc(a.tinh)}" data-benh="${esc(a.ten_benh)}">${SVG.megaphone} Tạo chiến dịch</button>
        </div>
        <span class="risk-badge ${sev}">${SEV_LABEL[sev]}</span>
      </div>`;
    }).join('') || '<div class="empty">Không có cảnh báo nào khớp bộ lọc.</div>';
    $('#alertList').onclick = (e) => {
      if (e.target.closest('[data-act]')) return;   // nút chiến dịch xử lý riêng
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

  // Voice input recognition helper
  function initVoiceInput(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      btn.style.display = 'none'; // hide voice button if browser doesn't support Web Speech API
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'vi-VN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let isListening = false;

    btn.addEventListener('click', () => {
      if (isListening) {
        recognition.stop();
      } else {
        try {
          recognition.start();
        } catch (e) {
          console.error(e);
        }
      }
    });

    recognition.onstart = () => {
      isListening = true;
      btn.classList.add('listening');
      input.placeholder = 'Đang lắng nghe bằng giọng nói...';
    };

    recognition.onend = () => {
      isListening = false;
      btn.classList.remove('listening');
      if (inputId === 'kbInput') {
        const mode = state.kbMode;
        input.placeholder = KB_MODES[mode]?.placeholder || 'Nhập câu hỏi...';
      } else if (inputId === 'homeAsk') {
        input.placeholder = 'Hỏi nhanh: Heo sốt cao, bỏ ăn là bệnh gì?';
      } else if (inputId === 'caseInput') {
        input.placeholder = 'Hỏi thêm về ca này…';
      } else {
        input.placeholder = 'Hỏi tiếp về khách này…';
      }
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      input.value = text;
      // Auto-trigger send
      if (inputId === 'kbInput') {
        sendKb();
      } else if (inputId === 'pushInput') {
        sendPush();
      } else if (inputId === 'homeAsk') {
        input.value = '';
        homeAsk(text);
      } else if (inputId === 'caseInput') {
        input.value = '';
        caseAsk(text);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      isListening = false;
      btn.classList.remove('listening');
      if (event.error === 'not-allowed') {
        toast('Không thể truy cập Micro. Vui lòng mở bằng HTTPS/localhost hoặc cấp quyền cho trình duyệt.');
      } else {
        toast('Lỗi micro: ' + event.error);
      }
    };
  }

  /* =======================================================================
     SỔ CA BỆNH — tạo ca · chẩn đoán & hỏi đáp · nhật ký điều trị ·
     đánh giá kết quả · theo dõi hiệu quả sản phẩm. Lưu vào localStorage.
     ===================================================================== */

  /* ---- localStorage & helpers ---- */
  function saveLocal(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function loadLocal(k, def) { try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : def; } catch (e) { return def; } }
  function persistCases() { saveLocal('ai4sales_cases', state.cases); renderCaseHome(); }
  function getCase(id) { return (state.cases || []).find(c => c.id === id) || null; }
  function uid(p) { return p + Math.floor(1000 + Math.random() * 9000) + (Date.now() % 1000); }
  function clip(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).trim() + '…' : s; }
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }
  function dateStr(d) { return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(); }
  function todayStr() { return dateStr(new Date()); }
  function todayISO() { const d = new Date(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function isoToDisplay(iso) { if (!iso) return todayStr(); const p = String(iso).split('-'); return p.length === 3 ? (Number(p[2]) + '/' + Number(p[1]) + '/' + p[0]) : iso; }
  function daysAgoStr(n) { const d = new Date(); d.setDate(d.getDate() - n); return dateStr(d); }

  const MIC_SVG = '<svg class="ico" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';
  const CLIPBOARD_SVG = '<svg class="ico" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><line x1="9" y1="12" x2="15" y2="12"></line><line x1="9" y1="16" x2="13" y2="16"></line></svg>';

  function statusMeta(st) {
    return st === 'recovered' ? { cls: 'ok', label: 'Đã khỏi' }
      : st === 'lost' ? { cls: 'danger', label: 'Không qua khỏi' }
        : st === 'watch' ? { cls: 'med', label: 'Đang theo dõi' }
          : { cls: 'warn', label: 'Đang điều trị' };
  }
  function caseCompleteness(c) {
    const fields = ['customer', 'species', 'province', 'stage', 'herdSize', 'affectedCount', 'deadCount', 'started', 'symptoms', 'usedProducts'];
    return Math.round(fields.filter(k => String(c[k] || '').trim()).length / fields.length * 100);
  }
  function caseToQuery(c) {
    const bits = [];
    if (c.species) bits.push(c.species + (c.stage ? (' ' + c.stage) : ''));
    if (c.province) bits.push('tại ' + c.province);
    if (c.herdSize) bits.push('tổng đàn ' + c.herdSize + ' con');
    if (c.affectedCount) bits.push(c.affectedCount + ' con mắc');
    if (c.deadCount) bits.push(c.deadCount + ' con chết');
    if (c.symptoms) bits.push(c.symptoms);
    if (c.started) bits.push('khởi phát ' + c.started);
    return bits.join(', ') + '.';
  }

  /* ---- Chẩn đoán cho ca (thuần, không đụng state hỏi-đáp đa lượt) ---- */
  function scoresForDisease(c, id) {
    const natural = diagnose(((c.species || '') + ' ' + (c.symptoms || '')).trim());
    const forced = natural.find(s => s.d.id === id);
    if (forced) return [forced, ...natural.filter(s => s !== forced)].slice(0, 3);
    const d = disById[id];
    if (!d) return natural.slice(0, 3);
    return [{ d, score: 4, hits: (d.trieu_chung || []).slice(0, 3) }, ...natural].slice(0, 3);
  }
  function dxReportHtml(scores, caseId) {
    const top = scores[0], d = top.d;
    const conf = Math.min(94, 56 + top.score * 7);
    const animal = d.vat_nuoi === 'heo' ? 'Heo' : 'Gà';
    const risk = SEV[d.muc_do];
    const riskTxt = risk === 'high' ? (d.muc_do === 'nguy_hiem' ? 'Khẩn cấp' : 'Cao') : risk === 'med' ? 'Trung bình' : 'Thấp';
    const diff = scores.slice(1).map(s => s.d.ten_benh.split(' (')[0]);
    const prods = (d.san_pham_lien_quan || []).map(c => prodById[c]).filter(Boolean);
    const prodHtml = prods.map(p => `
      <div class="product-line" data-prod="${esc(p.ma_sp)}"><div class="pl-main"><span class="role-tag">${ROLE[p.loai] || 'Sản phẩm'}</span><b>${esc(p.ten)}</b><small>${esc(p.lieu_luong || '')}</small></div><div class="pl-price">${fmtVnd(p.gia_vnd)}</div></div>`).join('');
    const needExpert = d.muc_do === 'nguy_hiem' || d.co_thuoc_dac_tri === false || d.can_chuyen_gia;
    const expertMsg = typeof d.can_chuyen_gia === 'string' ? d.can_chuyen_gia : 'Trường hợp diễn biến nhanh / lan rộng — chuyển bộ phận kỹ thuật hoặc bác sĩ thú y xác minh, không tự kê đơn đặc trị.';
    return `
      <p class="ans-lead">Khả năng cao nhất đàn <b>${animal}</b> bị: <b>${esc(d.ten_benh)}</b>.</p>
      <div class="confidence"><i style="width:${conf}%"></i></div>
      <div class="muted-note">Độ tin cậy ~${conf}% · mức rủi ro: <b style="color:${risk === 'high' ? 'var(--danger)' : risk === 'med' ? 'var(--warn)' : 'var(--ok)'}">${riskTxt}</b></div>
      <div class="panel"><h5>🧪 Chẩn đoán phân biệt &amp; xét nghiệm</h5><p>${esc(d.chan_doan)}</p>${diff.length ? `<div class="kv"><b>Phân biệt với</b><span>${esc(diff.join(', '))}</span></div>` : ''}<div class="kv"><b>Cần xét nghiệm</b><span>${esc(d.xet_nghiem || 'Theo chỉ định kỹ thuật')}</span></div></div>
      <div class="panel green"><h5>${SVG.list} Khuyến nghị hành động (Phác đồ xử lý)</h5><ul>${splitSteps(d.buoc_xu_ly).map(s => `<li>${esc(s)}</li>`).join('')}</ul>${d.vaccine_phong && prodById[d.vaccine_phong] ? `<div class="kv" style="margin-top:6px"><b>Vaccine phòng</b><span>${esc(prodById[d.vaccine_phong].ten)}</span></div>` : ''}</div>
      ${prods.length ? `<div class="panel"><h5>${SVG.package} Thuốc điều trị &amp; liều dùng</h5>${prodHtml}</div>` : ''}
      ${needExpert ? `<div class="flag-expert">${SVG.flag} <span><b>Chuyển chuyên gia.</b> ${esc(expertMsg)}</span></div>` : ''}
      <div class="warning">AI chỉ hỗ trợ tư vấn ban đầu. Hướng điều trị và liều dùng cần đối chiếu nhãn sản phẩm, tài liệu kỹ thuật và ý kiến chuyên môn từ Anova.</div>
      ${srcRow(['Dịch tễ học Anova', 'An toàn sinh học & vaccine', 'Catalogue sản phẩm'])}`;
  }
  function diagnoseForCase(c, forceId) {
    const scores = forceId ? scoresForDisease(c, forceId) : diagnose(((c.species || '') + ' ' + (c.symptoms || '')).trim());
    if (!scores.length) return { dxName: '', dxId: '', riskLevel: '', html: '<p class="ans-lead">Chưa đủ dữ liệu để chẩn đoán tự động — anh/chị mô tả thêm triệu chứng ở ô hỏi đáp bên dưới nhé.</p>' };
    const d = scores[0].d;
    return { dxName: d.ten_benh, dxId: d.id, riskLevel: SEV[d.muc_do] || 'low', html: dxReportHtml(scores, c.id) };
  }
  function attachDiagnosis(c, forceId) {
    const dx = diagnoseForCase(c, forceId);
    c.dxName = dx.dxName; c.dxId = dx.dxId; c.riskLevel = dx.riskLevel;
    c.chat = [{ who: 'user', text: 'Tạo ca: ' + caseToQuery(c) }, { who: 'ai', html: dx.html }];
  }

  /* ---- Hỏi đáp trên ca ---- */
  function caseBubbleHtml(m) {
    if (m.who === 'user') return `<div class="bubble user">${esc(m.text || '')}</div>`;
    return `<div class="bubble ai">${m.html || esc(m.text || '')}</div>`;
  }
  function caseAnswer(text, c) {
    const q = norm(text);
    const prod = findProduct(text);
    if (/(khuyen mai|uu dai|combo|chiet khau|tich diem)/.test(q)) return answerPromo(text, true);
    if (prod && /(gia|lieu|cong dung|duong dung|tra cuu|bao quan|chong chi dinh|ngung thuoc|dung)/.test(q)) return answerProduct(prod);
    const dis = findDiseaseByName(text) || (c.dxId ? disById[c.dxId] : null);
    if (/(phac do|dieu tri|xu ly|chua|phong|tai phat|buoc)/.test(q) && dis) return answerProtocol(dis);
    if (prod) return answerProduct(prod);
    const scores = diagnose(((c.species || '') + ' ' + (c.symptoms || '') + ' ' + text).trim());
    if (scores.length) return dxReportHtml(scores, c.id);
    if (dis) return answerProtocol(dis);
    return `<p>Tôi có thể giúp với ca này: <b>phác đồ điều trị</b>, <b>liều dùng sản phẩm</b>, <b>cách phòng tái phát</b>, hoặc mô tả thêm triệu chứng để chẩn đoán lại. Anh/chị hỏi cụ thể hơn nhé.</p>`;
  }
  function caseChatScroll() { const el = $('#caseChat'); if (el) requestAnimationFrame(() => { el.scrollTop = el.scrollHeight; }); }
  function caseAsk(text) {
    const c = getCase(state.currentCase); if (!c) return;
    const chat = $('#caseChat'); if (!chat) return;
    c.chat.push({ who: 'user', text });
    chat.insertAdjacentHTML('beforeend', `<div class="bubble user">${esc(text)}</div>`);
    const t = document.createElement('div'); t.className = 'bubble ai typing'; t.innerHTML = '<i></i><i></i><i></i>';
    chat.appendChild(t); caseChatScroll();
    setTimeout(() => {
      const html = caseAnswer(text, c);
      t.outerHTML = `<div class="bubble ai">${html}</div>`;
      c.chat.push({ who: 'ai', html });
      c.updated = todayStr(); c.updatedAt = Date.now();
      persistCases(); caseChatScroll();
    }, 480);
  }
  function caseSend() { const i = $('#caseInput'); if (!i) return; const v = i.value.trim(); if (!v) return; i.value = ''; caseAsk(v); }

  /* ---- Render: Home card · danh sách · chi tiết ---- */
  function renderCaseHome() {
    const cs = state.cases || [];
    const active = cs.filter(c => c.status === 'active' || c.status === 'watch').length;
    const cnt = $('#caseHomeCount'); if (cnt) cnt.textContent = cs.length ? `${cs.length} ca · ${active} đang theo dõi` : 'Chưa có ca';
    const list = $('#caseHomeList'); if (!list) return;
    list.innerHTML = cs.slice(0, 2).map(c => {
      const sm = statusMeta(c.status);
      return `<button class="chm" data-case="${esc(c.id)}"><span class="chm-main"><b>${esc((c.species || 'Ca') + (c.province ? (' · ' + c.province) : ''))}</b><small>${esc((c.dxName || 'Chưa chẩn đoán').split(' (')[0])}</small></span><span class="case-status ${sm.cls}">${sm.label}</span></button>`;
    }).join('');
  }
  function caseCardHtml(c) {
    const sm = statusMeta(c.status);
    const tn = (c.treatments || []).length;
    return `<button class="case-card" data-case="${esc(c.id)}">
      <div class="cc-top"><span class="cc-title">${esc((c.species || 'Ca') + (c.province ? (' · ' + c.province) : ''))}</span><span class="case-status ${sm.cls}">${sm.label}</span></div>
      <div class="cc-sym">${esc(clip(c.symptoms || c.note || 'Chưa có mô tả triệu chứng', 88))}</div>
      <div class="cc-meta">
        <span>${SVG.science} ${esc((c.dxName || 'Chưa chẩn đoán').split(' (')[0])}</span>
        <span>${SVG.package} ${tn} lần điều trị</span>
        <span>Cập nhật ${esc(c.updated || c.created || '')}</span>
      </div>
    </button>`;
  }
  function caseEmptyHtml() {
    return `<div class="case-empty">
      <div class="ce-ico">${CLIPBOARD_SVG}</div>
      <h3>Chưa có ca bệnh nào</h3>
      <p>Tạo ca đầu tiên để AI chẩn đoán, hỏi đáp ngay trên ca, ghi nhật ký điều trị và theo dõi hiệu quả sản phẩm.</p>
      <div class="case-flow">
        <span>1 · Tạo ca bệnh (loài, triệu chứng…)</span>
        <span>2 · AI chẩn đoán &amp; hỏi đáp trên ca</span>
        <span>3 · Ghi nhật ký điều trị theo thời gian</span>
        <span>4 · Đánh giá kết quả → hiệu quả sản phẩm</span>
      </div>
      <button class="btn btn-primary" data-newcase>＋ Tạo ca bệnh</button>
    </div>`;
  }
  function productEffectiveness() {
    const map = {};
    (state.cases || []).forEach(c => {
      if (!c.outcome) return;
      const names = new Set();
      (c.treatments || []).forEach(t => { if (t.productName) names.add(t.productName); });
      (c.outcome.effProductNames || []).forEach(n => names.add(n));
      const rec = c.outcome.status === 'recovered';
      names.forEach(n => { const m = map[n] || (map[n] = { name: n, uses: 0, recovered: 0 }); m.uses++; if (rec) m.recovered++; });
    });
    return Object.values(map).sort((a, b) => b.uses - a.uses || b.recovered - a.recovered);
  }
  function effectivenessCardHtml() {
    const eff = productEffectiveness();
    if (!eff.length) return '';
    const rows = eff.slice(0, 6).map(m => {
      const pct = m.uses ? Math.round(m.recovered / m.uses * 100) : 0;
      const cls = pct >= 75 ? '' : pct >= 50 ? 'warn' : 'low';
      const p = findProduct(m.name);
      const nameHtml = p ? `<span class="eff-name" data-prod="${esc(p.ma_sp)}">${esc(m.name)} ›</span>` : `<span class="eff-name">${esc(m.name)}</span>`;
      return `<div class="eff-row"><div class="eff-top">${nameHtml}<span class="eff-stat"><b>${pct}%</b> khỏi · ${m.uses} ca</span></div><div class="eff-bar ${cls}"><i style="width:${pct}%"></i></div></div>`;
    }).join('');
    const rated = (state.cases || []).filter(c => c.outcome).length;
    return `<div class="card"><div class="case-section-title">${SVG.trendingUp} Hiệu quả sản phẩm</div><p class="subtext">Tổng hợp từ ${rated} ca đã đánh giá — tỉ lệ ca hồi phục khi có dùng từng sản phẩm.</p>${rows}</div>`;
  }
  function renderCases() {
    const body = $('#casesBody'); if (!body) return;
    const cs = state.cases || [];
    if (!cs.length) { body.innerHTML = caseEmptyHtml(); return; }
    body.innerHTML = `<button class="btn btn-primary" data-newcase style="margin-bottom:14px">＋ Tạo ca bệnh</button>`
      + cs.map(caseCardHtml).join('')
      + effectivenessCardHtml();
  }

  function caseProfileHtml(c) {
    const sm = statusMeta(c.status);
    const comp = caseCompleteness(c);
    const kv = (k, v) => v ? `<div class="kv"><b>${k}</b><span>${esc(v)}</span></div>` : '';
    const riskTxt = c.riskLevel === 'high' ? 'Cao' : c.riskLevel === 'med' ? 'Trung bình' : c.riskLevel === 'low' ? 'Thấp' : '';
    return `<div class="card case-profile">
      <div class="cp-head"><span class="cp-id">${esc(c.id)}</span><span class="case-status ${sm.cls}">${sm.label}</span></div>
      ${c.dxName ? `<div class="cp-dx">${SVG.science}<div><b>${esc(c.dxName)}</b><small>Chẩn đoán hỗ trợ${riskTxt ? ` · mức rủi ro ${riskTxt}` : ''}</small></div></div>` : ''}
      <div style="margin-top:12px">
        ${kv('Khách / trại', c.customer)}
        ${kv('Loài / giai đoạn', (c.species || '') + (c.stage ? (' · ' + c.stage) : ''))}
        ${kv('Tỉnh / vùng', c.province)}
        ${kv('Tổng đàn', c.herdSize ? c.herdSize + ' con' : '')}
        ${kv('Mắc / chết', (c.affectedCount || '?') + ' / ' + (c.deadCount || '?') + ' con')}
        ${kv('Khởi phát', c.started)}
        ${kv('Triệu chứng', c.symptoms)}
        ${kv('Đã dùng thuốc', c.usedProducts)}
      </div>
      <div class="cp-complete"><span>Hồ sơ ${comp}%</span><div class="bar"><i style="width:${comp}%"></i></div></div>
      ${salesActionsRow({ dxId: c.dxId, caseId: c.id, escalate: !!(c.dxId && disById[c.dxId] && (disById[c.dxId].muc_do === 'nguy_hiem' || disById[c.dxId].co_thuoc_dac_tri === false)) })}
    </div>`;
  }
  function caseQaHtml(c) {
    const quicks = ['Phác đồ xử lý chi tiết', 'Nên dùng sản phẩm nào?', 'Liều dùng & đường dùng', 'Cách phòng tái phát'];
    return `<div class="card">
      <div class="case-section-title">${SVG.chat} Chẩn đoán &amp; hỏi đáp trên ca <span class="step">Bước 2</span></div>
      <div class="case-chat" id="caseChat">${(c.chat || []).map(caseBubbleHtml).join('')}</div>
      <div class="case-composer">
        <input id="caseInput" placeholder="Hỏi thêm về ca này…" />
        <button class="case-mic" id="caseVoice" type="button" title="Hỏi bằng giọng nói" aria-label="Hỏi bằng giọng nói">${MIC_SVG}</button>
        <button class="case-send" id="caseSend" type="button" aria-label="Gửi"><svg class="ico" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
      </div>
      <div class="quick-row" id="caseQuick" style="margin-top:11px">${quicks.map(q => `<button class="quick">${esc(q)}</button>`).join('')}</div>
    </div>`;
  }
  function caseTreatmentsHtml(c) {
    const items = (c.treatments || []);
    const body = items.length
      ? `<div class="tl">${items.slice().reverse().map(t => `
          <div class="tl-item">
            <div class="tl-date">${esc(t.date || '')}</div>
            <div class="tl-prod">${esc(t.productName || 'Can thiệp')}</div>
            ${t.dose ? `<div class="tl-meta">${esc(t.dose)}</div>` : ''}
            ${t.note ? `<div class="tl-meta">${esc(t.note)}</div>` : ''}
            ${t.response ? `<span class="tl-resp ${t.respClass || 'mid'}">${esc(t.response)}</span>` : ''}
          </div>`).join('')}</div>`
      : `<p class="outcome-prompt">Chưa có lần điều trị nào. Ghi lại thuốc đã dùng và đáp ứng để theo dõi tiến triển.</p>`;
    return `<div class="card"><div class="case-section-title">${SVG.package} Nhật ký điều trị <span class="step">Bước 3</span></div>${body}<div class="spacer-12"></div><button class="btn btn-secondary" id="cdAddTreatment">＋ Ghi nhận điều trị</button></div>`;
  }
  function caseOutcomeHtml(c) {
    const o = c.outcome;
    let body;
    if (o) {
      const sm = statusMeta(o.status);
      const eff = (o.effProductNames || []);
      body = `<div class="outcome-badge ${sm.cls}">${o.status === 'recovered' ? '✓' : o.status === 'lost' ? '✕' : '•'} ${sm.label}${o.recoveredPct ? ` · ${esc(o.recoveredPct)}% hồi phục` : ''}</div>
        ${eff.length ? `<div class="eff-tags">${eff.map(n => `<span class="pill green">${esc(n)}</span>`).join('')}</div>` : ''}
        ${o.note ? `<p class="tl-meta" style="margin-top:10px">${esc(o.note)}</p>` : ''}
        <div class="spacer-12"></div><button class="btn btn-ghost" id="cdRate">Cập nhật đánh giá</button>`;
    } else {
      body = `<p class="outcome-prompt">Khi ca kết thúc, chốt kết quả (khỏi / theo dõi / không qua khỏi) và sản phẩm có hiệu quả — dữ liệu sẽ gộp vào "Hiệu quả sản phẩm".</p><button class="btn btn-primary" id="cdRate">Đánh giá kết quả</button>`;
    }
    return `<div class="card"><div class="case-section-title">${SVG.flag} Đánh giá kết quả <span class="step">Bước 4</span></div>${body}</div>`;
  }
  function renderCaseDetail(c) {
    c = c || getCase(state.currentCase); if (!c) return;
    $('#cdTitle').textContent = (c.species || 'Ca bệnh') + (c.province ? (' · ' + c.province) : '');
    $('#cdSub').textContent = c.customer || ('Ca ' + c.id);
    $('#caseDetailBody').innerHTML = caseProfileHtml(c) + caseQaHtml(c) + caseTreatmentsHtml(c) + caseOutcomeHtml(c);
    $('#caseSend').onclick = caseSend;
    $('#caseInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') caseSend(); });
    $('#caseQuick').onclick = (e) => { const b = e.target.closest('.quick'); if (!b) return; const inp = $('#caseInput'); if (inp) inp.value = ''; caseAsk(b.textContent); };
    initVoiceInput('caseVoice', 'caseInput');
    const at = $('#cdAddTreatment'); if (at) at.onclick = openTreatmentForm;
    const rt = $('#cdRate'); if (rt) rt.onclick = openOutcomeForm;
    const cc = $('#caseChat'); if (cc) cc.scrollTop = 0;   // mở ca: xem từ đầu hội thoại
  }
  function openCaseDetail(id) {
    const c = getCase(id); if (!c) return;
    state.currentCase = id;
    renderCaseDetail(c);
    go('caseDetail');
  }

  /* ---- Form: tạo ca ---- */
  function openCaseForm() {
    const provinces = (DB.provinces || []).map(p => `<option value="${esc(p.ten)}">${esc(p.ten)}</option>`).join('');
    const species = ['Heo', 'Gà', 'Vịt', 'Bò', 'Khác'].map(s => `<option value="${s}">${s}</option>`).join('');
    const stageOpts = ['', 'Heo con', 'Heo cai sữa', 'Heo thịt', 'Nái', 'Hậu bị', 'Gà con', 'Gà giò', 'Gà đẻ', 'Khác'].map(s => `<option value="${esc(s)}">${s || '— Chọn giai đoạn —'}</option>`).join('');
    const startedOpts = ['', 'Hôm nay', '1–2 ngày trước', '3–5 ngày trước', 'Trên 1 tuần'].map(s => `<option value="${esc(s)}">${s || '— Chọn thời điểm —'}</option>`).join('');
    const syms = ['sốt cao', 'bỏ ăn', 'tiêu chảy', 'ho/khó thở', 'da tím tái', 'chết nhanh', 'xuất huyết', 'thần kinh/vẹo cổ'];
    openSheet(`
      <h3>Tạo ca bệnh</h3>
      <p class="sub">Nhập nhanh thông tin ca — AI sẽ chẩn đoán &amp; mở hỏi đáp ngay trên ca.</p>
      <div class="field"><label class="lbl">Khách / trại / NPP</label><input class="in" id="cfCustomer" placeholder="VD: Trại heo Long Thành"></div>
      <div class="form-row">
        <div class="field"><label class="lbl">Loài nuôi</label><select class="in" id="cfSpecies">${species}</select></div>
        <div class="field"><label class="lbl">Tỉnh / thành</label><select class="in" id="cfProvince"><option value="">— Chọn tỉnh —</option>${provinces}</select></div>
      </div>
      <div class="form-row">
        <div class="field"><label class="lbl">Giai đoạn</label><select class="in" id="cfStage">${stageOpts}</select></div>
        <div class="field"><label class="lbl">Bắt đầu từ</label><select class="in" id="cfStarted">${startedOpts}</select></div>
      </div>
      <div class="form-row" style="grid-template-columns:1fr 1fr 1fr">
        <div class="field"><label class="lbl">Tổng đàn</label><input class="in" type="number" id="cfHerd" placeholder="200"></div>
        <div class="field"><label class="lbl">Số mắc</label><input class="in" type="number" id="cfAffected" placeholder="30"></div>
        <div class="field"><label class="lbl">Số chết</label><input class="in" type="number" id="cfDead" placeholder="5"></div>
      </div>
      <div class="field"><label class="lbl">Triệu chứng <span style="color:var(--danger)">*</span></label>
        <textarea class="in" id="cfSymptoms" placeholder="VD: sốt 41 độ, bỏ ăn, da tai bụng tím, chết nhanh…"></textarea>
        <div class="quick-row" id="cfSymChips" style="margin-top:8px">${syms.map(s => `<button class="chip-pick" type="button" data-sym="${esc(s)}">＋ ${esc(s)}</button>`).join('')}</div>
      </div>
      <div class="field"><label class="lbl">Đã dùng thuốc / vaccine (tuỳ chọn)</label><textarea class="in" id="cfUsed" placeholder="Để tránh gợi ý trùng/sai — VD: đã tiêm vaccine dịch tả cổ điển tháng trước"></textarea></div>
      <div class="sheet-err" id="cfErr" style="display:none"></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="cfCancel">Hủy</button>
        <button class="btn btn-primary" id="cfCreate">Tạo ca &amp; chẩn đoán</button>
      </div>
    `);
    $('#cfSymChips').onclick = (e) => {
      const b = e.target.closest('[data-sym]'); if (!b) return; e.preventDefault();
      const ta = $('#cfSymptoms'); const sym = b.dataset.sym;
      if (norm(ta.value).includes(norm(sym))) return;
      ta.value = ta.value.trim() ? (ta.value.replace(/\s*$/, '') + ', ' + sym) : sym;
    };
    $('#cfCancel').onclick = closeSheet;
    $('#cfCreate').onclick = createCase;
  }
  function createCase() {
    const v = (s) => { const e = $(s); return e ? String(e.value).trim() : ''; };
    const symptoms = v('#cfSymptoms');
    if (!symptoms) { const er = $('#cfErr'); er.style.display = 'block'; er.textContent = 'Vui lòng mô tả ít nhất vài triệu chứng để AI chẩn đoán.'; return; }
    const c = Object.assign({ id: uid('CASE-'), created: todayStr(), updated: todayStr(), updatedAt: Date.now(), status: 'active', treatments: [], outcome: null, note: '' }, {
      customer: v('#cfCustomer'), species: v('#cfSpecies') || 'Heo', province: v('#cfProvince'), stage: v('#cfStage'),
      started: v('#cfStarted'), herdSize: v('#cfHerd'), affectedCount: v('#cfAffected'), deadCount: v('#cfDead'),
      symptoms, usedProducts: v('#cfUsed')
    });
    attachDiagnosis(c);
    state.cases.unshift(c);
    persistCases();
    closeSheet();
    openCaseDetail(c.id);
    toast('Đã tạo ca bệnh & chẩn đoán');
  }

  /* ---- Form: ghi nhận điều trị ---- */
  function openTreatmentForm() {
    const c = getCase(state.currentCase); if (!c) return;
    const opts = DB.products.slice().sort((a, b) => String(a.ten).localeCompare(String(b.ten), 'vi')).map(p => `<option value="${esc(p.ma_sp)}">${esc(p.ten)}</option>`).join('');
    const respOpts = ['Cải thiện rõ', 'Cải thiện nhẹ', 'Chưa chuyển biến', 'Nặng hơn'].map(r => `<option value="${esc(r)}">${esc(r)}</option>`).join('');
    openSheet(`
      <h3>Ghi nhận điều trị</h3>
      <p class="sub">Thêm một lần dùng thuốc / can thiệp cho ca này.</p>
      <div class="form-row">
        <div class="field"><label class="lbl">Ngày</label><input class="in" type="date" id="tDate" value="${todayISO()}"></div>
        <div class="field"><label class="lbl">Đáp ứng</label><select class="in" id="tResp">${respOpts}</select></div>
      </div>
      <div class="field"><label class="lbl">Sản phẩm</label><select class="in" id="tProd">${opts}</select></div>
      <div class="field"><label class="lbl">Liều dùng</label><input class="in" id="tDose" placeholder="VD: 1 ml/10 kg, tiêm bắp, 3 ngày"></div>
      <div class="field"><label class="lbl">Ghi chú (tuỳ chọn)</label><textarea class="in" id="tNote" placeholder="Diễn biến, số con đáp ứng…"></textarea></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="tCancel">Hủy</button>
        <button class="btn btn-primary" id="tSave">Lưu điều trị</button>
      </div>
    `);
    const setDose = () => { const p = prodById[$('#tProd').value]; $('#tDose').value = p ? (p.lieu_luong || '') : ''; };
    setDose();
    $('#tProd').onchange = setDose;
    $('#tCancel').onclick = closeSheet;
    $('#tSave').onclick = saveTreatment;
  }
  function saveTreatment() {
    const c = getCase(state.currentCase); if (!c) return;
    const p = prodById[$('#tProd').value];
    const resp = $('#tResp').value;
    const rc = /rõ|nhẹ/.test(resp) ? 'up' : /Nặng/.test(resp) ? 'down' : 'mid';
    c.treatments = c.treatments || [];
    c.treatments.push({ date: isoToDisplay($('#tDate').value), productId: p ? p.ma_sp : '', productName: p ? p.ten : '', dose: $('#tDose').value.trim(), days: '', response: resp, respClass: rc, note: $('#tNote').value.trim() });
    c.updated = todayStr(); c.updatedAt = Date.now();
    persistCases(); closeSheet(); renderCaseDetail(c); toast('Đã ghi nhận điều trị');
  }

  /* ---- Form: đánh giá kết quả ---- */
  function openOutcomeForm() {
    const c = getCase(state.currentCase); if (!c) return;
    const cur = c.outcome || {};
    const prodNames = Array.from(new Set((c.treatments || []).map(t => t.productName).filter(Boolean)));
    const pct = cur.recoveredPct || (c.herdSize && c.deadCount ? Math.max(0, Math.round((Number(c.herdSize) - Number(c.deadCount)) / Number(c.herdSize) * 100)) : '');
    const chips = prodNames.length
      ? prodNames.map(n => `<button class="chip-pick ${(cur.effProductNames || []).includes(n) ? 'on' : ''}" type="button" data-eff="${esc(n)}">${esc(n)}</button>`).join('')
      : '<span class="muted-note">Chưa có sản phẩm trong nhật ký — ghi nhận điều trị trước để chọn.</span>';
    openSheet(`
      <h3>Đánh giá kết quả</h3>
      <p class="sub">Chốt kết quả điều trị của ca — dữ liệu sẽ gộp vào "Hiệu quả sản phẩm".</p>
      <label class="lbl">Kết quả</label>
      <div class="opt-row" id="oStatus" style="margin-bottom:13px">
        <button class="opt ${cur.status === 'recovered' ? 'active ok' : ''}" type="button" data-st="recovered">Đã khỏi</button>
        <button class="opt ${cur.status === 'watch' ? 'active' : ''}" type="button" data-st="watch">Đang theo dõi</button>
        <button class="opt ${cur.status === 'lost' ? 'active danger' : ''}" type="button" data-st="lost">Không qua khỏi</button>
      </div>
      <div class="field"><label class="lbl">Tỉ lệ hồi phục (%)</label><input class="in" type="number" min="0" max="100" id="oPct" value="${esc(pct)}" placeholder="VD: 85"></div>
      <label class="lbl">Sản phẩm có hiệu quả</label>
      <div class="quick-row" id="oEff" style="margin:0 0 13px">${chips}</div>
      <div class="field"><label class="lbl">Ghi chú (tuỳ chọn)</label><textarea class="in" id="oNote" placeholder="Nhận định hiệu quả, bài học cho lần sau…">${esc(cur.note || '')}</textarea></div>
      <div class="sheet-err" id="oErr" style="display:none"></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="oCancel">Hủy</button>
        <button class="btn btn-primary" id="oSave">Lưu đánh giá</button>
      </div>
    `);
    let st = cur.status || '';
    $('#oStatus').onclick = (e) => {
      const b = e.target.closest('[data-st]'); if (!b) return; st = b.dataset.st;
      $$('#oStatus .opt').forEach(o => { o.className = 'opt'; });
      b.className = 'opt active' + (st === 'recovered' ? ' ok' : st === 'lost' ? ' danger' : '');
    };
    $('#oEff').onclick = (e) => { const b = e.target.closest('[data-eff]'); if (!b) return; b.classList.toggle('on'); };
    $('#oCancel').onclick = closeSheet;
    $('#oSave').onclick = () => {
      if (!st) { const er = $('#oErr'); er.style.display = 'block'; er.textContent = 'Chọn kết quả điều trị (khỏi / theo dõi / không qua khỏi).'; return; }
      const eff = $$('#oEff .chip-pick.on').map(x => x.dataset.eff);
      c.outcome = { status: st, recoveredPct: $('#oPct').value.trim(), effProductNames: eff, note: $('#oNote').value.trim(), ratedAt: todayStr() };
      c.status = st; c.updated = todayStr(); c.updatedAt = Date.now();
      persistCases(); closeSheet(); renderCaseDetail(c); toast('Đã lưu đánh giá kết quả');
    };
  }

  /* ---- Nạp / gieo dữ liệu ca bệnh ---- */
  function loadCases() {
    const saved = loadLocal('ai4sales_cases', null);
    if (saved && Array.isArray(saved) && saved.length) { state.cases = saved; return; }
    state.cases = seedCases();
    saveLocal('ai4sales_cases', state.cases);
  }
  function seedCases() {
    const T = (name, response, dayOffset, note) => {
      const p = findProduct(name);
      const rc = /rõ|nhẹ/.test(response) ? 'up' : /Nặng/.test(response) ? 'down' : 'mid';
      return { date: daysAgoStr(dayOffset), productId: p ? p.ma_sp : '', productName: p ? p.ten : name, dose: p ? (p.lieu_luong || '') : '', days: '', response, respClass: rc, note: note || '' };
    };
    const mk = (o, treatments, outcome, forceId) => {
      const c = Object.assign({ note: '', usedProducts: '', treatments: treatments || [], outcome: outcome || null }, o);
      attachDiagnosis(c, forceId);
      c.status = outcome ? outcome.status : 'active';
      return c;
    };
    return [
      mk({ id: 'CASE-3071', created: daysAgoStr(3), updated: daysAgoStr(1), updatedAt: Date.now() - 1 * 864e5,
        customer: 'Trại heo Tân Lập', species: 'Heo', stage: 'Heo con', province: 'Tây Ninh',
        herdSize: '180', affectedCount: '24', deadCount: '2', started: '1–2 ngày trước',
        symptoms: 'heo con sau cai sữa tiêu chảy phân vàng tanh, mất nước, bú kém, sút cân' },
        [T('Anova Enroflox 10%', 'Cải thiện nhẹ', 1), T('Anova ProGut', 'Cải thiện nhẹ', 1, 'Men vi sinh ổn định đường ruột')],
        null, 'D05'),
      mk({ id: 'CASE-2980', created: daysAgoStr(6), updated: daysAgoStr(3), updatedAt: Date.now() - 3 * 864e5,
        customer: 'Trại heo Sáu Lành', species: 'Heo', stage: 'Heo thịt', province: 'Bến Tre',
        herdSize: '260', affectedCount: '40', deadCount: '14', started: '3–5 ngày trước',
        symptoms: 'heo sốt cao đột ngột, bỏ ăn, khó thở, tụ huyết vùng hầu họng, da tím, chết nhanh' },
        [T('Anova Enroflox 10%', 'Chưa chuyển biến', 5), T('Anova Electrolyte-Plus', 'Cải thiện nhẹ', 5, 'Bù nước, hỗ trợ hạ sốt')],
        { status: 'lost', recoveredPct: '52', effProductNames: [], note: 'Phát hiện muộn, vào đàn nhanh — lần sau cần tách con bệnh và can thiệp sớm hơn.', ratedAt: daysAgoStr(3) }, 'D07'),
      mk({ id: 'CASE-2864', created: daysAgoStr(8), updated: daysAgoStr(5), updatedAt: Date.now() - 5 * 864e5,
        customer: 'Trại heo Hòa Phú', species: 'Heo', stage: 'Nái', province: 'Bình Dương',
        herdSize: '120', affectedCount: '18', deadCount: '11', started: '1–2 ngày trước',
        symptoms: 'heo sốt cao 41 độ, bỏ ăn, da tai bụng đỏ tím, nằm chồng, chết nhanh tỷ lệ cao' },
        [T('Anova Iodine 10%', 'Chưa chuyển biến', 6, 'Sát trùng toàn trại, rải vôi lối đi'), T('NAVET-ASFVAC', 'Chưa chuyển biến', 5, 'Tiêm phòng đàn chưa nhiễm')],
        { status: 'lost', recoveredPct: '8', effProductNames: [], note: 'Nghi ASF — không có thuốc đặc trị; tập trung an toàn sinh học, cách ly, xử lý theo quy định.', ratedAt: daysAgoStr(5) }, 'D01'),
      mk({ id: 'CASE-2710', created: daysAgoStr(11), updated: daysAgoStr(6), updatedAt: Date.now() - 6 * 864e5,
        customer: 'HTX gà Phú Đông', species: 'Gà', stage: 'Gà giò', province: 'Tiền Giang',
        herdSize: '2000', affectedCount: '260', deadCount: '70', started: '3–5 ngày trước',
        symptoms: 'gà ủ rũ, giảm ăn, tiêu chảy phân xanh trắng, khó thở, vẹo cổ, giảm đẻ' },
        [T('Anova Iodine 10%', 'Cải thiện nhẹ', 7, 'Sát trùng chuồng, nước uống'), T('Anova Electrolyte-Plus', 'Cải thiện rõ', 6, 'Bù điện giải, vitamin nâng sức đề kháng')],
        { status: 'recovered', recoveredPct: '78', effProductNames: ['Anova Electrolyte-Plus'], note: 'Cách ly + sát trùng + nâng đề kháng; đàn ổn định sau 5 ngày.', ratedAt: daysAgoStr(6) }, 'D09'),
      mk({ id: 'CASE-2588', created: daysAgoStr(13), updated: daysAgoStr(7), updatedAt: Date.now() - 7 * 864e5,
        customer: 'Trại heo Bình Minh', species: 'Heo', stage: 'Heo thịt', province: 'Long An',
        herdSize: '320', affectedCount: '58', deadCount: '6', started: 'Trên 1 tuần',
        symptoms: 'heo thịt ho khan kéo dài theo đàn, khó thở, chậm lớn, kém đồng đều' },
        [T('Anova Florfen-200', 'Cải thiện rõ', 8, 'Đáp ứng nhanh sau 2 ngày'), T('Anova Electrolyte-Plus', 'Cải thiện rõ', 8)],
        { status: 'recovered', recoveredPct: '88', effProductNames: ['Anova Florfen-200'], note: 'Cải thiện thông thoáng chuồng + kháng sinh đúng nhóm; cân nhắc vaccine suyễn để giảm tái phát.', ratedAt: daysAgoStr(7) }, 'D06'),
      mk({ id: 'CASE-2461', created: daysAgoStr(16), updated: daysAgoStr(9), updatedAt: Date.now() - 9 * 864e5,
        customer: 'Trại heo Long Thành', species: 'Heo', stage: 'Heo con', province: 'Đồng Nai',
        herdSize: '210', affectedCount: '34', deadCount: '4', started: '3–5 ngày trước',
        symptoms: 'heo con sau cai sữa tiêu chảy phân vàng tanh, mất nước, lờ đờ' },
        [T('Anova Enroflox 10%', 'Cải thiện rõ', 10, 'Theo kháng sinh đồ'), T('Anova Electrolyte-Plus', 'Cải thiện rõ', 10, 'Bù nước - điện giải là then chốt')],
        { status: 'recovered', recoveredPct: '90', effProductNames: ['Anova Enroflox 10%', 'Anova Electrolyte-Plus'], note: 'Bù điện giải sớm + kháng sinh đúng → giảm chết rõ. Giữ ấm, khô chuồng.', ratedAt: daysAgoStr(9) }, 'D05')
    ];
  }

  /* =======================================================================
     CÔNG CỤ BÁN HÀNG — đơn nháp · tính số lượng · soạn tin gửi khách ·
     ticket chuyên gia · chiến dịch. Biến tư vấn thành hành động bán hàng.
     ===================================================================== */
  function copyText(t) {
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t); toast('Đã copy vào clipboard'); return; } } catch (e) {}
    try {
      const ta = document.createElement('textarea'); ta.value = t;
      ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); document.body.removeChild(ta); toast('Đã copy vào clipboard');
    } catch (e) { toast('Không copy được — hãy chọn và copy thủ công'); }
  }
  function persistWorkflow() {
    saveLocal('ai4sales_orders', state.orders);
    saveLocal('ai4sales_tickets', state.tickets);
    saveLocal('ai4sales_campaigns', state.campaigns);
  }
  function packSize(p) { const m = String(p.quy_cach || '').match(/(\d+(?:[.,]\d+)?)/); return m ? Number(m[1].replace(',', '.')) : 1; }

  /* Hàng nút hành động gắn dưới câu trả lời chẩn đoán / ca bệnh / push */
  function salesActionsRow(opts) {
    opts = opts || {};
    const ctx = [];
    if (opts.dxId) ctx.push('data-dx="' + esc(opts.dxId) + '"');
    if (opts.caseId) ctx.push('data-cid="' + esc(opts.caseId) + '"');
    if (opts.custId) ctx.push('data-cust2="' + esc(opts.custId) + '"');
    const c = ctx.join(' ');
    let h = '<div class="act-row">';
    h += `<button class="act-btn primary" data-act="order" ${c}>${SVG.receipt} Tạo đơn nháp</button>`;
    h += `<button class="act-btn" data-act="qty" ${opts.dxId ? ('data-dx="' + esc(opts.dxId) + '"') : ''}>${SVG.calc} Tính số lượng</button>`;
    h += `<button class="act-btn" data-act="msg" ${c}>${SVG.mail} Soạn tin gửi khách</button>`;
    if (opts.escalate) h += `<button class="act-btn danger" data-act="ticket" ${c}>${SVG.flag} Ticket chuyên gia</button>`;
    h += '</div>';
    return h;
  }
  function actionContext(ds) {
    const ctx = { products: [], customerName: '', dxName: '', dxId: '', herd: '', caseId: '', province: '' };
    if (ds.cid) { const c = getCase(ds.cid); if (c) { ctx.caseId = c.id; ctx.customerName = c.customer || ''; ctx.dxId = c.dxId || ''; ctx.dxName = c.dxName || ''; ctx.herd = c.herdSize || ''; ctx.province = c.province || ''; } }
    if (ds.dx) ctx.dxId = ds.dx;
    if (ctx.dxId) { const d = disById[ctx.dxId]; if (d) { ctx.dxName = ctx.dxName || d.ten_benh; ctx.products = (d.san_pham_lien_quan || []).map(c => prodById[c]).filter(Boolean); } }
    if (ds.cust2) {
      const dt = DB.distributors.find(x => x.id === ds.cust2);
      if (dt) {
        ctx.customerName = dt.ten; ctx.province = dt.khu_vuc;
        try {
          const t = tierSuggestions(dt, custAgg(dt));
          const seen = {};
          ctx.products = [].concat(t.safe || [], t.suggest || [], t.grow || []).filter(p => p && !seen[p.ma_sp] && (seen[p.ma_sp] = 1));
        } catch (e) {}
        const ra = state.alerts.find(a => a.tinh === dt.khu_vuc);
        if (ra && !ctx.dxName) ctx.dxName = (ra.ten_benh || '').split(' (')[0];
      }
    }
    return ctx;
  }
  function handleSalesAction(ds) {
    if (ds.act === 'qty') { const ctx = actionContext(ds); openQtyCalc(ds.pid ? [prodById[ds.pid]].filter(Boolean) : ctx.products, ctx); }
    else if (ds.act === 'order') openOrderForm(actionContext(ds));
    else if (ds.act === 'msg') openMessageForm(actionContext(ds));
    else if (ds.act === 'ticket') openTicketForm(actionContext(ds));
    else if (ds.act === 'campaign') openCampaignForm(ds.prov || '', ds.benh || '');
  }

  /* ---- Tính số lượng ---- */
  function openQtyCalc(products, ctx) {
    ctx = ctx || {};
    const list = (products && products.length) ? products : DB.products;
    const opts = list.map(p => `<option value="${esc(p.ma_sp)}">${esc(p.ten)}</option>`).join('');
    openSheet(`
      <h3>Tính số lượng cần đặt</h3>
      <p class="sub">Ước tính nhanh lượng cần dùng và chi phí tham khảo.</p>
      <div class="field"><label class="lbl">Sản phẩm</label><select class="in" id="qProd">${opts}</select></div>
      <div class="form-row">
        <div class="field"><label class="lbl">Số con</label><input class="in" type="number" id="qCount" value="${esc(ctx.herd || '100')}"></div>
        <div class="field"><label class="lbl">Kg/con</label><input class="in" type="number" id="qWeight" value="20"></div>
      </div>
      <div class="form-row">
        <div class="field"><label class="lbl">Số ngày</label><input class="in" type="number" id="qDays" value="3"></div>
        <div class="field"><label class="lbl">Hao hụt (%)</label><input class="in" type="number" id="qBuffer" value="10"></div>
      </div>
      <div id="qResult"></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="qClose">Đóng</button>
        <button class="btn btn-primary" id="qCalc">Tính</button>
      </div>
    `);
    const calc = () => {
      const p = prodById[$('#qProd').value]; if (!p) return;
      const count = Number($('#qCount').value) || 0, w = Number($('#qWeight').value) || 0,
        days = Number($('#qDays').value) || 1, buf = 1 + (Number($('#qBuffer').value) || 0) / 100;
      let need = 0, unit = '';
      if (p.loai === 'vaccine') { need = count * buf; unit = 'liều'; }
      else if (p.loai === 'khang_sinh' || p.loai === 'dac_tri') { need = (count * w / 10) * days * buf; unit = 'ml/g'; }
      else if (p.loai === 'sat_trung') { need = (count / 200) * days * buf; unit = 'lần pha'; }
      else { need = (count * w / 200) * days * buf; unit = 'phần'; }
      need = Math.max(1, Math.ceil(need));
      const packs = Math.max(1, Math.ceil(need / packSize(p)));
      const cost = packs * (p.gia_vnd || 0);
      $('#qResult').innerHTML = `<div class="panel">
        <div class="kv"><b>Tổng nhu cầu</b><span>~ ${need.toLocaleString('vi-VN')} ${unit}</span></div>
        <div class="kv"><b>Quy cách</b><span>${esc(p.quy_cach || '—')}</span></div>
        <div class="kv"><b>Số lượng đặt</b><span><b style="color:var(--primary-dark)">~ ${packs} quy cách</b></span></div>
        <div class="kv"><b>Ước tính chi phí</b><span><b style="color:var(--primary-dark)">${fmtVnd(cost)}</b></span></div>
      </div><div class="muted-note">Số liệu ước tính demo — đối chiếu nhãn thật & bảng giá khi đặt hàng.</div>`;
    };
    calc();
    $('#qProd').onchange = calc;
    $('#qCalc').onclick = calc;
    $('#qClose').onclick = closeSheet;
  }

  /* ---- Đơn nháp ---- */
  function orderLines(ctx) {
    const herd = Number(ctx.herd) || 0;
    return (ctx.products || []).slice(0, 5).map(p => {
      let qty;
      if (p.loai === 'vaccine') qty = herd ? Math.ceil(herd * 1.05) + ' liều' : 'theo đàn';
      else if (p.loai === 'sat_trung') qty = 'theo diện tích';
      else qty = herd ? (Math.max(1, Math.round(herd / 50)) + ' đv') : '1';
      return { ma: p.ma_sp, ten: p.ten, role: ROLE[p.loai] || 'Sản phẩm', qty, gia: p.gia_vnd };
    });
  }
  function orderText(o) {
    return `ĐƠN NHÁP ${o.id}\nKhách: ${o.customer || '—'}\n` +
      (o.dxName ? ('Bối cảnh: ' + o.dxName + '\n') : '') +
      o.lines.map(l => `• ${l.ten} — SL: ${l.qty} (${fmtVnd(l.gia)})`).join('\n') +
      (o.note ? ('\nGhi chú: ' + o.note) : '');
  }
  function openOrderForm(ctx) {
    const lines = orderLines(ctx);
    if (!lines.length) { toast('Chưa có sản phẩm gợi ý cho đơn này'); return; }
    openSheet(`
      <h3>Tạo đơn nháp</h3>
      <p class="sub">Đơn gợi ý cho ${esc(ctx.customerName || 'khách')} — chỉnh số lượng rồi lưu / copy gửi khách.</p>
      ${ctx.dxName ? `<div class="kv"><b>Bối cảnh</b><span>${esc(ctx.dxName)}</span></div>` : ''}
      <div id="ordLines" class="ord-lines">${lines.map((l, i) => `
        <div class="ord-line">
          <div class="ord-main"><span class="role-tag">${esc(l.role)}</span><b>${esc(l.ten)}</b><small>${fmtVnd(l.gia)}</small></div>
          <input class="ord-qty" data-i="${i}" value="${esc(l.qty)}">
        </div>`).join('')}</div>
      <div class="field"><label class="lbl">Ghi chú</label><textarea class="in" id="ordNote" placeholder="VD: giao trong tuần, áp dụng KM…"></textarea></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="ordCopy">Copy</button>
        <button class="btn btn-primary" id="ordSave">Lưu đơn nháp</button>
      </div>
    `);
    const collect = () => { const qs = $$('#ordLines .ord-qty'); return lines.map((l, i) => Object.assign({}, l, { qty: qs[i] ? qs[i].value.trim() : l.qty })); };
    $('#ordCopy').onclick = () => copyText(orderText({ id: uid('DON-'), customer: ctx.customerName, dxName: ctx.dxName, lines: collect(), note: $('#ordNote').value.trim() }));
    $('#ordSave').onclick = () => {
      const o = { id: uid('DON-'), customer: ctx.customerName || '', dxName: ctx.dxName || '', lines: collect(), note: $('#ordNote').value.trim(), status: 'draft', created: todayStr() };
      state.orders.unshift(o); persistWorkflow(); closeSheet(); toast('Đã lưu đơn nháp ' + o.id);
    };
  }

  /* ---- Soạn tin gửi khách ---- */
  function openMessageForm(ctx) {
    const prods = (ctx.products || []).slice(0, 3).map(p => p.ten).join(', ');
    const msg = `Chào anh/chị${ctx.customerName ? (' ' + ctx.customerName) : ''},\n` +
      (ctx.dxName ? `Khu vực đang có dấu hiệu ${ctx.dxName}. ` : '') +
      `Anova gợi ý một số sản phẩm phù hợp${prods ? (': ' + prods) : ''}. ` +
      `Em gửi báo giá & ưu đãi, anh/chị cần số lượng bao nhiêu để em lên đơn ạ?`;
    openSheet(`
      <h3>Soạn tin gửi khách</h3>
      <p class="sub">Tin nhắn Zalo/SMS gợi ý — chỉnh rồi copy gửi khách.</p>
      <div class="field"><textarea class="in" id="msgText" style="min-height:150px">${esc(msg)}</textarea></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="msgClose">Đóng</button>
        <button class="btn btn-primary" id="msgCopy">Copy tin nhắn</button>
      </div>
    `);
    $('#msgClose').onclick = closeSheet;
    $('#msgCopy').onclick = () => copyText($('#msgText').value);
  }

  /* ---- Ticket chuyên gia ---- */
  function expertFor(dxId) {
    const d = disById[dxId];
    return (d && d.vat_nuoi === 'gà') ? { name: 'BSTY. Trần Gia Cầm', field: 'Gia cầm' } : { name: 'BSTY. Lê Minh Heo', field: 'Heo' };
  }
  function openTicketForm(ctx) {
    const exp = expertFor(ctx.dxId);
    const urgent = ctx.dxId && disById[ctx.dxId] && disById[ctx.dxId].muc_do === 'nguy_hiem';
    const sla = urgent ? '2 giờ' : '24 giờ';
    openSheet(`
      <h3>Tạo ticket chuyên gia</h3>
      <p class="sub">Chuyển ca cho chuyên gia kỹ thuật xác minh & hỗ trợ.</p>
      <div class="kv"><b>Chuyên gia</b><span>${esc(exp.name)} · ${esc(exp.field)}</span></div>
      <div class="kv"><b>SLA phản hồi</b><span>${sla}</span></div>
      ${ctx.dxName ? `<div class="kv"><b>Ca nghi</b><span>${esc(ctx.dxName)}</span></div>` : ''}
      ${ctx.customerName ? `<div class="kv"><b>Khách / trại</b><span>${esc(ctx.customerName)}</span></div>` : ''}
      <div class="field"><label class="lbl">Câu hỏi cho chuyên gia</label><textarea class="in" id="tkNote" placeholder="Mô tả tình huống cần hỗ trợ…"></textarea></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="tkClose">Hủy</button>
        <button class="btn btn-primary" id="tkSave">Gửi ticket</button>
      </div>
    `);
    $('#tkClose').onclick = closeSheet;
    $('#tkSave').onclick = () => {
      const t = { id: uid('CG-'), expert: exp.name, field: exp.field, sla, dxName: ctx.dxName || '', customer: ctx.customerName || '', note: $('#tkNote').value.trim(), status: 'open', created: todayStr() };
      state.tickets.unshift(t); persistWorkflow(); closeSheet(); toast('Đã tạo ticket ' + t.id + ' → ' + exp.name);
    };
  }

  /* ---- Chiến dịch (từ cảnh báo dịch) ---- */
  function openCampaignForm(province, dxName) {
    const targets = DB.distributors.filter(d => province && (norm(d.khu_vuc).includes(norm(province)) || norm(province).includes(norm(d.khu_vuc)))).slice(0, 4);
    const d = DB.diseases.find(x => x.ten_benh === dxName);
    const skus = d ? (d.san_pham_lien_quan || []).map(c => prodById[c]).filter(Boolean).slice(0, 4) : [];
    const msg = `[Anova] Cảnh báo ${dxName} tại ${province}. Anova có sẵn ${skus.map(s => s.ten).join(', ') || 'giải pháp phòng dịch'} — liên hệ để được tư vấn & ưu đãi kịp thời ạ.`;
    openSheet(`
      <h3>Tạo chiến dịch</h3>
      <p class="sub">Nhắm khách trong vùng cảnh báo: ${esc(dxName)} · ${esc(province)}.</p>
      <div class="case-section-title">${SVG.user} Khách mục tiêu (${targets.length})</div>
      ${targets.length ? targets.map(t => `<div class="kv"><b>${esc(t.ten)}</b><span>${esc(t.khu_vuc)} · ${esc(t.loai_hinh)}</span></div>`).join('') : '<p class="muted-note">Chưa có NPP trong vùng này.</p>'}
      <div class="case-section-title" style="margin-top:12px">${SVG.package} Sản phẩm đề xuất</div>
      <div class="pill-tags">${skus.length ? skus.map(s => `<span class="pill">${esc(s.ten)}</span>`).join('') : '<span class="muted-note">—</span>'}</div>
      <div class="field" style="margin-top:12px"><label class="lbl">Tin nhắn chiến dịch</label><textarea class="in" id="cpMsg" style="min-height:96px">${esc(msg)}</textarea></div>
      <div class="sheet-actions">
        <button class="btn btn-ghost" id="cpCopy">Copy tin</button>
        <button class="btn btn-primary" id="cpSave">Lưu chiến dịch</button>
      </div>
    `);
    $('#cpCopy').onclick = () => copyText($('#cpMsg').value);
    $('#cpSave').onclick = () => {
      const c = { id: uid('CMP-'), disease: dxName, province, targets: targets.map(t => t.ten), skus: skus.map(s => s.ten), message: $('#cpMsg').value.trim(), created: todayStr() };
      state.campaigns.unshift(c); persistWorkflow(); closeSheet(); toast('Đã lưu chiến dịch ' + c.id);
    };
  }

  function loadWorkflow() {
    // Đơn nháp / ticket / chiến dịch do nút hành động (chẩn đoán · push · ca bệnh) tạo ra,
    // lưu cục bộ để nút "Lưu / Gửi" hoạt động và còn lại sau khi tải lại.
    state.orders = loadLocal('ai4sales_orders', null) || [];
    state.tickets = loadLocal('ai4sales_tickets', null) || [];
    state.campaigns = loadLocal('ai4sales_campaigns', null) || [];
  }

  /* =======================================================================
     HỒ SƠ SALE — tài khoản · bảo mật · quyền truy cập. Tối giản, mỗi dòng
     đều tự phục vụ được bằng dữ liệu của app (không cần API KPI/CRM ngoài).
     ===================================================================== */

  /* SVG riêng cho tab Hồ sơ — chỉ giữ icon thực sự dùng tới */
  const PF_SVG = {
    edit: `<svg class="ico" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`,
    user: `<svg class="ico" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    lock: `<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    globe: `<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    camera: `<svg class="ico" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
    mic: `<svg class="ico" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
    logout: `<svg class="ico" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    chev: `<svg class="ico" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  };

  function pfRow(act, icoCls, ico, title, sub, extra) {
    extra = extra || {};
    const right = extra.toggle
      ? `<div class="pf-switch ${state.profile[extra.toggle] ? 'on' : ''}"></div>`
      : (extra.value ? `<span class="pf-row-val">${esc(extra.value)}</span>` : '')
        + `<span class="pf-row-chev">${PF_SVG.chev}</span>`;
    const attr = extra.toggle ? `data-pftoggle="${extra.toggle}"` : `data-pf="${act}"`;
    return `<button class="pf-row ${extra.danger ? 'danger' : ''}" ${attr}>
      <span class="pf-row-ico ${icoCls}">${ico}</span>
      <span class="pf-row-txt"><h4>${esc(title)}</h4>${sub ? `<p>${esc(sub)}</p>` : ''}</span>
      ${right}
    </button>`;
  }

  function renderProfile() {
    const body = $('#profileBody'); if (!body) return;
    body.innerHTML = `
      <!-- Hero: ai đang đăng nhập (lấy từ tài khoản đăng nhập) -->
      <div class="card pf-hero">
        <div class="pf-avatar">${repInitials}</div>
        <div class="pf-hero-id">
          <h3>${esc(REP.name)}</h3>
          <p class="role">${esc(REP.role)}</p>
          <div class="pf-hero-pills">
            <span class="pill">Mã NV: ${esc(REP.code)}</span>
          </div>
        </div>
        <button class="pf-edit" data-pf="account" aria-label="Quản lý tài khoản">${PF_SVG.edit}</button>
      </div>

      <!-- Tài khoản & bảo mật -->
      <div class="card">
        <div class="card-title"><h3>Tài khoản</h3></div>
        <div class="pf-list">
          ${pfRow('account', '', PF_SVG.user, 'Quản lý tài khoản', 'Họ tên, số điện thoại, email')}
          ${pfRow('password', '', PF_SVG.lock, 'Đổi mật khẩu', 'Cập nhật mật khẩu đăng nhập')}
          ${pfRow('lang', '', PF_SVG.globe, 'Ngôn ngữ', 'Ngôn ngữ hiển thị', { value: 'Tiếng Việt' })}
        </div>
      </div>

      <!-- Quyền truy cập thiết bị -->
      <div class="card">
        <div class="card-title"><h3>Quyền truy cập</h3></div>
        <div class="pf-list">
          ${pfRow('cam', 'green', PF_SVG.camera, 'Truy cập máy ảnh', 'Chụp ảnh triệu chứng khi tạo ca bệnh', { toggle: 'camera' })}
          ${pfRow('rec', 'amber', PF_SVG.mic, 'Ghi âm', 'Hỏi trợ lý bằng giọng nói', { toggle: 'micRecord' })}
        </div>
      </div>

      <!-- Đăng xuất -->
      <div class="card">
        <div class="pf-list">
          ${pfRow('logout', 'danger', PF_SVG.logout, 'Đăng xuất', '', { danger: true })}
        </div>
      </div>

      <p class="pf-version">AI SalesMate · phiên bản 1.0.0</p>
    `;
  }

  /* Bật/tắt công tắc cài đặt — lưu ngay vào localStorage */
  function toggleProfile(key, el) {
    state.profile[key] = !state.profile[key];
    saveLocal('ai4sales_profile', state.profile);
    const sw = el.querySelector('.pf-switch');
    if (sw) sw.classList.toggle('on', state.profile[key]);
    const labels = { camera: 'Truy cập máy ảnh', micRecord: 'Ghi âm' };
    toast(`${labels[key] || 'Cài đặt'}: ${state.profile[key] ? 'Đã bật' : 'Đã tắt'}`);
  }

  /* Xử lý các dòng trong tab Hồ sơ — chỉ tác vụ tự phục vụ bằng dữ liệu của app */
  function handleProfileAction(act) {
    switch (act) {
      case 'account':
        // Họ tên / SĐT / email lấy từ tài khoản đăng nhập. Chức danh & khu vực do
        // quản lý/admin phân công nên không cho Sale tự sửa tại đây.
        openSheet(`<h3>Quản lý tài khoản</h3><p class="sub">Thông tin liên hệ của bạn. Chức danh và khu vực do quản lý phân công.</p>
          <label class="pf-field"><span>Họ và tên</span><input value="${esc(REP.name)}" /></label>
          <label class="pf-field"><span>Số điện thoại</span><input value="${esc(REP.phone)}" /></label>
          <label class="pf-field"><span>Email</span><input value="${esc(REP.email)}" /></label>
          <button class="btn btn-primary" data-pf="save-account" style="margin-top:6px">Lưu thay đổi</button>`);
        break;
      case 'save-account':
        closeSheet(); toast('Đã lưu tài khoản');
        break;
      case 'password':
        openSheet(`<h3>Đổi mật khẩu</h3><p class="sub">Mật khẩu mới tối thiểu 8 ký tự.</p>
          <label class="pf-field"><span>Mật khẩu hiện tại</span><input type="password" placeholder="••••••••" /></label>
          <label class="pf-field"><span>Mật khẩu mới</span><input type="password" placeholder="••••••••" /></label>
          <label class="pf-field"><span>Nhập lại mật khẩu mới</span><input type="password" placeholder="••••••••" /></label>
          <button class="btn btn-primary" data-pf="save-password" style="margin-top:6px">Cập nhật mật khẩu</button>`);
        break;
      case 'save-password':
        closeSheet(); toast('Đã đổi mật khẩu');
        break;
      case 'lang':
        toast('Hiện hỗ trợ Tiếng Việt');
        break;
      case 'logout':
        openSheet(`<h3>Đăng xuất?</h3><p class="sub">Bạn sẽ cần đăng nhập lại để tiếp tục dùng AI SalesMate.</p>
          <button class="btn btn-primary" data-pf="logout-confirm">Đăng xuất</button>
          <button class="btn btn-ghost" data-pf="logout-cancel">Ở lại</button>`);
        break;
      case 'logout-cancel':
        closeSheet();
        break;
      case 'logout-confirm':
        closeSheet(); toast(`Hẹn gặp lại, ${REP.short}!`);
        break;
    }
  }

  /* =======================================================================
     BOOT
     ===================================================================== */
  state.profile = Object.assign({ camera: true, micRecord: true }, loadLocal('ai4sales_profile', {}));
  loadCases();        // nạp ca bệnh đã lưu (hoặc gieo dữ liệu mẫu lần đầu)
  loadWorkflow();     // nạp đơn nháp / ticket / chiến dịch
  renderHome();

  // Initialize voice recognition
  initVoiceInput('homeVoice', 'homeAsk');
  initVoiceInput('kbVoice', 'kbInput');
  initVoiceInput('pushVoice', 'pushInput');

  // Deep-link: mở thẳng một tab qua #knowledge / #push / #market / #cases
  const start = (location.hash || '').replace('#', '');
  if (['knowledge', 'push', 'market', 'cases', 'profile'].includes(start)) go(start);
  window.addEventListener('hashchange', () => {
    const h = (location.hash || '').replace('#', '');
    if (['home', 'knowledge', 'push', 'market', 'cases', 'profile'].includes(h)) go(h);
  });
})();
