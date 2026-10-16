window.SITE_CONTENT = {

  defaultLanguage: "hu",

  languages: [
    { code: "hu", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#CD2A3E"/><rect y="5.33" width="24" height="5.34" fill="#fff"/><rect y="10.66" width="24" height="5.34" fill="#436F4D"/></svg>', label: "HU", name: "Magyar" },
    { code: "en", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#012169"/><path d="M0 0L24 16M24 0L0 16" stroke="#fff" stroke-width="3.2"/><path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.2"/><rect x="9" width="6" height="16" fill="#fff"/><rect y="5" width="24" height="6" fill="#fff"/><rect x="10.3" width="3.4" height="16" fill="#C8102E"/><rect y="6.3" width="24" height="3.4" fill="#C8102E"/></svg>', label: "EN", name: "English" },
    { code: "de", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#000"/><rect y="5.33" width="24" height="5.34" fill="#DD0000"/><rect y="10.66" width="24" height="5.34" fill="#FFCC00"/></svg>', label: "DE", name: "Deutsch" },
    { code: "hr", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#FF0000"/><rect y="5.33" width="24" height="5.34" fill="#fff"/><rect y="10.66" width="24" height="5.34" fill="#171796"/><g transform="translate(9.5, 3.8) scale(0.35)"><rect width="14" height="17" fill="#fff" rx="1"/><path d="M0 0h14v17H0z" fill="none" stroke="#171796" stroke-width="1"/><rect x="0" y="0" width="2.8" height="3.4" fill="#FF0000"/><rect x="5.6" y="0" width="2.8" height="3.4" fill="#FF0000"/><rect x="11.2" y="0" width="2.8" height="3.4" fill="#FF0000"/><rect x="2.8" y="3.4" width="2.8" height="3.4" fill="#FF0000"/><rect x="8.4" y="3.4" width="2.8" height="3.4" fill="#FF0000"/><rect x="0" y="6.8" width="2.8" height="3.4" fill="#FF0000"/><rect x="5.6" y="6.8" width="2.8" height="3.4" fill="#FF0000"/><rect x="11.2" y="6.8" width="2.8" height="3.4" fill="#FF0000"/><rect x="2.8" y="10.2" width="2.8" height="3.4" fill="#FF0000"/><rect x="8.4" y="10.2" width="2.8" height="3.4" fill="#FF0000"/><rect x="0" y="13.6" width="2.8" height="3.4" fill="#FF0000"/><rect x="5.6" y="13.6" width="2.8" height="3.4" fill="#FF0000"/><rect x="11.2" y="13.6" width="2.8" height="3.4" fill="#FF0000"/></g></svg>', label: "HR", name: "Hrvatski" },
    { code: "cs", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#D7141A"/><path d="M0 0L12 8L0 16Z" fill="#11457E"/></svg>', label: "CZ", name: "Čeština" },
    { code: "sk", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#fff"/><rect y="5.33" width="24" height="5.34" fill="#0B4EA2"/><rect y="10.66" width="24" height="5.34" fill="#EE1C25"/><path d="M5 3.4h6.4v5.2c0 2.3-3.2 3.8-3.2 3.8S5 10.9 5 8.6z" fill="#EE1C25" stroke="#fff" stroke-width=".7"/><rect x="7.8" y="4.6" width=".8" height="4.6" fill="#fff"/><rect x="6.7" y="5.9" width="3" height=".8" fill="#fff"/><path d="M5.6 9.6q2.6-2 5.2 0q-2.6 1.4-5.2 0z" fill="#0B4EA2"/></svg>', label: "SK", name: "Slovenčina" }
  ],

  shared: {
    brand: { name: "Adria Haus", accent: "Tengerparti ingatlanok" },
    phone: "+36 30 878 7226",
    phoneHref: "tel:+36308787226",
    email: "adriahaus70@gmail.com",
    navHrefs: ["#rolunk", "#kapcsolat"],
    heroHrefs: ["#ingatlan-ertikesites", "#ingatlan-hasznositas", "#ingatlan-felujitas", "#kapcsolat"],
    properties: [
      { gradient: "linear-gradient(160deg,#2E6F7E,#8FCAD4)", size: "68 m²",  price: "185 000 €" },
      { gradient: "linear-gradient(160deg,#3B5245,#7FA98C)", size: "210 m²", price: "395 000 €" },
      { gradient: "linear-gradient(160deg,#1B4B5A,#C9954B)", size: "240 m²", price: "620 000 €" },
      { gradient: "linear-gradient(160deg,#5A3B2E,#C97B5A)", size: "140 m²", price: "340 000 €" },
      { gradient: "linear-gradient(160deg,#2E4A5A,#5A7B8C)", size: "310 m²", price: "780 000 €" },
      { gradient: "linear-gradient(160deg,#3E7C8C,#DCA95F)", size: "93 m²",  price: "62 000 €" }
    ],
    services: [
      { emoji: "🏠", id: "ingatlan-ertikesites" },
      { emoji: "🔑", id: "ingatlan-hasznositas" },
      { emoji: "🛠️", id: "ingatlan-felujitas",
        gallery: ["felujitas-1.jpg", "felujitas-2.jpg", "felujitas-3.jpg", "felujitas-4.jpg"] },
      { emoji: "🏷️", id: "kapcsolat" }
    ],
    examples: [
      { image: "property-apartment.svg", size: "68 m²",  price: "185 000 €",
        gallery: ["property-apartment.svg", "gallery-interior.svg", "gallery-terrace.svg"] },
      { image: "property-villa.svg",     size: "240 m²", price: "620 000 €",
        gallery: ["property-villa.svg", "gallery-interior.svg", "gallery-terrace.svg"] },
      { image: "property-house.svg",     size: "140 m²", price: "340 000 €",
        gallery: ["property-house.svg", "gallery-interior.svg", "gallery-terrace.svg"] }
    ]
  },

  translations: {

    hu: {
      pageTitle: "Adria Hause – Adriai ingatlanközvetítés",
      nav: ["Rólunk", "Kapcsolat"],
      hero: {
        title: "Horvátországi ingatlanok közvetítése",
        ctaServices: ["Ingatlan értékesítés", "Ingatlanok hasznosítása", "Felújítás / Karbantartás", "Eladnám az ingatlanom"]
      },
      servicesHeading: { title: "Aktuális szolgáltatásaink", note: "4 fő szolgáltatási terület" },
      services: [
        { title: "Ingatlan értékesítés",
          description: "Végigkísérjük Önt a hirdetéstől az adásvételi szerződésig, teljes körű jogi és piaci támogatással.",
          details: "Teljes körű támogatást nyújtunk horvátországi ingatlana értékesítésében, a piaci árazástól a megfelelő vevő megtalálásáig és az adásvétel lebonyolításáig.",
          items: [
            "Személyre szabott ingatlankeresés",
            "OIB-adószám igénylése",
            "Ingatlanmegtekintések szervezése",
            "Közművek átírása"
          ]
        },
        { title: "Ingatlanok hasznosítása",
          description: "Bérbeadás és hosszú távú hasznosítás megszervezése, hogy ingatlana a lehető legjobban megtérüljön.",
          details: "A Senj székhelyű ügynökség ingatlanokat keres portfóliója bővítésére. Több mint 10 éves horvátországi tapasztalatával egyéni megoldásokat és támogatást kínál ingatlana bérbeadásához.",
          items: [
            "Marketing: Európa-szerte népszerűsítjük ingatlanját, gondoskodunk a hirdetésekről és a vendégekkel való kommunikációról.",
            "Vendéggondozás: Teljes körű szolgáltatást nyújtunk a foglalástól a kijelentkezésig.",
            "Ingatlankezelés: Egész évben havonta kétszer meglátogatjuk az ingatlant. A látogatást fotókkal igazoljuk, és ha bármilyen meghibásodást észlelünk, jelezzük, igény szerint szakember bevonásával javítjuk.",
          ] },
        { title: "Ingatlanok felújítása / karbantartás",
          description: "Amennyiben felújítani szeretné ingatlanát, mi segítünk! Rijeka és Zadar között, beleértve a közeli szigeteket is (Pag, Krk, Rab). 15 éves tapasztalattal rendelkező vállalkozás vállal.",
          items: [
            "Külső-belső festés",
            "Homlokzati hőszigetelés",
            "Tetőszerkezet javítás",
            "Nyílászárók cseréje, teljes helyreállítással",
            "Riasztó, kamerák telepítése",
            "Klímaberendezések telepítése, karbantartása, tisztítása"
          ] },
        { title: "Eladnám az ingatlanomat",
          description: "Segítünk gyorsan és a legjobb piaci áron értékesíteni horvátországi ingatlanát megbízható vevőkörben.",
          details: "Segítünk horvátországi ingatlana sikeres értékesítésében a piaci érték meghatározásától a vevők felkutatásán át az adásvétel lebonyolításáig.",
          items: [
            "Ingatlan piaci értékének felmérése",
            "Ingatlan hirdetése és marketingje",
            "Érdeklődők és megtekintések szervezése",
            "Segítség az adásvétel lebonyolításában"
          ]
        }
      ],
      examplesHeading: { title: "Példa ingatlanaink", note: "3 kiválasztott ingatlan" },
      examples: [
        { location: "Rovinj, Isztria", region: "Isztria", title: "Tengerre néző lakás", rooms: "2 hálószoba",
          description: "Felújított, 68 m²-es lakás a városközponthoz közel, tágas terasszal és panorámás kilátással az öbölre." },
        { location: "Zadar, Észak-Dalmácia", region: "Észak-Dalmácia", title: "Új építésű villa", rooms: "4 hálószoba",
          description: "Modern, energiatakarékos villa medencével, a Kornati-szigetekre néző terasszal, azonnal beköltözhető." },
        { location: "Split, Közép-Dalmácia", region: "Közép-Dalmácia", title: "Belvárosi kőház", rooms: "3 szint",
          description: "Történelmi óvárosi kőház, részlegesen felújítva, kiváló befektetési lehetőség rövid távú bérbeadásra." }
      ],
      about: {
        title: "Több mint 10 éve közvetítünk a horvát tengerparton",
        intro: "Helyi jogi és piaci ismeretünk, valamint horvátországi partnerhálózatunk révén végigkísérjük ügyfeleinket a kiválasztástól a tulajdonjog bejegyzéséig.",
        stats: [
          { value: "10+", label: "év tapasztalat" },
          { value: "5", label: "régió" }
        ],
      },
      contact: {
        title: "Kapcsolat",
        text: "Kérdése van, vagy eladná horvátországi ingatlanát? Írjon vagy hívjon minket, vagy töltse ki az űrlapot.",
        phoneLabel: "Telefon",
        emailLabel: "E-mail",
        bullets: [
          "Ingyenes, kötelezettségmentes felmérés",
          "Célzott elérés a magyar vevői körben",
          "Teljes körű jogi ügyintézés"
        ],
        form: {
          name: "Név",
          phone: "Telefonszám",
          email: "E-mail cím",
          serviceSelect: "Milyen szolgáltatás érdekli?",
          servicePlaceholder: "Kérjük, válasszon szolgáltatást...",
          serviceOptions: [
            "Ingatlan vásárlása",
            "Ingatlan értékesítése",
            "Ingatlanok hasznosítása / Bérbeadás",
            "Ingatlan felújítása / Karbantartás",
            "Egyéb megkeresés"
          ]
        },
        formNote: "Az elküldött adatokat kizárólag a kapcsolatfelvétel céljából kezeljük.",
        submitLabel: "Ajánlat elküldése",
        successMessage: "Köszönjük! Munkatársunk hamarosan felveszi Önnel a kapcsolatot."
      },
      footer: { text: "Adria Hause — horvátországi ingatlanközvetítés" }
    },

    en: {
      pageTitle: "Adria Hause – Adriatic real estate brokerage",
      nav: ["About us", "Contact"],
      hero: {
        title: "Real estate brokerage in Croatia",
        ctaServices: ["Property Sales", "Property Management", "Renovation & Maintenance", "I want to sell my property"]
      },
      servicesHeading: { title: "Our current services", note: "4 core service areas" },
      services: [
        { title: "Property sales",
          description: "We guide you from listing to signing the contract, with full legal and market support.",
          details: "We provide comprehensive support with the sale of your property in Croatia, from market valuation and finding the right buyer to completing the transaction.",
          items: [
            "Personalized property search",
            "OIB tax identification number application",
            "Property viewing arrangements",
            "Utility account transfers"
          ]
        },
        { title: "Property management",
          description: "We arrange renting and long-term management so your property performs at its best.",
          details: "A Senj-based agency is looking for properties to expand its portfolio. With over 10 years of experience in Croatia, it offers tailored solutions and support for renting out your property.",
          items: [
            "Marketing: We promote your property across Europe, taking care of listings and guest communication.",
            "Guest care: We provide a full service from booking to check-out.",
            "Property management: We visit the property twice a month all year round. Each visit is verified with photos, and if any defects are found, we report them and have them repaired by a professional upon request."
          ] },
        { title: "Renovation & maintenance",
          description: "If you want to renovate your property, we are here to help! Between Rijeka and Zadar, including the nearby islands (Pag, Krk, Rab). A company with 15 years of experience offers:",
          items: [
            "Interior and exterior painting",
            "Facade thermal insulation",
            "Roof structure repair",
            "Window and door replacement, with full restoration",
            "Alarm and camera installation",
            "Air conditioner installation, maintenance and cleaning"
          ] },
        { title: "Sell your property",
          description: "We help you sell your property in Croatia quickly and at the best market price to trusted buyers.",
          details: "We help you sell your property in Croatia, from assessing its market value and marketing it to finding buyers and completing the transaction.",
          items: [
            "Property market valuation",
            "Property listing and marketing",
            "Buyer enquiries and viewing arrangements",
            "Assistance with completing the sale"
          ]
        }
      ],
      examplesHeading: { title: "Our example properties", note: "3 selected properties" },
      examples: [
        { location: "Rovinj, Istria", region: "Istria", title: "Sea-view apartment", rooms: "2 bedrooms",
          description: "Renovated 68 m² apartment close to the town centre, with a spacious terrace and panoramic views of the bay." },
        { location: "Zadar, Northern Dalmatia", region: "Northern Dalmatia", title: "New-build villa", rooms: "4 bedrooms",
          description: "Modern, energy-efficient villa with a pool and a terrace overlooking the Kornati Islands, ready to move in." },
        { location: "Split, Central Dalmatia", region: "Central Dalmatia", title: "Stone house in the city centre", rooms: "3 floors",
          description: "Historic old-town stone house, partly renovated, an excellent investment for short-term rentals." }
      ],
      about: {
        title: "Over 10 years of brokerage experience on the Croatian coast",
        intro: "With local legal and market expertise and a partner network in Croatia, we guide our clients from selection to registration of ownership.",
        stats: [
          { value: "10+", label: "years of experience" },
          { value: "5", label: "regions" }
        ],
      },
      contact: {
        title: "Contact",
        text: "Have a question, or want to sell your property in Croatia? Write or call us, or fill in the form.",
        phoneLabel: "Phone",
        emailLabel: "E-mail",
        bullets: [
          "Free, no-obligation valuation",
          "Targeted reach among buyers",
          "Full legal support"
        ],
        form: {
          name: "Name",
          phone: "Phone number",
          email: "Email address",
          serviceSelect: "Which service are you interested in?",
          servicePlaceholder: "Please select a service...",
          serviceOptions: [
            "Buying a property",
            "Selling a property",
            "Property management / Rentals",
            "Renovation & Maintenance",
            "Other inquiry"
          ]
        },
        formNote: "We process the submitted data solely for the purpose of contacting you.",
        submitLabel: "Send enquiry",
        successMessage: "Thank you! Our colleague will contact you shortly."
      },
      footer: { text: "Adria Hause — Croatian real estate brokerage" }
    },

    de: {
      pageTitle: "Adria Hause – Immobilienvermittlung an der Adria",
      nav: ["Über uns", "Kontakt"],
      hero: {
        title: "Immobilienvermittlung in Kroatien",
        ctaServices: ["Immobilienverkauf", "Immobilienverwaltung", "Renovierung & Instandhaltung", "Ich möchte meine Immobilie verkaufen"]
      },
      servicesHeading: { title: "Unsere Dienstleistungen", note: "4 Hauptleistungsbereiche" },
      services: [
        { title: "Immobilienverkauf",
          description: "Wir begleiten Sie von der Inserierung bis zum Kaufvertrag mit vollständiger rechtlicher und marktbezogener Unterstützung.",
          details: "Wir unterstützen Sie umfassend beim Verkauf Ihrer Immobilie in Kroatien – von der Marktwertermittlung über die Käufersuche bis zum erfolgreichen Abschluss des Verkaufs.",
          items: [
            "Individuelle Immobiliensuche",
            "Beantragung der kroatischen OIB-Steueridentifikationsnummer",
            "Organisation von Immobilienbesichtigungen",
            "Ummeldung der Versorgungsverträge"
          ]
        },
        { title: "Immobilienverwaltung",
          description: "Vermietung und langfristige Verwaltung, damit Ihre Immobilie den maximalen Ertrag erzielt.",
          details: "Die in Senj ansässige Agentur sucht Immobilien zur Erweiterung ihres Portfolios. Mit mehr als 10 Jahren Erfahrung in Kroatien bietet sie individuelle Lösungen und Unterstützung bei der Vermietung Ihrer Immobilie.",
          items: [
            "Marketing: Wir vermarkten Ihre Immobilie europaweit, kümmern uns um Inserate und die Kommunikation mit Gästen.",
            "Gästebetreuung: Wir bieten einen Komplettservice von der Buchung bis zum Check-out.",
            "Immobilienverwaltung: Wir besuchen die Immobilie das ganze Jahr über zweimal im Monat. Die Besuche werden mit Fotos dokumentiert, und bei eventuellen Mängeln informieren wir Sie und veranlassen auf Wunsch die Reparatur durch einen Fachmann."
          ] },
        { title: "Renovierung & Instandhaltung",
          description: "Wenn Sie Ihre Immobilie renovieren möchten, helfen wir Ihnen gerne! Zwischen Rijeka und Zadar, einschließlich der nahegelegenen Inseln (Pag, Krk, Rab). Ein Unternehmen mit 15 Jahren Erfahrung übernimmt:",
          items: [
            "Innen- und Außenanstrich",
            "Fassadendämmung",
            "Dachstuhlreparatur",
            "Austausch von Fenstern und Türen, mit vollständiger Wiederherstellung",
            "Installation von Alarmanlagen und Kameras",
            "Installation, Wartung und Reinigung von Klimaanlagen"
          ] },
        { title: "Immobilie verkaufen",
          description: "Wir unterstützen Sie beim schnellen und erfolgreichen Verkauf Ihrer Immobilie in Kroatien.",
          details: "Wir unterstützen Sie beim Verkauf Ihrer Immobilie in Kroatien – von der Ermittlung des Marktwerts und der Vermarktung bis zur Käufersuche und zum Abschluss des Verkaufs.",
          items: [
            "Ermittlung des Immobilienmarktwerts",
            "Immobilieninserat und Vermarktung",
            "Bearbeitung von Kaufanfragen und Organisation von Besichtigungen",
            "Unterstützung beim Abschluss des Verkaufs"
          ]
        }
      ],
      examplesHeading: { title: "Beispielimmobilien", note: "3 ausgewählte Objekte" },
      examples: [
        { location: "Rovinj, Istrien", region: "Istrien", title: "Wohnung mit Meerblick", rooms: "2 Schlafzimmer",
          description: "Renovierte 68 m² Wohnung nahe dem Stadtzentrum mit großzügiger Terrasse und Panoramablick auf die Bucht." },
        { location: "Zadar, Norddalmatien", region: "Norddalmatien", title: "Neubau-Villa", rooms: "4 Schlafzimmer",
          description: "Moderne, energieeffiziente Villa mit Pool und Terrasse mit Blick auf die Kornaten-Inseln, sofort bezugsfertig." },
        { location: "Split, Mitteldalmatien", region: "Mitteldalmatien", title: "Steinhaus im Stadtzentrum", rooms: "3 Etagen",
          description: "Historisches Steinhaus in der Altstadt, teilweise renoviert, hervorragende Kapitalanlage für die Ferienvermietung." }
      ],
      about: {
        title: "Seit über 10 Jahren vermitteln wir Immobilien an der kroatischen Küste",
        intro: "Durch unsere fundierte Rechts- und Marktkenntnis vor Ort sowie unser Partnernetzwerk begleiten wir Sie vom Erstkontakt bis zum Grundbucheintrag.",
        stats: [
          { value: "10+", label: "Jahre Erfahrung" },
          { value: "5", label: "Regionen" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Haben Sie Fragen oder möchten Sie Ihre Immobilie in Kroatien verkaufen? Schreiben Sie uns, rufen Sie an oder füllen Sie das Formular aus.",
        phoneLabel: "Telefon",
        emailLabel: "E-Mail",
        bullets: [
          "Kostenlose und unverbindliche Bewertung",
          "Gezielte Käuferansprache",
          "Komplette rechtliche Abwicklung"
        ],
        form: {
          name: "Name",
          phone: "Telefonnummer",
          email: "E-Mail-Adresse",
          serviceSelect: "An welchem Service sind Sie interessiert?",
          servicePlaceholder: "Bitte wählen Sie einen Service...",
          serviceOptions: [
            "Immobilie kaufen",
            "Immobilie verkaufen",
            "Immobilienverwaltung / Vermietung",
            "Renovierung & Instandhaltung",
            "Sonstige Anfrage"
          ]
        },
        formNote: "Die übermittelten Daten werden ausschließlich zur Kontaktaufnahme verwendet.",
        submitLabel: "Anfrage senden",
        successMessage: "Vielen Dank! Unser Mitarbeiter wird sich in Kürze bei Ihnen melden."
      },
      footer: { text: "Adria Hause — Immobilienvermittlung in Kroatien" }
    },

    hr: {
      pageTitle: "Adria Hause – Agencija za nekretnine na Jadranu",
      nav: ["O nama", "Kontakt"],
      hero: {
        title: "Posredovanje u prometu nekretninama u Hrvatskoj",
        ctaServices: ["Prodaja nekretnina", "Upravljanje nekretninama", "Renovacija i održavanje", "Želim prodati svoju nekretninu"]
      },
      servicesHeading: { title: "Naše usluge", note: "4 glavna područja rada" },
      services: [
        { title: "Prodaja nekretnina",
          description: "Vodimo vas kroz cijeli proces, od oglašavanja do potpisivanja kupoprodajnog ugovora, uz punu pravnu podršku.",
          details: "Pružamo cjelovitu podršku pri prodaji vaše nekretnine u Hrvatskoj, od procjene tržišne vrijednosti i pronalaska kupca do završetka prodaje.",
          items: [
            "Personalizirana potraga za nekretninom",
            "Ishođenje OIB-a",
            "Organizacija razgledavanja nekretnina",
            "Prijenos režija"
          ]
        },
        { title: "Upravljanje nekretninama",
          description: "Organizacija iznajmljivanja i dugoročnog održavanja kako bi vaša nekretnina ostvarila najbolji povrat.",
          details: "Agencija sa sjedištem u Senju traži nekretnine radi proširenja svog portfelja. S više od 10 godina iskustva u Hrvatskoj nudi individualna rješenja i podršku pri iznajmljivanju vaše nekretnine.",
          items: [
            "Marketing: Promoviramo vašu nekretninu diljem Europe, brinemo se o oglasima i komunikaciji s gostima.",
            "Briga o gostima: Pružamo potpunu uslugu od rezervacije do odjave.",
            "Upravljanje nekretninom: Tijekom cijele godine posjećujemo nekretninu dvaput mjesečno. Svaki posjet potvrđujemo fotografijama, a u slučaju bilo kakvih kvarova obavještavamo vas i prema želji ih popravljamo uz angažman stručnjaka."
          ] },
        { title: "Renovacija i održavanje",
          description: "Ako želite renovirati svoju nekretninu, mi vam pomažemo! Između Rijeke i Zadra, uključujući obližnje otoke (Pag, Krk, Rab). Tvrtka s 15 godina iskustva preuzima:",
          items: [
            "Unutarnje i vanjsko bojenje",
            "Toplinska izolacija fasada",
            "Popravak krovne konstrukcije",
            "Zamjena stolarije, uz potpunu sanaciju",
            "Ugradnja alarma i kamera",
            "Ugradnja, održavanje i čišćenje klima uređaja"
          ] },
        { title: "Prodaja vaše nekretnine",
          description: "Pomažemo vam u brzoj i uspješnoj prodaji nekretnine u Hrvatskoj po najboljoj cijeni.",
          details: "Pomažemo vam u prodaji vaše nekretnine u Hrvatskoj, od procjene tržišne vrijednosti i oglašavanja do pronalaska kupaca i završetka prodaje.",
          items: [
            "Procjena tržišne vrijednosti nekretnine",
            "Oglas i promocija nekretnine",
            "Upiti kupaca i organizacija razgledavanja",
            "Pomoć pri realizaciji kupoprodaje"
          ]
        }
      ],
      examplesHeading: { title: "Primjeri nekretnina", note: "3 odabrane nekretnine" },
      examples: [
        { location: "Rovinj, Istra", region: "Istra", title: "Stan s pogledom na more", rooms: "2 spavaće sobe",
          description: "Obnovljen stan od 68 m² u blizini centra grada, s prostranom terasom i panoramskim pogledom na zaljev." },
        { location: "Zadar, Sjeverna Dalmacija", region: "Sjeverna Dalmacija", title: "Novogradnja vila", rooms: "4 spavaće sobe",
          description: "Moderna, energetski učinkovita vila s bazenom i terasom s pogledom na Kornate, odmah useljiva." },
        { location: "Split, Srednja Dalmacija", region: "Srednja Dalmacija", title: "Kamena kuća u centru", rooms: "3 etaže",
          description: "Povijesna kamena kuća u staroj jezgri grada, djelomično renovirana, izvrsna prilika za turistički najam." }
      ],
      about: {
        title: "Više od 10 godina iskustva u posredovanju na hrvatskoj obali",
        intro: "Zahvaljujući poznavanju lokalnog prava i tržišta te mreži partnera diljem Hrvatske, pratimo klijente od odabira do uknjižbe vlasništva.",
        stats: [
          { value: "10+", label: "godina iskustva" },
          { value: "5", label: "regija" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Imate pitanja ili želite prodati svoju nekretninu u Hrvatskoj? Napišite nam poruku, nazovite nas ili ispunite obrazac.",
        phoneLabel: "Telefon",
        emailLabel: "E-mail",
        bullets: [
          "Besplatna i neobvezujuća procjena",
          "Ciljani pristup kupcima",
          "Kompletna pravna usluga"
        ],
        form: {
          name: "Ime i prezime",
          phone: "Broj telefona",
          email: "E-mail adresa",
          serviceSelect: "Za koju uslugu ste zainteresirani?",
          servicePlaceholder: "Odaberite uslugu...",
          serviceOptions: [
            "Kupnja nekretnine",
            "Prodaja nekretnine",
            "Upravljanje / Najam nekretnine",
            "Renovacija i održavanje",
            "Ostali upiti"
          ]
        },
        formNote: "Poslane podatke koristimo isključivo u svrhu stupanja u kontakt s vama.",
        submitLabel: "Pošalji upit",
        successMessage: "Hvala vam! Naš djelatnik će vam se ubrzo javiti."
      },
      footer: { text: "Adria Hause — agencija za nekretnine u Hrvatskoj" }
    },

    cs: {
      pageTitle: "Adria Hause – nemovitosti u Jadranu",
      nav: ["O nás", "Kontakt"],
      hero: {
        title: "Zprostředkování nemovitostí v Chorvatsku",
        ctaServices: ["Prodej nemovitostí", "Správa nemovitostí", "Renovace a údržba", "Chci prodat svou nemovitost"]
      },
      servicesHeading: { title: "Naše aktuální služby", note: "4 hlavní oblasti služeb" },
      services: [
        { title: "Prodej nemovitostí",
          description: "Provedeme vás od inzerce až po podpis smlouvy, s kompletní právní a tržní podporou.",
          details: "Poskytujeme komplexní podporu při prodeji vaší nemovitosti v Chorvatsku, od stanovení tržní ceny přes hledání vhodného kupce až po dokončení prodeje.",
          items: [
            "Vyhledávání nemovitostí na míru",
            "Vyřízení chorvatského daňového identifikačního čísla OIB",
            "Organizace prohlídek nemovitostí",
            "Přepis odběrných míst energií a služeb"
          ]
        },
        { title: "Správa nemovitostí",
          description: "Zajistíme pronájem a dlouhodobou správu, aby se vaše nemovitost co nejlépe zhodnotila.",
          details: "Agentura se sídlem v Senji hledá nemovitosti pro rozšíření svého portfolia. S více než 10letými zkušenostmi v Chorvatsku nabízí individuální řešení a podporu při pronájmu vaší nemovitosti.",
          items: [
            "Marketing: Propagujeme vaši nemovitost po celé Evropě, staráme se o inzeráty a komunikaci s hosty.",
            "Péče o hosty: Poskytujeme kompletní služby od rezervace až po odhlášení.",
            "Správa nemovitosti: Po celý rok navštěvujeme nemovitost dvakrát měsíčně. Každou návštěvu dokládáme fotografiemi, a pokud zjistíme jakoukoliv závadu, nahlásíme ji a na přání zajistíme opravu odborníkem."
          ] },
        { title: "Renovace a údržba",
          description: "Pokud chcete zrenovovat svou nemovitost, rádi vám pomůžeme! Mezi Rijekou a Zadarem, včetně blízkých ostrovů (Pag, Krk, Rab). Firma s 15letými zkušenostmi provádí:",
          items: [
            "Vnitřní a vnější malování",
            "Zateplení fasády",
            "Opravy střešní konstrukce",
            "Výměna oken a dveří, včetně kompletní opravy okolí",
            "Instalace alarmů a kamer",
            "Instalace, údržba a čištění klimatizací"
          ] },
        { title: "Chci prodat nemovitost",
          description: "Pomůžeme vám s rychlým a výhodným prodejem vaší nemovitosti v Chorvatsku.",
          details: "Pomůžeme vám s prodejem nemovitosti v Chorvatsku – od stanovení tržní hodnoty a propagace až po hledání kupců a dokončení prodeje.",
          items: [
            "Stanovení tržní hodnoty nemovitosti",
            "Inzerce a propagace nemovitosti",
            "Komunikace se zájemci a organizace prohlídek",
            "Pomoc s dokončením prodeje"
          ]
        }
      ],
      examplesHeading: { title: "Příklady nemovitostí", note: "3 vybrané nemovitosti" },
      examples: [
        { location: "Rovinj, Istrie", region: "Istrie", title: "Byt s výhledem na moře", rooms: "2 ložnice",
          description: "Zrekonstruovaný byt o velikosti 68 m² poblíž centra, s prostornou terasou a panoramatickým výhledem na záliv." },
        { location: "Zadar, Severní Dalmácie", region: "Severní Dalmácie", title: "Novostavba vily", rooms: "4 ložnice",
          description: "Moderní energeticky úsporná vila s bazénem a terasou s výhledem na Kornatské ostrovy, ihned k nastěhování." },
        { location: "Split, Střední Dalmácie", region: "Střední Dalmácie", title: "Kamenný dům v centru", rooms: "3 podlaží",
          description: "Historický kamenný dům ve starém městě, částečně zrekonstruovaný, skvělá investiční příležitost pro krátkodobý pronájem." }
      ],
      about: {
        title: "Více než 10 let zprostředkováváme nemovitosti na chorvatském pobřeží",
        intro: "Díky místním právním a tržním znalostem a partnerské síti v Chorvatsku provázíme klienty od výběru až po zápis vlastnického práva.",
        stats: [
          { value: "10+", label: "let zkušeností" },
          { value: "5", label: "regionů" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, nebo byste chtěli prodat svou nemovitost v Chorvatsku? Napište nám, zavolejte, nebo vyplňte formulář.",
        phoneLabel: "Telefon",
        emailLabel: "E-mail",
        bullets: [
          "Bezplatné a nezávazné ocenění",
          "Cílené oslovení kupujících",
          "Kompletní právní servis"
        ],
        form: {
          name: "Jméno",
          phone: "Telefonní číslo",
          email: "E-mailová adresa",
          serviceSelect: "O jakou službu máte zájem?",
          servicePlaceholder: "Vyberte službu...",
          serviceOptions: [
            "Koupě nemovitosti",
            "Prodej nemovitosti",
            "Správa / Pronájem nemovitosti",
            "Renovace a údržba",
            "Jiný dotaz"
          ]
        },
        formNote: "Odeslané údaje zpracováváme výhradně za účelem navázání kontaktu.",
        submitLabel: "Odeslat poptávku",
        successMessage: "Děkujeme! Náš kolega vás brzy kontaktuje."
      },
      footer: { text: "Adria Hause — zprostředkování nemovitostí v Chorvatsku" }
    },

    sk: {
      pageTitle: "Adria Hause – nehnuteľnosti pri Jadrane",
      nav: ["O nás", "Kontakt"],
      hero: {
        title: "Sprostredkovanie nehnuteľností v Chorvátsku",
        ctaServices: ["Predaj nehnuteľností", "Správa nehnuteľností", "Renovácia a údržba", "Chcem predať svoju nehnuteľnosť"]
      },
      servicesHeading: { title: "Naše aktuálne služby", note: "4 hlavné oblasti služieb" },
      services: [
        { title: "Predaj nehnuteľností",
          description: "Sprevádzame vás od inzercie až po podpis zmluvy, s kompletnou právnou a trhovou podporou.",
          details: "Poskytujeme komplexnú podporu pri predaji vašej nehnuteľnosti v Chorvátsku, od stanovenia trhovej ceny cez hľadanie vhodného kupujúceho až po dokončenie predaja.",
          items: [
            "Vyhľadávanie nehnuteľností na mieru",
            "Vybavenie chorvátskeho daňového identifikačného čísla OIB",
            "Organizácia obhliadok nehnuteľností",
            "Prepis odberateľov energií a služieb"
          ]
        },
        { title: "Správa nehnuteľností",
          description: "Zabezpečíme prenájom a dlhodobú správu, aby sa vaša nehnuteľnosť čo najlepšie zhodnotila.",
          details: "Agentúra so sídlom v Senji hľadá nehnuteľnosti na rozšírenie svojho portfólia. S viac ako 10-ročnými skúsenosťami v Chorvátsku ponúka individuálne riešenia a podporu pri prenájme vašej nehnuteľnosti.",
          items: [
            "Marketing: Propagujeme vašu nehnuteľnosť v celej Európe, staráme sa o inzeráty a komunikáciu s hosťami.",
            "Starostlivosť o hostí: Poskytujeme kompletné služby od rezervácie až po odhlásenie.",
            "Správa nehnuteľnosti: Počas celého roka navštevujeme nehnuteľnosť dvakrát mesačne. Každú návštevu doložíme fotografiami, a ak zistíme akúkoľvek poruchu, nahlásime ju a na želanie zabezpečíme opravu odborníkom."
          ] },
        { title: "Renovácia a údržba",
          description: "Ak chcete zrenovovať svoju nehnuteľnosť, radi vám pomôžeme! Medzi Rijekou a Zadarom, vrátane blízkych ostrovov (Pag, Krk, Rab). Firma s 15-ročnými skúsenosťami vykonáva:",
          items: [
            "Vnútorné a vonkajšie maľovanie",
            "Zateplenie fasády",
            "Oprava strešnej konštrukcie",
            "Výmena okien a dverí, vrátane kompletnej opravy okolia",
            "Inštalácia alarmov a kamier",
            "Inštalácia, údržba a čistenie klimatizácií"
          ] },
        { title: "Chcem predať nehnuteľnosť",
          description: "Pomôžeme vám s rýchlym a výhodným predajom vašej nehnuteľnosti v Chorvátsku.",
          details: "Pomôžeme vám s predajom nehnuteľnosti v Chorvátsku – od stanovenia trhovej hodnoty a propagácie až po hľadanie kupujúcich a dokončenie predaja.",
          items: [
            "Stanovenie trhovej hodnoty nehnuteľnosti",
            "Inzerovanie a propagácia nehnuteľnosti",
            "Komunikácia so záujemcami a organizácia obhliadok",
            "Pomoc s dokončením predaja"
          ]
        }
      ],
      examplesHeading: { title: "Príklady nehnuteľností", note: "3 vybrané nehnuteľnosti" },
      examples: [
        { location: "Rovinj, Istria", region: "Istria", title: "Byt s výhľadom na more", rooms: "2 spálne",
          description: "Zrekonštruovaný byt s rozlohou 68 m² blízko centra, s priestrannou terasou a panoramatickým výhľadom na záliv." },
        { location: "Zadar, Severná Dalmácia", region: "Severná Dalmácia", title: "Novostavba vily", rooms: "4 spálne",
          description: "Moderná, energeticky úsporná vila s bazénom a terasou s výhľadom na Kornatské ostrovy, ihneď k nasťahovaniu." },
        { location: "Split, Stredná Dalmácia", region: "Stredná Dalmácia", title: "Kamenný dom v centre", rooms: "3 podlažia",
          description: "Historický kamenný dom v starom meste, čiastočne zrekonštruovaný, skvelá investičná príležitosť na krátkodobý prenájom." }
      ],
      about: {
        title: "Viac ako 10 rokov sprostredkujeme nehnuteľnosti na chorvátskom pobřeží",
        intro: "Vďaka miestnym právnym a trhovým znalostiam a partnerskej sieti v Chorvátsku sprevádzame klientov od výberu až po zápis vlastníckeho práva.",
        stats: [
          { value: "10+", label: "rokov skúseností" },
          { value: "5", label: "regiónov" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, alebo by ste chceli predať svoju nehnuteľnosť v Chorvátsku? Napíšte nám, zavolajte, alebo vyplňte formulár.",
        phoneLabel: "Telefón",
        emailLabel: "E-mail",
        bullets: [
          "Bezplatné a nezáväzné ohodnotenie",
          "Cielené oslovenie kupujúcich",
          "Kompletný právny servis"
        ],
        form: {
          name: "Meno",
          phone: "Telefónne číslo",
          email: "E-mailová adresa",
          serviceSelect: "O akú službu máte záujem?",
          servicePlaceholder: "Vyberte službu...",
          serviceOptions: [
            "Kúpa nehnuteľnosti",
            "Predaj nehnuteľnosti",
            "Správa / Prenájom nehnuteľnosti",
            "Renovácia a údržba",
            "Iný dopyt"
          ]
        },
        formNote: "Odoslané údaje spracovávame výhradne za účelom nadviazania kontaktu.",
        submitLabel: "Odoslať dopyt",
        successMessage: "Ďakujeme! Náš kolega vás bude čoskoro kontaktovať."
      },
      footer: { text: "Adria Hause — sprostredkovanie nehnuteľností v Chorvátsku" }
    }

  }

};