//portfolio

import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/image2.png";
import IMG3 from "../../assets/image3.png";
import IMG4 from "../../assets/image4.png";
import IMG5 from "../../assets/image5.png";
import IMG6 from "../../assets/image6.png";
import IMG7 from "../../assets/image7.png";
import IMG8 from "../../assets/image8.png";
import IMG9 from "../../assets/image9.png";
import IMG10 from "../../assets/image10.png";
import IMG11 from "../../assets/image11.png";
import IMG12 from "../../assets/image12.png";

//parcours
import Wafasalaf from "../../assets/wafasalaf.png";
import imgdoc from "../../assets/imgdoc.png";
//intro
import img from "../../assets/Me.webp";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
//portfolio
export const soloProjects = [
  {
    id: 1,
    title: "E-commerce CRM Solution",
    img: IMG1,
    description:
      "Streamline and Enhance Customer Relationship Management for E-commerce.",
    technologies: "Laravel | PHP | MySQL",
    // code: "https://github.com/Cherkani/-PFA-.git",
    // livedemo: "no",
    video: "https://github.com/Cherkani/-PFA-.git",
  },
  {
    id: 1,
    title: "Medical Faculty Management",
    img: IMG12,
    description:
      "Mobile application and website for managing a medical faculty. Professors create assignments that students complete.",
    technologies: "React | Java Native | Spring Security",
    code: "https://github.com/Cherkani/tooth_react_springsecurity",
    video: "https://github.com/Cherkani/tooth_react_springsecurity",
  },

  {
    id: 2,
    title: "Restaurant Finder and Filtering Project",
    img: IMG3,
    description:
      "Discovering and Locating the Perfect Dining Spot with the MERN Stack.",
    technologies: "MERN Stack | MongoDB | Express.js | React | Node.js",
    code: "https://github.com/Cherkani/restaurant.git",
    livedemo: "https://restaurant-cherkani.vercel.app/",
    video: "https://github.com/Cherkani/restaurant.git",
  },
  {
    id: 3,
    title: "Profsswap",
    img: IMG2,
    description:
      "Empowering University Professor Exchanges with a Mobile Application.",
    technologies: "React Native | Mobile Development",
    code: "https://github.com/Cherkani/ProfSwap",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/ProfSwap",
  },
  {
    id: 4,
    title: "CRUD Management System for Machines in Rooms",
    img: IMG4,
    description:
      "Efficiently Manage Machines in Rooms with Laravel-powered CRUD System.",
    technologies: "Laravel | PHP | MySQL",
    code: "https://github.com/Cherkani/laravel-first-project",
    // livedemo: "no",
    // video: "no",
  },
  {
    id: 5,
    title: "Pokédex",
    img: IMG5,
    description:
      "Explore the World of Pokémon with the React Native-Powered Pokédex.",
    technologies: "React Native | Mobile Development",
    code: "https://github.com/Cherkani/PokeDex-RN-App.git",
    livedemo:
      "https://expo.dev/@aymen108/PokeDex-RN-App?serviceType=classic&distribution=expo-go",
    video: "https://github.com/Cherkani/PokeDex-RN-App.git",
  },
  {
    id: 6,
    title: "Library Management",
    img: IMG6,
    description:
      "Efficient Library Management for Seamless Book Borrowing and Returns.",
    technologies: "Custom | Library Management System",
    code: "https://github.com/Cherkani/JAVA_GESTION_librairie",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/JAVA_GESTION_librairie",
  },
  {
    id: 7,
    title: "Fuel Depot Shortcut Project",
    img: IMG7,
    description:
      "Optimizing Travel with the Python-powered Fuel Depot Shortcut Project.",
    technologies: "Python | Algorithm Optimization",
    //  code: "no",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/fuel_short_path_first_project_python",
  },
  {
    id: 8,
    title: "CRUD Machines Management Jsf EJB",
    img: IMG8,
    description:
      "Designed a Machines Management system utilizing JavaServer Faces (JSF) and Enterprise JavaBeans (EJB). This CRUD focuses on streamlined employee machine allocation and includes a simple graph for visualizing key data points.",
    technologies: "JSF | Hibernate | EJB",
    code: "https://github.com/Cherkani/Gestion_Machines_Jsf_EJB",
    // livedemo: "no",
    video: "https://github.com/Cherkani/Gestion_Machines_Jsf_EJB",
  },
  {
    title: "CRUD Student Management System",
    img: IMG9,
    description:
      " Developed a Student Management System using Spring Boot, Swagger, and React. Includes role management, student information, and department management. Implemented mobile CRUD operations with Volley.",
    technologies: "Spring Boot | Swagger | React | Volley",
    code: "https://github.com/Cherkani/Gestion_etudiant_sringBoot_swagger_mobile_React",
    // livedemo: "no",

    video:
      "https://github.com/Cherkani/Gestion_etudiant_sringBoot_swagger_mobile_React",
  },
  {
    title: "Crud Hotel Management System",
    img: IMG10,
    description:
      "Implemented a Hotel Management System using EJB, JSP, Hibernate, and Wildfly. Focuses on CRUD for cities and hotels, ensuring seamless data handling. Utilizes Wildfly as the application server.",
    technologies: "EJB | JSP | Hibernate | Wildfly",
    code: "https://github.com/Cherkani/EJB_JSP_Hibernate_widfly_hotel_Gestion",

    // livedemo: "no",

    video: "https://github.com/Cherkani/EJB_JSP_Hibernate_widfly_hotel_Gestion",
  },
  {
    title: "Inventory Management System",
    description:
      "Designed an Inventory Management System with Hibernate and JSP featuring CRUD operations. Allows listing products, retrieving orders, and managing categories. Emphasizes establishing relationships between orders .",
    img: IMG11,
    technologies: "Hibernate | JSP",
    code: "https://github.com/Cherkani/Hibernate_JSP_CRUD____Gestion_de_Stock",
    // livedemo: "no",

    video: "https://github.com/Cherkani/Hibernate_JSP_CRUD____Gestion_de_Stock",
  },
];

//intro

export const intro = {
  name: "Cherkani Aymen",
  image: img,

  Icon1: FaAward,
  title_card1: "University",
  text_card1: "Ensaj",
  Icon2: VscFolderLibrary,
  title_card2: "Program",
  text_card2: "Computer Science Engineer (2ITE)",

  description1:
    "- I am Cherkani Aymen, a fourth-year engineering student at ENSAJ (École Nationale des Sciences Appliquées) in Morocco. I have a strong passion for computer science and am deeply motivated to enhance my skills and work on challenging projects.",
  description2:
    "- Equipped with a strong foundation in design, programming, and database management, I am driven by motivation, curiosity, and adaptability to new environments.",
  description3:
    " - Currently searching for a one-month internship in development, either in-person or online.",
};

export const skills = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    title: "postgre",
    tag: "sgbd",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969096.png",
    title: "oracle",
    tag: "sgbd",
  },

  {
    icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    title: "HTML",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    title: "CSS",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    title: "JavaScript",
    tag: "frontend",
  },

  {
    icon: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
    title: "React js",
    tag: "frontend",
  },

  {
    icon: "https://img.icons8.com/color/512/bootstrap.png",
    title: "Bootstrap",
    tag: "frontend",
  },
  {
    icon: "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default",
    title: "tailwind",
    tag: "frontend",
  },

  // {
  // 	icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  // 	title: "TypeScript",
  // 	tag: "backend",
  // },
  // {
  // 	icon: "https://img.icons8.com/color/512/chakra-ui.png",
  // 	title: "Chakra-UI",
  // 	tag: "frontend",
  // },
  {
    icon: "https://img.icons8.com/fluency/512/node-js.png",
    title: "Node.js",
    tag: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/express-js.png",
    title: "Express.js",
    tag: "backend",
  },
  // {
  // 	icon: "https://img.icons8.com/color/512/nextjs.png",
  // 	title: "Next.js",
  // 	tag: "frontend",
  // },
  // {
  // 	icon: "https://www.svgrepo.com/show/452093/redux.svg",
  // 	title: "redux",
  // 	tag: "backend",
  // },
  {
    icon: "https://vmware.gallerycdn.vsassets.io/extensions/vmware/vscode-boot-dev-pack/0.2.1/1675235820676/Microsoft.VisualStudio.Services.Icons.Default",
    title: "Spring Boot",
    tag: "backend",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/hibernate-icon-982x1024-rzyrglfw.png",
    title: "Hibernate",
    tag: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/mongodb.png",
    title: "MongoDB",
    tag: "sgbd",
  },
  {
    icon: "https://img.icons8.com/fluency/240w/mysql-logo.png",
    title: "MySql",
    tag: "sgbd",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/256/5968/5968364.png",
    title: "Sql Server",
    tag: "sgbd",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png",
    title: "cassandra",
    tag: "sgbd",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/neo4j-icon-452x512-b63ajo4a.png",
    title: "neo4j",
    tag: "sgbd",
  },
  {
    icon: "https://seeklogo.com/images/H/hbase-logo-386B408382-seeklogo.com.png",
    title: "hbase",
    tag: "sgbd",
  },
  // {
  // 	icon: "https://img.icons8.com/?size=512&id=33039&format=png",
  // 	title: "AWS",
  // 	tag: "backend",
  // },

  {
    icon: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
    title: "Laravel",
    tag: "backend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/29/29540.png",
    title: "Jsp",
    tag: "backend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
    title: "React native",
    tag: "mobile",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java",
    tag: "mobile",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png",
    title: "android studio",
    tag: "mobile",
  },

  // {
  // 	icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png",
  // 	title: "Replit",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png",
  // 	title: "Sandbox",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/color/512/firebase.png",
  // 	title: "Firebase",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/ios-filled/512/codepen.png",
  // 	title: "CodePen",
  // 	tag: "platform",
  // },
  {
    icon: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
    title: "TypeScript",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java",
    tag: "programmingLanguages",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    title: "Python",
    tag: "programmingLanguages",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    title: "JavaScript",
    tag: "programmingLanguages",
  },
  {
    icon: "https://my.trocaire.edu/wp-content/uploads/2016/12/pl-sql.png",
    title: "PL/Sql",
    tag: "programmingLanguages",
  },

  //   {
  //     icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
  //     title: "C",
  //     tag: "programmingLanguages",
  //   },

  {
    icon: "https://img.icons8.com/ios-glyphs/512/github.png",
    title: "Github",
    tag: "platform",
  },
  {
    icon: "https://i.ibb.co/61nck0S/download-removebg-preview.png",
    title: "VS Code",
    tag: "platform",
  },
  {
    icon: "https://img.icons8.com/color/512/git.png",
    title: "Git",
    tag: "platform",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/insomnia-icon-2048x2048-kz1gm1sv.png",
    title: "Insomnia",
    tag: "platform",
  },
  {
    icon: "https://cdn.icon-icons.com/icons2/2407/PNG/512/docker_icon_146192.png",
    title: "docker",
    tag: "platform",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png",
    title: "Visual Studio",
    tag: "platform",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/TalendLogoCoral.png",
    title: "Talend",
    tag: "BI",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/640px-New_Power_BI_Logo.svg.png",
    title: "Power Bi",
    tag: "BI",
  },

  {
    icon: "https://yt3.ggpht.com/-dJy8QDMV7gk/AAAAAAAAAAI/AAAAAAAAAAA/gG3Y66l9HNI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    title: "Tibco Jasper",
    tag: "BI",
  },

  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSIS",
    tag: "BI",
  },
  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSAS",
    tag: "BI",
  },
  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSRS",
    tag: "BI",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png",
    title: "Vite js",
    tag: "frontend",
  },
];
//parcoours

export const experiences = [
  {
    id: 0,
    image: Wafasalaf,
    role: "Business Intelligence Intern",
    company: "Wafasalaf",
    date: "July 2023 - August 2023",
    desc: "Conducted meetings with stakeholders to comprehend business requirements for BI solutions. Employed ETL tools to extract, transform, and load data from diverse sources into the database. Collaborated with the team to identify key performance indicators (KPIs) and craft visualizations for effective monitoring. Developed interactive Power BI dashboards, enabling stakeholders to make data-driven decisions.",
    skills: [
      "Talend Open Studio",
      "Microsoft Power BI",
      "Python (programming language)",
      "MySQL",
    ],
    doc: "https://drive.google.com/file/d/1ONrX8RES6v6v83ZnVZyfzO-pO3bECp30/view",
    imgdoc: imgdoc,
  },
];
