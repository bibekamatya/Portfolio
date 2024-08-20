import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faSchool,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelors Degree',
      field: 'B.SC.CSIT',
      institution: 'Himalaya Darshan College, Biratnagar, Nepal',
      board: 'TU',
      year: 2022,
      percentage: '63%',
      icon: faUniversity,
    },
    {
      degree: '+2',
      field: 'Science',
      institution: 'Kanchanjunga Higher S.S, Biratnagar, Nepal',
      board: 'HSEB',
      year: 2013,
      percentage: '62%',
      icon: faSchool,
    },
    {
      degree: 'SLC',
      field: '',
      institution: 'Shree Janta Higher Secondary School, Deaury, Nepal',
      board: 'NEB',
      year: 2010,
      percentage: '56%',
      icon: faGraduationCap,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">EDUCATION</h2>
      <div className="relative border-l-4 border-skyBlue pl-8">
        {educationData.map((edu, idx) => (
          <div key={idx} className="mb-8 last:mb-0 relative">
            {/* Icon with connecting line */}
            <div className="absolute -left-[59px] top-1/2 transform -translate-y-1/2">
              <div className="flex items-center justify-center h-12 w-12 bg-white border-4 border-skyBlue rounded-full">
                <FontAwesomeIcon
                  icon={edu.icon}
                  className="h-6 w-6 text-skyBlue"
                />
              </div>
            </div>
            {/* Card Content */}
            <div className="bg-white p-4 shadow-lg rounded-lg border border-skyBlue">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">
                {edu.field && `${edu.field} | `}
                {edu.board} | {edu.institution}
              </p>
              <p className="text-sm text-gray-500">
                {edu.year}, {edu.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Extend the line beyond the last item */}
      <div className="absolute left-4 bottom-0 h-full border-l-4 border-skyBlue transform translate-y-1/2"></div>
    </div>
  );
};

export default Education;
