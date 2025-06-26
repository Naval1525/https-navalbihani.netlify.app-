
import { Code } from 'lucide-react';

const SkillsCard = () => {
  const skills = ['Golang', 'Node.js', 'React', 'AWS', 'Docker', 'MongoDB'];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Code className="h-6 w-6 text-gray-400 mr-3" />
        <h3 className="text-xl font-semibold">Skills</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
