import Projects from "./components/landingPage/projects";
import xoopcall from "./assets/xoopcall.png";
import roomfinder1 from "./assets/roomfinder-1.png";
import roomfinder2 from "./assets/roomfinder-2.png";
import roomfinder3 from "./assets/roomfinder-3.png";
import roomfinder_list from "./assets/roomfinder-list.png";
import roomfinder_signup from "./assets/roomfinder-signup.png";
import healt1 from "./assets/health1.png";
import healt2 from "./assets/health2.png";
import healt3 from "./assets/health3.png";
import outinvoice1 from "./assets/outinvoice-1.png";
import outinvoice2 from "./assets/outinvoice-2.png";
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
    showDetails: true,
    title: "RoomFinder",
    type: "MERN App | Self-learning project",
    description:
      "A MERN stack app for finding and listing rooms with advanced search features.",
    overview:
      "RoomFinder is a MERN stack application built to help users find rooms for rent and list their own properties. It features user authentication, search and filtering options, map integration, and a responsive design, providing a smooth user experience across devices.",
    coreFeatures: [
      "Implemented search and filtering capabilities for efficient room discovery.",
      "User authentication and role-based navigation for secure access and management.",
      "Integration with MongoDB for efficient data storage and retrieval.",
      "Responsive design using React.js and Tailwind CSS for a seamless experience on all devices.",
    ],
    advancedFeatures: [
      "Functionality for users to edit or delete their posts.",
      "Enhanced search with criteria such as price range, location, tenant type, and room types.",
      "Map integration for visualizing room locations.",
      "Notification system for important alerts.",
      "User profile management for updating personal and contact information.",
      "Lightbox feature for full-screen image viewing.",
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
      "Google Maps API",
    ],
    development: {
      tools: ["Visual Studio Code", "Postman", "Git", "Webpack"],
      practices: [
        "Adopted best practices for code quality and maintainability.",
        "Used Git for version control and collaboration.",
        "Applied continuous integration and deployment with GitHub Actions.",
      ],
    },
    images: [
      roomfinder1,
      roomfinder2,
      roomfinder3,
      roomfinder_list,
      roomfinder_signup,
    ],
    deployedLink: "https://roomfinder.vercel.app/",
  },
  {
    showDetails: true,
    title: "Event Management System",
    type: "React App",
    description:
      "React application for managing events, including creation and scheduling.",
    overview:
      "An event management system built with React to facilitate event creation, scheduling, and management. This application allows users to organize events easily while managing roles and notifications, ensuring smooth operation across multiple users.",
    coreFeatures: [
      "Integrated frontend components with state management for real-time updates and dynamic user experiences.",
      "Implemented secure authentication and user roles for personalized access control.",
    ],
    advancedFeatures: [
      "Advanced search and filtering options for events based on date, type, and location.",
      "Real-time notifications and reminders for upcoming events.",
      "Integration with calendar services for event synchronization.",
      "User profile management and event history tracking.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "Redux Thunk",
    ],
    images: [
      "https://i.pinimg.com/736x/4b/92/43/4b924325613089a96886f1f64ce6d657.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2uExbkbbRdV-w-08WOwBLQLIRXpzz0SkFrdYk6nYzuWQH76kUxG6sN4ar-9Pvy18D54&usqp=CAU",
    ],
    deployedLink: "https://eventmgmt.vercel.app/",
  },
  {
    showDetails: false,
    title: "Health Care System",
    type: "Static (UI) | Academic project",
    description:
      "Designed a static UI for a healthcare system using HTML and CSS.",
    overview:
      "A static user interface created for a healthcare system, focusing on a clean, responsive layout that allows users to access essential healthcare information easily.",
    coreFeatures: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["HTML", "CSS"],
    images: [healt1, healt2, healt3],
  },
  {
    showDetails: false,
    title: "XoopCall",
    type: "React App",
    description: "React application for managing call scheduling and tracking.",
    overview:
      "XoopCall is a React application developed to help users manage call scheduling and tracking. It allows real-time updates, call history management, and includes features for advanced call filtering and search.",
    coreFeatures: [
      "Efficient call scheduling and tracking system with a clean and intuitive UI.",
    ],
    advancedFeatures: [
      "Real-time call updates and notifications.",
      "Advanced call filtering and search options.",
      "User profile and call history management.",
    ],
    technologies: ["React", "Redux", "Tailwind CSS"],
    images: [xoopcall],
  },
  {
    showDetails: true,
    title: "Merriment Travels",
    type: "React App",
    description:
      "A React application for managing travel bookings and itineraries.",
    overview:
      "Merriment Travels is a travel management application that provides users with an easy way to book and manage their travel itineraries. The app supports real-time notifications, advanced search, and integration with third-party travel platforms.",
    coreFeatures: [
      "User-friendly interface for booking management.",
      "Itinerary tracking with calendar integration.",
    ],
    advancedFeatures: [
      "Real-time notifications for booking updates.",
      "Advanced filtering for travel options based on user preferences.",
      "Integration with external booking platforms and services.",
    ],
    technologies: ["React", "Tailwind CSS", "Redux"],
    images: [merriment1, merriment2, merriment3],
  },
  {
    showDetails: true,
    title: "OutInvoice",
    type: "React App",
    description:
      "A React app for managing invoices and billing with customizable templates.",
    overview:
      "OutInvoice simplifies the invoice and billing process by offering customizable templates, real-time invoice tracking, and integration with payment gateways. The app is designed to improve efficiency in managing business transactions.",
    coreFeatures: [
      "Simplified invoice creation and management.",
      "Real-time tracking of billing statuses.",
    ],
    advancedFeatures: [
      "Automated invoice generation based on user input.",
      "Customizable templates for invoicing.",
      "Integration with third-party payment gateways.",
    ],
    technologies: ["React", "Tailwind CSS", "Redux"],
    images: [outinvoice1, outinvoice2],
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
