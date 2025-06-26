
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hirees.com",
      description: "A comprehensive job platform with real-time notifications, advanced search filters, and MongoDB backend. Features include job posting, application tracking, and live notifications system.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      liveUrl: "https://hirees.com",
      githubUrl: "#",
      features: [
        "Real-time job notifications",
        "Advanced search and filtering",
        "Application tracking system",
        "Employer dashboard"
      ],
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Virtual Venture",
      description: "Stock market simulation platform with live market APIs, portfolio tracking, and trading features. Built with React frontend and Node.js backend with real-time data integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Stock APIs", "Chart.js", "PostgreSQL"],
      liveUrl: "https://virtual-ventures.netlify.app",
      githubUrl: "#",
      features: [
        "Live stock market data",
        "Portfolio management",
        "Trading simulation",
        "Performance analytics"
      ],
      color: "from-green-400 to-blue-400"
    },
    {
      title: "AI Email",
      description: "One-click AI-powered email reply system using OpenAI API. Handles 500+ responses per day with intelligent context understanding and professional tone matching.",
      image: "/placeholder.svg",
      technologies: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://ai-email-frontend-taupe.vercel.app",
      githubUrl: "#",
      features: [
        "AI-powered responses",
        "Context understanding",
        "Tone matching",
        "500+ daily responses"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Krishi Krew",
      description: "AI and weather-powered agricultural recommendation system for farmers. Provides crop recommendations, weather insights, and farming guidance using machine learning.",
      image: "/placeholder.svg",
      technologies: ["Python", "ML Models", "Weather API", "React", "Django"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "AI crop recommendations",
        "Weather data integration",
        "Farming guidance",
        "ML-powered insights"
      ],
      color: "from-green-400 to-yellow-400"
    },
    {
      title: "DevFlow",
      description: "Developer Q&A platform similar to Stack Overflow, built with full-stack technologies. Features question posting, answering, voting system, and reputation tracking.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Q&A system",
        "Voting mechanism",
        "Reputation tracking",
        "Code syntax highlighting"
      ],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Connex",
      description: "Social media platform clone focused on privacy, user experience, and real-time chat features. Built with modern full-stack technologies and optimized for performance.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time messaging",
        "Privacy-focused design",
        "Post sharing system",
        "User profiles"
      ],
      color: "from-pink-400 to-red-400"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of full-stack applications, AI-powered solutions, and scalable systems 
            built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-xl overflow-hidden hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-600/30 text-gray-300 text-xs rounded-full border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Naval1525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View GitHub</span>
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
