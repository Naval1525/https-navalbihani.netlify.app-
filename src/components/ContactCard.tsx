
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-6 w-6 text-green-400 mr-3" />
        <h3 className="text-xl font-semibold">Contact</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-300">Email me</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-300">Call me</span>
        </div>
        <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-lg text-sm hover:from-gray-700 hover:to-gray-900 transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
