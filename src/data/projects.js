import techcon1 from "../assets/projects/techcon1.jpeg";
import rhivelle1 from "../assets/projects/rhivelle1.jpeg";
import editor from "../assets/projects/editor.png";
import quiz from "../assets/projects/quizappscreenshot.png";
import quote from "../assets/projects/quote.png";
import decode from "../assets/projects/decode.png";
import vel from "../assets/projects/vel.png";

const PROJECTS_DATA = [
  {
    id: "velora",
    title: "Velora",
    category: "Full Stack",
    image: vel,
    description:
      "A full-stack MERN e-commerce platform featuring secure authentication, real-time product search and categorization, an interactive cart system, and responsive modern UI design.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "BcryptJS",
      "Framer Motion",
      "Axios",
      "Git",
      "Render",
    ],
    demoUrl: "https://velora-git-main-rihannah.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/E-commerce_frontend",
  },

  {
    id: "ai-video-editor-portfolio",
    title: "AI Video Editor Portfolio",
    category: "Frontend",
    image: editor,
    description:
      "A modern portfolio website designed and developed for an AI Video editor, to showcase his work, service and digital presence through a sleek and responsive interface.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demoUrl: "https://enny-s-portfolio.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/Enny-s_Portfolio",
  },

  {
    id: "techcon",
    title: "TechCon Ticket Website",
    category: "Frontend",
    image: techcon1,
    description:
      "A responsive conference ticket booking website built with React, Tailwind CSS, and React Router. Users can book tickets through an interactive and modern interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
    ],
    demoUrl: "https://adeoyerihanat6-prog.github.io/ticket/",
    githubUrl: "https://github.com/adeoyerihanat6-prog/ticket",
  },

  {
    id: "rhivelle-finance",
    title: "Rhivelle Finance",
    category: "Full Stack",
    image: rhivelle1,
    description:
      "A simple loan management system featuring an authenticated user dashboard, loan statuses, and state tracking management. Built with robust REST API pipelines.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
    ],
    demoUrl: "https://loan-frontend-olive.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/loan-frontend",
  },

  {
    id: "flashcard-quiz",
    title: "Flashcard Quiz App",
    category: "Frontend",
    image: quiz,
    description:
      "A responsive flashcard study application built with React that allows users to create, edit, delete, and review custom flashcards.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://flashcard-app-mauve-tau.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/flashcard-quiz-app",
  },

  {
    id: "quote-haven",
    title: "Quote Haven",
    category: "Frontend",
    image: quote,
    description:
      "A clean and responsive quote generator built with React that fetches and displays inspiring quotes from an external API with a single click.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://quote-generator-dusky-phi.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/CodeAlpha_RandomQuoteGenerator",
  },

  {
    id: "decodebot",
    title: "DecodeBot",
    category: "Frontend",
    image: decode,
    description:
      "A rule-based chatbot built with HTML, CSS and JavaScript that simulates conversations using predefined responses and demonstrates DOM manipulation.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    demoUrl: "https://decodebot-ten.vercel.app",
    githubUrl:
      "https://github.com/adeoyerihanat6-prog/Decodebot",
  },
];

export default PROJECTS_DATA;