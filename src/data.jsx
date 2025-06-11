import { FaPaintBrush } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
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
  figma,
  xd,
  ma,
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
    title: "Project Managment",
    icon: <FaPaintBrush />,
    description: `As a Project Manager i coordinate IT and business team activities related to the implementation and development of
     a new Data Platform Observability service,  Data Platform Automation,
      Web Applications and software Projects. Also work closely with the Business Project Manager and other key stakeholders 
      to ensure project success, maintain budget control, and manage reporting, risks, and dependencies.
`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];
export const projects = [
  {
    title: "OIL Export & Import",
    image: project7,
    category: "Bussiness Website",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://oracleous.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      }
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "School Web App",
    image: project8,
    category: "Web Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://www.napps.com.ng/school-single.php?campus_id=VG5wRk0wMTNQVDA9",
    stacks: [
      {
        name: "React Native",
        logo: react,
      },
      {
        name: "fima",
        logo: figma,
      },
      {
        name: "tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "Project Management",
    data: [
      {
        skill: "Microsoft Azure",
        level: "Experienced",
        logo: ma,
      },
      {
        skill: "Trelo",
        level: "Experienced",
        logo: trello,
      },
      {
        skill: "Jira",
        level: "Experienced",
        logo: jira,
      },
      {
        skill: "Microsoft Excel",
        level: "Intermediate",
        logo: excel,
      },
      {
        skill: "Slack",
        level: "Intermediate",
        logo: slack,
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
        skill: "Firebase",
        level: "Intermidiate",
        logo: firebase,
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
    value: "+2349126037965",
    link: "https://api.whatsapp.com/send?phone=+2349126037965",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const testimonials = [
  {
    avatar: cert,
    name: "Bsc Computer Science",
    review: ` Lincoln University, 2026
              Specialization: AI & Machine Learning
              Key Project: Developed a real-time object detection system using Python and OpenCV, achieving 90% accuracy in identifying objects in video streams. View Project
              Relevant Coursework: Data Structures and Algorithms, Machine Learning, Computer Vision, Software Design
              Skills: Python, React, JavaScript, Html, Css, Git, Agile Development,Php`,
  },
  {
    avatar: cert,
    name: "Certificate in Project management",
    review: ` DEXA, 2025

              Completed the DEXA Project Management Certificate program, gaining expertise in Agile and Waterfall methodologies.
              Applied project management principles to the development of a new software feature, resulting in on-time delivery and a 10% reduction in development costs.
              Proficient in project planning, risk management, stakeholder communication, and resource allocation.
              Experienced with Jira and Confluence.`,
  },
  {
    avatar: cert,
    name: "Diploma in web development",
    review: ` MSK Computer Institute, 2023

              Gained web development expertise, proficient in HTML, CSS and JavaScript.
              Developed a responsive school site featuring  an about the shool login and registration. View Project
              Experienced in database design and management with MySql.
              Committed to creating user-friendly and accessible web applications.`,
  },
  {
    avatar: cert,
    name: "Fullstack Certifcate",
    review: ` BWS, 2025

              Building upon a Diploma in Web Development, this certificate provided advanced training in modern full-stack technologies.

              Specialized in the React ecosystem, including Next.js and Redux, for building performant and scalable single-page applications.
              Developed a real-time data visualization dashboard using React, Node.js, and GraphQL. View Project
              Gained experience with deploying applications to AWS using Docker and Kubernetes.
              Proficient in building RESTful APIs and implementing authentication and authorization.`,
  },
];
