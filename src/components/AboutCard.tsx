
import { GraduationCap } from 'lucide-react';

const AboutCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <GraduationCap className="h-6 w-6 text-green-400 mr-3" />
        <h3 className="text-xl font-semibold">About</h3>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm">
        Computer Science undergraduate at Bennett University (2027) specializing in backend development, 
        cloud infrastructure, and system design. I build scalable, production-grade applications using 
        Golang, Node.js, TypeScript, and containerized microservices with Docker and AWS.
      </p>
      <p className="text-gray-300 leading-relaxed text-sm mt-3">
        Actively seeking software engineering opportunities to contribute to resilient backend systems 
        and learn from world-class engineering teams.
      </p>
    </div>
  );
};

export default AboutCard;
