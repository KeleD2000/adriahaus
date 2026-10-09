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
      { emoji: "🛠️", id: "ingatlan-felujitas" },
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
          description: "Végigkísérjük Önt a hirdetéstől az adásvételi szerződésig, teljes körű jogi és piaci támogatással." },
        { title: "Ingatlanok hasznosítása",
          description: "Bérbeadás és hosszú távú hasznosítás megszervezése, hogy ingatlana a lehető legjobban megtérüljön." },
        { title: "Ingatlanok felújítása / karbantartás",
          description: "Megbízható helyi partnereinkkel gondoskodunk ingatlana felújításáról és folyamatos karbantartásáról." },
        { title: "Eladnám az ingatlanomat",
          description: "Segítünk gyorsan és a legjobb piaci áron értékesíteni horvátországi ingatlanát megbízható vevőkörben." }
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
          description: "We guide you from listing to signing the contract, with full legal and market support." },
        { title: "Property management",
          description: "We arrange renting and long-term management so your property performs at its best." },
        { title: "Renovation & maintenance",
          description: "With trusted local partners we take care of renovating and maintaining your property." },
        { title: "Sell your property",
          description: "We help you sell your property in Croatia quickly and at the best market price to trusted buyers." }
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
          description: "Wir begleiten Sie von der Inserierung bis zum Kaufvertrag mit vollständiger rechtlicher und marktbezogener Unterstützung." },
        { title: "Immobilienverwaltung",
          description: "Vermietung und langfristige Verwaltung, damit Ihre Immobilie den maximalen Ertrag erzielt." },
        { title: "Renovierung & Instandhaltung",
          description: "Mit zuverlässigen lokalen Partnern kümmern wir uns um die Renovierung und kontinuierliche Pflege Ihrer Immobilie." },
        { title: "Immobilie verkaufen",
          description: "Wir unterstützen Sie beim schnellen und erfolgreichen Verkauf Ihrer Immobilie in Kroatien." }
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
        successMessage: "Vielen Dank! Unser Mitarbeiter wird sich Kürze bei Ihnen melden."
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
          description: "Vodimo vas kroz cijeli proces, od oglašavanja do potpisivanja kupoprodajnog ugovora, uz punu pravnu podršku." },
        { title: "Upravljanje nekretninama",
          description: "Organizacija iznajmljivanja i dugoročnog održavanja kako bi vaša nekretnina ostvarila najbolji povrat." },
        { title: "Renovacija i održavanje",
          description: "S pouzdanim lokalnim partnerima brinemo o renovaciji i redovitom održavanju vaše nekretnine." },
        { title: "Prodaja vaše nekretnine",
          description: "Pomažemo vam u brzoj i uspješnoj prodaji nekretnine u Hrvatskoj po najboljoj cijeni." }
      ],
      examplesHeading: { title: "Primjeri nekretnina", note: "3 odabrane nekretnine" },
      examples: [
        { location: "Rovinj, Istra", region: "Istra", title: "Stan s pogledom na more", rooms: "2 spavaće sobe",
          description: "Obnovljen stan od 68 m² u blizini centra grada, s prostranom terasom i panoramskim pogledom na zaljev." },
        { location: "Zadar, Sjeverna Dalmacija", region: "Sjeverna Dalmacija", title: "Novogradnja vila", rooms: "4 spavaće sobe",
          description: "Moderna, energetski učinkovita vila s bazenom i terasom s pogledom na Kornate, odmah useljiva." },
        { location: "Split, Srednja Dalmacija", region: "Srednja Dalmacija", title: "Kamena kuća u centru", rooms: "3 etaže",
          description: "Povijesna kamena kuća u staroj jezgre grada, djelomično renovirana, izvrsna prilika za turistički najam." }
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
          description: "Provedeme vás od inzerce až po podpis smlouvy, s kompletní právní a tržní podporou." },
        { title: "Správa nemovitostí",
          description: "Zajistíme pronájem a dlouhodobou správu, aby se vaše nemovitost co nejlépe zhodnotila." },
        { title: "Renovace a údržba",
          description: "S prověřenými místními partnery se postaráme o renovaci a průběžnou údržbu vaší nemovitosti." },
        { title: "Chci prodat nemovitost",
          description: "Pomůžeme vám s rychlým a výhodným prodejem vaší nemovitosti v Chorvatsku." }
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
          description: "Sprevádzame vás od inzercie až po podpis zmluvy, s kompletnou právnou a trhovou podporou." },
        { title: "Správa nehnuteľností",
          description: "Zabezpečíme prenájom a dlhodobú správu, aby sa vaša nehnuteľnosť čo najlepšie zhodnotila." },
        { title: "Renovácia a údržba",
          description: "S overenými miestnymi partnermi sa staráme o renováciu a priebežnú údržbu vašej nehnuteľnosti." },
        { title: "Chcem predať nehnuteľnosť",
          description: "Pomôžeme vám s rýchlym a výhodným predajom vašej nehnuteľnosti v Chorvátsku." }
      ],
      examplesHeading: { title: "Príklady nehnuteľností", note: "3 vybrané nehnuteľnosti" },
      examples: [
        { location: "Rovinj, Istria", region: "Istria", title: "Byt s výhľadom na more", rooms: "2 spálne",
          description: "Zrekonštruovaný byt s rozlohou 68 m² blízko centra, s priestrannou terasou a panoramatickým výhľadom na záliv." },
        { location: "Zadar, Severná Dalmácia", region: "Severná Dalmácia", title: "Novostavba vily", rooms: "4 spálne",
          description: "Moderná energeticky úsporná vila s bazénom a terasou s výhľadom na Kornatské ostrovy, ihneď na nasťahovanie." },
        { location: "Split, Stredná Dalmácia", region: "Stredná Dalmácia", title: "Kamenný dom v centre", rooms: "3 podlažia",
          description: "Historický kamenný dom v starom meste, čiastočne zrekonštruovaný, skvelá investičná príležitosť na krátkodobý prenájom." }
      ],
      about: {
        title: "Viac ako 10 rokov sprostredkúvame nehnuteľnosti na chorvátskom pobreží",
        intro: "Vďaka miestnym právnym a trhovým znalostiam a partnerskej sieti v Chorvátsku sprevádzame klientov od výberu až po zápis vlastníckeho práva.",
        stats: [
          { value: "10+", label: "rokov skúseností" },
          { value: "5", label: "regiónov" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, alebo by ste chceli predať svoju nehnuteľnosť v Chorvátsku? Napíšte nám, zavolejte, alebo vyplňte formulár.",
        phoneLabel: "Telefón",
        emailLabel: "E-mail",
        bullets: [
          "Bezplatné a nezáväzné ocenenie",
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
            "Renovacija a údržba",
            "Iná požiadavka"
          ]
        },
        formNote: "Odoslané údaje spracúvame výlučne na účely nadviazania kontaktu.",
        submitLabel: "Odoslať dopyt",
        successMessage: "Ďakujeme! Náš kolega vás čoskoro kontaktuje."
      },
      footer: { text: "Adria Hause — sprostredkovanie nehnuteľností v Chorvátsku" }
    }

  }
};