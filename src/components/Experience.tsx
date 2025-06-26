import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Phoenix Labs",
      duration: "Jun 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Engineered backend services in Golang with focus on clean architecture and scalable systems. Designed distributed systems and high-performance APIs.",
      achievements: [
        "Built scalable backend APIs in Golang",
        "Implemented clean architecture patterns",
        "Optimized database performance",
        "Designed distributed system components"
      ],
      technologies: ["Golang", "Clean Architecture", "PostgreSQL", "Docker", "Microservices"],
      color: "from-green-400 to-blue-400"
    },
    {
      role: "Full Stack Developer",
      company: "FSTONE Technologies",
      duration: "Dec 2024 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Built scalable full-stack web applications using React, Node.js, and TypeScript. Deployed containerized microservices and managed cloud infrastructure.",
      achievements: [
        "Developed responsive React applications",
        "Built RESTful APIs with Node.js",
        "Implemented Docker containerization",
        "Managed CI/CD workflows"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "Microservices"],       
      color: "from-blue-400 to-purple-400"
    },
    {
      role: "Backend Developer",
      company: "Sapphire",
      duration: "Jan 2025 - May 2025",
      location: "Remote",
      type: "Internship",
      description: "Developed RESTful APIs using Node.js and Express.js. Optimized MongoDB and PostgreSQL queries to reduce database load and improve performance.",
      achievements: [
        "Built high-performance REST APIs",
        "Optimized database queries (50% improvement)",
        "Implemented caching strategies",
        "Enhanced API response times"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
      color: "from-purple-400 to-pink-400"
    },
    {
      role: "Full Stack Developer",
      company: "Computing Minds",
      duration: "Mar 2025 - May 2025",
      location: "Remote",
      type: "Internship",
      description: "Collaborated on full-stack feature development and UI refinement. Contributed to product builds and frontend enhancements.",
      achievements: [
        "Developed full-stack features",
        "Enhanced user interface components",
        "Collaborated with design teams",
        "Improved code quality and testing"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Git", "Agile"],
      color: "from-pink-400 to-red-400"
    },
    {
      role: "Full Stack Developer",
      company: "EventUs",
      duration: "Oct 2024 - Jan 2025",
      location: "Remote",
      type: "Internship",
      description: "Built frontends with React and integrated backend services. Deployed applications on AWS and managed performance monitoring.",
      achievements: [
        "Created responsive React interfaces",
        "Integrated third-party APIs",
        "Deployed apps on AWS",
        "Implemented performance monitoring"
      ],
      technologies: ["React", "AWS", "API Integration", "Performance Monitoring"],
      color: "from-red-400 to-orange-400"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Building scalable systems and delivering impactful solutions across multiple organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-purple-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} relative z-10`}>
                    <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                      </div>
                      <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{exp.duration}</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="mr-2">{exp.location}</span>
                        <span className="bg-gray-600/50 px-2 py-1 rounded text-xs">{exp.type}</span>
                      </div>
                      <p className="text-gray-300 mb-4 text-sm">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-gray-600/20 to-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Individual horizontal line for each card */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 ${index % 2 === 0 ? 'right-1/2 left-0' : 'left-1/2 right-0'} ${index % 2 === 0 ? 'bg-gradient-to-l from-green-400 to-transparent' : 'bg-gradient-to-r from-purple-400 to-transparent'} z-0`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
