
import { useState, useEffect } from 'react';
import { Terminal, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    '> whoami',
    'Naval Bihani - Full Stack Developer',
    '> cat skills.txt',
    'Backend Systems • Cloud Architecture • DSA Expert',
    '> leetcode --stats',
    '700+ Problems Solved | Rating: 1800+',
    '> echo "Ready to build amazing things"',
    'Let\'s create something extraordinary together!'
  ];

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= commands.length - 1; i++) {
        const command = commands[i];
        setDisplayText('');
        
        for (let j = 0; j <= command.length; j++) {
          setDisplayText(command.slice(0, j));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCurrentCommand(i + 1);
      }
    };

    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Profile image */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-2xl z-10">
        <img 
          src="/lovable-uploads/fb7423ca-2a79-493f-b2f1-ab7b8bcfc319.png" 
          alt="Naval Bihani" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">naval@dev-terminal</span>
            </div>
            
            <div className="space-y-2 min-h-[200px]">
              {commands.slice(0, currentCommand).map((cmd, index) => (
                <div key={index} className={index % 2 === 0 ? 'text-green-400' : 'text-gray-300'}>
                  {cmd}
                </div>
              ))}
              <div className="text-green-400">
                {displayText}
                {showCursor && <span className="bg-green-400 text-black px-0.5">|</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
          Naval Bihani
        </div>
        
        <div className="text-2xl text-gray-300 mb-4 font-light">
          Full Stack Developer | Backend Engineer | Cloud & DSA Specialist
        </div>
        
        <div className="text-lg text-gray-400 mb-8">
          Bennett University CS Student • CGPA: 9.3/10 • Expected 2027
        </div>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-green-400">
            <Code className="h-6 w-6" />
            <span>700+ LeetCode</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Database className="h-6 w-6" />
            <span>Backend Heavy</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Cloud className="h-6 w-6" />
            <span>Cloud Native</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
