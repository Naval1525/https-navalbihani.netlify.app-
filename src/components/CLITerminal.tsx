
import { useState, useEffect, useRef } from 'react';
import { X, Terminal } from 'lucide-react';

interface CLITerminalProps {
  onClose: () => void;
}

const CLITerminal = ({ onClose }: CLITerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> Naval Dev Terminal v1.0.0',
    'Type "help" to see available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const commands = {
    help: () => [
      'Available commands:',
      '  about     - Learn more about me',
      '  skills    - View my technical skills',
      '  projects  - See my projects',
      '  experience- View work experience',
      '  leetcode  - LeetCode statistics',
      '  contact   - Get in touch',
      '  clear     - Clear terminal',
      '  exit      - Close terminal'
    ],
    about: () => [
      'Naval Bihani - Backend Engineer & Cloud Architect',
      'Computer Science student at Bennett University',
      'Passionate about distributed systems and performance optimization',
      '700+ LeetCode problems solved with 1800+ rating'
    ],
    skills: () => [
      'Languages: Golang, JavaScript, TypeScript, Python',
      'Backend: Node.js, Express, RESTful APIs',
      'Cloud: AWS, Docker, Microservices',
      'Frontend: React, Next.js, Tailwind CSS',
      'Databases: MongoDB, PostgreSQL, Redis',
      'Tools: Git, Linux, Postman'
    ],
    projects: () => [
      'Featured Projects:',
      '• Krishi Krew - AI-powered agriculture platform',
      '• Hirees.com - Job platform (1k+ users)',
      '• Virtual Venture - Stock market simulator',
      '• DevFlow - Developer Q&A community',
      '• Connex - Social platform clone'
    ],
    experience: () => [
      'Work Experience:',
      '• Phoenix Labs - Backend Development (Golang)',
      '• FSTONE - Microservices & Docker',
      '• Sapphire - Node.js & Database Optimization',
      '• Computing Minds - Full Stack Development',
      '• EventUs - Event Management Platform'
    ],
    leetcode: () => [
      'LeetCode Statistics:',
      '• Problems Solved: 700+',
      '• Current Rating: 1800+',
      '• Weekly Contest Participant',
      '• Profile: leetcode.com/u/navalbihani15'
    ],
    contact: () => [
      'Contact Information:',
      '• Email: navalbihani15@gmail.com',
      '• GitHub: github.com/Naval1525',
      '• LinkedIn: linkedin.com/in/navalbihani15',
      '• Phone: +91 7032235171'
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    whoami: () => ['naval@dev-terminal'],
    pwd: () => ['/home/naval/portfolio'],
    ls: () => ['about.md', 'projects/', 'skills.json', 'contact.vcf'],
    exit: () => {
      onClose();
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd as keyof typeof commands];
    
    if (output) {
      const result = output();
      if (trimmedCmd !== 'clear') {
        setHistory(prev => [
          ...prev,
          `> ${cmd}`,
          ...result,
          ''
        ]);
      }
    } else if (trimmedCmd) {
      setHistory(prev => [
        ...prev,
        `> ${cmd}`,
        `Command not found: ${cmd}`,
        'Type "help" for available commands.',
        ''
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-gray-400/30 rounded-lg w-full max-w-4xl h-96 flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-400/30">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <Terminal className="h-4 w-4 text-gray-400 ml-4" />
            <span className="text-gray-400 text-sm">naval@dev-terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
          {history.map((line, index) => (
            <div key={index} className={line.startsWith('>') ? 'text-green-400' : 'text-gray-300'}>
              {line}
            </div>
          ))}
          
          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-green-400 mr-2">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-gray-300 outline-none"
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CLITerminal;
