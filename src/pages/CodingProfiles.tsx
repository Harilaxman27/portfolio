import React from 'react';
import { Trophy, Star, Code } from 'lucide-react';

export const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "yourusername",
      stats: {
        ranking: "Top 5%",
        solved: "500+ problems",
        contests: "Weekly participant"
      },
      achievements: [
        "Knight Badge",
        "100 Days Coding Challenge",
        "Contest Winner"
      ],
      url: "https://leetcode.com/yourusername"
    },
    {
      platform: "CodeForces",
      username: "yourusername",
      stats: {
        rating: "1800+",
        contests: "50+",
        rank: "Expert"
      },
      achievements: [
        "Specialist Badge",
        "Div 2 Winner",
        "Consistent Performer"
      ],
      url: "https://codeforces.com/profile/yourusername"
    },
    {
      platform: "HackerRank",
      username: "yourusername",
      stats: {
        stars: "5 stars",
        badges: "15+",
        certificates: "8"
      },
      achievements: [
        "Problem Solving (Advanced)",
        "Gold Badge: Python",
        "Silver Badge: Algorithms"
      ],
      url: "https://www.hackerrank.com/yourusername"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Coding Profiles</h1>
        
        <div className="grid gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {profile.platform}
                  </h2>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                  >
                    <Code className="h-5 w-5 mr-1" />
                    View Profile
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white mb-3">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                      Statistics
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <li key={key} className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="capitalize">{key}:</span>
                          <span className="ml-2">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white mb-3">
                      <Award className="h-5 w-5 text-purple-500 mr-2" />
                      Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {profile.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};