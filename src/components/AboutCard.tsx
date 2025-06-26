
import { GraduationCap } from 'lucide-react';

const AboutCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <GraduationCap className="h-6 w-6 text-green-400 mr-3" />
        <h3 className="text-xl font-semibold">About</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">
        Backend-heavy full stack developer pursuing Computer Science at Bennett University. 
        Obsessed with distributed systems, cloud architecture, and optimizing performance.
      </p>
    </div>
  );
};

export default AboutCard;
