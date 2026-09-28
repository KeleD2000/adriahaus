// Az oldal tartalma itt szerkeszthető.
//
// - "shared":       nyelvtől független adatok (telefon, e-mail, árak, méretek, színek)
// - "translations": nyelvenkénti szövegek (hu, en, cs, sk)
//
// Új ingatlan hozzáadása: tegyél egy új elemet a shared.properties listába,
// és MINDEN nyelv "properties" listájába is ugyanarra a sorrendi helyre.
// Új nyelv: másold le az egyik nyelvi blokkot, írd át, és vedd fel a "languages" listába.

window.SITE_CONTENT = {

  defaultLanguage: "hu",

  languages: [
    { code: "hu", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#CD2A3E"/><rect y="5.33" width="24" height="5.34" fill="#fff"/><rect y="10.66" width="24" height="5.34" fill="#436F4D"/></svg>', label: "HU", name: "Magyar" },
    { code: "en", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#012169"/><path d="M0 0L24 16M24 0L0 16" stroke="#fff" stroke-width="3.2"/><path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.2"/><rect x="9" width="6" height="16" fill="#fff"/><rect y="5" width="24" height="6" fill="#fff"/><rect x="10.3" width="3.4" height="16" fill="#C8102E"/><rect y="6.3" width="24" height="3.4" fill="#C8102E"/></svg>', label: "EN", name: "English" },
    { code: "cs", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#D7141A"/><path d="M0 0L12 8L0 16Z" fill="#11457E"/></svg>', label: "CZ", name: "Čeština" },
    { code: "sk", flag: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#fff"/><rect y="5.33" width="24" height="5.34" fill="#0B4EA2"/><rect y="10.66" width="24" height="5.34" fill="#EE1C25"/><path d="M5 3.4h6.4v5.2c0 2.3-3.2 3.8-3.2 3.8S5 10.9 5 8.6z" fill="#EE1C25" stroke="#fff" stroke-width=".7"/><rect x="7.8" y="4.6" width=".8" height="4.6" fill="#fff"/><rect x="6.7" y="5.9" width="3" height=".8" fill="#fff"/><path d="M5.6 9.6q2.6-2 5.2 0q-2.6 1.4-5.2 0z" fill="#0B4EA2"/></svg>', label: "SK", name: "Slovenčina" }
  ],

  shared: {
    brand: { name: "Adria Haus", accent: "Tengerparti ingatlanok" },
    phone: "+36 1 234 5678",
    phoneHref: "tel:+3612345678",
    email: "info@tengerpartingatlan.example",
    navHrefs: ["#ingatlanok", "#rolunk", "#kapcsolat"],
    heroHrefs: ["#ingatlanok", "#kapcsolat"],
    properties: [
      { gradient: "linear-gradient(160deg,#2E6F7E,#8FCAD4)", size: "68 m²",  price: "185 000 €" },
      { gradient: "linear-gradient(160deg,#3B5245,#7FA98C)", size: "210 m²", price: "395 000 €" },
      { gradient: "linear-gradient(160deg,#1B4B5A,#C9954B)", size: "240 m²", price: "620 000 €" },
      { gradient: "linear-gradient(160deg,#5A3B2E,#C97B5A)", size: "140 m²", price: "340 000 €" },
      { gradient: "linear-gradient(160deg,#2E4A5A,#5A7B8C)", size: "310 m²", price: "780 000 €" },
      { gradient: "linear-gradient(160deg,#3E7C8C,#DCA95F)", size: "93 m²",  price: "62 000 €" }
    ]
  },

  translations: {

    hu: {
      pageTitle: "Adria Hause – Adriai ingatlanközvetítés",
      nav: ["Ingatlanok", "Rólunk", "Kapcsolat"],
      hero: {
        title: "Otthon, ahol a tenger kezdődik",
        text: "Horvátországi tengerparti ingatlanok közvetítése magyar vevőknek – Isztriától Dalmáciáig, teljes körű ügyintézéssel.",
        ctaPrimary: "Ingatlanok megtekintése",
        ctaSecondary: "Eladnám az ingatlanomat"
      },
      propertiesHeading: { title: "Aktuális kínálatunk", note: "6 kiválasztott ingatlan" },
      properties: [
        { location: "Rovinj, Isztria", region: "Isztria", title: "Tengerre néző lakás", rooms: "2 hálószoba",
          description: "Felújított, 68 m²-es lakás a városközponthoz közel, tágas terasszal és panorámás kilátással az öbölre." },
        { location: "Crikvenica, Kvarner", region: "Kvarner", title: "Családi ház kerttel", rooms: "5 szoba",
          description: "Kétszintes családi ház 320 m²-es telken, a tengerparttól 400 méterre, kialakítható apartmanokkal." },
        { location: "Zadar, Észak-Dalmácia", region: "Észak-Dalmácia", title: "Új építésű villa", rooms: "4 hálószoba",
          description: "Modern, energiatakarékos villa medencével, a Kornati-szigetekre néző terasszal, azonnal beköltözhető." },
        { location: "Split, Közép-Dalmácia", region: "Közép-Dalmácia", title: "Belvárosi kőház", rooms: "3 szint",
          description: "Történelmi óvárosi kőház, részlegesen felújítva, kiváló befektetési lehetőség rövid távú bérbeadásra." },
        { location: "Makarska Riviéra", region: "Makarska Riviéra", title: "Panorámás luxusvilla", rooms: "6 hálószoba",
          description: "Négyszintes villa a Biokovo-hegység lábánál, teljes tengerpanorámával, privát medencével és garázzsal." },
        { location: "Brač szigete", region: "Brač", title: "Nyaralóház a tengerhez közel", rooms: "2 hálószoba",
          description: "Kis, jól karbantartott nyaralóház 520 m²-es telken, 300 méterre a víztől, azonnal használható állapotban." }
      ],
      about: {
        title: "12 éve közvetítünk a horvát tengerparton",
        intro: "Helyi jogi és piaci ismeretünk, valamint horvátországi partnerhálózatunk révén végigkísérjük ügyfeleinket a kiválasztástól a tulajdonjog bejegyzéséig.",
        stats: [
          { value: "12", label: "év tapasztalat" },
          { value: "300+", label: "lezárt ügylet" },
          { value: "5", label: "régió" }
        ],
        paragraphs: [
          "Munkánk során saját ügyvédi és fordítói háttérrel dolgozunk, így az adásvétel minden lépése – a foglalótól a birtokbaadásig – átlátható és biztonságos.",
          "Minden ingatlant személyesen megtekintünk és ellenőrzünk, mielőtt felvennénk a kínálatunkba."
        ]
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
          location: "Ingatlan helye (település, régió)",
          details: "Az ingatlan rövid leírása",
          detailsPlaceholder: "Alapterület, szobák száma, távolság a tengertől, irányár..."
        },
        formNote: "Az elküldött adatokat kizárólag a kapcsolatfelvétel céljából kezeljük.",
        submitLabel: "Ajánlat elküldése",
        successMessage: "Köszönjük! Munkatársunk hamarosan felveszi Önnel a kapcsolatot."
      },
      footer: { text: "Adria Hause — horvátországi ingatlanközvetítés" }
    },

    en: {
      pageTitle: "Adria Hause – Adriatic real estate brokerage",
      nav: ["Properties", "About us", "Contact"],
      hero: {
        title: "A home where the sea begins",
        text: "Brokerage of Croatian seaside properties for Hungarian buyers – from Istria to Dalmatia, with full-service support.",
        ctaPrimary: "View properties",
        ctaSecondary: "I want to sell my property"
      },
      propertiesHeading: { title: "Our current listings", note: "6 selected properties" },
      properties: [
        { location: "Rovinj, Istria", region: "Istria", title: "Sea-view apartment", rooms: "2 bedrooms",
          description: "Renovated 68 m² apartment close to the town centre, with a spacious terrace and panoramic views of the bay." },
        { location: "Crikvenica, Kvarner", region: "Kvarner", title: "Family house with garden", rooms: "5 rooms",
          description: "Two-storey family house on a 320 m² plot, 400 metres from the sea, with the option to convert into apartments." },
        { location: "Zadar, Northern Dalmatia", region: "Northern Dalmatia", title: "New-build villa", rooms: "4 bedrooms",
          description: "Modern, energy-efficient villa with a pool and a terrace overlooking the Kornati Islands, ready to move in." },
        { location: "Split, Central Dalmatia", region: "Central Dalmatia", title: "Stone house in the city centre", rooms: "3 floors",
          description: "Historic old-town stone house, partly renovated, an excellent investment for short-term rentals." },
        { location: "Makarska Riviera", region: "Makarska Riviera", title: "Panoramic luxury villa", rooms: "6 bedrooms",
          description: "Four-storey villa at the foot of the Biokovo mountains with a full sea panorama, private pool and garage." },
        { location: "Brač island", region: "Brač", title: "Holiday house near the sea", rooms: "2 bedrooms",
          description: "Small, well-kept holiday house on a 520 m² plot, 300 metres from the water, in ready-to-use condition." }
      ],
      about: {
        title: "12 years of brokerage on the Croatian coast",
        intro: "With local legal and market expertise and a partner network in Croatia, we guide our clients from selection to registration of ownership.",
        stats: [
          { value: "12", label: "years of experience" },
          { value: "300+", label: "closed deals" },
          { value: "5", label: "regions" }
        ],
        paragraphs: [
          "We work with our own legal and translation team, so every step of the purchase – from deposit to handover – is transparent and secure.",
          "We personally visit and inspect every property before adding it to our portfolio."
        ]
      },
      contact: {
        title: "Contact",
        text: "Have a question, or want to sell your property in Croatia? Write or call us, or fill in the form.",
        phoneLabel: "Phone",
        emailLabel: "E-mail",
        bullets: [
          "Free, no-obligation valuation",
          "Targeted reach among Hungarian buyers",
          "Full legal support"
        ],
        form: {
          name: "Name",
          phone: "Phone number",
          email: "Email address",
          location: "Property location (town, region)",
          details: "Short description of the property",
          detailsPlaceholder: "Floor area, number of rooms, distance to the sea, asking price..."
        },
        formNote: "We process the submitted data solely for the purpose of contacting you.",
        submitLabel: "Send enquiry",
        successMessage: "Thank you! Our colleague will contact you shortly."
      },
      footer: { text: "Adria Hause — Croatian real estate brokerage" }
    },

    cs: {
      pageTitle: "Adria Hause – nemovitosti u Jadranu",
      nav: ["Nemovitosti", "O nás", "Kontakt"],
      hero: {
        title: "Domov tam, kde začíná moře",
        text: "Zprostředkování nemovitostí u chorvatského pobřeží pro maďarské kupující – od Istrie po Dalmácii, s kompletním vyřízením.",
        ctaPrimary: "Prohlédnout nemovitosti",
        ctaSecondary: "Chci prodat nemovitost"
      },
      propertiesHeading: { title: "Naše aktuální nabídka", note: "6 vybraných nemovitostí" },
      properties: [
        { location: "Rovinj, Istrie", region: "Istrie", title: "Byt s výhledem na moře", rooms: "2 ložnice",
          description: "Zrekonstruovaný byt o velikosti 68 m² poblíž centra, s prostornou terasou a panoramatickým výhledem na záliv." },
        { location: "Crikvenica, Kvarner", region: "Kvarner", title: "Rodinný dům se zahradou", rooms: "5 pokojů",
          description: "Dvoupodlažní rodinný dům na pozemku o rozloze 320 m², 400 metrů od moře, s možností vybudování apartmánů." },
        { location: "Zadar, Severní Dalmácie", region: "Severní Dalmácie", title: "Novostavba vily", rooms: "4 ložnice",
          description: "Moderní energeticky úsporná vila s bazénem a terasou s výhledem na Kornatské ostrovy, ihned k nastěhování." },
        { location: "Split, Střední Dalmácie", region: "Střední Dalmácie", title: "Kamenný dům v centru", rooms: "3 podlaží",
          description: "Historický kamenný dům ve starém městě, částečně zrekonstruovaný, skvělá investiční příležitost pro krátkodobý pronájem." },
        { location: "Makarská riviéra", region: "Makarská riviéra", title: "Luxusní vila s panoramatem", rooms: "6 ložnic",
          description: "Čtyřpodlažní vila u úpatí pohoří Biokovo s úplným panoramatem moře, soukromým bazénem a garáží." },
        { location: "Ostrov Brač", region: "Brač", title: "Rekreační dům u moře", rooms: "2 ložnice",
          description: "Malý, dobře udržovaný rekreační dům na pozemku o rozloze 520 m², 300 metrů od vody, ihned použitelný." }
      ],
      about: {
        title: "12 let zprostředkováváme nemovitosti na chorvatském pobřeží",
        intro: "Díky místním právním a tržním znalostem a partnerské síti v Chorvatsku provázíme klienty od výběru až po zápis vlastnického práva.",
        stats: [
          { value: "12", label: "let zkušeností" },
          { value: "300+", label: "uzavřených obchodů" },
          { value: "5", label: "regionů" }
        ],
        paragraphs: [
          "Při naší práci využíváme vlastní právní a překladatelské zázemí, takže každý krok koupě – od rezervační zálohy po předání – je přehledný a bezpečný.",
          "Každou nemovitost osobně prohlédneme a prověříme, než ji zařadíme do nabídky."
        ]
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, nebo byste chtěli prodat svou nemovitost v Chorvatsku? Napište nám, zavolejte, nebo vyplňte formulář.",
        phoneLabel: "Telefon",
        emailLabel: "E-mail",
        bullets: [
          "Bezplatné a nezávazné ocenění",
          "Cílené oslovení maďarských kupujících",
          "Kompletní právní servis"
        ],
        form: {
          name: "Jméno",
          phone: "Telefonní číslo",
          email: "E-mailová adresa",
          location: "Poloha nemovitosti (obec, region)",
          details: "Stručný popis nemovitosti",
          detailsPlaceholder: "Užitná plocha, počet pokojů, vzdálenost od moře, orientační cena..."
        },
        formNote: "Odeslané údaje zpracováváme výhradně za účelem navázání kontaktu.",
        submitLabel: "Odeslat poptávku",
        successMessage: "Děkujeme! Náš kolega vás brzy kontaktuje."
      },
      footer: { text: "Adria Hause — zprostředkování nemovitostí v Chorvatsku" }
    },

    sk: {
      pageTitle: "Adria Hause – nehnuteľnosti pri Jadrane",
      nav: ["Nehnuteľnosti", "O nás", "Kontakt"],
      hero: {
        title: "Domov, kde sa začína more",
        text: "Sprostredkovanie nehnuteľností pri chorvátskom pobreží pre maďarských kupujúcich – od Istrie po Dalmáciu, s kompletným vybavením.",
        ctaPrimary: "Pozrieť nehnuteľnosti",
        ctaSecondary: "Chcem predať nehnuteľnosť"
      },
      propertiesHeading: { title: "Naša aktuálna ponuka", note: "6 vybraných nehnuteľností" },
      properties: [
        { location: "Rovinj, Istria", region: "Istria", title: "Byt s výhľadom na more", rooms: "2 spálne",
          description: "Zrekonštruovaný byt s rozlohou 68 m² blízko centra, s priestrannou terasou a panoramatickým výhľadom na záliv." },
        { location: "Crikvenica, Kvarner", region: "Kvarner", title: "Rodinný dom so záhradou", rooms: "5 izieb",
          description: "Dvojpodlažný rodinný dom na pozemku s rozlohou 320 m², 400 metrov od mora, s možnosťou vybudovania apartmánov." },
        { location: "Zadar, Severná Dalmácia", region: "Severná Dalmácia", title: "Novostavba vily", rooms: "4 spálne",
          description: "Moderná energeticky úsporná vila s bazénom a terasou s výhľadom na Kornatské ostrovy, ihneď na nasťahovanie." },
        { location: "Split, Stredná Dalmácia", region: "Stredná Dalmácia", title: "Kamenný dom v centre", rooms: "3 podlažia",
          description: "Historický kamenný dom v starom meste, čiastočne zrekonštruovaný, skvelá investičná príležitosť na krátkodobý prenájom." },
        { location: "Makarská riviéra", region: "Makarská riviéra", title: "Luxusná vila s panorámou", rooms: "6 spální",
          description: "Štvorpodlažná vila na úpätí pohoria Biokovo s úplnou panorámou mora, súkromným bazénom a garážou." },
        { location: "Ostrov Brač", region: "Brač", title: "Rekreačný dom pri mori", rooms: "2 spálne",
          description: "Malý, dobre udržiavaný rekreačný dom na pozemku s rozlohou 520 m², 300 metrov od vody, ihneď použiteľný." }
      ],
      about: {
        title: "12 rokov sprostredkúvame nehnuteľnosti na chorvátskom pobreží",
        intro: "Vďaka miestnym právnym a trhovým znalostiam a partnerskej sieti v Chorvátsku sprevádzame klientov od výberu až po zápis vlastníckeho práva.",
        stats: [
          { value: "12", label: "rokov skúseností" },
          { value: "300+", label: "uzavretých obchodov" },
          { value: "5", label: "regiónov" }
        ],
        paragraphs: [
          "Pri našej práci využívame vlastné právne a prekladateľské zázemie, takže každý krok kúpy – od rezervačnej zálohy po odovzdanie – je prehľadný a bezpečný.",
          "Každú nehnuteľnosť osobne prezrieme a preveríme, skôr než ju zaradíme do ponuky."
        ]
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, alebo by ste chceli predať svoju nehnuteľnosť v Chorvátsku? Napíšte nám, zavolajte, alebo vyplňte formulár.",
        phoneLabel: "Telefón",
        emailLabel: "E-mail",
        bullets: [
          "Bezplatné a nezáväzné ocenenie",
          "Cielené oslovenie maďarských kupujúcich",
          "Kompletný právny servis"
        ],
        form: {
          name: "Meno",
          phone: "Telefónne číslo",
          email: "E-mailová adresa",
          location: "Poloha nehnuteľnosti (obec, región)",
          details: "Stručný popis nehnuteľnosti",
          detailsPlaceholder: "Úžitková plocha, počet izieb, vzdialenosť od mora, orientačná cena..."
        },
        formNote: "Odoslané údaje spracúvame výlučne na účely nadviazania kontaktu.",
        submitLabel: "Odoslať dopyt",
        successMessage: "Ďakujeme! Náš kolega vás čoskoro kontaktuje."
      },
      footer: { text: "Adria Hause — sprostredkovanie nehnuteľností v Chorvátsku" }
    }
  }
};