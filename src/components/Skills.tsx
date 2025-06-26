
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Golang", level: 90, description: "Primary backend language" },
        { name: "JavaScript", level: 95, description: "Full-stack development" },
        { name: "TypeScript", level: 88, description: "Type-safe development" },
        { name: "Python", level: 75, description: "Scripting & automation" },
        { name: "Java", level: 70, description: "Enterprise applications" },
        { name: "C++", level: 85, description: "Competitive programming" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", level: 92, description: "Frontend framework" },
        { name: "Node.js", level: 90, description: "Backend runtime" },
        { name: "Express", level: 88, description: "Web framework" },
        { name: "Next.js", level: 85, description: "Full-stack React" },
        { name: "Gin", level: 80, description: "Golang web framework" },
        { name: "Fiber", level: 75, description: "Fast Go framework" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 85, description: "Cloud services" },
        { name: "Docker", level: 88, description: "Containerization" },
        { name: "Kubernetes", level: 75, description: "Container orchestration" },
        { name: "Redis", level: 80, description: "Caching & sessions" },
        { name: "Nginx", level: 78, description: "Web server & proxy" },
        { name: "CI/CD", level: 82, description: "DevOps automation" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90, description: "Primary database" },
        { name: "MongoDB", level: 85, description: "NoSQL database" },
        { name: "MySQL", level: 82, description: "Relational database" },
        { name: "Redis", level: 80, description: "In-memory store" }
      ]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className="absolute z-10 px-3 py-2 text-sm text-white bg-black/80 backdrop-blur-md rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2 border border-purple-500/30">
                        {skill.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['System Design', 'Microservices', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Clean Architecture', 'TDD', 'Agile', 'Git/GitHub', 'Linux'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
