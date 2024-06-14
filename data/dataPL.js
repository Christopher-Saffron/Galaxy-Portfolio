const template = {
  id: 0,
  category: "",
  slug: "",
  name: "",
  description: "",
  descriptionShort: "",
  mainImg: "",
  imgs: [""],
  githubLink: "",
  websiteLink: "",
  technology: [""],
};

export const WORKTYPES = [
  "web-development",
  "3d-models",
  "figma-designs",
  "scripts",
  "traffic-design",
];

const PROJECTS = [
  {
    id: 0,
    category: "web-development",
    slug: "szafranprojekt",
    name: "SZAFRAN PROJEKT",
    description:
      "'SZAFRAN PROJEKT' jest oficjalną stroną internetową firmy zajmującej się projektowaniem zarządzania ruchem drogowym. Wykorzystując technologie takie jak React, Node.js, MongoDB i inne, strona demonstruje ich ekspertyzę w planowaniu ruchu i wdrażaniu projektów. Obejrzyj ich prace na GitHubie i doświadcz rozwiązań na żywo na ich stronie internetowej.",
    descriptionShort:
      "Oficjalna strona dla firmy projektującej zarządzanie ruchem drogowym",
    mainImg: "/project_images/szafranprojektnextjs.jpg",
    imgs: [
      "/project_images/szafranprojektnextjs.jpg",
      "/project_images/szafranprojekt2.jpg",
    ],
    githubLink: "https://github.com/Havir-S/szafranprojekt-nextjs",
    websiteLink: "https://szafranprojekt-nextjs.vercel.app/",
    technology: [
      "react",
      "nodejs",
      "mongodb",
      "gimp",
      "scss",
      "gsap",
      "mui",
      "vercel",
    ],
  },
  {
    id: 1,
    category: "web-development",
    slug: "nippon-air",
    name: "NipponAir",
    description:
      "Projekt 'NipponAir' eksploruje praktyczne implementacje, wykorzystując strukturę Airbnb do symulacji metod płatności, integracji map, baz danych oraz podstawowego użycia modeli 3D. Wykorzystując technologie takie jak React, MongoDB, Paypal, Stripe i inne, prezentuje te funkcjonalności w akcji.",
    descriptionShort:
      "NipponAir to strona zajmująca się hotelarstwem. Wykorzystuje modele 3D, STRIPE i Paypal, mapy i GoogleAuth.",
    mainImg: "/project_images/nipponair0.png",
    imgs: ["/project_images/nipponair0.png"],
    githubLink:
      "https://github.com/Christopher-Saffron/NipponAir-ONLINE-MARKETPLACE",
    websiteLink: "https://nipponair.vercel.app/",
    technology: [
      "react",
      "blender",
      "mongoose",
      "mondogb atlas",
      "paypal",
      "stripe",
      "maps",
      "payments",
      "three.js",
      "nextjs",
      "tailwind",
      "react-leaflet",
      "googleauth",
      "vercel",
    ],
  },
  {
    id: 2,
    category: "web-development",
    slug: "socialsphere",
    name: "SocialSphere",
    description:
      "Projekt 'SocialSphere' integruje uwierzytelnianie Next.js z Firebase w celu zarządzania danymi użytkownika i plikami. Zbudowany w oparciu o React i Next.js, oferuje zoptymalizowane doświadczenie użytkownika. Zapoznaj się z kodem projektu na GitHubie i korzystaj z jego funkcji na żywo na stronie internetowej.",
    descriptionShort: "Strona social media próbująca odwzorować Instagram.",
    mainImg: "/project_images/socialsphere1.png",
    imgs: ["/project_images/socialsphere1.png"],
    githubLink: "https://github.com/Christopher-Saffron/Social-Sphere",
    websiteLink: "https://social-sphere-christopher-saffron.vercel.app/",
    technology: [
      "react",
      "nextjs",
      "firebase",
      "tailwind",
      "googleauth",
      "vercel",
    ],
  },
  {
    id: 3,
    category: "web-development",
    slug: "amazon",
    name: "Amazon",
    description:
      "Projekt 'Amazon' prezentuje integrację pozornego interfejsu API z funkcjonalnością STRIPE, tworząc symulację doświadczenia podobnego do Amazon. Opracowany przy użyciu React, Next.js, Tailwind CSS, Google Auth, Firebase, React-Redux i Stripe do płatności, projekt ten podkreśla implementację funkcji handlu detalicznego online. Odkryj jego kod na GitHubie i eksploruj funkcje na żywo na stronie internetowej.",
    descriptionShort: "'Kopia Amazona, aby podkreślić funkcjonalność STRIPE.'",
    mainImg: "/project_images/amazon.jpg",
    imgs: ["/project_images/amazon.jpg"],
    githubLink: "https://github.com/Havir-S/havir-amazon-stripe",
    websiteLink: "https://amazon-havir.vercel.app/",
    technology: [
      "react",
      "nextjs",
      "tailwind",
      "googleauth",
      "firebase",
      "react-redux",
      "stripe",
      "payments",
      "vercel",
    ],
  },
  {
    id: 4,
    category: "web-development",
    slug: "3dshrine",
    name: "3D Shrine",
    description:
      "Kiedy początkowo projektowałem tę stronę jako prezentację moich umiejętności w Blenderze, napotkałem surowe ograniczenia przeglądarki. Próba zmuszenia użytkowników do pobrania pokaźnego pliku o wielkości 50 MB, aby uzyskać dostęp do strony, była niemałym problemem. Z tego właśnie powodu, postanowiłem znacznie zmniejszyć rozmiar pliku i stworzyć wersję low-poly mojej pierwotnej wizji. Ta część mojego portfolio wykorzystuje Three.js, wspierany przez React Three Fiber, aby zaprezentować pokaz 3D przyjazny dla przeglądarek, który nadal odzwierciedla moje zdolności twórcze.",
    descriptionShort:
      "Strona która wykorzystuje Three.js oraz React Three Fiber.",
    mainImg: "/project_images/preview-3dportfolio.jpg",
    imgs: ["/project_images/preview-3dportfolio.jpg"],
    githubLink: "https://github.com/Havir-S/portfolio3d",
    websiteLink: "https://christophersaffron-3d.vercel.app/",
    technology: ["react", "scss", "gimp", "blender", "threejs", "vercel"],
  },
  {
    id: 5,
    category: "web-development",
    slug: "portfolio2d",
    name: "Portfolio 2D",
    description:
      "Portfolio stworzone przy pomocy mocy Reacta. Zainspirowane grupą japońskich widoków, które odtworzyłem w Blenderze.",
    descriptionShort: "'Stare portfolio 2D.'",
    mainImg: "/project_images/portfoliolight2.jpg",
    imgs: ["/project_images/portfoliolight2.jpg"],
    githubLink: "https://github.com/Havir-S/portfolio2d",
    websiteLink: "https://portfolio2d.vercel.app/",
    technology: ["react", "gimp", "blender", "scss", "vercel"],
  },
  {
    id: 6,
    category: "web-development",
    slug: "hulu",
    name: "Hulu",
    description:
      "'Projekt 'Hulu' wykorzystuje API TMDB (The Movie Database), aby szybko wypełnić siatkę odpowiednimi danymi. Zbudowany przy użyciu React, Next.js i Tailwind CSS, ten projekt wydajnie wyświetla informacje pobrane z TMDB. Zbadaj jego kod na GitHubie i korzystaj z wersji na żywo dostępnej na stronie internetowej.'",
    descriptionShort:
      "'Działa z API TMDB (The Movie Database) i szybko pokazuje zwrócone dane z wykorzystaniem tailwind.'",
    mainImg: "/project_images/hulu.jpg",
    imgs: ["/project_images/hulu.jpg"],
    githubLink: "https://github.com/Havir-S/hulu-v2",
    websiteLink: "https://hulu-v2-two.vercel.app/",
    technology: ["react", "nextjs", "tailwind", "vercel"],
  },
  {
    id: 7,
    category: "web-development",
    slug: "facebook",
    name: "Facebook",
    description:
      "'Projekt 'Facebook' to środowisko testowe, które wykorzystuje uwierzytelnianie Google i generuje kanał dostępny dla wszystkich użytkowników. Ta replika Facebooka posiada funkcjonalny system logowania i dynamiczny kanał. Opracowany przy użyciu React, Next.js, Google Auth, Firebase i Tailwind CSS, kod tego projektu jest dostępny na GitHubie. Zbadaj jego funkcje na żywo na stronie internetowej.'",
    descriptionShort: "'Kopia Facebooka. Działający login i kanał.'",
    mainImg: "/project_images/facebook.jpg",
    imgs: ["/project_images/facebook.jpg"],
    githubLink: "https://github.com/Havir-S/fb-clone",
    websiteLink: "https://havir-facebook.vercel.app/",
    technology: [
      "react",
      "nextjs",
      "googleauth",
      "firebase",
      "tailwind",
      "vercel",
    ],
  },
  {
    id: 8,
    category: "web-development",
    slug: "blog",
    name: "Blog",
    description:
      "To jest mój blog, gdzie możesz nadążyć za tym, co obecnie mnie zajmuje. Używam Sanity jako bazy danych do udostępniania aktualizacji moich trwających projektów. Zbudowany przy użyciu React, Next.js, Tailwind CSS i Sanity. Zapraszam do sprawdzenia kodu na GitHubie i eksplorowania mojego żywego bloga, aby zobaczyć, czym się ostatnio zajmuję.'",
    descriptionShort:
      "'Używanie sanity jako bazy danych do moich wpisów. Pokazuje, nad czym obecnie pracuję.'",
    mainImg: "/project_images/blog.jpg",
    imgs: ["/project_images/blog.jpg"],
    githubLink: "https://github.com/Havir-S/blog-restored",
    websiteLink: "https://bloghavir.vercel.app/",
    technology: ["react", "nextjs", "tailwind", "sanity", "vercel"],
  },
  {
    id: 9,
    category: "web-development",
    slug: "mementomori",
    name: "Memento Mori",
    description:
      '"Memento Mori," co tłumaczy się jako "Pamiętaj, że umrzesz", służy jako refleksyjna strona internetowa mająca na celu podkreślenie krótkotrwałości czasu i potencjalnie zainspirowanie do zmniejszenia odkładania spraw na później. Ta platforma wyświetla pozostały czas roku w miesiącach, dniach, godzinach i minutach, zachęcając odwiedzających do przemyślenia upływu czasu. Opracowany przy użyciu React i Tailwind CSS, projekt jest dostępny do eksploracji na GitHubie i dostępny na żywo na stronie internetowej.',
    descriptionShort:
      "'Pokazuje pozostały czas roku w miesiącach, dniach, godzinach i minutach.'",
    mainImg: "/project_images/mementomori.jpg",
    imgs: ["/project_images/mementomori.jpg"],
    githubLink: "https://github.com/Havir-S/mementomori",
    websiteLink: "https://mementomori-mocha.vercel.app/",
    technology: ["react", "tailwind", "vercel"],
  },
  {
    id: 10,
    category: "web-development",
    slug: "simpleServer",
    name: "File Archive",
    description:
      "Pozwala wszystkim komputerom podłączonym do lokalnej sieci przechowywać dane na hoście.'",
    descriptionShort: "'Archiwum plików dla projektów bricscad.'",
    mainImg: "/project_images/simpleserver.jpg",
    imgs: ["/project_images/simpleserver.jpg"],
    githubLink:
      "https://github.com/Havir-S/szafranprojekt-nextjs-project-browser",
    websiteLink: "",
    technology: [
      "nodejs",
      "react",
      "nextjs",
      "tailwind",
      "mongoose",
      "mongodb",
    ],
  },

  {
    id: 11,
    category: "web-development",
    slug: "oldserver",
    name: "Stary serwer - Archiwum plików",
    description:
      "Pozwala komputerom na udostępnianie/przechowywanie/archiwizowanie PLIKÓW (w sieci lokalnej)",
    descriptionShort:
      "Archiwum plików dla projektów bricscad - starsza wersja; klient + serwer",
    mainImg: "/project_images/oldserver.jpg",
    imgs: ["/project_images/oldserver.jpg"],
    githubLink: [
      "https://github.com/Havir-S/szafranprojekt-dev-client-template",
      "https://github.com/Havir-S/szafranprojekt-dev-server",
    ],
    websiteLink: "",
    technology: [
      "nodejs",
      "mongoose",
      "expressjs",
      "mongodb",
      "mui",
      "scss",
      "maps",
      "gimp",
    ],
  },
  {
    id: 12,
    category: "web-development",
    slug: "tictactoe",
    name: "[2019] Kółko i krzyżyk z (fałszywym) czatem",
    description: "Stary projekt dla FreeCodeCamp lub Project Odin.",
    descriptionShort: "Stary projekt dla FreeCodeCamp lub Project Odin.",
    mainImg: "/project_images/tictactoe.jpg",
    imgs: ["/project_images/tictactoe.jpg"],
    githubLink: "https://github.com/Havir-S/tic-tac-toe",
    websiteLink: "https://havir-s.github.io/tic-tac-toe/",
    technology: ["javascript", "heroku"],
  },
  {
    id: 13,
    category: "web-development",
    slug: "battleships",
    name: "[2019] Klasyczna gra w statki",
    description: "Stary projekt dla FreeCodeCamp lub Project Odin.",
    descriptionShort: "Pierwsze użycie blendera do strony internetowej",
    mainImg: "/project_images/battleships.jpg",
    imgs: ["/project_images/battleships.jpg"],
    githubLink: "https://github.com/Havir-S/battleships-deployed",
    websiteLink: "https://havir-s.github.io/battleships-deployed/",
    technology: ["javascript", "blender", "heroku"],
  },
  {
    id: 14,
    category: "web-development",
    slug: "restaurant",
    name: "[2019] Strona internetowa restauracji",
    description: "Stary projekt dla FreeCodeCamp lub Project Odin.",
    descriptionShort: "Używanie blendera do rekwizytów strony internetowej",
    mainImg: "/project_images/restaurant.jpg",
    imgs: ["/project_images/restaurant.jpg"],
    githubLink: "https://github.com/Havir-S/restaurant-page-react",
    websiteLink: "https://havir-s.github.io/restaurant-page-react/",
    technology: ["javascript", "blender", "heroku"],
  },
  {
    id: 15,
    category: "web-development",
    slug: "pomodoro",
    name: "[2019] Strona internetowa Pomodoro",
    description: "25 minut pracy - 5 minut przerwy",
    descriptionShort: "25 minut pracy - 5 minut przerwy",
    mainImg: "/project_images/pomodoro.jpg",
    imgs: ["/project_images/pomodoro.jpg"],
    githubLink: "https://github.com/Havir-S/pomodoro-havir",
    websiteLink: "https://havir-s.github.io/pomodoro-havir/",
    technology: ["javascript", "heroku"],
  },
  {
    id: 16,
    category: "web-development",
    slug: "learnjapanese",
    name: "[2019] Strona do nauki japońskiego",
    description:
      "Strona, którą używałem do zapamiętywania słów na lekcjach japońskiego.",
    descriptionShort:
      "Strona, którą używałem do zapamiętywania słów na lekcjach japońskiego.",
    mainImg: "/project_images/jplearn.jpg",
    imgs: ["/project_images/jplearn.jpg"],
    githubLink: "https://github.com/Havir-S/jap_learn",
    websiteLink: "https://havir-s.github.io/jap_learn/",
    technology: ["javascript"],
  },
  {
    id: 17,
    category: "3d-models",
    slug: "forest",
    name: "Strona Portfolio 3D - las",
    description: "Stworzone do celów portfolio.",
    descriptionShort:
      "Scena Blendera zamieniona w animację do celów strony internetowej.",
    mainImg: "/project_images/forest8.png",
    imgs: [
      "/project_images/forest1.jpg",
      "/project_images/forest2.jpg",
      "/project_images/forest3.jpg",
      "/project_images/forest4.jpg",
      "/project_images/forest5.jpg",
      "/project_images/forest6.jpg",
      "/project_images/forest7.png",
      "/project_images/forest8.png",
      "/project_images/forest9.png",
      "/project_images/forest10.png",
      "/project_images/forest11.png",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 18,
    category: "3d-models",
    slug: "shrine",
    name: "Niskopoligonalny świątynia",
    description: "Świątynia używana do nawigacji na stronie internetowej.",
    descriptionShort: "Świątynia używana do nawigacji na stronie internetowej.",
    mainImg: "/project_images/shrine.jpg",
    imgs: [
      "/project_images/shrine.jpg",
      "/project_images/shrine2.jpg",
      "/project_images/shrine3.jpg",
      "/project_images/shrine4.jpg",
      "/project_images/shrine5.jpg",
      "/project_images/shrine6.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 19,
    category: "3d-models",
    slug: "castle-render",
    name: "Render zamku",
    description:
      "W tym projekcie eksperymentowałem w Blenderze, aby uzyskać bardziej realistyczny wygląd. Próbowałem różnych ustawień materiałów, szczególnie skupiając się na wodzie.",
    descriptionShort: "Testowanie ustawień fotorealistycznych.",
    mainImg: "/project_images/castle.jfif",
    imgs: [
      "/project_images/castle1.jfif",
      "/project_images/castle2.jfif",
      "/project_images/castle.jfif",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender"],
  },
  {
    id: 20,
    category: "3d-models",
    slug: "japanese-objects",
    name: "Japońskie rekwizyty",
    description: "Rzeczy, które stworzyłem jako rozgrzewka.",
    descriptionShort: "Rzeczy, które stworzyłem jako rozgrzewka.",
    mainImg: "/project_images/japanese5.jfif",
    imgs: [
      "/project_images/japanese2.jfif",
      "/project_images/japanese3.jfif",
      "/project_images/japanese4.jfif",
      "/project_images/japanese5.jfif",
      "/project_images/japanese1.jfif",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender"],
  },
  {
    id: 21,
    category: "3d-models",
    slug: "2d-portfolio-props",
    name: "Rekwizyty portfolio 2D",
    description: "Obiekty wykorzystane do sceny na stronie do portfolio.",
    descriptionShort: "Obiekty wykorzystane do sceny na stronie do portfolio",
    mainImg: "/project_images/lp14.jpg",
    imgs: [
      "/project_images/lp15.jpg",
      "/project_images/lp16.jpg",
      "/project_images/lp17.jpg",
      "/project_images/lp14.jpg",
      "/project_images/lp4.jpg",
      "/project_images/lp5.jpg",
      "/project_images/lp6.jpg",
      "/project_images/lp7.jpg",
      "/project_images/lp8.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 22,
    category: "3d-models",
    slug: "ichigo",
    name: "Ichigo",
    description:
      "Kiedyś robiłem postacie do użytku w grach (np. VRChat), zauważyłem dużo ludzi, którzy rozmawiali o jednym anime i głównym bohaterze. Biorąc pod uwagę, że się spóźniłem na przyjęcie, postanowiłem zająć się zadaniami pobocznymi, zamiast głównym, i tak stworzyłem postać poboczną, zamiast wziąć udział w wyścigu o stworzenie głównej postaci późno.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/Ichigo.jpg",
    imgs: [
      "/project_images/Ichigo2.jpg",
      "/project_images/Ichigo4.jpg",
      "/project_images/Ichigo5.png",
      "/project_images/Ichigo7.jpg",
      "/project_images/Ichigo8.jfif",
      "/project_images/Ichigo8.jfif",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 23,
    category: "3d-models",
    slug: "ramiris",
    name: "Ramiris",
    description:
      "Postać z programu, który oglądałem. Tym razem poszedłem trzy kroki naprzód i stworzyłem postać, która była zwiastowana, a jednak nie pojawiła się na ekranie ani razu. Zebrałem trochę materiałów źródłowych i wszystko samemu sobie rozgryzłem.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/Ramiris1.jpg",
    imgs: [
      "/project_images/Ramiris1.jpg",
      "/project_images/Ramiris6.jpg",
      "/project_images/Ramiris8.png",
      "/project_images/Ramiris.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 24,
    category: "3d-models",
    slug: "rimuru",
    name: "Rimuru",
    description:
      "Główny bohater z programu, który obejrzałem. To moja pierwsza próba stworzenia postaci w stylu anime. Jest z tej samej serii co inny model, który stworzyłem - Ramiris.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/Rimuru3.jpg",
    imgs: [
      "/project_images/Rimuru.jpg",
      "/project_images/Rimuru3.jpg",
      "/project_images/Rimuru6.jpg",
      "/project_images/Rimuru5.jpg",
      "/project_images/Rimuru4.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 25,
    category: "3d-models",
    slug: "mirio",
    name: "Mirio",
    description:
      "Postać wyglądająca jak z gry Fallout, która przyciągnęła moją uwagę. Męskie postacie anime mają zupełnie inną strukturę twarzy niż postacie żeńskie, i do tej postaci nigdy nie stworzyłem postaci męskiej. Więc aby to urozmaicić, wybrałem nietypową postać.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/Mirio3.png",
    imgs: [
      "/project_images/Mirio2.png",
      "/project_images/Mirio3.png",
      "/project_images/Mirio.png",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 26,
    category: "3d-models",
    slug: "hayasaka",
    name: "Hayasaka",
    description:
      "Postać, której nie ukończyłem. Podczas tworzenia tego modelu często odwiedzałem grę o nazwie VRChat, która wtedy miała nieprawdopodobne problemy z hakerami/crasherami. W skrócie - jacyś ludzie postanowili spalić moją kartę graficzną, a przez to wiele rzeczy na moim komputerze, w tym moim dysku twardego, na którym były pliki z tym modelem. Nie mam plików do tej pracy, więc zostaje to tylko jako stare wspomnienie. Zdjęcia są tylko z etapu tworzenia.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/Hayasaka.png",
    imgs: [
      "/project_images/Hayasaka2.jfif",
      "/project_images/Hayasaka3.jfif",
      "/project_images/Hayasaka.png",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 27,
    category: "3d-models",
    slug: "shinon",
    name: "Shinon",
    description:
      "Pierwsza postać, którą kiedykolwiek stworzyłem. Utworzona poprzez wykonanie ponad 20 częściowych, każda trwająca 30 minut, samouczków.",
    descriptionShort: "Postać w stylu anime",
    mainImg: "/project_images/sinon.jpg",
    imgs: ["/project_images/sinon.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 28,
    category: "3d-models",
    slug: "learning-shapes",
    name: "Ćwiczenia z kształtami",
    description:
      "To zestaw zrzutów ekranu, których nie chciałem umieszczać osobno z różnych powodów. Niektóre z tych tworów zostały użyte do PROJEKTÓW HORROROWYCH (Współpraca z twórcą mapy i programistą Unity dla wydarzenia w VRChat), PROJEKTÓW KOMEDIOWYCH, WYZWAŃ i wielu innych 'okazji'.",
    descriptionShort: "Wiele obiektów 3D w jednym poście",
    mainImg: "/project_images/keyboard1.jpg",
    imgs: [
      "/project_images/shoe1.png",
      "/project_images/shoe2.png",
      "/project_images/sculpting2.jfif",
      "/project_images/sculpting.jpg",
      "/project_images/keyboard1.jpg",
      "/project_images/garfield1.jpg",
      "/project_images/garfield2.jpg",
      "/project_images/garfield3.jpg",
      "/project_images/trash.jfif",
      "/project_images/trash2.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: ["blender", "gimp"],
  },
  {
    id: 37,
    category: "figma-designs",
    slug: "nippon-air",
    name: "Nippon Air",
    description:
      "W wolnej chwili zamierzam próbować wdrożyć ten design na stronę Nippon Air.",
    descriptionShort: "Podróże, Samoloty i hotele. Przyszły design Nippon Air!",
    mainImg: "/project_images/nipponair1.jpg",
    imgs: [
      "/project_images/nipponair12.png",
      "/project_images/nipponair1.jpg",
      "/project_images/nipponair3.jpg",
      "/project_images/nipponair4.jpg",
      "/project_images/nipponair5.jpg",
      "/project_images/nipponair6.jpg",
      "/project_images/nipponair7.jpg",
      "/project_images/nipponair8.jpg",
      "/project_images/nipponair10.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 29,
    category: "figma-designs",
    slug: "szafran-projekt-firma",
    name: "SZAFRAN PROJEKT",
    description:
      "Ta strona przechodziła wiele zmian i przebudów, ale nigdy z właściwym podejściem do projektowania. Zacząłem uczyć się FIGMA po znalezieniu ofert pracy na stanowisko web developera, ale wymagało to profesjonalnego doświadczenia w projektowaniu. Tak więc zacząłem się uczyć.",
    descriptionShort:
      "Ostateczny projekt strony internetowej, przygotowany w FIGMA",
    mainImg: "/project_images/szafranfigma4.jpg",
    imgs: [
      "/project_images/szafranfigma3.jpg",
      "/project_images/szafranfigma2.jpg",
      "/project_images/szafranfigma1.jpg",
      "/project_images/szafranfigma4.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 30,
    category: "figma-designs",
    slug: "asian-restaurant",
    name: "Azjatycka Restauracja",
    description:
      "Moja ulubiona azjatycka restauracja ma bałaganiarską stronę internetową, która wczytuje obrazy dopiero po drugim odświeżeniu. Bez żadnego konkretnego powodu. Na telefonie lub komputerze. Zastanawiałem się, jak trudne może być stworzenie lepszej strony internetowej. Oto początkowy projekt.",
    descriptionShort:
      "Pomysł zainspirowany ledwo działającą stroną mojej ulubionej azjatyckiej restauracji",
    mainImg: "/project_images/restaurante4.jpg",
    imgs: [
      "/project_images/restaurante3.jpg",
      "/project_images/restaurante2.jpg",
      "/project_images/restaurante1.jpg",
      "/project_images/restaurante4.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 31,
    category: "figma-designs",
    slug: "winery",
    name: "Sklep internetowy Winery",
    description:
      "Przygotowany na potrzeby mojego projektu Vue.js. Dzięki części zakupowej mogę praktykować wszystkie koncepcje Vue, których potrzebuję się nauczyć i zapamiętać, ponieważ przechodzę z Reacta i mimo że język JavaScript jest taki sam, wiele koncepcji może być różnych.",
    descriptionShort: "Przygotowany na potrzeby mojego projektu Vue.js",
    mainImg: "/project_images/winery1.jpg",
    imgs: [
      "/project_images/winery3.jpg",
      "/project_images/winery2.jpg",
      "/project_images/winery1.jpg",
      "/project_images/winery4.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 32,
    category: "figma-designs",
    slug: "ecommerce-figma",
    name: "Strona e-commerce",
    description:
      "Strona, którą zaprojektowałem i którą wykorzystam w swojej sesji nauki PHP. Nic nie jest tak dobre jak prostota. Proste i skuteczne, i mam nadzieję, że pasuje do tego 'kapitalistycznego' wyglądu zwykłej strony e-commerce.",
    descriptionShort:
      "Strona, którą zaprojektowałem i którą wykorzystam w swojej sesji nauki PHP",
    mainImg: "/project_images/ecommerce2.jpg",
    imgs: ["/project_images/ecommerce1.jpg", "/project_images/ecommerce2.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 33,
    category: "scripts",
    slug: "map-maker",
    name: "[Python] Skrypt do tworzenia map",
    description:
      "Ten mały fragment kodu (ponad 300 linii kodu) oszczędził mi nie tylko minut czy godzin. Obecnie oszczędził mi tygodnie i miesiące ze względu na to, jak bardzo automatyzuje nudne i monotonne procesy. Ten skrypt może być używany z różnymi typami map, łączy małe indywidualne fragmenty mapy, może także nasycać końcowy obraz lub usuwać określone kolory z niego. Wszystko zautomatyzowane, bez potrzeby ręcznego wprowadzania danych poza ustawieniami.",
    descriptionShort: "Bohater w mojej ostatniej pracy.",
    mainImg: "/project_images/mapMaker1.jpg",
    imgs: ["/project_images/mapMaker1.jpg", "/project_images/mapMaker2.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 34,
    category: "traffic-design",
    slug: "inventory-of-the-roads",
    name: "Inwentaryzacja dróg",
    description:
      "Obejmuje przygotowanie precyzyjnych filmów, które podkreślają aktualną sytuację na drodze oraz otaczających znaków drogowych. W niektórych przypadkach te filmy mogą być także sprzedawane innym projektantom, co czyni je jeszcze bardziej wartościowymi.",
    descriptionShort:
      "Filmy tego typu są niezbędne do tworzenia aktualnych map.",
    mainImg: "/project_images/bricscad9.jpg",
    imgs: [
      "/project_images/bricscad11.jpg",
      "/project_images/bricscad9.jpg",
      "/project_images/bricscad10.jpg",
      "/project_images/bricscad7.jpg",
    ],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 35,
    category: "traffic-design",
    slug: "road-sign-inventory",
    name: "Inwentaryzacja znaków drogowych pionowych i poziomych",
    description:
      "Wykorzystując wstępnie nagrane filmy z dróg oraz korzystając z jakiejkolwiek mapy, która może być przydatna do odtworzenia aktualnej sytuacji na drodze.",
    descriptionShort:
      "Odtworzenie bieżącej sytuacji drogowej w AutoCADzie/BricsCADzie",
    mainImg: "/project_images/bricscad3.jpg",
    imgs: ["/project_images/bricscad2.jpg", "/project_images/bricscad3.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
  {
    id: 36,
    category: "traffic-design",
    slug: "traffic-solutions",
    name: "Projektowanie ruchu drogowego",
    description:
      "Dzięki mapie wzorcowej wypełnionej znakami drogowymi możemy teraz ocenić sytuację, skonsultować warunki techniczne i zapewnić najbardziej efektywne oraz praktyczne rozwiązania dla naszego konkretnego projektu. Po zakończeniu musi być dostarczona i przetworzona przez wszystkie urzędy oraz główny departament policji.",
    descriptionShort: "Zapewnienie zgodności rozwiązań z prawem",
    mainImg: "/project_images/bricscad.png",
    imgs: ["/project_images/bricscad.png", "/project_images/bricscad4.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
];

export default PROJECTS;
