
import { GraduationCap, Code, Trophy, MapPin } from 'lucide-react';

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
              I'm Naval Bihani, a passionate Full Stack Developer and Computer Science undergraduate 
              at Bennett University with a CGPA of 9.3/10. I specialize in backend systems, cloud 
              infrastructure, and scalable architecture, with hands-on experience across Golang, 
              Node.js, Docker, and AWS.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I've solved 700+ LeetCode problems (Rated 1800+) and have a deep interest in Data 
              Structures & Algorithms, system design, and building real-time, performant applications. 
              My experience spans across multiple internships where I've built scalable systems 
              handling thousands of users.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I actively contribute to developer communities, lead teams in tech events, and 
              constantly push boundaries through freelance projects, internships, and side hustles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300">
                <strong>Bennett University</strong><br />
                B.Tech Computer Science & Engineering<br />
                CGPA: 9.3/10 | Expected 2027
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Specialization</h3>
              </div>
              <p className="text-gray-300">
                Backend System Design<br />
                Cloud-Native Architecture<br />
                Microservices Engineering<br />
                Performance Optimization
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <p className="text-gray-300">
                700+ LeetCode Problems<br />
                1800+ Rating | Knight Badge<br />
                Tech Lead - Alan Turing Club<br />
                Multiple Production Systems
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">
                Hyderabad, India<br />
                Remote Ready Worldwide<br />
                Open to Relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
