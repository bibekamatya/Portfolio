import Projects from "./components/landingPage/projects";
import xoopcall from "./assets/xoopcall.png";
import roomfinder from "./assets/roomfinder.png";
import healt1 from "./assets/health1.png";
import healt2 from "./assets/health2.png";
import healt3 from "./assets/health3.png";
import outinvoice from "./assets/outinvoice.png";
import merriment1 from "./assets/merriment1.png";
import merriment2 from "./assets/merriment2.png";
import merriment3 from "./assets/merriment3.png";
import Hero from "./components/landingPage/hero";
import Experiences from "./components/landingPage/experiences";
import Skills from "./components/landingPage/skills";
import Education from "./components/landingPage/education";

export const NAVITEMS = [
  { title: "About", Component: Hero },
  { title: "Experiences", Component: Experiences },
  { title: "Skills", Component: Skills },
  { title: "Education", Component: Education },
  { title: "Projects", Component: Projects },
  { title: "Contact" },
];

export const EXPERIENCES_DATA = [
  {
    role: "Frontend Developer",
    company: "Clove.IT Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "Sep 2022 - PRESENT",
    details: [
      "Built and maintained responsive React.js applications.",
      "Collaborated closely with design and backend teams.",
      "Optimized application performance for faster load times.",
      "Implemented best practices for code quality, scalability, and maintainability.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AppX Technologies Pvt. Ltd",
    location: "Nepal",
    duration: "Part time, Tasks based, 2024",
    details: [
      "Developed and maintained React.js applications.",
      "Enhanced existing features and improved user interfaces.",
      "Adapted quickly to changing requirements.",
      "Ensured timely delivery of tasks.",
    ],
  },
  {
    role: "Jr. Frontend Developer",
    company: "CodAvatar Tech Pvt. Ltd",
    location: "Kathmandu, Nepal",
    duration: "June 2022 - Sep 2022",
    details: [
      "Assisted in maintaining dynamic, responsive web applications using React.js.",
      "Supported senior developers in implementing new features.",
      "Gained hands-on experience in modern front-end development practices.",
    ],
  },
  {
    role: "Retail Support Officer",
    company: "WorldLink Communications Pvt. Ltd",
    location: "Itahari, Nepal",
    duration: "Sep 2019 - Feb 2020",
    details: [
      "Provided technical support to users.",
      "Resolved service-related inquiries and issues.",
      "Assisted in the installation and configuration of network equipment.",
      "Guided customers on network usage and maintenance.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Zeftware Solutions Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "May 2018 - Jun 2019",
    details: [
      "Developed static websites.",
      "Implemented UI/UX designs.",
      "Collaborated with designers to translate visual concepts into code.",
    ],
  },
  {
    role: "Technical Support Officer",
    company: "Zeftware Solutions Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "Oct 2017 - Mar 2018",
    details: [
      "Provided technical assistance to users.",
      "Diagnosed and resolved software-related issues.",
      "Supported end-users with software installation and configuration.",
      "Delivered training and guidance to users.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelors Degree",
    field: "B.SC.CSIT",
    institution: "Himalaya Darshan College",
    address: "Biratnagar, Morang, Nepal",
    board: "TU",
    year: 2022,
    percentage: "63%",
    icon: "graduationCap",
  },
  {
    degree: "High School",
    field: "Science",
    institution: "Kanchanjunga Higher Secondary School",
    address: "Biratnagar, Morang, Nepal",
    board: "HSEB",
    year: 2013,
    percentage: "62%",
    icon: "school",
  },
  {
    degree: "SLC",
    field: "",
    institution: "Shree Janta Higher Secondary School",
    address: "Deaury, Udayapur, Nepal",
    board: "Nepal Education Board",
    year: 2010,
    percentage: "56%",
    icon: "university",
  },
];

export const SKILLS_DATA = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
      { title: "JavaScript (ES6+)", icon: "js" },
      { title: "React.js", icon: "react" },
      { title: "TypeScript", icon: "ts" },
      { title: "Bootstrap", icon: "bootstrap" },
      { title: "Tailwind CSS", icon: "tailwind" },
      { title: "MUI", icon: "mui" },
      { title: "ANT-D", icon: "antd" },
    ],
  },
  {
    title: "Tools/Version Control",
    icon: "toolbox",
    items: [
      { title: "Git", icon: "git" },
      { title: "Vercel", icon: "vercel" },
      { title: "Postman", icon: "postman" },
      { title: "Jest", icon: "jest" },
      { title: "Thunder Client", icon: "toolbox" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    icon: "setting",
    items: [
      { title: "Next.js", icon: "react" },
      { title: "MERN", icon: "nodejs" },
      { title: "Redux", icon: "redux" },
      { title: "Redux Thunk", icon: "redux" },
      { title: "ESLint/Prettier", icon: "eslint" },
      { title: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "peopleArrow",
    items: [
      { title: "Problem-solving", icon: "bulb" },
      { title: "Teamwork", icon: "peopleArrow" },
      { title: "Time management", icon: "clock" },
      { title: "Collaboration", icon: "peopleArrow" },
      { title: "Adaptability", icon: "bulb" },
    ],
  },
  {
    title: "Other",
    icon: "bulb",
    items: [
      { title: "Networking", icon: "networking" },
      { title: "Graphic Designing", icon: "palette" },
      { title: "Computer Hardware & Software", icon: "computer" },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    details: true,
    title: "RoomFinder",
    type: "MERN App | Self-learning project",
    description: "A MERN stack application for finding and listing rooms.",
    features: [
      "Implemented features such as search, filtering, user authentication, and role-based navigation for different user types (e.g., super admin, admins, users).",
      "Integrated MongoDB for efficient data storage and retrieval.",
      "Designed a responsive UI using React.js and Tailwind CSS, ensuring a seamless experience across devices.",
      "Used TypeScript and optimized the application for performance, reducing load times and improving overall user experience.",
    ],
    technologies: [
      "React",
      "Redux",
      "Redux Thunk",
      "Tailwind CSS",
      "TypeScript",
      "Express",
      "MongoDB",
      "Node.js",
      "JavaScript",
      "RESTful APIs",
      "JWT Authentication",
    ],
    images: [
      roomfinder,
      "https://images.unsplash.com/photo-1593642634311-48d3d1b9ccdd",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    ],
    deployedLink: "https://deployed-link-roomfinder.com",
  },
  {
    details: true,
    title: "Event Management System",
    type: "React App",
    description:
      "React application for managing events, including creation and scheduling.",
    features: [
      "Integrated frontend components with state management for real-time updates and dynamic user experiences.",
      "Implemented secure authentication and user roles for personalized access control.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "Redux Thunk",
    ],
    images: [merriment3, merriment2],
    deployedLink: "https://deployed-link-event-management.com",
  },
  {
    details: false,
    title: "Health Care System",
    type: "Static (UI) | Academic project",
    description:
      "Designed a static user interface for a healthcare system using HTML and CSS.",
    features: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["HTML", "CSS"],
    images: [healt1, healt2, healt3],
  },
  {
    details: false,
    title: "XoopCall",
    type: "React App",
    description:
      "React application for managing events, including creation and scheduling.",
    features: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["HTML", "CSS"],
    images: [xoopcall],
  },
  {
    details: true,
    title: "Merriment Travles",
    type: "React App",
    description:
      "React application for managing events, including creation and scheduling.",
    features: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["HTML", "CSS"],
    images: [merriment1, merriment2, merriment3],
  },
  {
    details: true,
    title: "OutInvoice",
    type: "React App",
    description:
      "React application for managing events, including creation and scheduling.",
    features: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["HTML", "CSS"],
    images: [outinvoice],
  },
];

export const CONTACT_DETAILS = [
  {
    icon: "address",
    title: "Address",
    content: "Gaighat, Udayapur, Nepal",
  },
  {
    icon: "email",
    title: "Email",
    content: "narayanhom@gmail.com",
  },
  {
    icon: "phone",
    title: "Phone",
    content: "+977-9800000000",
  },
];
