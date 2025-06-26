import { useState } from 'react';
import { ExternalLink, Github, Code, Users, Zap, Brain } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Krishi Krew",
      description: "AI-powered agricultural platform integrating weather APIs, crop prediction, and farmer community features. Built with modern tech stack for scalability.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "AI/ML", "Weather API", "MongoDB"],
      github: "https://github.com/Naval1525/KrishiKrew",
      live: "https://krishikrew.vercel.app",
      icon: <Brain className="h-6 w-6" />,
      featured: true
    },
    {
      title: "Hirees.com",
      description: "Comprehensive job platform with real-time messaging, advanced filtering, and analytics. Serves 1000+ active users with optimized backend performance.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      github: "https://github.com/Naval1525/Hirees",
      live: "https://hirees.com",
      icon: <Users className="h-6 w-6" />,
      featured: true
    },
    {
      title: "Virtual Venture",
      description: "Stock market simulation platform with real-time data integration, portfolio management, and competitive trading features.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "WebSocket", "Chart.js", "PostgreSQL"],
      github: "https://github.com/Naval1525/VirtualVenture",
      live: "https://virtualventure.dev",
      icon: <Zap className="h-6 w-6" />,
      featured: true
    },
    {
      title: "AI Email Assistant",
      description: "One-click GPT-based email reply generator with context understanding and professional tone adaptation.",
      image: "/api/placeholder/400/250",
      tags: ["React", "OpenAI API", "Chrome Extension", "TypeScript"],
      github: "https://github.com/Naval1525/ai-email",
      live: "https://chrome.google.com/webstore",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "DevFlow",
      description: "Developer-focused Q&A community platform with code syntax highlighting, voting system, and reputation tracking.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "MongoDB", "TailwindCSS", "NextAuth"],
      github: "https://github.com/Naval1525/DevFlow",
      live: "https://devflow.dev",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Connex Social",
      description: "Full-featured social media platform with real-time messaging, media sharing, and advanced privacy controls.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "Socket.io", "AWS S3", "PostgreSQL"],
      github: "https://github.com/Naval1525/Connex",
      live: "https://connex.social",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">Featured</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Other Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index + featuredProjects.length}
              className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <div className="text-purple-400 mr-3">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
