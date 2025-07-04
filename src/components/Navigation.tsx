import { useState } from 'react';
import { Terminal, Menu, X, ExternalLink } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'leetcode', label: 'LeetCode' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-gray-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - centered vertically and clickable */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center justify-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <Terminal className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-gray-400 bg-clip-text text-transparent">
              Naval Bihani
            </span>
          </button>

          {/* Desktop Navigation - moved to right */}
          <div className="hidden md:flex items-center space-x-2">
            {/* External website link */}
            <a
              href="https://navalwall.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <span>Wall</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button - centered vertically */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              {/* External website link for mobile */}
              <a
                href="https://navalwall.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-base font-medium w-full text-left text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-colors duration-200"
              >
                <span>Wall</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-400/10'
                      : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
