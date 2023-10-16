
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
    level: '50%',
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
    description: "Classic static HTML/CSS responsive layout with different pages",
    image_path: '/images/vue.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/HTML_CSS_ODR/pull/8",
    category: ["HTML_CSS"],
    key_techs: ["HTML/CSS", "SCSS", "flexbox", "grid"]
  },
    {
    id: 1,
    name: "React popap with Node.js server",
    description: "Form based on react with node server data transfer between frontend and backend",
    image_path: '/images/reactNode.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/reactNodeServer/tree/main",
    category: ["NodeJS"],
    key_techs: ["React", "JS", "NodeJS"]
  },
  {
    id: 2,
    name: "Popap React",
    description: "Verification app build on React with JSON server",
    image_path: '/images/popap.jpg',
    deployed_url: "https://popap-omega.vercel.app",
    github_url: "https://github.com/Olegdrn/popap/pull/3",
    category: ["React"],
    key_techs: ["React", "JS", "HTML/CSS", "SCSS", "JSON-server", "LocalStorage", "npm"]
  },
  {
    id: 3,
    name: "Website layout",
    description: "Simple student static HTML/CSS responsive layout",
    image_path: '/images/firstlay.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/HTML-CSS-first-student-project.git",
    category: ["HTML_CSS"],
    key_techs: ["HTML/CSS"],
  },
  {
    id: 4,
    name: "webPack",
    description: "Simple webPack assembly video player prototype",
    image_path: '/images/webpack.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/webPack/pull/4",
    category: ["webPack", "JS"],
    key_techs: ["webPack", "npm"],
  },

  {
    id: 5,
    name: "Catalog page based on Vue",
    description: "Classic catalog pages with search, menu and product card",
    image_path: '/images/shop.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/jsSecondCourse/pull/8",
    category: ["Vue", "JS"],
    key_techs: ["Vue", "JS", "HTML/CSS", "SCSS"]
  },
  {
    id: 6,
    name: "Popap native JS",
    description: "Verification app build on native JavaScript with LocalStorage",
    image_path: '/images/popap.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/popap/pull/1",
    category: ["JS"],
    key_techs: ["JS", "HTML/CSS", "SCSS", "LocalStorage"]
  },
  {
    id: 7,
    name: "Portfolio",
    description: "Portfolio build on NextJS, TypeScript and Tailwind CSS",
    image_path: '/images/portfolio.jpg',
    deployed_url: "https://portfolio-odr.vercel.app",
    github_url: "https://github.com/Olegdrn/portfolioUPD",
    category: ["NextJS", "TypeScript", "Tailwind CSS", "React"],
    key_techs: ["React", "TypeScript", "NextJS", "Tailwind CSS", "npm"]
  },
  {
    id: 8,
    name: "Blogs application",
    description: "App for creating blogs and sending POST, Delete methods",
    image_path: '/images/blogs.jpg',
    deployed_url: "",
    github_url: "https://github.com/Olegdrn/react/pull/4",
    category: ["React", "JS"],
    key_techs: ["React", "JS", "HTML/CSS", "SCSS", "JSON-server", "npm"]
  }
];
