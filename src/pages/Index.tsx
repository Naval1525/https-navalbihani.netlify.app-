
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import LeetCodeStats from '../components/LeetCodeStats';
import Services from '../components/Services';
import Contact from '../components/Contact';
import CLITerminal from '../components/CLITerminal';

const Index = () => {
  const [showCLI, setShowCLI] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'leetcode', 'services', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* CLI Toggle Button */}
      <button
        onClick={() => setShowCLI(!showCLI)}
        className="fixed top-4 right-4 z-50 bg-gray-800/80 backdrop-blur-md border border-gray-600 rounded-lg p-2 hover:bg-gray-700/80 transition-all duration-300"
      >
        <Terminal className="h-6 w-6 text-green-400" />
      </button>

      {/* CLI Terminal */}
      {showCLI && <CLITerminal onClose={() => setShowCLI(false)} />}

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="leetcode">
        <LeetCodeStats />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
