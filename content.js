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
    brand: { name: "Adria Haus" },
    phone: "+36 30 878 7226",
    phoneHref: "tel:+36308787226",
    email: "adriahaus70@gmail.com",
    navHrefs: ["#rolunk", "#kapcsolat"],
    heroHrefs: ["#ingatlan-ertikesites", "#ingatlan-felujitas", "#kapcsolat", "#kiado-ingatlanok"],
    properties: [
      { gradient: "linear-gradient(160deg,#2E6F7E,#8FCAD4)", size: "68 m²",  price: "185 000 €" },
      { gradient: "linear-gradient(160deg,#3B5245,#7FA98C)", size: "210 m²", price: "395 000 €" },
      { gradient: "linear-gradient(160deg,#1B4B5A,#C9954B)", size: "240 m²", price: "620 000 €" },
      { gradient: "linear-gradient(160deg,#5A3B2E,#C97B5A)", size: "140 m²", price: "340 000 €" },
      { gradient: "linear-gradient(160deg,#2E4A5A,#5A7B8C)", size: "310 m²", price: "780 000 €" },
      { gradient: "linear-gradient(160deg,#3E7C8C,#DCA95F)", size: "93 m²",  price: "62 000 €" }
    ],
    services: [
      { id: "ingatlan-ertikesites" },
      { id: "ingatlan-felujitas",
        gallery: ["felujitas-1.jpg", "felujitas-2.jpg", "felujitas-3.jpg", "felujitas-4.jpg", "felujitas-5.jpeg", "felujitas-6.jpeg", "felujitas-7.jpeg", "felujitas-8.jpeg"] }
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
      { image: "lakas-2-13.jpeg", size: "", price: "85 €",
        gallery: [
          "lakas-2-13.jpeg", "lakas-2-2.jpeg", "lakas-2-16.jpeg",
          "lakas-2-17.jpeg","lakas-2-11.jpeg", "lakas-2-3.jpeg", "lakas-2-18.jpeg",
          "lakas-2-4.jpeg", "lakas-2-5.jpeg", "lakas-2-15.jpeg",
          "lakas-2-6.jpeg", "lakas-2-7.jpeg", "lakas-2-8.jpeg", "lakas-2-9.jpeg",
          "lakas-2-10.jpeg", "lakas-2-1.jpeg", "lakas-2-12.jpeg", "lakas-2-14.jpeg",
          "lakas-2-19.jpeg", "lakas-2-20.jpeg", "lakas-2-21.jpeg",
          "lakas-2-22.jpeg", "lakas-2-23.jpeg", "lakas-2-24.jpeg", "lakas-2-25.jpeg",
          "lakas-2-26.jpeg", "lakas-2-27.jpeg", "lakas-2-28.jpeg", "lakas-2-11.jpeg"
        ] }
    ]
  },

  translations: {

    hu: {
      pageTitle: "Adria Hause – Adriai ingatlanközvetítés",
      nav: ["Rólunk", "Kapcsolat"],
      hero: {
        title: "Horvátországi ingatlanok közvetítése",
        ctaServices: ["Ingatlan értékesítés", "Felújítás / Karbantartás", "Eladnám / bérbeadnám az ingatlanom", "Bérelhető ingatlanok"]
      },
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
          ] }
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
      rentalsHeading: { title: "Bérelhető ingatlanaink", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriai tengerpart", title: "Tengerre néző apartman", rooms: "3 hálószoba + nappali", priceUnit: "/ nap",
          description: "Igényesen berendezett, teljesen felszerelt apartman 4–6 főre, a vízparttól 400 m-re.",
          details: "Sveti Juraj Zakosában igényesen berendezett, tengerre néző apartman foglalható 4–6 fő számára. A part, ahol strand is van, kb. 400 m-re található, a kiépített strand kb. 1,5 km, ezért kisgyerekes családoknak is alkalmas.\n\nKeressen bizalommal további információért.",
          items: [
            "Tengerre néző, teljesen felszerelt: wifi, légkondi, mosási lehetőség, ágynemű, törölköző",
            "3 hálószoba + nappali, 4–6 fő számára alkalmas",
            "Vízpart, strand kb. 400 m, kiépített strand kb. 1,5 km – kisgyerekes családoknak is alkalmas",
            "Boltok, éttermek, játszótér a közelben",
            "Ár (nyári): alap 100 €/nap 4 főnek, minden további személy +10 €/nap, adóval együtt"
          ],
          program: {
            label: "Programajánló",
            items: [
              "Őszi és tavaszi 3 napos kirándulás: utazással, szállással mindössze 50 000 Ft-ért! Pároknak, családoknak egyedi kedvezmény.",
              "Az ár tartalmazza a szállást és a kisbuszos utazás költségét; indulás Baranya, Somogy, Tolna megyékből és Budapestről, igény szerint háztól házig.",
              "Zadar: Horvátország egyik legszebb és legismertebb városa, az ókori város az Adria kellős közepére épült.",
              "Paklenica Nemzeti Park: a Velebit hegylánc tengeri oldalán, Zadartól kb. 30 km-re, sokszínű növény- és állatvilággal.",
              "Kuterevo: menedékhely, ahol a mamájukat elvesztett barna medvebocsoknak minden gondoskodást megadnak.",
              "Plitvicei-tavak: az erdős, szelíd völgyekben számtalan zuhatag ömlik alá, formájuk és magasságuk folyamatosan változik."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Adriai tengerpart", title: "Villa Alexa", rooms: "3 apartman, 5 hálószoba", priceUnit: "/ nap",
          description: "Apartmanház Cesaricában: a strand pár perc sétára, saját terasz tengeri panorámával, klíma, wifi, kerti grill és ingyenes zárt parkoló.",
          details: "Tengerparti béke és kényelem a Villa Alexa Cesaricában!\n\nSzeretne egy csendes, kristálytiszta vizű öbölben pihenni? A horvátországi Cesarica falujában fekvő apartmanházunk tökéletes választás a gondtalan nyaraláshoz!\n\nAmiért imádni fogja nálunk:\n• Tenger: A strand mindössze pár perc sétára van a háztól, így bármikor leugorhat csobbanni egyet!\n• Tengeri panoráma: Tágas, saját teraszok a csodás naplementékhez.\n• Felszerelt és patyolattiszta: Kényelmes szobák, okostévé és teljes konyha várja.\n• Klíma & szélsebes Wi-Fi: Hűvös szobák és stabil internet az egész házban.\n• Kerti grill: Privát zöldövezet a hangulatos esti sütögetésekhez.\n• Ingyenes zárt parkolás közvetlenül a szállásnál.\n\nMinden a közelben:\n• Boltok és éttermek 5 perc autóútra\n• Karlobag központja 7 km\n• Tökéletes kiindulópont az Északi-Velebit, a Plitvicei-tavak vagy a Pag-sziget felfedezéséhez is!\n\nNálunk igazi otthonos, vendégszerető menedék várja (magyarul is beszélünk)!\n\nVálassza az Önnek megfelelő apartmant:\n• Kéthálószobás apartmanok: Egy a földszinten, egy pedig az emeleten található (ideális családoknak, barátoknak). 100 € / éj + adó\n• Stúdió apartman: Hangulatos elrendezés az emeleten (tökéletes pároknak). 85 € / éj + adó",
          items: [] }
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
        ctaServices: ["Property sales", "Renovation & maintenance", "Sell / rent out my property", "Rental properties"]
      },
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
          ] }
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
      rentalsHeading: { title: "Rental properties", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriatic coast", title: "Sea-view apartment", rooms: "3 bedrooms + living room", priceUnit: "/ night",
          description: "Tastefully furnished, fully equipped apartment for 4–6 guests, 400 m from the water.",
          details: "A tastefully furnished sea-view apartment is available for booking in Zakos, Sveti Juraj, for 4–6 guests. The shore with a beach is about 400 m away and the developed beach about 1.5 km, so it also suits families with small children.\n\nFeel free to contact us for more information.",
          items: [
            "Sea view, fully equipped: Wi-Fi, air conditioning, laundry facilities, bed linen, towels",
            "3 bedrooms + living room, suitable for 4–6 guests",
            "Waterfront and beach about 400 m, developed beach about 1.5 km – also suitable for families with small children",
            "Shops, restaurants and a playground nearby",
            "Price (summer): base rate €100/night for 4 guests, each additional guest +€10/night, tax included"
          ],
          program: {
            label: "Things to do",
            items: [
              "Autumn and spring 3-day trip: travel and accommodation for just 50,000 HUF! Special discounts for couples and families.",
              "The price includes accommodation and minibus travel, departing from Baranya, Somogy and Tolna counties and Budapest; door-to-door on request.",
              "Zadar: one of Croatia's most beautiful and best-known cities, an ancient town built in the middle of the Croatian Adriatic.",
              "Paklenica National Park: on the sea side of the Velebit range, about 30 km from Zadar, home to a rich variety of plants and animals.",
              "Kuterevo: a shelter where brown bear cubs that have lost their mothers receive full care.",
              "Plitvice Lakes: in wooded, gentle valleys countless waterfalls cascade down, constantly changing in shape and height."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Adriatic coast", title: "Villa Alexa", rooms: "3 apartments, 5 bedrooms", priceUnit: "/ night",
          description: "Apartment house in Cesarica: beach a few minutes' walk away, private terraces with sea views, air conditioning, Wi-Fi, garden barbecue and free enclosed parking.",
          details: "Seaside peace and comfort at Villa Alexa in Cesarica!\n\nWould you like to relax in a quiet bay with crystal-clear water? Our apartment house in the village of Cesarica, Croatia, is the perfect choice for a carefree holiday!\n\nWhy you will love it here:\n• Sea: The beach is just a few minutes' walk from the house, so you can pop in for a swim whenever you like!\n• Sea panorama: Spacious private terraces for wonderful sunsets.\n• Equipped and spotlessly clean: Comfortable rooms, a smart TV and a full kitchen await you.\n• Air conditioning & lightning-fast Wi-Fi: Cool rooms and stable internet throughout the house.\n• Garden barbecue: A private green area for cosy evening grilling.\n• Free enclosed parking right at the accommodation.\n\nEverything nearby:\n• Shops and restaurants 5 minutes by car\n• Karlobag town centre 7 km away\n• A perfect base for exploring Northern Velebit, the Plitvice Lakes or the island of Pag!\n\nA truly homely, welcoming retreat awaits you (we also speak Hungarian)!\n\nChoose the apartment that suits you:\n• Two-bedroom apartments: one on the ground floor and one upstairs (ideal for families and friends). €100 / night + tax\n• Studio apartment: A cosy layout upstairs (perfect for couples). €85 / night + tax",
          items: [] }
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
        ctaServices: ["Immobilienverkauf", "Renovierung & Instandhaltung", "Meine Immobilie verkaufen / vermieten", "Mietobjekte"]
      },
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
          ] }
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
      rentalsHeading: { title: "Mietobjekte", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Adriaküste", title: "Apartment mit Meerblick", rooms: "3 Schlafzimmer + Wohnzimmer", priceUnit: "/ Nacht",
          description: "Geschmackvoll eingerichtetes, voll ausgestattetes Apartment für 4–6 Personen, 400 m vom Wasser.",
          details: "In Zakos bei Sveti Juraj kann ein geschmackvoll eingerichtetes Apartment mit Meerblick für 4–6 Personen gebucht werden. Der Strand am Wasser ist ca. 400 m entfernt, der ausgebaute Strand ca. 1,5 km – auch für Familien mit kleinen Kindern geeignet.\n\nKontaktieren Sie uns gerne für weitere Informationen.",
          items: [
            "Meerblick, voll ausgestattet: WLAN, Klimaanlage, Waschmöglichkeit, Bettwäsche, Handtücher",
            "3 Schlafzimmer + Wohnzimmer, geeignet für 4–6 Personen",
            "Wasser und Strand ca. 400 m, ausgebauter Strand ca. 1,5 km – auch für Familien mit kleinen Kindern geeignet",
            "Geschäfte, Restaurants und Spielplatz in der Nähe",
            "Preis (Sommer): Grundpreis 100 €/Nacht für 4 Personen, jede weitere Person +10 €/Nacht, inkl. Steuern"
          ],
          program: {
            label: "Ausflugstipps",
            items: [
              "3-Tage-Reise im Herbst und Frühling: Anreise und Unterkunft für nur 50.000 HUF! Sonderrabatte für Paare und Familien.",
              "Im Preis enthalten sind Unterkunft und Kleinbusfahrt ab den Komitaten Baranya, Somogy, Tolna und Budapest; auf Wunsch von Haus zu Haus.",
              "Zadar: eine der schönsten und bekanntesten Städte Kroatiens, eine antike Stadt mitten an der kroatischen Adria.",
              "Nationalpark Paklenica: an der Meerseite des Velebit-Gebirges, ca. 30 km von Zadar entfernt, mit vielfältiger Tier- und Pflanzenwelt.",
              "Kuterevo: eine Auffangstation, in der Braunbärenjunge, die ihre Mutter verloren haben, rundum versorgt werden.",
              "Plitvicer Seen: In bewaldeten, sanften Tälern stürzen unzählige Wasserfälle herab, deren Form und Höhe sich ständig verändern."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Adriaküste", title: "Villa Alexa", rooms: "3 Apartments, 5 Schlafzimmer", priceUnit: "/ Nacht",
          description: "Apartmenthaus in Cesarica: Strand wenige Gehminuten entfernt, private Terrassen mit Meerblick, Klimaanlage, WLAN, Gartengrill und kostenloser geschlossener Parkplatz.",
          details: "Küstenruhe und Komfort in der Villa Alexa in Cesarica!\n\nMöchten Sie sich in einer ruhigen Bucht mit kristallklarem Wasser erholen? Unser Apartmenthaus im kroatischen Dorf Cesarica ist die perfekte Wahl für einen unbeschwerten Urlaub!\n\nDarum werden Sie es bei uns lieben:\n• Meer: Der Strand ist nur wenige Gehminuten vom Haus entfernt – Sie können jederzeit auf einen Sprung ins Wasser vorbeischauen!\n• Meerblick: Großzügige, private Terrassen für traumhafte Sonnenuntergänge.\n• Ausgestattet und blitzsauber: Gemütliche Zimmer, Smart-TV und eine komplette Küche erwarten Sie.\n• Klimaanlage & superschnelles WLAN: Kühle Zimmer und stabiles Internet im ganzen Haus.\n• Gartengrill: Ein privater Grünbereich für gemütliches Grillen am Abend.\n• Kostenloser, geschlossener Parkplatz direkt an der Unterkunft.\n\nAlles in der Nähe:\n• Geschäfte und Restaurants 5 Autominuten entfernt\n• Zentrum von Karlobag 7 km\n• Perfekter Ausgangspunkt, um den Nord-Velebit, die Plitvicer Seen oder die Insel Pag zu entdecken!\n\nBei uns erwartet Sie ein richtig gemütlicher, gastfreundlicher Zufluchtsort (wir sprechen auch Ungarisch)!\n\nWählen Sie das passende Apartment:\n• Apartments mit zwei Schlafzimmern: eines im Erdgeschoss, eines im Obergeschoss (ideal für Familien und Freunde). 100 € / Nacht + Steuern\n• Studio-Apartment: Gemütliche Aufteilung im Obergeschoss (perfekt für Paare). 85 € / Nacht + Steuern",
          items: [] }
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
        ctaServices: ["Prodaja nekretnina", "Renovacija i održavanje", "Želim prodati / iznajmiti nekretninu", "Nekretnine za iznajmljivanje"]
      },
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
          ] }
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
      rentalsHeading: { title: "Nekretnine za iznajmljivanje", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranska obala", title: "Apartman s pogledom na more", rooms: "3 spavaće sobe + dnevni boravak", priceUnit: "/ noć",
          description: "Ukusno uređen, potpuno opremljen apartman za 4–6 osoba, 400 m od mora.",
          details: "U Zakosu kod Svetog Jurja moguće je rezervirati ukusno uređen apartman s pogledom na more za 4–6 osoba. Obala s plažom udaljena je oko 400 m, a uređena plaža oko 1,5 km, pa je pogodan i za obitelji s malom djecom.\n\nSlobodno nas kontaktirajte za više informacija.",
          items: [
            "Pogled na more, potpuno opremljen: wifi, klima, mogućnost pranja rublja, posteljina, ručnici",
            "3 spavaće sobe + dnevni boravak, pogodno za 4–6 osoba",
            "More i plaža oko 400 m, uređena plaža oko 1,5 km – pogodno i za obitelji s malom djecom",
            "Trgovine, restorani i igralište u blizini",
            "Cijena (ljeto): osnovna cijena 100 €/noć za 4 osobe, svaka dodatna osoba +10 €/noć, porez uključen"
          ],
          program: {
            label: "Prijedlozi izleta",
            items: [
              "Trodnevni izlet na jesen i proljeće: prijevoz i smještaj samo za 50.000 HUF! Posebni popusti za parove i obitelji.",
              "Cijena uključuje smještaj i prijevoz kombijem iz županija Baranya, Somogy, Tolna i iz Budimpešte; na zahtjev od vrata do vrata.",
              "Zadar: jedan od najljepših i najpoznatijih hrvatskih gradova, antički grad usred hrvatskog Jadrana.",
              "Nacionalni park Paklenica: na morskoj strani Velebita, oko 30 km od Zadra, s raznolikim biljnim i životinjskim svijetom.",
              "Kuterevo: utočište u kojem se o medvjedićima koji su ostali bez majke brine s punom pažnjom.",
              "Plitvička jezera: u šumovitim blagim dolinama slijevaju se brojni slapovi čiji se oblik i visina stalno mijenjaju."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Jadranska obala", title: "Villa Alexa", rooms: "3 apartmana, 5 spavaćih soba", priceUnit: "/ noć",
          description: "Apartmanska kuća u Cesarici: plaža nekoliko minuta hoda, privatne terase s pogledom na more, klima, Wi-Fi, vrtni roštilj i besplatan zatvoreni parking.",
          details: "Mir i udobnost uz more u Villi Alexa u Cesarici!\n\nŽelite li se odmoriti u mirnoj uvali kristalno čistog mora? Naša apartmanska kuća u mjestu Cesarica u Hrvatskoj savršen je izbor za bezbrižan odmor!\n\nZašto ćete nas zavoljeti:\n• More: Plaža je udaljena samo nekoliko minuta hoda od kuće, pa se možete osvježiti kad god poželite!\n• Pogled na more: Prostrane, privatne terase za prekrasne zalaske sunca.\n• Opremljeno i besprijekorno čisto: Udobne sobe, pametni TV i potpuno opremljena kuhinja čekaju vas.\n• Klima i brzi Wi-Fi: Hladne sobe i stabilan internet u cijeloj kući.\n• Vrtni roštilj: Privatni zeleni prostor za ugodno večernje roštiljanje.\n• Besplatan zatvoreni parking izravno uz smještaj.\n\nSve u blizini:\n• Trgovine i restorani 5 minuta vožnje\n• Centar Karlobaga 7 km\n• Savršeno polazište za istraživanje Sjevernog Velebita, Plitvičkih jezera ili otoka Paga!\n\nKod nas vas čeka istinski ugodno, gostoljubivo utočište (govorimo i mađarski)!\n\nOdaberite apartman koji vam odgovara:\n• Apartmani s dvije spavaće sobe: jedan u prizemlju, a jedan na katu (idealno za obitelji i prijatelje). 100 € / noć + porez\n• Studio apartman: Ugodan raspored na katu (savršen za parove). 85 € / noć + porez",
          items: [] }
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
        ctaServices: ["Prodej nemovitostí", "Renovace a údržba", "Chci prodat / pronajmout nemovitost", "Pronajímatelné nemovitosti"]
      },
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
          ] }
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
      rentalsHeading: { title: "Pronajímatelné nemovitosti", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranské pobřeží", title: "Apartmán s výhledem na moře", rooms: "3 ložnice + obývací pokoj", priceUnit: "/ noc",
          description: "Vkusně zařízený, plně vybavený apartmán pro 4–6 osob, 400 m od moře.",
          details: "V Zakosu u Sveti Juraj lze rezervovat vkusně zařízený apartmán s výhledem na moře pro 4–6 osob. Pobřeží s pláží je vzdáleno asi 400 m, upravená pláž asi 1,5 km, proto je vhodný i pro rodiny s malými dětmi.\n\nPro další informace nás neváhejte kontaktovat.",
          items: [
            "Výhled na moře, plně vybaveno: wifi, klimatizace, možnost praní, ložní prádlo, ručníky",
            "3 ložnice + obývací pokoj, vhodné pro 4–6 osob",
            "Moře a pláž asi 400 m, upravená pláž asi 1,5 km – vhodné i pro rodiny s malými dětmi",
            "Obchody, restaurace a dětské hřiště v blízkosti",
            "Cena (léto): základní cena 100 €/noc pro 4 osoby, každá další osoba +10 €/noc, včetně daně"
          ],
          program: {
            label: "Tipy na výlety",
            items: [
              "3denní výlet na podzim a na jaře: doprava a ubytování jen za 50 000 HUF! Zvláštní slevy pro páry a rodiny.",
              "Cena zahrnuje ubytování a dopravu minibusem z žup Baranya, Somogy, Tolna a z Budapešti; na přání od domu k domu.",
              "Zadar: jedno z nejkrásnějších a nejznámějších chorvatských měst, antické město uprostřed chorvatského Jadranu.",
              "Národní park Paklenica: na mořské straně pohoří Velebit, asi 30 km od Zadaru, s rozmanitou flórou a faunou.",
              "Kuterevo: útulek, kde se medvíďatům, která přišla o matku, dostává plné péče.",
              "Plitvická jezera: v zalesněných mírných údolích se řítí nespočet vodopádů, jejichž tvar a výška se neustále mění."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Jadranské pobřeží", title: "Villa Alexa", rooms: "3 apartmány, 5 ložnic", priceUnit: "/ noc",
          description: "Apartmánový dům v Cesarici: pláž pár minut pěšky, soukromé terasy s výhledem na moře, klimatizace, Wi-Fi, zahradní gril a bezplatné uzavřené parkování.",
          details: "Pohoda a pohodlí u moře ve Ville Alexa v Cesarici!\n\nChcete si odpočinout v klidné zátoce s křišťálově čistou vodou? Náš apartmánový dům ve vesnici Cesarica v Chorvatsku je dokonalou volbou pro bezstarostnou dovolenou!\n\nProč se vám u nás bude líbit:\n• Moře: Pláž je jen pár minut chůze od domu, takže se můžete kdykoli osvěžit!\n• Výhled na moře: Prostorné soukromé terasy pro nádherné západy slunce.\n• Vybaveno a dokonale čisté: Pohodlné pokoje, chytrá televize a plně vybavená kuchyně vás čekají.\n• Klimatizace a rychlé Wi-Fi: Chladné pokoje a stabilní internet v celém domě.\n• Zahradní gril: Soukromá zelená zóna pro příjemné večerní grilování.\n• Bezplatné uzavřené parkování přímo u ubytování.\n\nVšechno poblíž:\n• Obchody a restaurace 5 minut autem\n• Centrum Karlobagu 7 km\n• Ideální výchozí bod pro objevování Severního Velebitu, Plitvických jezer nebo ostrova Pag!\n\nU nás vás čeká opravdu domácké, pohostinné útočiště (mluvíme i maďarsky)!\n\nVyberte si apartmán, který vám vyhovuje:\n• Apartmány se dvěma ložnicemi: jeden v přízemí a jeden v patře (ideální pro rodiny a přátele). 100 € / noc + daň\n• Studio apartmán: Útulné uspořádání v patře (ideální pro páry). 85 € / noc + daň",
          items: [] }
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
        ctaServices: ["Predaj nehnuteľností", "Renovácia a údržba", "Chcem predať / prenajať nehnuteľnosť", "Prenajímateľné nehnuteľnosti"]
      },
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
          ] }
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
      rentalsHeading: { title: "Prenajímateľné nehnuteľnosti", note: "" },
      rentals: [
        { location: "Sveti Juraj, Zakos", region: "Jadranské pobrežie", title: "Apartmán s výhľadom na more", rooms: "3 spálne + obývačka", priceUnit: "/ noc",
          description: "Vkusne zariadený, plne vybavený apartmán pre 4–6 osôb, 400 m od mora.",
          details: "V Zakose pri Svetom Jurajovi je možné rezervovať vkusne zariadený apartmán s výhľadom na more pre 4–6 osôb. Pobrežie s pláží je vzdialené asi 400 m, upravená pláž asi 1,5 km, preto je vhodný aj pre rodiny s malými deťmi.\n\nPre ďalšie informácie nás neváhajte kontaktovať.",
          items: [
            "Výhľad na more, plne vybavené: wifi, klimatizácia, možnosť prania, posteľná bielizeň, uteráky",
            "3 spálne + obývačka, vhodné pre 4–6 osôb",
            "More a pláž asi 400 m, upravená pláž asi 1,5 km – vhodné aj pre rodiny s deťmi",
            "Obchody, reštaurácie a detské ihrisko v blízkosti",
            "Cena (leto): základná cena 100 €/noc pre 4 osoby, každá ďalšia osoba +10 €/noc, vrátane dane"
          ],
          program: {
            label: "Tipy na výlety",
            items: [
              "3-dňový výlet na jeseň a na jar: doprava a ubytovanie len za 50 000 HUF! Zvláštne zľavy pre páry a rodiny.",
              "Cena zahŕňa ubytovanie a dopravu minibusom zo žúp Baranya, Somogy, Tolna a z Budapešti; na želanie od domu k domu.",
              "Zadar: jedno z najkrajších a najznámejších chorvátskych miest, antické mesto uprostred chorvátskeho Jadranu.",
              "Národný park Paklenica: na morskej strane pohoria Velebit, asi 30 km od Zadaru, s rozmanitou flórou a faunou.",
              "Kuterevo: útulok, kde sa medvieďatám, ktoré prišli o matku, dostáva plná starostlivosť.",
              "Plitvické jazerá: v zalesnených miernych dolinách sa rútia nespočetné vodopády, ktorých tvar a výška sa neustále menia."
            ]
          } },
        { location: "Cesarica, Karlobag", region: "Jadranské pobrežie", title: "Villa Alexa", rooms: "3 apartmány, 5 spální", priceUnit: "/ noc",
          description: "Apartmánový dom v Cesarici: pláž pár minút pešo, súkromné terasy s výhľadom na more, klimatizácia, Wi-Fi, záhradný gril a bezplatné uzavreté parkovanie.",
          details: "Pokoj a pohodlie pri mori vo Ville Alexa v Cesarici!\n\nChcete si oddýchnuť v pokojnej zátoke s krištáľovo čistou vodou? Náš apartmánový dom v obci Cesarica v Chorvátsku je dokonalou voľbou na bezstarostnú dovolenku!\n\nPrečo sa vám u nás bude páčiť:\n• More: Pláž je len niekoľko minút chôdze od domu, takže sa môžete kedykoľvek osviežiť!\n• Výhľad na more: Priestranné súkromné terasy pre nádherné západy slnka.\n• Vybavené a dokonale čisté: Pohodlné izby, smart televízor a plne vybavená kuchyňa vás čakajú.\n• Klimatizácia a rýchle Wi-Fi: Chladné izby a stabilný internet v celom dome.\n• Záhradný gril: Súkromná zelená zóna na príjemné večerné grilovanie.\n• Bezplatné uzavreté parkovanie priamo pri ubytovaní.\n\nVšetko v blízkosti:\n• Obchody a reštaurácie 5 minút autom\n• Centrum Karlobagu 7 km\n• Ideálny východiskový bod na objavovanie Severného Velebitu, Plitvických jazier alebo ostrova Pag!\n\nU nás vás čaká skutočne domáce, pohostinné útočisko (hovoríme aj po maďarsky)!\n\nVyberte si apartmán, ktorý vám vyhovuje:\n• Apartmány s dvoma spálňami: jeden na prízemí a jeden na poschodí (ideálne pre rodiny a priateľov). 100 € / noc + daň\n• Štúdio apartmán: Útulné usporiadanie na poschodí (ideálne pre páry). 85 € / noc + daň",
          items: [] }
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
        text: "Máte otázku, alebo by ste chceli predať svoju nehnuteľnosť v Chorvátsku? Napíšte nám, zavolajte alebo vyplňte formulár.",
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
        successMessage: "Ďakujeme! Náš kolega vás bude čoskoro kontaktovať.",
        errorMessage: "Pri odosielaní správy sa vyskytla chyba. Skúste to prosím znova alebo nám napíšte na:",
        successTitle: "Ďakujeme!",
        errorTitle: "Správu sa nepodarilo odoslať",
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