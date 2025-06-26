
import { Folder, ExternalLink, Github } from 'lucide-react';

const ProjectsCard = () => {
  const projects = [
    {
      name: "Krishi Krew",
      description: "AI-powered agri platform using ML & weather data",
      tech: ["React", "AI/ML", "Weather API"],
      link: "https://krishikrew.vercel.app"
    },
    {
      name: "Hirees.com", 
      description: "Full job platform with live notifications",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://hirees.com"
    },
    {
      name: "Virtual Venture",
      description: "Stock trading simulation with live APIs",
      tech: ["React", "Node.js", "APIs"],
      link: "https://virtual-ventures.netlify.app"
    }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Folder className="h-6 w-6 text-yellow-400 mr-3" />
        <h3 className="text-xl font-semibold">Featured Projects</h3>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/30 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">{project.name}</h4>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
