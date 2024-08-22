import { motion } from "framer-motion";
import { useState } from "react";
import xoopcall from "../assets/xoopcall.png";
import roomfinder from "../assets/roomfinder.png";
import healt1 from "../assets/health1.png";
import healt2 from "../assets/health2.png";
import healt3 from "../assets/health3.png";
import outinvoice from "../assets/outinvoice.png";
import merriment1 from "../assets/merriment1.png";
import merriment2 from "../assets/merriment2.png";
import merriment3 from "../assets/merriment3.png";
import { Header } from "./reusable/header";

const Projects = () => {
  interface Project {
    title: string;
    type: string;
    description: string;
    features: string[];
    technologies: string[];
    images: string[];
    deployedLink?: string;
  }

  interface Project {
    title: string;
    type: string;
    description: string;
    features: string[];
    technologies: string[];
    images: string[];
    deployedLink?: string;
  }

  const projects: Project[] = [
    {
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

  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <section>
      <Header header="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden grid custom-shadow rounded-lg"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-full max-w-full rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center rounded bg-black bg-opacity-70"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{
                opacity: isHovered === index ? 1 : 0,
                y: isHovered === index ? "0%" : "-100%",
              }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-lg mb-2 text-skyBlue">{project.title}</h3>
              <p className="text-sm text-white p-2">{project.description}</p>
              <button className="px-3 py-1 border border-skyBlue rounded-md mt-3 text-sm text-skyBlue hover:bg-skyBlue hover:text-black transition duration-500">
                Uncover More
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
