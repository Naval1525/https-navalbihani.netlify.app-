
import { GraduationCap, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a backend-heavy full stack developer currently pursuing Computer Science at 
              Bennett University. Obsessed with distributed systems, cloud architecture, and 
              optimizing performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With experience at companies like Phoenix Labs, FSTONE, and Sapphire, I've built 
              scalable systems handling thousands of users while maintaining clean architecture 
              and optimal performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me solving algorithmic challenges on LeetCode 
              or exploring the latest in cloud-native technologies.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300">
                <strong>Bennett University</strong><br />
                Computer Science & Engineering<br />
                Expected 2027
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Specialization</h3>
              </div>
              <p className="text-gray-300">
                Backend Systems, Cloud Architecture,<br />
                Microservices, API Design,<br />
                Performance Optimization
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <p className="text-gray-300">
                700+ LeetCode Problems<br />
                1800+ Rating<br />
                Multiple Production Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
