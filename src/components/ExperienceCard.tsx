
import { Briefcase } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    { company: 'Phoenix Labs', role: 'Backend Developer', tech: 'Golang' },
    { company: 'FSTONE', role: 'Full Stack Developer', tech: 'Docker, React' },
    { company: 'Sapphire', role: 'Backend Engineer', tech: 'Node.js' }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Briefcase className="h-6 w-6 text-blue-400 mr-3" />
        <h3 className="text-xl font-semibold">Experience</h3>
      </div>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-4">
            <h4 className="font-semibold text-gray-200">{exp.company}</h4>
            <p className="text-sm text-gray-400">{exp.role}</p>
            <p className="text-xs text-green-400">{exp.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
