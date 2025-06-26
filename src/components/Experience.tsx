
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer",
      company: "Phoenix Labs",
      duration: "2024 - Present",
      location: "Remote",
      description: "Implementing clean architecture patterns with Golang, building scalable microservices and optimizing database performance.",
      technologies: ["Golang", "Clean Architecture", "PostgreSQL", "Docker", "Kubernetes"],
      color: "from-green-400 to-blue-400"
    },
    {
      role: "Full Stack Developer",
      company: "FSTONE",
      duration: "2023 - 2024",
      location: "Remote",
      description: "Developed microservices architecture using Docker, built responsive React frontends and integrated payment systems.",
      technologies: ["Microservices", "Docker", "React", "Node.js", "MongoDB"],
      color: "from-blue-400 to-purple-400"
    },
    {
      role: "Backend Engineer",
      company: "Sapphire",
      duration: "2023 - 2023",
      location: "Remote",
      description: "Built robust REST APIs with Node.js, optimized database queries and implemented caching strategies for better performance.",
      technologies: ["Node.js", "REST APIs", "Database Optimization", "Redis", "AWS"],
      color: "from-purple-400 to-pink-400"
    },
    {
      role: "Software Developer",
      company: "Computing Minds",
      duration: "2022 - 2023",
      location: "Remote",
      description: "Developed web applications using modern frameworks and contributed to open-source projects.",
      technologies: ["JavaScript", "React", "Node.js", "Git", "Agile"],
      color: "from-pink-400 to-red-400"
    },
    {
      role: "Technical Intern",
      company: "EventUs",
      duration: "2022 - 2022",
      location: "Remote",
      description: "Worked on event management platform, implemented real-time features and optimized user experience.",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Real-time"],
      color: "from-red-400 to-orange-400"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-purple-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                    </div>
                    <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                      {exp.company}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{exp.duration}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
