
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(true);
    toast({
      title: "Copied to clipboard!",
      description: "Phone number copied successfully.",
    });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "navalbihani15@gmail.com",
      href: "mailto:navalbihani15@gmail.com",
      color: "from-green-400 to-gray-400"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7032235171",
      action: () => copyToClipboard("+91 7032235171"),
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/Naval1525",
      href: "https://github.com/Naval1525",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/navalbihani15",
      href: "https://linkedin.com/in/navalbihani15",
      color: "from-gray-800 to-black"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or explore opportunities to work together. 
            Always excited to tackle new challenges!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-black/20 backdrop-blur-md border border-gray-500/20 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <div className="text-green-400 font-mono text-sm mb-2">
                  {'> contact'}
                </div>
                <div className="text-gray-300">
                  Drop me a message below.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md border border-gray-500/20 rounded-lg p-6 hover:border-gray-500/40 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className={`text-transparent bg-gradient-to-r ${info.color} bg-clip-text mr-4`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                    <div className="ml-4">
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                        >
                          <Send className="h-5 w-5" />
                        </a>
                      ) : (
                        <button
                          onClick={info.action}
                          className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                        >
                          {copiedPhone ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-4">LeetCode Profile</p>
              <a
                href="https://leetcode.com/u/navalbihani15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <span>leetcode.com/u/navalbihani15</span>
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-md border border-gray-500/20 rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
