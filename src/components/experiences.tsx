import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const ExperienceSection = () => {
    const experiences = [
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
            borderColor: "border-blue-400",
            textColor: "text-blue-400",
        },
        {
            role: "Frontend Developer",
            company: "AppX Technologies Pvt. Ltd",
            location: "Nepal",
            duration: "part-time, tasks-based, 2024",
            details: [
                "Developed and maintained React.js applications.",
                "Enhanced existing features and improved user interfaces.",
                "Adapted quickly to changing requirements.",
                "Ensured timely delivery of tasks.",
            ],
            borderColor: "border-green-400",
            textColor: "text-green-400",
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
            borderColor: "border-pink-400",
            textColor: "text-pink-400",
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
            borderColor: "border-yellow-400",
            textColor: "text-yellow-400",
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
            borderColor: "border-purple-400",
            textColor: "text-purple-400",
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
            borderColor: "border-red-400",
            textColor: "text-red-400",
        },
    ];

    return (
        <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-teal-300">Experience</h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`${exp.borderColor} border-l-4 p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 transition-transform transform hover:-translate-y-2`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className={`text-2xl font-semibold text-orange-400/80 ${exp.textColor}`}>{exp.role}</h3>
                                <p className="text-lg text-white">{exp.company}, {exp.location}</p>
                            </div>
                            <span className="text-gray-400 text-md mt-2 md:mt-0 flex items-center">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                {exp.duration}
                            </span>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            {exp.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-300">
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default ExperienceSection;
