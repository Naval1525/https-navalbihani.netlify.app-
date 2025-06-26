
import { Settings } from 'lucide-react';

const ServicesCard = () => {
  const services = [
    'Backend Engineering',
    'Cloud Architecture',
    'API Development',
    'System Design'
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Settings className="h-6 w-6 text-gray-500 mr-3" />
        <h3 className="text-xl font-semibold">Services</h3>
      </div>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesCard;
