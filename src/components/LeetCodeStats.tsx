
import { Code2, Trophy, Target, TrendingUp } from 'lucide-react';

const LeetCodeStats = () => {
  const stats = [
    { label: 'Problems Solved', value: '700+', icon: Code2, color: 'text-green-400' },
    { label: 'Current Rating', value: '1800+', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Contest Rank', value: 'Knight', icon: Target, color: 'text-purple-400' },
    { label: 'Weekly Contests', value: 'Regular', icon: TrendingUp, color: 'text-blue-400' }
  ];

  const problemStats = [
    { difficulty: 'Easy', solved: 250, total: 800, percentage: 31 },
    { difficulty: 'Medium', solved: 380, total: 1650, percentage: 23 },
    { difficulty: 'Hard', solved: 70, total: 700, percentage: 10 }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            LeetCode Performance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Consistent problem solving and competitive programming excellence
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-xl p-6 text-center hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Breakdown */}
        <div className="bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Problem Breakdown</h3>
          <div className="space-y-6">
            {problemStats.map((problem, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    problem.difficulty === 'Easy' ? 'text-green-400' :
                    problem.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-gray-300">
                    {problem.solved} / {problem.total}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      problem.difficulty === 'Easy' ? 'bg-green-400' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${problem.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  {problem.percentage}% completed
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Want to improve your problem-solving skills? I offer DSA tutoring and interview preparation.
          </p>
          <a
            href="https://leetcode.com/u/navalbihani15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My LeetCode Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;
