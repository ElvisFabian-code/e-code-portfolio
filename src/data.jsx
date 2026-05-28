import { FaPaintBrush } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter, AiFillTikTok } from "react-icons/ai";
import { FaUpwork } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  project2,
  project3,
  project5,
  project6,
  project7,
  project8,
  cert,
  lincoln,
  harcourt,
  figma,
  sketch,
  xd,
  node,
  nest,
  typescript,
  python,
  mongodb,
  postgresql,
  firebase,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  whatsappicon,
  trello,
  jira,
  excel,
  slack,
  x,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: " Certifications" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Fullstack Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Architecting scalable, lightning-fast web ecosystems from database to interface. 
    Leveraging modern frameworks like React and Node.js, I build high-performance, 
    accessible applications engineered to scale seamlessly with your growth.`,
  },
  {
    title: "Creative  Consulting",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Translating complex visions into striking digital narratives. Whether optimizing 
    brand strategy, direct copy, or media workflows, I align technical precision with bold 
    creative execution to build identities that command attention.`,
  },
];






export const projects = [
  
  {
    title: "Hey Judy",
    image: project2,
    category: "AI Solution",
    description: "An advanced AI assistant optimized for Canadian businesses and citizens.",
    demoLink: "https://www.judyintelligence.ai/",
    stacks: [
      { name: "Typescript", logo: typescript },
      { name: "nestJs", logo: nest },
      { name: "mongodb", logo: mongodb }
    ],
  },
  {
    title: "AI-Powered School Management System",
    image: project7,
    category: "EdTech Platform",
    description: "An enterprise platform automating academic workflows and administrative management.",
    demoLink: "#",
    stacks: [
      { name: "ReactJs", logo: react },
      { name: "Tailwind", logo: tailwind },
      { name: "NodeJs", logo: node },
      { name: "MongoDB", logo: mongodb }
    ],
  },
  {
    title: "Geodex",
    image: project3,
    category: "Adtech",
    description: "A data-driven advertising solution engineered for hyper-local target optimization.",
    demoLink: "https://www.geodex.tech/",
    stacks: [
      { name: "ReactJs", logo: react },
      { name: "nestJs", logo: nest },
      { name: "Tailwind", logo: tailwind }
    ],
  },
  {
    title: "AI Learning RAG App",
    image: project8,
    category: "Learning App",
    description: "An intelligent knowledge engine using Retrieval-Augmented Generation to process complex documents.",
    demoLink: "#",
    stacks: [
      { name: "React", logo: react },
      { name: "tailwind", logo: tailwind },
      { name: "node", logo: node },
      { name: "postgresql", logo: postgresql }
    ],
  },
  {
    title: "Mobile Bank - App Design",
    image: project5,
    category: "UI/UX",
    description: "A high-fidelity financial mobile application design centered on micro-interactions.",
    demoLink: "#",
    stacks: [
      { name: "Figma", logo: figma }
    ],
  },
  {
    title: "Oracleous",
    image: project6,
    category: "Agriculture Tech",
    description: "An intelligent agritech platform optimizing crop management and yield prediction.",
    demoLink: "https://oracleous.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Tailwind", logo: tailwind }
    ],
  },
];

export const skills = [
  {
    title: "Back-end Development",
    data: [
      {
        skill: "NodeJs",
        level: "Experienced",
        logo: node,
      },
      {
        skill: "NestJs",
        level: "Intermediate",
        logo: nest,
      },
      {
        skill: "Typescript",
        level: "intermidiate",
        logo: typescript,
      },
      {
        skill: "Python",
        level: "Intermediate",
        logo: python,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: mongodb,
      },
      {
        skill: "PostgreSQL",
        level: "Intermediate",
        logo: postgresql,
      },      ,
      {
        skill: "Firebase",
        level: "Intermidiate",
        logo: firebase,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermidiate",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "figma",
        level: "Begineer",
        logo: figma,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "elvisfabian101@gmail.com",
    link: "mailto:elvisfabian101@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "X",
    value: "Elvis Fabian",
    link: "http://m.me/profile?id=profile-i",
    icon: x,
    btnIcon: <AiOutlineTwitter />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+2348136431037",
    link: "https://api.whatsapp.com/send?phone=+2348136431037",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://x.com/louisfabian79",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/ElvisFabian-code",
  },
  {
    name: "Upwork",
    icon: <FaUpwork />,
    link: "https://www.upwork.com/freelancers/~01a4a5598ba4016823?mp_source=share",
  },
  {
    name: "TikTok",
    icon: <AiFillTikTok />,
    link: "https://www.tiktok.com/@creativeforceng",
  },
];

export const testimonials = [
  {
    avatar: lincoln,
    name: "BSc in Computer Science: Hons Artificial Intelligence",
    review: "Lincoln University (Final Year). Specialized in building contextual knowledge engines, predictive models, and deploying intelligent full-stack workflows using cutting-edge LLMs and robust API architectures.",
  },
  {
    avatar: cert,
    name: "Diploma in Web Development",
    review: "MSK Computer Institute. Engineered highly responsive client interfaces using core frontend technologies paired with scalable relational database architectures and secure, seamless user authentication pipelines.",
  },
  {
    avatar: harcourt,
    name: "Advanced Diploma in Software Engineering",
    review: "Harcourt Intelligence. Mastered advanced cross-platform architectures, systems programming, and embedded technology using Java, C/C#, Python, Dart, Flutter, and specialized IoT development pipelines.",
  },
];
