import { BiCommentDetail, BiLogoGmail } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaNetworkWired,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosContact, IoLogoJavascript } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdRestartAlt } from "react-icons/md";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// header
export const navigationData = [
  {
    label: "Start",
    link: "/",
    icon: <MdRestartAlt />,
    isOuterLink: false,
  },
  {
    label: "About",
    link: "#about",
    icon: <BiCommentDetail />,
    isOuterLink: false,
  },
  {
    label: "Projects",
    link: "#projects",
    icon: <FaNetworkWired />,
    isOuterLink: false,
  },
 
  {
    label: "Contact",
    link: "#contact",
    icon: <IoIosContact />,
    isOuterLink: false,
  },
  {
    label: "Resume",
    link: "/Ritesh_Pandey.pdf",
    icon: <IoDocumentAttachOutline />,
    isOuterLink: true,
  },
];

// hero section icon data
export const heroSectionIconsArray = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3 />,
    title: "HTML",
  },
  {
    icon: <IoLogoJavascript />,
    title: "Javascript",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
  },
  {
    icon: <SiExpress />,
    title: "Express",
  },
  {
    icon: <DiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Next.js",
  },
  {
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    icon: <FaNpm />,
    title: "npm",
  },
  {
    icon: <FaYarn />,
    title: "yarn",
  },
];

// hero section slider configuration
export const heroSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  ltr: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.5,
      },
    },
  ],
};

// hero section slider configuration
export const projectSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5.5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  ltr: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

// skill section slider configuration
export const skillSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 30000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// skill section icon data
export const skillSectionIconsArray = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "React.js",
  },
  {
    title: "Redux.js",
  },
  {
    title: "Express.js",
  },
  {
    title: "Node.js",
  },
  {
    title: "MongoDB",
  },
];

// experience data
export const experienceData = [
  {
    role: "Software Developer",
    company: "Holmium Technologies Pvt Ltd.",
    companySite: "https://www.holmiumtechnologies.com/",
    description:
      "Spearheaded multiple Full stack projects, overseeing both frontend and backend development to create scalable applications in diverse domains like CMS platforms, ERP systems, online gaming, real estate, and e-commerce. Through close collaboration and mentorship, I provided leadership, emphasizing the importance of best practices. This included building tools to enhance the developer experience and streamlined workflows and improved code quality.",
    startDate: "Augest 2024",
    endDate: "Current",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Talwind CSS",
      "Javascript",
      "Typescript",
      "React",
      "Redux.js",
      "Next.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS S3",
    ],
  },
  {
    role: "Software Developer ",
    company: "Svaak Softwre Technologies Pvt Ltd.",
    companySite: "http://svaaksoftware.com/",
    description:
      "Made significant contributions to developing and improving web applications, including work on diverse projects such as an inventory app, university CMS, and e-commerce, by demonstrating strong proficiency in React, Next.js, JavaScript, and TypeScript. Effectively applying these skills during the internship, I played a key role in enhancing web applications.",
    startDate: "September 2023",
    endDate: "Augest 2024",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Talwind CSS",
      "Javascript",
      "Typescript",
      "React",
      "Redux.js",
      "Next.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

// project list
export const projectLists = [
  {
    name: "Portfolio",
    description:
      "Explore my portfolio crafted with Next.js, Tailwind CSS, and Framer Motion. Discover sleek designs, responsive layouts, and captivating animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel", "Firebase"],
    link: "#",
  },
 
];

export const socialIconList = [
  {
    icon: <FiGithub />,
    link: "https://github.com/Ritesh2610",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/riteshpandey07/",
    color: "bg-blue-400 text-white",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:riteshpandey7356@gmail.com",
    color: "bg-orange-600 text-white",
  },
];
