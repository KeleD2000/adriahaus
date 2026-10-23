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

    // Felirat a kattintható szolgáltatás kártyákon
    var DETAILS_LABELS = {
        hu: 'További részletek',
        en: 'More details',
        de: 'Weitere Details',
        hr: 'Više detalja',
        cs: 'Více informací',
        sk: 'Viac informácií'
    };

    // Felirat az elsötétített "hamarosan" kártyákon
    var SOON_LABELS = {
        hu: 'Hamarosan',
        en: 'Coming soon',
        de: 'Demnächst',
        hr: 'Uskoro',
        cs: 'Již brzy',
        sk: 'Čoskoro'
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
        var soonLabel = SOON_LABELS[lang] || SOON_LABELS.en;

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

        // Hero gombok: csak a megfelelő szekcióhoz görgetnek, galériát nem nyitnak
        var heroActions = $('heroActions');
        clear(heroActions);
        T.hero.ctaServices.forEach(function (btnText, i) {
            var a = document.createElement('a');
            a.href = S.heroHrefs[i] || '#ingatlanok';

            a.addEventListener('click', function (e) {
                var target = document.querySelector(a.getAttribute('href'));
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

            // Minden szolgáltatás kártya kattintható, "További részletek" jelzéssel
            var hint = document.createElement('span');
            hint.className = 'service-hint';
            hint.textContent = 'ℹ️ ' + galleryLabel;
            card.appendChild(hint);

            card.classList.add('is-clickable');
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', svc.title + ' – ' + galleryLabel);

            var openDetails = function () {
                openGallery(shared.gallery || [], svc.title, svc.items, svc.details || svc.description);
            };
            card.addEventListener('click', openDetails);
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openDetails();
                }
            });

            grid.appendChild(card);
        });

        // Eladó ingatlanok (hamarosan, példa értékekkel)
        $('exTitle').textContent = T.examplesHeading.title;
        $('exNote').textContent = T.examplesHeading.note;
        var exGrid = $('exampleGrid');
        clear(exGrid);
        T.examples.forEach(function (p, i) {
            var shared = S.examples[i] || {};
            var card = document.createElement('div');
            card.className = 'card reveal property-card is-soon';
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
                '</div>' +
                '<span class="soon-badge">' + soonLabel + '</span>';
            exGrid.appendChild(card);
        });

        // Kiadó ingatlanok: az első valódi (kattintható galéria), a többi hamarosan (példa)
        $('rentTitle').textContent = T.rentalsHeading.title;
        $('rentNote').textContent = T.rentalsHeading.note;
        var rentGrid = $('rentalGrid');
        clear(rentGrid);
        T.rentals.forEach(function (p, i) {
            var shared = S.rentals[i] || {};
            var soon = !!shared.soon;
            var card = document.createElement(soon ? 'div' : 'button');
            if (!soon) {
                card.type = 'button';
            }
            card.className = 'card reveal property-card' + (soon ? ' is-soon' : '');
            card.innerHTML =
                '<div class="card-photo"><img src="' + shared.image + '" alt="' + p.title + '"><span>' + p.location + '</span></div>' +
                '<div class="card-body">' +
                '<h3>' + p.title + '</h3>' +
                '<div class="card-region">' + p.region + '</div>' +
                '<p>' + p.description + '</p>' +
                '<div class="card-meta">' +
                '<span class="card-size">' + (shared.size ? shared.size + ' · ' : '') + p.rooms + '</span>' +
                '<span class="card-price">' + shared.price + ' ' + p.priceUnit + '</span>' +
                '</div>' +
                '</div>' +
                (soon ? '<span class="soon-badge">' + soonLabel + '</span>' : '');
            if (!soon) {
                card.addEventListener('click', function () {
                    openGallery(shared.gallery || [shared.image], p.title, p.items, p.details, true);
                });
            }
            rentGrid.appendChild(card);
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

    // --- Popup: cím, szöveg, lista, kép ---
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

    function openGallery(images, title, items, text, imagesFirst) {
        galleryImages = images || [];
        galleryIndex = 0;
        galleryReturnFocus = document.activeElement;
        $('galleryTitle').textContent = title;

        var imgEl = $('galleryImg');
        var imgWrap = $('galleryImgWrap');
        var prevBtn = $('galleryPrev');
        var nextBtn = $('galleryNext');
        var counterEl = $('galleryCounter');
        var counterBar = counterEl ? counterEl.parentNode : null;

        if (galleryImages.length > 0) {
            showGalleryImage();
            if (imgWrap) imgWrap.style.display = '';
            if (counterBar) counterBar.style.display = '';
            // egy képnél nincs szükség nyilakra és számlálóra
            var multi = galleryImages.length > 1;
            if (prevBtn) prevBtn.style.display = multi ? '' : 'none';
            if (nextBtn) nextBtn.style.display = multi ? '' : 'none';
            if (counterEl) counterEl.style.display = multi ? '' : 'none';
        } else {
            if (imgEl) imgEl.src = '';
            if (imgWrap) imgWrap.style.display = 'none';
            if (counterBar) counterBar.style.display = 'none';
        }

        // Szöveges leírás a popupban
        var textEl = $('galleryText');
        if (textEl) {
            textEl.textContent = text || '';
            textEl.hidden = !text;
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
        // Ha imagesFirst igaz: a képek legfelül, alattuk a szöveg és a lista
        modal.querySelector('.modal-dialog').classList.toggle('images-first', !!imagesFirst);
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
        if (galleryImages.length < 2) {
            return;
        }
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        showGalleryImage('next');
    }

    function prevImage() {
        if (galleryImages.length < 2) {
            return;
        }
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