
import { Code } from 'lucide-react';

const LanguagesCard = () => {
  const languages = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Golang', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'C++', level: 85 },
    { name: 'Java', level: 75 }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Code className="h-6 w-6 text-blue-400 mr-3" />
        <h3 className="text-xl font-semibold">Languages</h3>
      </div>
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">{lang.name}</span>
              <span className="text-xs text-gray-400">{lang.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-gray-300 rounded-full transition-all duration-1000"
                style={{ width: `${lang.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesCard;
