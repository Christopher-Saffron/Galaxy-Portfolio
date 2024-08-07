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
    slug: "nippon-air",
    name: "Nippon Air",
    description:
      "'Nippon Air' project is an Online Marketplace inspired by AirBnb. Includes payment methods, map integration, databases, and basic 3D model usage. Utilizing technologies such as React, MongoDB, Paypal, Stripe, and more, it showcases these functionalities in action.",
    descriptionShort:
      "NipponAir is an Online Marketplace with 3d-models, STRIPE and Paypal, maps, login and reservation",
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
    id: 1,
    category: "web-development",
    slug: "socialsphere",
    name: "SocialSphere",
    description:
      "'Social Sphere' is a social media website. Project integrates Next.js authentication with Firebase for managing user data and files. Built on React and Next.js, it offers a streamlined user experience. Explore the project's code on GitHub and interact with its functionalities on the live website.",
    descriptionShort: "Social media website",
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
    id: 2,
    category: "web-development",
    slug: "chit-chat-app",
    name: "Chit Chat App",
    description:
      "Allows users to upload and receive text and image messages in real time without the need to refresh the page. All thanks to the snapshot functionality of Firebase.",
    descriptionShort: "Real time chat app",
    mainImg: "/project_images/chitchat0.png",
    imgs: [
      "/project_images/chitchat0.png",
      "/project_images/chitchat1.png",
      "/project_images/chitchat2.png",
      "/project_images/chitchat3.png",
    ],
    githubLink:
      "https://github.com/Christopher-Saffron/chit-chat-MESSAGING-APP",
    websiteLink: "https://chitchatapp-saffron.vercel.app/",
    technology: [
      "react",
      "tailwind",
      "typescript",
      "nextjs",
      "recoil",
      "firebase",
      "googleauth",
      "vercel",
    ],
  },

  {
    id: 3,
    category: "web-development",
    slug: "3d-shrine",
    name: "3D Shrine",
    description:
      "When I initially designed this page as a showcase for my Blender skills, I encountered strict browser limitations. Attempting to have users download a hefty 50MB file just to access the website seemed impractical. Thus, I opted to significantly reduce the file size and create a low-poly version of my original vision. This section of my portfolio employs Three.js, complemented by React Three Fiber, to present a 3D showcase that's browser-friendly and still reflects my creative capabilities. Check out the code on GitHub and experience the live version of my 3D portfolio.",
    descriptionShort:
      "Website that utilizes Three.js with help from React Three Fiber",
    mainImg: "/project_images/preview-3dportfolio.jpg",
    imgs: ["/project_images/preview-3dportfolio.jpg"],
    githubLink: "https://github.com/Havir-S/portfolio3d",
    websiteLink: "https://christophersaffron-3d.vercel.app/",
    technology: ["react", "scss", "gimp", "blender", "threejs", "vercel"],
  },
  {
    id: 4,
    category: "web-development",
    slug: "amazon",
    name: "Amazon",
    description:
      "'Amazon' project showcases the integration of a dummy API with STRIPE functionality, creating a simulated Amazon-like experience. Developed using React, Next.js, Tailwind CSS, Google Auth, Firebase, React-Redux, and Stripe for payments, this project highlights the implementation of online retail features. Discover its codebase on GitHub and explore its functionalities live on the website.",
    descriptionShort: "Amazon copy to highlight the STRIPE functionality",
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
    id: 5,
    category: "web-development",
    slug: "szafranprojekt",
    name: "SZAFRAN PROJEKT",
    description:
      "'SZAFRAN PROJEKT' is the official website of a traffic management design company. Using technologies such as React, Node.js, MongoDB, and more, the site demonstrates their expertise in traffic planning and design implementation. Explore their work on GitHub and experience their solutions live on their website.",
    descriptionShort:
      "Official website for a traffic management designing company",
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
    id: 6,
    category: "web-development",
    slug: "portfolio2d",
    name: "Portfolio 2D",
    description:
      "Portfolio created with React's power. Inspired by a bunch of japanese views that I have recreated in Blender.",
    descriptionShort: "Old 2D portfolio",
    mainImg: "/project_images/portfoliolight2.jpg",
    imgs: ["/project_images/portfoliolight2.jpg"],
    githubLink: "https://github.com/Havir-S/portfolio2d",
    websiteLink: "https://portfolio2d.vercel.app/",
    technology: ["react", "gimp", "blender", "scss", "vercel"],
  },
  {
    id: 38,
    category: "web-development",
    slug: "hulu",
    name: "Hulu",
    description:
      "'Hulu' project utilizes TMDB's API (The Movie Database) to populate a grid with relevant data swiftly. Built with React, Next.js, and Tailwind CSS, this project efficiently displays information retrieved from TMDB. Explore its codebase on GitHub and interact with the live version available on the website.",
    descriptionShort:
      "Works with TMDB's API (The Movie Database) and promptly shows the returned data with tailwind",
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
      " The 'Facebook' project is a test environment that incorporates Google Authentication and generates a feed accessible to all users. This replication of Facebook features a functional login system and a dynamic feed. Developed using React, Next.js, Google Auth, Firebase, and Tailwind CSS, this project's code is available on GitHub. Explore its functionalities live on the website.",
    descriptionShort: "Facebook copy. Working Login and feed.",
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
      "This is my blog where you can catch up on what's currently keeping me busy. I'm using Sanity as a database to share updates on my ongoing projects. It's built with React, Next.js, Tailwind CSS, and Sanity. Feel free to check out the code on GitHub and explore my live blog to see what I'm up to these days",
    descriptionShort:
      "Using sanity as a database for my posts. It shows what I'm currently working on'",
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
      '"Memento Mori," translating to "Remember that You will die," serves as a contemplative website intended to highlight the brevity of time and potentially inspire a reduction in procrastination. This platform displays the remaining time of the year in months, days, hours, and minutes, urging visitors to consider the passage of time. Developed using React and Tailwind CSS, the project is available for exploration on GitHub and accessible on the live website.',
    descriptionShort:
      "Shows the remaining time of the year in months, days and hours and minutes",
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
      "Allows all PCs connected to the local network to store data on the host.",
    descriptionShort: "File archive for bricscad projects",
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
    name: "Old Server - File Archive",
    description:
      "Allows PCs to share/store/archive FILES (on Local Connection)",
    descriptionShort:
      "File archive for bricscad projects - older version; client + server",
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
    name: "[2019] TIC-TAC-TOE with a (fake) chat",
    description: "Old project for either FreeCodeCamp or Project Odin.",
    descriptionShort: "Old project for either FreeCodeCamp or Project Odin.",
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
    name: "[2019] Classic Battleship game",
    description: "Old project for either FreeCodeCamp or Project Odin.",
    descriptionShort: "First time using blender for a website",
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
    name: "[2019] Restaurant website",
    description: "Old project for either FreeCodeCamp or Project Odin.",
    descriptionShort: "Using blender for website's props",
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
    name: "[2019] Pomodoro website",
    description: "25 minutes of work - 5 minutes of break",
    descriptionShort: "25 minutes of work - 5 minutes of break",
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
    name: "[2019] Japanese learning website",
    description: "Website I used to memorize words for japanese class.",
    descriptionShort: "Website I used to memorize words for japanese class.",
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
    name: "3D Portfolio Website forest",
    description: "Made for portfolio purposes.",
    descriptionShort:
      "Blender scene turned into a looped animation for website's needs.",
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
    name: "Low-poly shrine",
    description: "A shrine used for navigation on a website",
    descriptionShort: "A shrine used for navigation on a website",
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
    name: "Castle Render",
    description:
      "In this project, I have been experimenting within Blender to achieve a more realistic appearance. Trying my hands on material nodes, especially focusing on water.",
    descriptionShort: "Testing photorealistic settings.",
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
    name: "Japanese props",
    description: "Things I made for warmup.",
    descriptionShort: "Things I made for warmup",
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
    name: "2D Portfolio Props",
    description:
      "Objects used in a small 2D Project that used to serve as my portfolio.",
    descriptionShort:
      "Objects used in a small 2D Project that used to serve as my portfolio",
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
      "Back when I used to make characters for game use (like VRChat), I spotted a lot of people talking about one anime and the main character, and given that I was late to the party I decided to pick up the side quest, rather than the main mission, and so I went on to create the side character, rather than enter the race to create the main character late.",
    descriptionShort: "Anime styled character",
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
      "Character from a show I watched. This time I've went 3 steps ahead and created a character that was foreshadowed, yet has not appeared on screen once. I picked up some source material and figured out everything myself.",
    descriptionShort: "Anime styled character",
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
      "Main character from a show I've watched. This is my first attempt on a anime-styled character. It's from the same series as the other model I've created - Ramiris.",
    descriptionShort: "Anime styled character",
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
      "A Fallout-esque looking character which has caught my attention. Male anime characters have a completely different face structure from female characters, and until this character, I've never made a male character. So to top it off, I have also picked an unusual one.",
    descriptionShort: "Anime styled character",
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
      "Character which I haven't finished. During the creation of this model, I've been frequently visiting a game called VRChat, which back then had some unimaginable issues with hackers/crashers. Essentially what happend was - some folks decided to fry my GPU and by doing so, the power surge got most of my pc, somehow including my hard drive, on which this model was. I don't have files for this work so it only stays here as an old memento. The pictures are only from the development stage.",
    descriptionShort: "Anime styled character",
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
      "First character I've ever made. Created by following a 20+ parts, each 30min long tutorial.",
    descriptionShort: "Anime styled character",
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
    name: "Shape practice",
    description:
      "This is the stack of screenshots I didn't really want to put in separate posts, for various reasons. Some of those creations were used for HORROR PROJECTS (Collaboration with a map maker and Unity programmer friend for a VRChat event), COMEDY PROJECTS, for CHALLENGES and many more 'occasions'.",
    descriptionShort: "Multitude of 3d objects in one post",
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
    slug: "nippon-air-new-design",
    name: "Nippon Air New Design",
    description:
      "This project will soon replace my Airbnb website. The older website was created without any designing tools. I'll be replacing all of them in my free time!",
    descriptionShort: "Traveling, Flying and Housing. A project for fun!",
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
      "Well, this site went through many changes and redesigns, but never with a proper approach to design. I've started learning FIGMA after I found job offers for a web developer spot, but it required professional experience with design. So I started learning.",
    descriptionShort: "Final design for the website, prepared in FIGMA",
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
    name: "Asian Restaurant",
    description:
      "My favourite asian restaurant has a messy website, which loads images only after a second refresh. For no absolute reason. Mobile or PC. So hey, I figured, how difficult can making a better website be? Here's the starting design.",
    descriptionShort:
      "Idea inspired by a barely working website of my favourite asian restaurant",
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
    name: "Winery internet shop",
    description:
      "Prepared for my Vue.js project. The shopping part allows me to practive all the Vue concepts I need to learn and memorize, since I'm coming from React and even though javascript is the same, many concepts can be different. ",
    descriptionShort: "Prepared for my Vue.js project",
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
    name: "Ecommerce website",
    description:
      "A website I've designed that I will use for my PHP learning session. Nothing is as good as simplicity. Simple and effective, and hopefully fits that 'capitalistic' look of a casual e-commerce page.",
    descriptionShort:
      "A website I've designed that I will use for my PHP learning session.",
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
    name: "[Python] Script for making maps",
    description:
      "This little snippet of code (300+ lines of code) has saved me not minutes or hours. It has currently saved me weeks and months with how much it automates the mundane and boring processes. This script can be used with different types of maps, it stitches together small individual pieces of the map, it can also saturate the end image or delete certain colors from it. All automated, without a need for a manual input other than the settings.",
    descriptionShort: "A life-saver in my recent work.",
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
    name: "Taking an inventory of the roads",
    description:
      "Includes preparing precise videos that highlight the current situation of the road as well the surrounding road signs. In some cases those videos can also be sold to other designers. Thus making them even more of a valuable resource.",
    descriptionShort:
      "Videos like these are required for creating an up-to-date maps.",
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
    name: "Inventory of vertical and horizontal road signs ",
    description:
      "Using pre-recorded videos of the roads as well as utilizing any map that can be useful in order to recreate the current situation on the road.",
    descriptionShort:
      "Recreating the current road situation in AutoCAD/BricsCAD",
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
    name: "Preparing traffic design solutions ",
    description:
      "With the template map filled with road signs, we can now access the situation, consult the technical conditions and provide the most efficient as well as most practical solutions to our given project. After it is finished, the printed version must be supplied and processed by all governing offices, as well as the main police department. ",
    descriptionShort: "Ensuring our solutions comply with the law",
    mainImg: "/project_images/bricscad.png",
    imgs: ["/project_images/bricscad.png", "/project_images/bricscad4.jpg"],
    githubLink: "",
    websiteLink: "",
    technology: [],
  },
];

export default PROJECTS;
