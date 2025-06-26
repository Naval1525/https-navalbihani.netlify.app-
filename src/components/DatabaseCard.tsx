
import { Database } from 'lucide-react';

const DatabaseCard = () => {
  const databases = [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 
    'Elasticsearch', 'Prisma', 'DynamoDB'
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Database className="h-6 w-6 text-purple-400 mr-3" />
        <h3 className="text-xl font-semibold">Databases</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {databases.map((db) => (
          <span key={db} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
            {db}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DatabaseCard;
