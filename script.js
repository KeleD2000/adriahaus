// A content.js tartalmát illeszti be az oldalba, és kezeli a nyelvváltást.
// Szöveg módosításához a content.js-t szerkeszd, ne ezt a fájlt.

(function () {
    var C = window.SITE_CONTENT;
    if (!C) {
        return;
    }
    var S = C.shared;
    var STORAGE_KEY = 'site-lang';
    var firstRender = true;
    var observer = null;

    function $(id) {
        return document.getElementById(id);
    }

    function clear(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }

    function isSupported(code) {
        return C.languages.some(function (l) {
            return l.code === code;
        });
    }

    function detectLanguage() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved && isSupported(saved)) {
                return saved;
            }
        } catch (e) {
        }
        var nav = (navigator.language || '').slice(0, 2).toLowerCase();
        if (isSupported(nav)) {
            return nav;
        }
        return C.defaultLanguage;
    }

    function closeMenu() {
        var box = $('langSwitch');
        var menu = box.querySelector('.lang-menu');
        var trigger = box.querySelector('.lang-trigger');
        if (menu) {
            menu.hidden = true;
        }
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    }

    function renderSwitcher(current) {
        var box = $('langSwitch');
        clear(box);
        var cur = C.languages.filter(function (l) {
            return l.code === current;
        })[0];

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
                if (t) {
                    t.focus();
                }
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

    // --- Hamburger menü (mobil) ---
    var navBox = document.querySelector('.nav');
    var navToggle = $('navToggle');
    var MENU_LABELS = {hu: 'Menü', en: 'Menu', de: 'Menü', hr: 'Izbornik', cs: 'Menu', sk: 'Menu'};

    // Galéria jelző felirat a kattintható szolgáltatás kártyákon
    var DETAILS_LABELS = {
        hu: 'További részletek',
        en: 'More details',
        de: 'Weitere Details',
        hr: 'Više detalja',
        cs: 'Více informací',
        sk: 'Viac informácií'
    };

    function setNavOpen(open) {
        navBox.classList.toggle('is-open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    navToggle.addEventListener('click', function () {
        setNavOpen(!navBox.classList.contains('is-open'));
    });

    $('navMenu').addEventListener('click', function (e) {
        if (e.target.closest('a')) {
            setNavOpen(false);
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 560) {
            setNavOpen(false);
        }
    });

    document.addEventListener('click', function (e) {
        if (!$('langSwitch').contains(e.target)) {
            closeMenu();
        }
        if (!navBox.contains(e.target)) {
            setNavOpen(false);
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
            setNavOpen(false);
        }
    });

    function render(lang) {
        var T = C.translations[lang];
        var galleryLabel = DETAILS_LABELS[lang] || DETAILS_LABELS.en;

        document.documentElement.lang = lang;
        document.title = T.pageTitle;
        navToggle.setAttribute('aria-label', MENU_LABELS[lang] || 'Menu');

        // Fejléc: a név alatt középre igazítva a "Tengerparti ingatlanok" felirat
        $('brand').innerHTML = '<img src="logo-mark.svg" alt="" class="brand-mark">' +
            '<span class="brand-text">' +
            '<span class="brand-name">' + S.brand.name + '</span>' +
            '<em>' + S.brand.accent + '</em>' +
            '</span>';

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

        // Hero (a cím vizuálisan rejtett, de SEO miatt megmarad)
        $('heroTitle').textContent = T.hero.title;
        $('heroText').textContent = T.hero.text || '';

        // 4 specifikus gomb dinamikus renderelése a Hero szekcióban
        var heroActions = $('heroActions');
        clear(heroActions);
        T.hero.ctaServices.forEach(function (btnText, i) {
            var a = document.createElement('a');
            a.href = S.heroHrefs[i] || '#ingatlanok';

            a.addEventListener('click', function (e) {
                var href = a.getAttribute('href');
                var id = href.charAt(0) === '#' ? href.slice(1) : '';

                // Ha a gombhoz tartozó szolgáltatásnak van galériája, azt nyissa meg
                for (var j = 0; j < S.services.length; j++) {
                    if (S.services[j].id === id && S.services[j].gallery) {
                        e.preventDefault();
                        openGallery(S.services[j].gallery, T.services[j].title);
                        return;
                    }
                }

                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
            a.className = i === 0 ? 'btn btn-primary' : 'btn btn-secondary';
            a.textContent = btnText;
            heroActions.appendChild(a);
        });

        // Szolgáltatások
        $('propTitle').textContent = T.servicesHeading.title;
        $('propNote').textContent = T.servicesHeading.note;
        var grid = $('propertyGrid');
        clear(grid);
        T.services.forEach(function (svc, i) {
            var shared = S.services[i] || {};
            var card = document.createElement('div');
            card.id = shared.id || ('service-' + i);
            card.className = 'card service-card reveal';
            card.innerHTML =
                '<div class="service-emoji" aria-hidden="true">' + shared.emoji + '</div>' +
                '<h3>' + svc.title + '</h3>' +
                '<p>' + svc.description + '</p>';

            // Ha van galéria VAGY elemek (lista), akkor legyen kattintható
            if ((shared.gallery && shared.gallery.length) || (svc.items && svc.items.length)) {
                var hint = document.createElement('span');
                hint.className = 'service-hint';
                hint.textContent = 'ℹ️ ' + galleryLabel;
                card.appendChild(hint);

                card.classList.add('is-clickable');
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', svc.title + ' – ' + galleryLabel);

                // Kattintáskor átadjuk a képeket, a címet ÉS a listát (svc.items) is!
                card.addEventListener('click', function () {
                    openGallery(shared.gallery || [], svc.title, svc.items);
                });
                card.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openGallery(shared.gallery || [], svc.title, svc.items);
                    }
                });
            }
            grid.appendChild(card);
        });

        // Példa ingatlanok
        $('exTitle').textContent = T.examplesHeading.title;
        $('exNote').textContent = T.examplesHeading.note;
        var exGrid = $('exampleGrid');
        clear(exGrid);
        T.examples.forEach(function (p, i) {
            var shared = S.examples[i] || {};
            var card = document.createElement('button');
            card.type = 'button';
            card.className = 'card reveal property-card';
            card.innerHTML =
                '<div class="card-photo"><img src="' + shared.image + '" alt="' + p.title + '"><span>' + p.location + '</span></div>' +
                '<div class="card-body">' +
                '<h3>' + p.title + '</h3>' +
                '<div class="card-region">' + p.region + '</div>' +
                '<p>' + p.description + '</p>' +
                '<div class="card-meta">' +
                '<span class="card-size">' + shared.size + ' · ' + p.rooms + '</span>' +
                '<span class="card-price">' + shared.price + '</span>' +
                '</div>' +
                '</div>';
            card.addEventListener('click', function () {
                openGallery(shared.gallery || [shared.image], p.title);
            });
            exGrid.appendChild(card);
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
        $('lblService').textContent = K.form.serviceSelect;

        var selectEl = $('service');
        clear(selectEl);

        var defaultOpt = document.createElement('option');
        defaultOpt.value = "";
        defaultOpt.disabled = true;
        defaultOpt.selected = true;
        defaultOpt.textContent = K.form.servicePlaceholder;
        selectEl.appendChild(defaultOpt);

        K.form.serviceOptions.forEach(function (optText) {
            var opt = document.createElement('option');
            opt.value = optText;
            opt.textContent = optText;
            selectEl.appendChild(opt);
        });

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
            }, {threshold: 0.15});
            els.forEach(function (el) {
                observer.observe(el);
            });
        } else if (firstRender) {
            els.forEach(function (el) {
                el.classList.add('in-view');
            });
        } else {
            // Nyelvváltáskor ne induljon újra az animáció
            els.forEach(function (el) {
                el.classList.add('in-view');
            });
        }
        firstRender = false;
    }

    function setLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
        }
        render(lang);
    }

    $('listingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        $('formOk').style.display = 'block';
        this.reset();
    });

    // --- Kép-galéria popup ---
    var galleryImages = [];
    var galleryIndex = 0;
    var galleryReturnFocus = null;
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showGalleryImage(direction) {
        var img = $('galleryImg');
        $('galleryCounter').textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;

        if (!direction || prefersReducedMotion) {
            img.src = galleryImages[galleryIndex];
            return;
        }

        var outClass = direction === 'next' ? 'slide-left' : 'slide-right';
        img.classList.add(outClass);
        setTimeout(function () {
            img.src = galleryImages[galleryIndex];
            img.classList.remove(outClass);
        }, 180);
    }

    function openGallery(images, title, items) {
        galleryImages = images || [];
        galleryIndex = 0;
        galleryReturnFocus = document.activeElement;
        $('galleryTitle').textContent = title;

        // Ha nincsenek képek (csak lista van, mint a felújításnál), elrejthetjük a képváltót vagy kezelhetjük
        var imgEl = $('galleryImg');
        var prevBtn = $('galleryPrev');
        var nextBtn = $('galleryNext');
        var counterEl = $('galleryCounter');

        if (galleryImages.length > 0) {
            showGalleryImage();
            if(prevBtn) prevBtn.style.display = '';
            if(nextBtn) nextBtn.style.display = '';
            if(counterEl) counterEl.style.display = '';
        } else {
            if(imgEl) imgEl.src = '';
            if(prevBtn) prevBtn.style.display = 'none';
            if(nextBtn) prevBtn.style.display = 'none';
            if(counterEl) counterEl.style.display = 'none';
        }

        // A részletező lista megjelenítése a popupban
        var listEl = $('galleryList');
        if (listEl) {
            clear(listEl);
            if (items && items.length) {
                items.forEach(function (item) {
                    var li = document.createElement('li');
                    li.textContent = item;
                    listEl.appendChild(li);
                });
                listEl.hidden = false;
            } else {
                listEl.hidden = true;
            }
        }

        var modal = $('galleryModal');
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(function () {
            modal.classList.add('is-open');
        });
        $('galleryClose').focus();
    }
    window.openGallery = openGallery;

    function closeGallery() {
        var modal = $('galleryModal');
        modal.classList.remove('is-open');
        var finish = function () {
            modal.hidden = true;
            document.body.style.overflow = '';
            if (galleryReturnFocus) {
                galleryReturnFocus.focus();
            }
        };
        if (prefersReducedMotion) {
            finish();
        } else {
            setTimeout(finish, 280);
        }
    }

    function nextImage() {
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        showGalleryImage('next');
    }

    function prevImage() {
        galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
        showGalleryImage('prev');
    }

    $('galleryClose').addEventListener('click', closeGallery);
    $('galleryNext').addEventListener('click', nextImage);
    $('galleryPrev').addEventListener('click', prevImage);
    $('galleryModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeGallery();
        }
    });
    document.addEventListener('keydown', function (e) {
        if ($('galleryModal').hidden) {
            return;
        }
        if (e.key === 'Escape') {
            closeGallery();
        }
        if (e.key === 'ArrowRight') {
            nextImage();
        }
        if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });

    render(detectLanguage());
})();