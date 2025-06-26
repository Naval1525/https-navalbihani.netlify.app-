
import { useState } from 'react';
import { Terminal } from 'lucide-react';
import PersonalCard from '../components/PersonalCard';
import AboutCard from '../components/AboutCard';
import ExperienceCard from '../components/ExperienceCard';
import LanguagesCard from '../components/LanguagesCard';
import BackendCard from '../components/BackendCard';
import DatabaseCard from '../components/DatabaseCard';
import CloudCard from '../components/CloudCard';
import ProjectsCard from '../components/ProjectsCard';
import LeetCodeCard from '../components/LeetCodeCard';
import ServicesCard from '../components/ServicesCard';
import ContactCard from '../components/ContactCard';
import CLITerminal from '../components/CLITerminal';

const Index = () => {
  const [showCLI, setShowCLI] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4">
      {/* CLI Toggle Button */}
      <button
        onClick={() => setShowCLI(!showCLI)}
        className="fixed top-4 right-4 z-50 bg-gray-800/80 backdrop-blur-md border border-gray-600 rounded-lg p-2 hover:bg-gray-700/80 transition-all duration-300"
      >
        <Terminal className="h-6 w-6 text-green-400" />
      </button>

      {/* CLI Terminal */}
      {showCLI && <CLITerminal onClose={() => setShowCLI(false)} />}

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-auto">
          {/* Personal Card - Large */}
          <div className="lg:col-span-2 lg:row-span-3">
            <PersonalCard />
          </div>

          {/* About Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <AboutCard />
          </div>

          {/* LeetCode Card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <LeetCodeCard />
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <LanguagesCard />
          </div>

          {/* Backend Card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <BackendCard />
          </div>

          {/* Experience Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <ExperienceCard />
          </div>

          {/* Database Card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <DatabaseCard />
          </div>

          {/* Cloud Card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <CloudCard />
          </div>

          {/* Projects Card - Large */}
          <div className="lg:col-span-3 lg:row-span-2">
            <ProjectsCard />
          </div>

          {/* Services Card */}
          <div className="lg:col-span-1 lg:row-span-1">
            <ServicesCard />
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
