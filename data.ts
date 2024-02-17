
import { IProject, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";



export const languages: ISkill[] = [
  {
    name: 'JS',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'React',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'TypeScript',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'HTML/CSS',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'Sass',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Node.js',
    level: '40%',
    Icon: BsCircleFill
  },
  {
    name: 'Bootstrap',
    level: '40%',
    Icon: BsCircleFill
  },
  {
    name: 'Tailwind CSS',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'NextJS',
    level: '50%',
    Icon: BsCircleFill
  }
];

export const tools: ISkill[] = [
  {
    name: 'Webpack',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Git',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'npm',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Figma',
    level: '50%',
    Icon: BsCircleFill
  }
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Internet shop",
    description: "Classic enternet shop based on React, TypeScript, Redux and HTML/CSS responsive layout with different pages",
    image_path: '/images/vue.jpg',
    deployed_url: "https://enternetshop.vercel.app",
    github_url: "https://github.com/Olegdrn/enternetshop",
    category: ["React", "TypeScript"],
    key_techs: ["React", "TypeScript", "Redux Toolkit", "React Router", "Create React App", "HTML/CSS", "SCSS", "flexbox", "grid"]
  },
  {
    id: 1,
    name: "Popap React",
    description: "Verification app build on React with JSON server",
    image_path: '/images/popap.jpg',
    deployed_url: "https://popap-omega.vercel.app",
    github_url: "https://github.com/Olegdrn/popap/pull/3",
    category: ["React"],
    key_techs: ["React", "JS", "HTML/CSS", "SCSS", "JSON-server", "LocalStorage", "npm"]
  },
      {
    id: 2,
    name: "Personal account with event list",
    description: "TypeScript responsive project with PrimeReact. The events are generated randomly with interval 5 sec from Event type, including paginator and posibility to select an event with Space KeyDown and cursor",
    image_path: '/images/EventList.jpg',
    deployed_url: "https://event-log-olive.vercel.app",
    github_url: "https://github.com/Olegdrn/EventLog",
    category: ["React", "TypeScript"],
    key_techs: ["React", "TypeScript", "HTML/CSS", "PrimeReact"]
  },
    {
    id: 3,
    name: "Flight booking app",
    description: "flight booking app with rendering flight list from mock-file, including sorting, filtration and react hook form",
    image_path: '/images/flightBooking.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/flightBooking/pull/1",
    category: ["React"],
    key_techs: ["React", "JS", "HTML/CSS", "SCSS", "JSON-server", "npm", "React hook form"]
  },
  {
    id: 4,
    name: "Website layout",
    description: "Simple student static HTML/CSS responsive layout",
    image_path: '/images/firstlay.jpg',
    deployed_url: "https://html-css-first-student-project.vercel.app/Contacts.html",
    github_url: "https://github.com/Olegdrn/HTML-CSS-first-student-project.git",
    category: ["HTML_CSS"],
    key_techs: ["HTML/CSS"],
  },
        {
    id: 5,
    name: "Hangman game",
    description: "Simple responsive React TypeScript app",
    image_path: '/images/hangman.jpg',
    deployed_url: "https://type-script-game.vercel.app",
    github_url: "https://github.com/Olegdrn/typeScriptGame",
    category: ["TypeScript", "React"],
    key_techs: ["React", "JS", "TypeScript"]
  },
      {
    id: 6,
    name: "React hook form with Node.js server",
    description: "Form based on react with node server data transfer between frontend and backend",
    image_path: '/images/reactNode.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/reactNodeServer/tree/main",
    category: ["NodeJS"],
    key_techs: ["React", "JS", "NodeJS"]
  },
    {
    id: 7,
    name: "Super Data Picker",
    description: "Date picker that supports relative and absolute dates based on React, TypeScript, Redux Toolkit",
    image_path: '/images/datapicker.jpg',
    deployed_url: "https://data-picker-nine.vercel.app",
    github_url: "https://github.com/Olegdrn/dataPicker",
    category: ["React", "TypeScript"], 
    key_techs: ["React", "TypeScript", "Redux Toolkit", "SCSS", "React hook form", "flexbox", "grid",]
  },
  {
    id: 8,
    name: "Catalog page based on Vue",
    description: "Classic catalog pages with search, menu and product card",
    image_path: '/images/shop.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/jsSecondCourse/pull/8",
    category: ["Vue", "JS"],
    key_techs: ["Vue", "JS", "HTML/CSS", "SCSS"]
  },
  {
    id: 9,
    name: "Popap native JS",
    description: "Verification app build on native JavaScript with LocalStorage",
    image_path: '/images/popap.jpg',
    deployed_url: "https://popap-vanilla-js.vercel.app",
    github_url: "https://github.com/Olegdrn/popap/pull/1",
    category: ["JS"],
    key_techs: ["JS", "HTML/CSS", "SCSS", "LocalStorage"]
  },
    {
    id: 11,
    name: "Portfolio",
    description: "Portfolio build on NextJS, TypeScript and Tailwind CSS",
    image_path: '/images/portfolio.jpg',
    deployed_url: "https://portfolio-odr.vercel.app",
    github_url: "https://github.com/Olegdrn/portfolioUPD",
    category: ["NextJS", "TypeScript", "Tailwind CSS"],
    key_techs: ["React", "TypeScript", "NextJS", "Tailwind CSS", "npm"]
  }
];
