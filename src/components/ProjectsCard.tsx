
import { FolderOpen, ExternalLink, Github } from 'lucide-react';

const ProjectsCard = () => {
  const projects = [
    { name: 'Krishi Krew', desc: 'AI agriculture platform', tech: 'React, AI' },
    { name: 'Hirees.com', desc: 'Job platform (1k+ users)', tech: 'Node.js, MongoDB' },
    { name: 'DevFlow', desc: 'Developer Q&A community', tech: 'Next.js, TypeScript' }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <FolderOpen className="h-6 w-6 text-purple-400 mr-3" />
        <h3 className="text-xl font-semibold">Featured Projects</h3>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-600/30 rounded-lg p-3 hover:border-gray-500/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-200">{project.name}</h4>
              <div className="flex space-x-2">
                <ExternalLink className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">{project.desc}</p>
            <p className="text-xs text-green-400">{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
