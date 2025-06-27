import { Trophy } from 'lucide-react';

const LeetCodeCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-gray-400/30 rounded-xl p-6 h-full hover:border-gray-400/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Trophy className="h-6 w-6 text-yellow-400 mr-3" />
        <h3 className="text-xl font-semibold">LeetCode</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Problems:</span>
          <span className="text-green-400 font-bold">814</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Rating:</span>
          <span className="text-yellow-400 font-bold">1800+</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCard;
