// A content.js tartalmát illeszti be az oldalba, és kezeli a nyelvváltást.
// Szöveg módosításához a content.js-t szerkeszd, ne ezt a fájlt.

(function () {
  var C = window.SITE_CONTENT;
  if (!C) { return; }
  var S = C.shared;
  var STORAGE_KEY = 'site-lang';
  var firstRender = true;
  var observer = null;

  function $(id) { return document.getElementById(id); }
  function clear(el) { while (el.firstChild) { el.removeChild(el.firstChild); } }

  function isSupported(code) {
    return C.languages.some(function (l) { return l.code === code; });
  }

  function detectLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isSupported(saved)) { return saved; }
    } catch (e) {}
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (isSupported(nav)) { return nav; }
    return C.defaultLanguage;
  }

  function closeMenu() {
    var box = $('langSwitch');
    var menu = box.querySelector('.lang-menu');
    var trigger = box.querySelector('.lang-trigger');
    if (menu) { menu.hidden = true; }
    if (trigger) { trigger.setAttribute('aria-expanded', 'false'); }
  }

  function renderSwitcher(current) {
    var box = $('langSwitch');
    clear(box);
    var cur = C.languages.filter(function (l) { return l.code === current; })[0];

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'lang-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', cur.name);
    trigger.innerHTML = '<span class="flag">' + cur.flag + '</span><span class="lang-code">' + cur.label +
        '</span><svg class="chev" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var menu = document.createElement('ul');
    menu.className = 'lang-menu';
    menu.setAttribute('role', 'listbox');
    menu.hidden = true;

    C.languages.forEach(function (l) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', l.code === current ? 'true' : 'false');
      var b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = '<span class="flag">' + l.flag + '</span><span>' + l.name + '</span>';
      b.addEventListener('click', function () {
        setLanguage(l.code);
        var t = $('langSwitch').querySelector('.lang-trigger');
        if (t) { t.focus(); }
      });
      li.appendChild(b);
      menu.appendChild(li);
    });

    trigger.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    box.appendChild(trigger);
    box.appendChild(menu);
  }

  document.addEventListener('click', function (e) {
    if (!$('langSwitch').contains(e.target)) { closeMenu(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); }
  });

  function render(lang) {
    var T = C.translations[lang];

    document.documentElement.lang = lang;
    document.title = T.pageTitle;

    // Fejléc
    $('brand').innerHTML = '<img src="logo-mark.svg" alt="" class="brand-mark">' +
        S.brand.name + ' <em>' + S.brand.accent + '</em>';

    var navList = $('navList');
    clear(navList);
    T.nav.forEach(function (label, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = S.navHrefs[i];
      a.textContent = label;
      li.appendChild(a);
      navList.appendChild(li);
    });

    // Hero
    $('heroTitle').textContent = T.hero.title;
    $('heroText').textContent = T.hero.text;
    $('heroCtaPrimary').textContent = T.hero.ctaPrimary;
    $('heroCtaPrimary').href = S.heroHrefs[0];
    $('heroCtaSecondary').textContent = T.hero.ctaSecondary;
    $('heroCtaSecondary').href = S.heroHrefs[1];

    // Ingatlanok
    $('propTitle').textContent = T.propertiesHeading.title;
    $('propNote').textContent = T.propertiesHeading.note;
    var grid = $('propertyGrid');
    clear(grid);
    T.properties.forEach(function (p, i) {
      var shared = S.properties[i] || {};
      var card = document.createElement('div');
      card.className = 'card reveal';
      card.innerHTML =
          '<div class="card-photo" style="background:' + shared.gradient + ';"><span>' + p.location + '</span></div>' +
          '<div class="card-body">' +
          '<h3>' + p.title + '</h3>' +
          '<div class="card-region">' + p.region + '</div>' +
          '<p>' + p.description + '</p>' +
          '<div class="card-meta">' +
          '<span class="card-size">' + shared.size + ' · ' + p.rooms + '</span>' +
          '<span class="card-price">' + shared.price + '</span>' +
          '</div>' +
          '</div>';
      grid.appendChild(card);
    });

    // Rólunk
    $('aboutTitle').textContent = T.about.title;
    $('aboutIntro').textContent = T.about.intro;
    var stats = $('aboutStats');
    clear(stats);
    T.about.stats.forEach(function (s) {
      var d = document.createElement('div');
      d.className = 'stat';
      d.innerHTML = '<b>' + s.value + '</b><span>' + s.label + '</span>';
      stats.appendChild(d);
    });
    var paras = $('aboutParagraphs');
    clear(paras);
    T.about.paragraphs.forEach(function (text) {
      var p = document.createElement('p');
      p.textContent = text;
      paras.appendChild(p);
    });

    // Kapcsolat
    var K = T.contact;
    $('contactTitle').textContent = K.title;
    $('contactText').textContent = K.text;
    $('contactDetails').innerHTML =
        '<div><span>' + K.phoneLabel + '</span><a href="' + S.phoneHref + '">' + S.phone + '</a></div>' +
        '<div><span>' + K.emailLabel + '</span><a href="mailto:' + S.email + '">' + S.email + '</a></div>';
    var bullets = $('contactBullets');
    clear(bullets);
    K.bullets.forEach(function (b) {
      var li = document.createElement('li');
      li.textContent = b;
      bullets.appendChild(li);
    });
    $('lblName').textContent = K.form.name;
    $('lblPhone').textContent = K.form.phone;
    $('lblEmail').textContent = K.form.email;
    $('lblLocation').textContent = K.form.location;
    $('lblDetails').textContent = K.form.details;
    $('details').placeholder = K.form.detailsPlaceholder;
    $('formNote').textContent = K.formNote;
    $('submitBtn').textContent = K.submitLabel;
    $('formOk').textContent = K.successMessage;
    $('formOk').style.display = 'none';

    // Lábléc
    $('footerText').textContent = T.footer.text;
    $('footerContact').textContent = S.email + ' · ' + S.phone;

    renderSwitcher(lang);
    activateReveal();
  }

  function activateReveal() {
    var els = document.querySelectorAll('.reveal');
    if (firstRender && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      els.forEach(function (el) { observer.observe(el); });
    } else if (firstRender) {
      els.forEach(function (el) { el.classList.add('in-view'); });
    } else {
      // Nyelvváltáskor ne induljon újra az animáció
      els.forEach(function (el) { el.classList.add('in-view'); });
    }
    firstRender = false;
  }

  function setLanguage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    render(lang);
  }

  $('listingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    $('formOk').style.display = 'block';
    this.reset();
  });

  render(detectLanguage());
})();