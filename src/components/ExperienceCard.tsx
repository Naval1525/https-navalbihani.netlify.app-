
import { Briefcase } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Phoenix Labs",
      duration: "Jun 2025 - Present",
      type: "Internship"
    },
    {
      role: "Full Stack Developer", 
      company: "FSTONE Technologies",
      duration: "Dec 2024 - Present",
      type: "Full-time"
    },
    {
      role: "Backend Developer",
      company: "Sapphire", 
      duration: "Jan 2025 - May 2025",
      type: "Internship"
    }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Briefcase className="h-6 w-6 text-orange-400 mr-3" />
        <h3 className="text-xl font-semibold">Experience</h3>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-4">
            <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
            <p className="text-sm text-gray-400">{exp.company} • {exp.type}</p>
            <p className="text-xs text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
