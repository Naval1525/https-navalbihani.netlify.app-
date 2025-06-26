
import { Code, Server, Cloud, Database, Users, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Backend Engineering & API Design",
      description: "Scalable REST and GraphQL APIs with clean architecture, optimized for performance and maintainability.",
      icon: <Server className="h-12 w-12" />,
      features: ["RESTful APIs", "GraphQL", "Microservices", "Clean Architecture"],
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Full-stack App Development",
      description: "End-to-end web application development using modern frameworks and best practices.",
      icon: <Code className="h-12 w-12" />,
      features: ["React/Next.js", "Node.js", "TypeScript", "Real-time Features"],
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Scalable System Architecture",
      description: "Design and implement distributed systems that handle growth and maintain reliability.",
      icon: <Zap className="h-12 w-12" />,
      features: ["System Design", "Load Balancing", "Caching Strategies", "Performance Optimization"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "AWS & Docker Infrastructure",
      description: "Cloud-native deployment with containerization, orchestration, and CI/CD pipelines.",
      icon: <Cloud className="h-12 w-12" />,
      features: ["AWS Services", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code"],
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database schema design, query optimization, and data modeling for scale.",
      icon: <Database className="h-12 w-12" />,
      features: ["PostgreSQL", "MongoDB", "Redis", "Query Optimization"],
      color: "from-red-400 to-orange-400"
    },
    {
      title: "DSA Tutoring & Mentoring",
      description: "1:1 or group coaching for competitive programming, interview preparation, and algorithmic thinking.",
      icon: <Users className="h-12 w-12" />,
      features: ["LeetCode Guidance", "Interview Prep", "Algorithm Design", "Problem Solving"],
      color: "from-orange-400 to-yellow-400"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive technical services from system design to deployment, 
            backed by real-world experience and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to bring your ideas to life with robust, scalable solutions?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
