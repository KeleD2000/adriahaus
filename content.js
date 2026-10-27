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
    heroHrefs: ["#ingatlan-ertikesites", "#ingatlan-felujitas", "#ingatlan-eladas"],
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
      { emoji: "🛠️", id: "ingatlan-felujitas",
        gallery: ["felujitas-1.jpg", "felujitas-2.jpg", "felujitas-3.jpg", "felujitas-4.jpg"] },
      { emoji: "🏷️", id: "ingatlan-eladas" }
    ],
    examples: [
      { image: "property-apartment.svg", size: "68 m²",  price: "185 000 €",
        gallery: ["property-apartment.svg", "gallery-interior.svg", "gallery-terrace.svg"] },
      { image: "property-villa.svg",     size: "240 m²", price: "620 000 €",
        gallery: ["property-villa.svg", "gallery-interior.svg", "gallery-terrace.svg"] },
      { image: "property-house.svg",     size: "140 m²", price: "340 000 €",
        gallery: ["property-house.svg", "gallery-interior.svg", "gallery-terrace.svg"] }
    ],
    rentals: [
      { image: "lakas-1-8.jpg", size: "", price: "100 €",
        gallery: [
          "lakas-1-8.jpg", "lakas-1-2.jpg", "lakas-1-3.jpg", "lakas-1-4.jpg",
          "lakas-1-5.jpg", "lakas-1-6.jpg", "lakas-1-7.jpg", "lakas-1-1.jpg",
          "lakas-1-9.jpg", "lakas-1-10.jpg", "lakas-1-11.jpg", "lakas-1-12.jpg",
          "lakas-1-13.jpg", "lakas-1-14.jpg"
        ] },
      { image: "property-apartment.svg", size: "38 m²", price: "480 €", soon: true },
      { image: "property-house.svg", size: "110 m²", price: "900 €", soon: true }
    ]
  },

  translations: {

    hu: {
      pageTitle: "Adria Hause – Adriai ingatlanközvetítés",
      nav: ["Rólunk", "Kapcsolat"],
      hero: {
        title: "Horvátországi ingatlanok közvetítése",
        ctaServices: ["Ingatlan értékesítés", "Felújítás / Karbantartás", "Eladnám/Bérbeadnám az ingatlanom"]
      },
      servicesHeading: { title: "Aktuális szolgáltatásaink", note: "3 fő szolgáltatási terület" },
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
        {
          title: "Eladnám vagy bérbeadnám az ingatlanomat",
          description: "Segítünk gyorsan és a legjobb piaci áron értékesíteni, illetve hosszú távon hasznosítani horvátországi ingatlanát megbízható vevő- és vendégkörben.",
          details: "A Senj székhelyű ügynökség ingatlanokat keres portfóliója bővítésére. Több mint 10 éves horvátországi tapasztalatunkkal teljes körű támogatást nyújtunk a piaci érték meghatározásától és a hirdetéstől kezdve a vevők felkutatásán, a bérbeadáson át egészen az adásvétel lebonyolításáig és az ingatlankezelésig.",
          items: [
            "Ingatlan piaci értékének felmérése és árazás",
            "Ingatlan hirdetése és célzott marketingje Európa-szerte",
            "Érdeklődők, megtekintések és a vendégkommunikáció teljes körű szervezése",
            "Vendéggondozás: teljes körű szolgáltatás a foglalástól a kijelentkezésig",
            "Ingatlankezelés: egész évben havonta kétszeri ellenőrzés fotós igazolással, hibajelzéssel és szakember általi javítással",
            "Segítség az adásvétel vagy bérbeadás zökkenőmentes lebonyolításában"
          ]
        }
      ],
      examplesHeading: { title: "Eladó ingatlanaink", note: "Hamarosan – a megjelenített értékek csak példák" },
      examples: [
        { location: "Rovinj, Isztria", region: "Isztria", title: "Tengerre néző lakás", rooms: "2 hálószoba",
          description: "Felújított, 68 m²-es lakás a városközponthoz közel, tágas terasszal és panorámás kilátással az öbölre." },
        { location: "Zadar, Észak-Dalmácia", region: "Észak-Dalmácia", title: "Új építésű villa", rooms: "4 hálószoba",
          description: "Modern, energiatakarékos villa medencével, a Kornati-szigetekre néző terasszal, azonnal beköltözhető." },
        { location: "Split, Közép-Dalmácia", region: "Közép-Dalmácia", title: "Belvárosi kőház", rooms: "3 szint",
          description: "Történelmi óvárosi kőház, részlegesen felújítva, kiváló befektetési lehetőség rövid távú bérbeadásra." }
      ],
      rentalsHeading: { title: "Kiadó ingatlanaink", note: "További ingatlanok hamarosan – a halványított kártyák értékei csak példák" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriai tengerpart", title: "Tengerre néző apartman", rooms: "3 hálószoba + nappali", priceUnit: "/ nap",
          description: "Igényesen berendezett, teljesen felszerelt apartman 4–6 főre, a vízparttól 400 m-re.",
          details: "Sveti Juraj Zakosában igényesen berendezett, tengerre néző apartman foglalható 4–6 fő számára. A part, ahol strand is van, kb. 400 m-re található, a kiépített strand kb. 1,5 km, ezért kisgyerekes családoknak is alkalmas.\n\nKeressen bizalommal további információért.",
          items: [
            "Tengerre néző, teljesen felszerelt: wifi, légkondi, mosási lehetőség, ágynemű, törölköző",
            "3 hálószoba + nappali, 4–6 fő számára alkalmas",
            "Vízpart, strand kb. 400 m, kiépített strand kb. 1,5 km – kisgyerekes családoknak is alkalmas",
            "Boltok, éttermek, játszótér a közelben",
            "Ár (nyári): alap 100 €/nap 4 főnek, minden további személy +10 €/nap, adóval együtt",
            "Őszi és tavaszi 3 napos kirándulás: utazással, szállással mindössze 50 000 Ft-ért! Pároknak, családoknak egyedi kedvezmény.",
            "Az ár tartalmazza a szállást és a kisbuszos utazás költségét; indulás Baranya, Somogy, Tolna megyékből és Budapestről, igény szerint háztól házig.",
            "Zadar: Horvátország egyik legszebb és legismertebb városa, az ókori város az Adria kellős közepére épült.",
            "Paklenica Nemzeti Park: a Velebit hegylánc tengeri oldalán, Zadartól kb. 30 km-re, sokszínű növény- és állatvilággal.",
            "Kuterevo: menedékhely, ahol a mamájukat elvesztett barna medvebocsoknak minden gondoskodást megadnak.",
            "Plitvicei-tavak: az erdős, szelíd völgyekben számtalan zuhatag ömlik alá, formájuk és magasságuk folyamatosan változik."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Stúdió apartman", rooms: "1 hálószoba", priceUnit: "/ hó",
          description: "Kompakt, felszerelt apartman a tengerparti sétány közelében, pároknak vagy egyedülállóknak." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Családi ház kerttel", rooms: "3 hálószoba", priceUnit: "/ hó",
          description: "Tágas, kertes családi ház csendes környéken, hosszú távú bérbeadásra." }
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
        successMessage: "Köszönjük! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
        errorMessage: "Hiba történt az üzenet küldésekor. Kérjük, próbálja újra, vagy írjon a következő címre:",
        successTitle: "Köszönjük!",
        errorTitle: "Nem sikerült elküldeni",
        closeLabel: "Rendben",
        validation: {
          required: "Ez a mező kötelező.",
          email: "Kérjük, adjon meg érvényes e-mail címet.",
          phone: "Kérjük, adjon meg érvényes telefonszámot.",
          select: "Kérjük, válasszon szolgáltatást."
        }
      },
      footer: { text: "Adria Hause — horvátországi ingatlanközvetítés" }
    },

    en: {
      pageTitle: "Adria Hause – Adriatic real estate brokerage",
      nav: ["About us", "Contact"],
      hero: {
        title: "Real estate brokerage in Croatia",
        ctaServices: ["Property Sales", "Renovation & Maintenance", "I want to sell my property"]
      },
      servicesHeading: { title: "Our current services", note: "3 core service areas" },
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
        {
          title: "Sell or rent out my property",
          description: "We help you quickly and at the best market price to sell or long-term utilize your property in Croatia among a trusted buyer and guest network.",
          details: "Based in Senj, our agency is looking for properties to expand its portfolio. With over 10 years of experience in Croatia, we provide comprehensive support from determining market value and advertising to finding buyers, renting out, completing the transaction, and property management.",
          items: [
            "Property market valuation and pricing",
            "Property listing and targeted marketing across Europe",
            "Full organization of viewings, inquiries, and guest communication",
            "Guest care: comprehensive service from booking to check-out",
            "Property management: bi-monthly inspections throughout the year with photo verification, fault reporting, and professional repairs",
            "Assistance with the smooth completion of the sale or rental"
          ]
        }
      ],
      examplesHeading: { title: "Properties for sale", note: "Coming soon – the values shown are examples only" },
      examples: [
        { location: "Rovinj, Istria", region: "Istria", title: "Sea-view apartment", rooms: "2 bedrooms",
          description: "Renovated 68 m² apartment close to the town centre, with a spacious terrace and panoramic views of the bay." },
        { location: "Zadar, Northern Dalmatia", region: "Northern Dalmatia", title: "New-build villa", rooms: "4 bedrooms",
          description: "Modern, energy-efficient villa with a pool and a terrace overlooking the Kornati Islands, ready to move in." },
        { location: "Split, Central Dalmatia", region: "Central Dalmatia", title: "Stone house in the city centre", rooms: "3 floors",
          description: "Historic old-town stone house, partly renovated, an excellent investment for short-term rentals." }
      ],
      rentalsHeading: { title: "Properties for rent", note: "More properties coming soon – values on the darkened cards are examples only" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriatic coast", title: "Sea-view apartment", rooms: "3 bedrooms + living room", priceUnit: "/ night",
          description: "Tastefully furnished, fully equipped apartment for 4–6 guests, 400 m from the water.",
          details: "A tastefully furnished sea-view apartment is available for booking in Zakos, Sveti Juraj, for 4–6 guests. The shore with a beach is about 400 m away and the developed beach about 1.5 km, so it also suits families with small children.\n\nFeel free to contact us for more information.",
          items: [
            "Sea view, fully equipped: Wi-Fi, air conditioning, laundry facilities, bed linen, towels",
            "3 bedrooms + living room, suitable for 4–6 guests",
            "Waterfront and beach about 400 m, developed beach about 1.5 km – also suitable for families with small children",
            "Shops, restaurants and a playground nearby",
            "Price (summer): base rate €100/night for 4 guests, each additional guest +€10/night, tax included",
            "Autumn and spring 3-day trip: travel and accommodation for just 50,000 HUF! Special discounts for couples and families.",
            "The price includes accommodation and minibus travel, departing from Baranya, Somogy and Tolna counties and Budapest; door-to-door on request.",
            "Zadar: one of Croatia's most beautiful and best-known cities, an ancient town built in the middle of the Croatian Adriatic.",
            "Paklenica National Park: on the sea side of the Velebit range, about 30 km from Zadar, home to a rich variety of plants and animals.",
            "Kuterevo: a shelter where brown bear cubs that have lost their mothers receive full care.",
            "Plitvice Lakes: in wooded, gentle valleys countless waterfalls cascade down, constantly changing in shape and height."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Studio apartment", rooms: "1 bedroom", priceUnit: "/ month",
          description: "Compact, furnished apartment near the seafront promenade, ideal for couples or singles." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Family house with garden", rooms: "3 bedrooms", priceUnit: "/ month",
          description: "Spacious family house with a garden in a quiet area, for long-term rental." }
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
        successMessage: "Thank you! Our colleague will contact you shortly.",
        errorMessage: "An error occurred while sending your message. Please try again or write to:",
        successTitle: "Thank you!",
        errorTitle: "Message not sent",
        closeLabel: "OK",
        validation: {
          required: "This field is required.",
          email: "Please enter a valid email address.",
          phone: "Please enter a valid phone number.",
          select: "Please select a service."
        }
      },
      footer: { text: "Adria Hause — Croatian real estate brokerage" }
    },

    de: {
      pageTitle: "Adria Hause – Immobilienvermittlung an der Adria",
      nav: ["Über uns", "Kontakt"],
      hero: {
        title: "Immobilienvermittlung in Kroatien",
        ctaServices: ["Immobilienverkauf", "Renovierung & Instandhaltung", "Ich möchte meine Immobilie verkaufen"]
      },
      servicesHeading: { title: "Unsere Dienstleistungen", note: "3 Hauptleistungsbereiche" },
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
        {
          title: "Meine Immobilie verkaufen oder vermieten",
          description: "Wir helfen Ihnen, Ihre Immobilie in Kroatien schnell und zum besten Marktpreis zu verkaufen oder langfristig zu nutzen – mit einem zuverlässigen Käufer- und Gästeয়েs,reis.",
          details: "Die Agentur mit Sitz in Senj sucht Immobilien zur Erweiterung ihres Portfolios. Mit über 10 Jahren Erfahrung in Kroatien bieten wir umfassende Unterstützung von der Marktwertermittlung und Vermarktung über die Käufersuche und Vermietung bis hin zum erfolgreichen Abschluss und zur Immobilienverwaltung.",
          items: [
            "Marktwertermittlung und Preisfestsetzung der Immobilie",
            "Immobilieninserat und zielgerichtetes Marketing europaweit",
            "Vollständige Organisation von Besichtigungen, Anfragen und Gästekommunikation",
            "Gästebetreuung: Rundum-Service von der Buchung bis zum Check-out",
            "Immobilienverwaltung: Ganzjährig zweimal monatlich Inspektionen mit Fotodokumentation, Mängelmeldung und fachgerechter Instandsetzung",
            "Unterstützung beim reibungslosen Abschluss des Verkaufs oder der Vermietung"
          ]
        }
      ],
      examplesHeading: { title: "Immobilien zum Verkauf", note: "Demnächst – die angezeigten Werte sind nur Beispiele" },
      examples: [
        { location: "Rovinj, Istrien", region: "Istrien", title: "Wohnung mit Meerblick", rooms: "2 Schlafzimmer",
          description: "Renovierte 68 m² Wohnung nahe dem Stadtzentrum mit großzügiger Terrasse und Panoramablick auf die Bucht." },
        { location: "Zadar, Norddalmatien", region: "Norddalmatien", title: "Neubau-Villa", rooms: "4 Schlafzimmer",
          description: "Moderne, energieeffiziente Villa mit Pool und Terrasse mit Blick auf die Kornaten-Inseln, sofort bezugsfertig." },
        { location: "Split, Mitteldalmatien", region: "Mitteldalmatien", title: "Steinhaus im Stadtzentrum", rooms: "3 Etagen",
          description: "Historisches Steinhaus in der Altstadt, teilweise renoviert, hervorragende Kapitalanlage für die Ferienvermietung." }
      ],
      rentalsHeading: { title: "Immobilien zur Miete", note: "Weitere Objekte demnächst – die Werte auf den abgedunkelten Karten sind nur Beispiele" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriaküste", title: "Apartment mit Meerblick", rooms: "3 Schlafzimmer + Wohnzimmer", priceUnit: "/ Nacht",
          description: "Geschmackvoll eingerichtetes, voll ausgestattetes Apartment für 4–6 Personen, 400 m vom Wasser.",
          details: "In Zakos bei Sveti Juraj kann ein geschmackvoll eingerichtetes Apartment mit Meerblick für 4–6 Personen gebucht werden. Der Strand am Wasser ist ca. 400 m entfernt, der ausgebaute Strand ca. 1,5 km – auch für Familien mit kleinen Kindern geeignet.\n\nKontaktieren Sie uns gerne für weitere Informationen.",
          items: [
            "Meerblick, voll ausgestattet: WLAN, Klimaanlage, Waschmöglichkeit, Bettwäsche, Handtücher",
            "3 Schlafzimmer + Wohnzimmer, geeignet für 4–6 Personen",
            "Wasser und Strand ca. 400 m, ausgebauter Strand ca. 1,5 km – auch für Familien mit kleinen Kindern geeignet",
            "Geschäfte, Restaurants und Spielplatz in der Nähe",
            "Preis (Sommer): Grundpreis 100 €/Nacht für 4 Personen, jede weitere Person +10 €/Nacht, inkl. Steuern",
            "3-Tage-Reise im Herbst und Frühling: Anreise und Unterkunft für nur 50.000 HUF! Sonderrabatte für Paare und Familien.",
            "Im Preis enthalten sind Unterkunft und Kleinbusfahrt ab den Komitaten Baranya, Somogy, Tolna und Budapest; auf Wunsch von Haus zu Haus.",
            "Zadar: eine der schönsten und bekanntesten Städte Kroatiens, eine antike Stadt mitten an der kroatischen Adria.",
            "Nationalpark Paklenica: an der Meerseite des Velebit-Gebirges, ca. 30 km von Zadar entfernt, mit vielfältiger Tier- und Pflanzenwelt.",
            "Kuterevo: eine Auffangstation, in der Braunbärenjunge, die ihre Mutter verloren haben, rundum versorgt werden.",
            "Plitvicer Seen: In bewaldeten, sanften Tälern stürzen unzählige Wasserfälle herab, deren Form und Höhe sich ständig verändern."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Studio-Apartment", rooms: "1 Schlafzimmer", priceUnit: "/ Monat",
          description: "Kompaktes, möbliertes Apartment nahe der Strandpromenade, ideal für Paare oder Singles." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Familienhaus mit Garten", rooms: "3 Schlafzimmer", priceUnit: "/ Monat",
          description: "Geräumiges Familienhaus mit Garten in ruhiger Lage, für langfristige Vermietung." }
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
        successMessage: "Vielen Dank! Unser Mitarbeiter wird sich in Kürze bei Ihnen melden.",
        errorMessage: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie an:",
        successTitle: "Vielen Dank!",
        errorTitle: "Nachricht nicht gesendet",
        closeLabel: "OK",
        validation: {
          required: "Dieses Feld ist erforderlich.",
          email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
          select: "Bitte wählen Sie einen Service."
        }
      },
      footer: { text: "Adria Hause — Immobilienvermittlung in Kroatien" }
    },

    hr: {
      pageTitle: "Adria Hause – Agencija za nekretnine na Jadranu",
      nav: ["O nama", "Kontakt"],
      hero: {
        title: "Posredovanje u prometu nekretninama u Hrvatskoj",
        ctaServices: ["Prodaja nekretnina", "Renovacija i održavanje", "Želim prodati svoju nekretninu"]
      },
      servicesHeading: { title: "Naše usluge", note: "3 glavna područja rada" },
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
        {
          title: "Želim prodati ili iznajmiti svoju nekretninu",
          description: "Pomažemo vam u brzoj i uspješnoj prodaji ili dugoročnom korištenju vaše nekretnine u Hrvatskoj po najboljoj cijeni uz pouzdan krug kupaca i gostiju.",
          details: "Agencija sa sjedištem u Senju traži nekretnine radi proširenja svog portfelja. S više od 10 godina iskustva u Hrvatskoj pružamo cjelovitu podršku od utvrđivanja tržišne vrijednosti i oglašavanja do pronalaženja kupaca, najma, realizacije prodaje i upravljanja nekretninom.",
          items: [
            "Procjena tržišne vrijednosti nekretnine i određivanje cijene",
            "Oglašavanje i ciljani marketing nekretnine diljem Europe",
            "Kompletna organizacija razgledavanja, upita i komunikacije s gostima",
            "Briga o gostima: usluga od A do Ž, od rezervacije do odjave",
            "Upravljanje nekretninom: dvaput mjesečno tijekom cijele godine uz foto-dokaz, dojavu kvarova i stručni popravak",
            "Pomoć pri nesmetanoj realizaciji prodaje ili najma"
          ]
        }
      ],
      examplesHeading: { title: "Nekretnine na prodaju", note: "Uskoro – prikazane vrijednosti samo su primjeri" },
      examples: [
        { location: "Rovinj, Istra", region: "Istra", title: "Stan s pogledom na more", rooms: "2 spavaće sobe",
          description: "Obnovljen stan od 68 m² u blizini centra grada, s prostranom terasom i panoramskim pogledom na zaljev." },
        { location: "Zadar, Sjeverna Dalmacija", region: "Sjeverna Dalmacija", title: "Novogradnja vila", rooms: "4 spavaće sobe",
          description: "Moderna, energetski učinkovita vila s bazenom i terasom s pogledom na Kornate, odmah useljiva." },
        { location: "Split, Srednja Dalmacija", region: "Srednja Dalmacija", title: "Kamena kuća u centru", rooms: "3 etaže",
          description: "Povijesna kamena kuća u staroj jezgri grada, djelomično renovirana, izvrsna prilika za turistički najam." }
      ],
      rentalsHeading: { title: "Nekretnine za najam", note: "Uskoro još nekretnina – vrijednosti na zatamnjenim karticama samo su primjeri" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranska obala", title: "Apartman s pogledom na more", rooms: "3 spavaće sobe + dnevni boravak", priceUnit: "/ noć",
          description: "Ukusno uređen, potpuno opremljen apartman za 4–6 osoba, 400 m od mora.",
          details: "U Zakosu kod Svetog Jurja moguće je rezervirati ukusno uređen apartman s pogledom na more za 4–6 osoba. Obala s plažom udaljena je oko 400 m, a uređena plaža oko 1,5 km, pa je pogodan i za obitelji s malom djecom.\n\nSlobodno nas kontaktirajte za više informacija.",
          items: [
            "Pogled na more, potpuno opremljen: wifi, klima, mogućnost pranja rublja, posteljina, ručnici",
            "3 spavaće sobe + dnevni boravak, pogodno za 4–6 osoba",
            "More i plaža oko 400 m, uređena plaža oko 1,5 km – pogodno i za obitelji s malom djecom",
            "Trgovine, restorani i igralište u blizini",
            "Cijena (ljeto): osnovna cijena 100 €/noć za 4 osobe, svaka dodatna osoba +10 €/noć, porez uključen",
            "Trodnevni izlet na jesen i proljeće: prijevoz i smještaj samo za 50.000 HUF! Posebni popusti za parove i obitelji.",
            "Cijena uključuje smještaj i prijevoz kombijem iz županija Baranya, Somogy, Tolna i iz Budimpešte; na zahtjev od vrata do vrata.",
            "Zadar: jedan od najljepših i najpoznatijih hrvatskih gradova, antički grad usred hrvatskog Jadrana.",
            "Nacionalni park Paklenica: na morskoj strani Velebita, oko 30 km od Zadra, s raznolikim biljnim i životinjskim svijetom.",
            "Kuterevo: utočište u kojem se o medvjedićima koji su ostali bez majke brine s punom pažnjom.",
            "Plitvička jezera: u šumovitim blagim dolinama slijevaju se brojni slapovi čiji se oblik i visina stalno mijenjaju."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Studio apartman", rooms: "1 spavaća soba", priceUnit: "/ mjesec",
          description: "Kompaktan, opremljen apartman blizu morske šetnice, idealan za parove ili samce." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Obiteljska kuća s vrtom", rooms: "3 spavaće sobe", priceUnit: "/ mjesec",
          description: "Prostrana obiteljska kuća s vrtom u mirnom okruženju, za dugoročni najam." }
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
        successMessage: "Hvala vam! Naš djelatnik će vam se ubrzo javiti.",
        errorMessage: "Došlo je do pogreške prilikom slanja poruke. Pokušajte ponovno ili nam pišite na:",
        successTitle: "Hvala vam!",
        errorTitle: "Poruka nije poslana",
        closeLabel: "U redu",
        validation: {
          required: "Ovo polje je obavezno.",
          email: "Unesite ispravnu e-mail adresu.",
          phone: "Unesite ispravan broj telefona.",
          select: "Odaberite uslugu."
        }
      },
      footer: { text: "Adria Hause — agencija za nekretnine u Hrvatskoj" }
    },

    cs: {
      pageTitle: "Adria Hause – nemovitosti u Jadranu",
      nav: ["O nás", "Kontakt"],
      hero: {
        title: "Zprostředkování nemovitostí v Chorvatsku",
        ctaServices: ["Prodej nemovitostí", "Renovace a údržba", "Chci prodat svou nemovitost"]
      },
      servicesHeading: { title: "Naše aktuální služby", note: "3 hlavní oblasti služeb" },
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
        {
          title: "Chci prodat nebo pronajmout nemovitost",
          description: "Pomůžeme vám rychle a za nejlepší tržní cenu prodat nebo dlouhodobě využít vaši nemovitost v Chorvatsku v rámci spolehlivé sítě kupujících a hostů.",
          details: "Agentura se sídlem v Senji hledá nemovitosti k rozšíření svého portfolia. S více než 10 lety zkušeností v Chorvatsku poskytujeme komplexní podporu od stanovení tržní hodnoty a inzerce až po hledání kupců, pronájem, dokončení obchodu a správu nemovitosti.",
          items: [
            "Odhad tržní hodnoty nemovitosti a stanovení ceny",
            "Inzerce a cílený marketing nemovitosti po celé Evropě",
            "Kompletní organizace prohlídek, dotazů a komunikace s hosty",
            "Péče o hosty: komplexní služby od rezervace až po odhlášení",
            "Správa nemovitosti: celoročně dvakrát měsíčně kontroly s fotodokumentací, hlášením závad a odbornou opravou",
            "Asistence při hladkém dokončení prodeje nebo pronájmu"
          ]
        }
      ],
      examplesHeading: { title: "Nemovitosti k prodeji", note: "Již brzy – zobrazené hodnoty jsou pouze ukázkové" },
      examples: [
        { location: "Rovinj, Istrie", region: "Istrie", title: "Byt s výhledem na moře", rooms: "2 ložnice",
          description: "Zrekonstruovaný byt o velikosti 68 m² poblíž centra, s prostornou terasou a panoramatickým výhledem na záliv." },
        { location: "Zadar, Severní Dalmácie", region: "Severní Dalmácie", title: "Novostavba vily", rooms: "4 ložnice",
          description: "Moderní energeticky úsporná vila s bazénem a terasou s výhledem na Kornatské ostrovy, ihned k nastěhování." },
        { location: "Split, Střední Dalmácie", region: "Střední Dalmácie", title: "Kamenný dům v centru", rooms: "3 podlaží",
          description: "Historický kamenný dům ve starém městě, částečně zrekonstruovaný, skvělá investiční příležitost pro krátkodobý pronájem." }
      ],
      rentalsHeading: { title: "Nemovitosti k pronájmu", note: "Další nemovitosti již brzy – hodnoty na ztmavených kartách jsou pouze ukázkové" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranské pobřeží", title: "Apartmán s výhledem na moře", rooms: "3 ložnice + obývací pokoj", priceUnit: "/ noc",
          description: "Vkusně zařízený, plně vybavený apartmán pro 4–6 osob, 400 m od moře.",
          details: "V Zakosu u Sveti Juraj lze rezervovat vkusně zařízený apartmán s výhledem na moře pro 4–6 osob. Pobřeží s pláží je vzdáleno asi 400 m, upravená pláž asi 1,5 km, proto je vhodný i pro rodiny s malými dětmi.\n\nPro další informace nás neváhejte kontaktovat.",
          items: [
            "Výhled na moře, plně vybaveno: wifi, klimatizace, možnost praní, ložní prádlo, ručníky",
            "3 ložnice + obývací pokoj, vhodné pro 4–6 osob",
            "Moře a pláž asi 400 m, upravená pláž asi 1,5 km – vhodné i pro rodiny s malými dětmi",
            "Obchody, restaurace a dětské hřiště v blízkosti",
            "Cena (léto): základní cena 100 €/noc pro 4 osoby, každá další osoba +10 €/noc, včetně daně",
            "3denní výlet na podzim a na jaře: doprava a ubytování jen za 50 000 HUF! Zvláštní slevy pro páry a rodiny.",
            "Cena zahrnuje ubytování a dopravu minibusem z žup Baranya, Somogy, Tolna a z Budapešti; na přání od domu k domu.",
            "Zadar: jedno z nejkrásnějších a nejznámějších chorvatských měst, antické město uprostřed chorvatského Jadranu.",
            "Národní park Paklenica: na mořské straně pohoří Velebit, asi 30 km od Zadaru, s rozmanitou flórou a faunou.",
            "Kuterevo: útulek, kde se medvíďatům, která přišla o matku, dostává plné péče.",
            "Plitvická jezera: v zalesněných mírných údolích se řítí nespočet vodopádů, jejichž tvar a výška se neustále mění."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Studio apartmán", rooms: "1 ložnice", priceUnit: "/ měsíc",
          description: "Kompaktní, zařízený apartmán poblíž pobřežní promenády, ideální pro páry nebo jednotlivce." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Rodinný dům se zahradou", rooms: "3 ložnice", priceUnit: "/ měsíc",
          description: "Prostorný rodinný dům se zahradou v klidné lokalitě, pro dlouhodobý pronájem." }
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
            "Renovacija i održavanje",
            "Jiný dotaz"
          ]
        },
        formNote: "Odeslané údaje zpracováváme výhradně za účelem navázání kontaktu.",
        submitLabel: "Odeslat poptávku",
        successMessage: "Děkujeme! Náš kolega vás brzy kontaktuje.",
        errorMessage: "Při odesílání zprávy došlo k chybě. Zkuste to prosím znovu nebo nám napište na:",
        successTitle: "Děkujeme!",
        errorTitle: "Zprávu se nepodařilo odeslat",
        closeLabel: "OK",
        validation: {
          required: "Toto pole je povinné.",
          email: "Zadejte platnou e-mailovou adresu.",
          phone: "Zadejte platné telefonní číslo.",
          select: "Vyberte službu."
        }
      },
      footer: { text: "Adria Hause — zprostředkování nemovitostí v Chorvatsku" }
    },

    sk: {
      pageTitle: "Adria Hause – nehnuteľnosti pri Jadrane",
      nav: ["O nás", "Kontakt"],
      hero: {
        title: "Sprostredkovanie nehnuteľností v Chorvátsku",
        ctaServices: ["Predaj nehnuteľností", "Renovácia a údržba", "Chcem predať svoju nehnuteľnosť"]
      },
      servicesHeading: { title: "Naše aktuálne služby", note: "3 hlavné oblasti služieb" },
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
        {
          title: "Chcem predať alebo prenajať nehnuteľnosť",
          description: "Pomôžeme vám rýchlo a za najlepšiu trhovú cenu predať alebo dlhodobo využiť vašu nehnuteľnosť v Chorvátsku v rámci spoľahlivej siete kupujúcich a hostí.",
          details: "Agentúra so sídlom v Senji hľadá nehnuteľnosti na rozšírenie svojho portfólia. S viac ako 10-ročnými skúsenosťami v Chorvátsku poskytujeme komplexnú podporu od stanovenia trhovej hodnoty a inzercie až po hľadanie kupujúcich, prenájom, dokončenie obchodu a správu nehnuteľnosti.",
          items: [
            "Odhad trhovej hodnoty nehnuteľnosti a stanovenie ceny",
            "Inzercia a cielený marketing nehnuteľnosti po celej Európe",
            "Kompletná organizácia obhliadok, dopytov a komunikácie s hosťami",
            "Starostlivosť o hostí: komplexné služby od rezervácie až po odhlásenie",
            "Správa nehnuteľnosti: celoročne dvakrát mesačne kontroly s fotodokumentáciou, hlásením porúch a odbornou opravou",
            "Asistencia pri hladkom dokončení predaja alebo prenájmu"
          ]
        }
      ],
      examplesHeading: { title: "Nehnuteľnosti na predaj", note: "Čoskoro – zobrazené hodnoty sú len ukážkové" },
      examples: [
        { location: "Rovinj, Istria", region: "Istria", title: "Byt s výhľadom na more", rooms: "2 spálne",
          description: "Zrekonštruovaný byt s rozlohou 68 m² blízko centra, s priestrannou terasou a panoramatickým výhľadom na záliv." },
        { location: "Zadar, Severná Dalmácia", region: "Severná Dalmácia", title: "Novostavba vily", rooms: "4 spálne",
          description: "Moderná, energeticky úsporná vila s bazénom a terasou s výhľadom na Kornatské ostrovy, ihneď k nasťahovaniu." },
        { location: "Split, Stredná Dalmácia", region: "Stredná Dalmácia", title: "Kamenný dom v centre", rooms: "3 podlažia",
          description: "Historický kamenný dom v starom meste, čiastočne zrekonštruovaný, skvelá investičná príležitosť na krátkodobý prenájom." }
      ],
      rentalsHeading: { title: "Nehnuteľnosti na prenájom", note: "Ďalšie nehnuteľnosti čoskoro – hodnoty na stmavených kartách sú len ukážkové" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranské pobrežie", title: "Apartmán s výhľadom na more", rooms: "3 spálne + obývačka", priceUnit: "/ noc",
          description: "Vkusne zariadený, plne vybavený apartmán pre 4–6 osôb, 400 m od mora.",
          details: "V Zakose pri Svetom Jurajovi je možné rezervovať vkusne zariadený apartmán s výhľadom na more pre 4–6 osôb. Pobrežie s pláží je vzdialené asi 400 m, upravená pláž asi 1,5 km, preto je vhodný aj pre rodiny s malými deťmi.\n\nPre ďalšie informácie nás neváhajte kontaktovať.",
          items: [
            "Výhľad na more, plne vybavené: wifi, klimatizácia, možnosť prania, posteľná bielizeň, uteráky",
            "3 spálne + obývačka, vhodné pre 4–6 osôb",
            "More a pláž asi 400 m, upravená pláž asi 1,5 km – vhodné aj pre rodiny s deťmi",
            "Obchody, reštaurácie a detské ihrisko v blízkosti",
            "Cena (leto): základná cena 100 €/noc pre 4 osoby, každá ďalšia osoba +10 €/noc, vrátane dane",
            "3-dňový výlet na jeseň a na jar: doprava a ubytovanie len za 50 000 HUF! Zvláštne zľavy pre páry a rodiny.",
            "Cena zahŕňa ubytovanie a dopravu minibusom zo žúp Baranya, Somogy, Tolna a z Budapešti; na želanie od domu k domu.",
            "Zadar: jedno z najkrajších a najznámejších chorvátskych miest, antické mesto uprostred chorvátskeho Jadranu.",
            "Národný park Paklenica: na morskej strane pohoria Velebit, asi 30 km od Zadaru, s rozmanitou flórou a faunou.",
            "Kuterevo: útulok, kde sa medvieďatám, ktoré prišli o matku, dostáva plná starostlivosť.",
            "Plitvické jazerá: v zalesnených miernych dolinách sa rútia nespočetné vodopády, ktorých tvar a výška sa neustále menia."
          ] },
        { location: "Rab, Kvarner", region: "Kvarner", title: "Štúdio apartmán", rooms: "1 spálňa", priceUnit: "/ mesiac",
          description: "Kompaktný, zariadený apartmán blízko pobrežnej promenády, ideálny pre páry alebo jednotlivcov." },
        { location: "Krk, Kvarner", region: "Kvarner", title: "Rodinný dom so zahradou", rooms: "3 spálne", priceUnit: "/ mesiac",
          description: "Priestranný rodinný dom so zahradou v pokojnom prostredí, na dlhodobý prenájom." }
      ],
      about: {
        title: "Viac ako 10 rokov sprostredkujeme nehnuteľnosti na chorvátskom pobreží",
        intro: "Vďaka miestnym právnym a trhovým znalostiam a partnerskej sieti v Chorvátsku sprevádzame klientov od výberu až po zápis vlastníckeho práva.",
        stats: [
          { value: "10+", label: "rokov skúseností" },
          { value: "5", label: "regiónov" }
        ],
      },
      contact: {
        title: "Kontakt",
        text: "Máte otázku, alebo by ste chceli predať svoju nehnuteľnosť v Chorvátsku? Napíšte nám, zavolajte, nebo vyplňte formulář.",
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
            "Renovacija i održavanje",
            "Iný dopyt"
          ]
        },
        formNote: "Odoslané údaje spracovávame výhradne za účelom nadviazania kontaktu.",
        submitLabel: "Odoslať dopyt",
        successMessage: "Ďakujeme! Náš kolega vás bude čoskoro kontaktovať.",
        errorMessage: "Pri odosielaní správy sa vyskytla chyba. Skúste to prosím znova alebo nám napíšte na:",
        successTitle: "Ďakujeme!",
        errorTitle: "Správu sa nepodařilo odoslať",
        closeLabel: "OK",
        validation: {
          required: "Toto pole je povinné.",
          email: "Zadajte platnú e-mailovú adresu.",
          phone: "Zadajte platné telefónne číslo.",
          select: "Vyberte službu."
        }
      },
      footer: { text: "Adria Hause — sprostredkovanie nehnuteľností v Chorvátsku" }
    }

  }

};