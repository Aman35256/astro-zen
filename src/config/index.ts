import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Aman Mishra — Mobile & Web Developer",
  author: "Aman Mishra",
  description:
    "Software Engineer based in Bhopal, India. I specialize in AI and Machine Learning, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/aman.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/AmanMishra8201" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/aman-mishra-15x5/" },
    { text: "Github", href: "https://github.com/Aman35256" },
  ],
  socialImage: "/any.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aman Mishra",
    specialty: "Frontend & ML Engineer",
    summary:
      "Computer Science student at VIT Bhopal University. Currently in my 2nd year, passionate about development and technology. Based in Bhopal, India.",
    email: "amanmishra35256@gmail.com",
  },
  experience: [
    {
      company: "VIT Bhopal University",
      position: "Computer Science Student — Developer",
      startDate: "Aug 2023",
      endDate: "Present",
      summary: [
        "Relevant coursework: Data Structures, Algorithms, Web Development, and Database Systems.",
        "Built class projects and assignments using JavaScript, Python and HTML/CSS; focused on full‑stack and data processing tasks.",
        "Collaborated with teammates using Git, participated in code reviews, and followed Agile/practical workflows.",
      ],
    },
    {
      company: "Personal Projects & Open Source",
      position: "Creator & Contributor",
      startDate: "Sep 2023",
      endDate: "Present",
      summary: [
        "Developed 'Income Tracker' — a JavaScript app deployed at https://income-tracker-aman.vercel.app/.",
        "Worked on 'Smart S3 Manager' and other Python projects to automate cloud tasks and tooling.",
        "Contributed to and forked open-source projects; submitted pull requests and maintained personal repos.",
      ],
    },
    {
      company: "Hackathons & Competitions",
      position: "Participant",
      startDate: "2023",
      endDate: "Present",
      summary: [
        "Participated in hackathons (e.g., Smart India Hackathon), building prototypes under time constraints.",
        "Focused on rapid prototyping and integrating backend services to deliver working demos.",
      ],
    },
  ],
  projects: [
    {
      name: "Income Tracker",
      summary: "A JavaScript application for tracking and managing personal income and expenses.",
      linkPreview: "https://income-tracker-aman.vercel.app/",
      linkSource: "https://github.com/Aman35256/Income-Tracker",
      image: "/project-1.png",
    },
    {
      name: "Smart S3 Manager",
      summary: "A Python-based tool for managing and automating AWS S3 bucket operations efficiently.",
      linkPreview: "https://github.com/Aman35256/Smart-S3-Manager",
      linkSource: "https://github.com/Aman35256/Smart-S3-Manager",
      image: "/project-2.png",
    },
    {
      name: "3D Visualization",
      summary: "An HTML-based project focusing on 3D visualization techniques and implementations.",
      linkPreview: "https://github.com/Aman35256/3D-VISUALISATION",
      linkSource: "https://github.com/Aman35256/3D-VISUALISATION",
      image: "/project-3.png",
    },
     {
      name: "Codearise",
      summary: "A Python project developed during a hackathon, showcasing innovative coding solutions.",
      linkPreview: "https://github.com/Aman35256/Codearise",
      linkSource: "https://github.com/Aman35256/Codearise",
      image: "/project-4.png",
     },
  ],
  about: {
    description: `
      Hi, I'm Aman Mishra, a second-year Computer Science student at VIT Bhopal University. I'm passionate about technology and software development, currently exploring various aspects of computer science and programming.

      As a student developer, I'm constantly learning and growing my skills through both academic projects and personal initiatives. I'm based in Bhopal, India, where I'm pursuing my education while working on various programming projects to build my portfolio and experience.
    `,
    image: "/aman.png",
  },
};

// #5755ff
