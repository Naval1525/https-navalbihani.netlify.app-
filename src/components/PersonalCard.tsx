import { MapPin, Mail, Phone, Github, Linkedin, Code2 } from 'lucide-react';

const PersonalCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex flex-col items-center text-center h-full">
        {/* Profile Image */}
        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-gray-400 shadow-2xl">
          <img 
            src="/lovable-uploads/fb7423ca-2a79-493f-b2f1-ab7b8bcfc319.png" 
            alt="Naval Bihani" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
          Naval Bihani
        </h1>
        <p className="text-lg text-gray-300 mb-2">Full Stack Developer</p>
        <p className="text-sm text-gray-400 mb-4">Backend Systems | Cloud-Native Engineering</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 w-full">
          <div className="text-center">
            <div className="text-xl font-bold text-green-400">814</div>
            <div className="text-xs text-gray-400">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-400">1800+</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-300 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Bennett University, India</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>navalbihani15@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+91 7032235171</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-auto">
          <a href="https://github.com/Naval1525" target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/navalbihani15" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://leetcode.com/u/navalbihani15" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Code2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
