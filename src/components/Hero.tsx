
import { useState, useEffect } from 'react';
import { Terminal, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    '> hi',
    'Hello, I\'m Naval. Welcome to my Dev Terminal.',
    '> whoami',
    'Backend Engineer | Cloud Architect | Problem Solver',
    '> skills --list',
    'Golang • Node.js • AWS • Docker • React',
    '> help',
    '[about] [projects] [experience] [contact]'
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
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-green-400/30 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto shadow-2xl">
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

        <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Naval Bihani
        </div>
        
        <div className="text-2xl text-gray-300 mb-8 font-light">
          Building systems. Solving problems. Writing code.
        </div>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-green-400">
            <Code className="h-6 w-6" />
            <span>Full Stack</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-400">
            <Database className="h-6 w-6" />
            <span>Backend Heavy</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400">
            <Cloud className="h-6 w-6" />
            <span>Cloud Native</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;
