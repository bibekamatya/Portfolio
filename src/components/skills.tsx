import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

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
        <section className="bg-gray-900 text-white py-16 px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Experience</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`relative p-6 rounded-lg border-l-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${exp.borderColor} bg-gray-800`}
                    >
                        <h3 className={`text-2xl font-semibold mb-2 ${exp.textColor}`}>
                            {exp.role}
                        </h3>
                        <h4 className="text-xl font-medium mb-2">{exp.company}</h4>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                            <span>{exp.duration}</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
