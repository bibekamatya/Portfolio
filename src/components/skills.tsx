import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faBootstrap,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faPalette,
  faNetworkWired,
  faClock,
  faToolbox,
  faPeopleArrows,
  faCogs,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import Tab from './reusable/Tab/tab';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: faTerminal,
      items: [
        { title: 'HTML', icon: faHtml5 },
        { title: 'CSS', icon: faCss3Alt },
        { title: 'JavaScript (ES6+)', icon: faJs },
        { title: 'React.js', icon: faReact },
        { title: 'TypeScript', icon: faJs },
        { title: 'Bootstrap', icon: faBootstrap },
        { title: 'Tailwind CSS', icon: faPalette },
        { title: 'MUI', icon: faPalette },
        { title: 'ANT-D', icon: faPalette },
      ],
    },
    {
      title: 'Tools/Version Control',
      icon: faToolbox,
      items: [
        { title: 'Git', icon: faGitAlt },
        { title: 'Vercel', icon: faToolbox },
        { title: 'Postman', icon: faToolbox },
        { title: 'Jest', icon: faToolbox },
        { title: 'Thunder Client', icon: faToolbox },
      ],
    },
    {
      title: 'Frameworks/Libraries',
      icon: faCogs,
      items: [
        { title: 'Next.js', icon: faReact },
        { title: 'MERN', icon: faNodeJs },
        { title: 'Redux', icon: faJs },
        { title: 'Redux Thunk', icon: faJs },
        { title: 'ESLint/Prettier', icon: faJs },
        { title: 'GraphQL', icon: faReact },
      ],
    },
    {
      title: 'Other',
      icon: faLightbulb,
      items: [
        { title: 'Networking', icon: faNetworkWired },
        { title: 'Graphic Designing', icon: faPalette },
        { title: 'Computer Hardware & Software', icon: faToolbox },
      ],
    },
    {
      title: 'Soft Skills',
      icon: faPeopleArrows,
      items: [
        { title: 'Problem-solving', icon: faLightbulb },
        { title: 'Teamwork', icon: faPeopleArrows },
        { title: 'Time management', icon: faClock },
        { title: 'Collaboration', icon: faPeopleArrows },
        { title: 'Adaptability', icon: faLightbulb },
      ],
    },
  ];
  return (
    <section className="text-white py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-300">
        Skills
      </h2>
      <Tab categories={skillCategories} />
    </section>
  );
};

export default SkillsSection;
