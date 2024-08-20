import Tab from './reusable/Tab/tab';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'code',
      items: [
        { title: 'HTML', icon: 'html' },
        { title: 'CSS', icon: 'css' },
        { title: 'JavaScript (ES6+)', icon: 'js' },
        { title: 'React.js', icon: 'react' },
        { title: 'TypeScript', icon: 'ts' },
        { title: 'Bootstrap', icon: 'bootstrap' },
        { title: 'Tailwind CSS', icon: 'tailwind' },
        { title: 'MUI', icon: 'mui' },
        { title: 'ANT-D', icon: 'antd' },
      ],
    },
    {
      title: 'Tools/Version Control',
      icon: 'toolbox',
      items: [
        { title: 'Git', icon: 'git' },
        { title: 'Vercel', icon: 'vercel' },
        { title: 'Postman', icon: 'postman' },
        { title: 'Jest', icon: 'jest' },
        { title: 'Thunder Client', icon: 'toolbox' },
      ],
    },
    {
      title: 'Frameworks/Libraries',
      icon: 'setting',
      items: [
        { title: 'Next.js', icon: 'react' },
        { title: 'MERN', icon: 'nodejs' },
        { title: 'Redux', icon: 'redux' },
        { title: 'Redux Thunk', icon: 'redux' },
        { title: 'ESLint/Prettier', icon: 'eslint' },
        { title: 'GraphQL', icon: 'graphql' },
      ],
    },
    {
      title: 'Other',
      icon: 'bulb',
      items: [
        { title: 'Networking', icon: 'networking' },
        { title: 'Graphic Designing', icon: 'palette' },
        { title: 'Computer Hardware & Software', icon: 'toolbox' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: 'peopleArrow',
      items: [
        { title: 'Problem-solving', icon: 'bulb' },
        { title: 'Teamwork', icon: 'peopleArrow' },
        { title: 'Time management', icon: 'clock' },
        { title: 'Collaboration', icon: 'peopleArrow' },
        { title: 'Adaptability', icon: 'bulb' },
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
