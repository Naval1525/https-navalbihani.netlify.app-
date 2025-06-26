
import { Server } from 'lucide-react';

const BackendCard = () => {
  const skills = [
    'Node.js', 'Express.js', 'NestJS', 'REST APIs', 
    'GraphQL', 'Microservices', 'System Design'
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Server className="h-6 w-6 text-green-400 mr-3" />
        <h3 className="text-xl font-semibold">Backend</h3>
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

export default BackendCard;
