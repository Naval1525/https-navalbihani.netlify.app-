
import { Trophy, Target, Calendar, TrendingUp } from 'lucide-react';

const LeetCodeStats = () => {
  const stats = [
    {
      label: "Problems Solved",
      value: "700+",
      icon: <Target className="h-8 w-8" />,
      color: "from-green-400 to-blue-400"
    },
    {
      label: "Current Rating",
      value: "1800+",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-blue-400 to-purple-400"
    },
    {
      label: "Contest Streak",
      value: "Weekly",
      icon: <Calendar className="h-8 w-8" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      label: "Ranking",
      value: "Top 15%",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-pink-400 to-red-400"
    }
  ];

  const categories = [
    { name: "Easy", solved: 250, total: 300, percentage: 83 },
    { name: "Medium", solved: 380, total: 450, percentage: 84 },
    { name: "Hard", solved: 70, total: 200, percentage: 35 }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            LeetCode Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Consistent problem solving and competitive programming excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 text-center hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Progress by Difficulty */}
        <div className="bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Progress by Difficulty</h3>
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{category.name}</span>
                  <span className="text-gray-400 text-sm">
                    {category.solved}/{category.total} ({category.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      category.name === 'Easy' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                      category.name === 'Medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-r from-red-400 to-red-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Link */}
        <div className="text-center">
          <a
            href="https://leetcode.com/u/navalbihani15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Trophy className="h-5 w-5" />
            <span>View LeetCode Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;
