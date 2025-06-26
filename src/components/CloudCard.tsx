
import { Cloud } from 'lucide-react';

const CloudCard = () => {
  const skills = [
    'AWS (EC2, S3, Lambda)', 'Docker', 'Microservices', 
    'CI/CD', 'CloudFront', 'Kubernetes'
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Cloud className="h-6 w-6 text-cyan-400 mr-3" />
        <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
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

export default CloudCard;
