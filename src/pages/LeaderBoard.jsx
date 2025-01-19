import React, { useState } from 'react';
import { Trophy, Medal, Award, Crown, ChevronUp, ChevronDown } from 'lucide-react';
import data from '../../data';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const LeaderBoard = () => {
  const [sortTypes, setSortTypes] = useState(['total_points']);
  const [selectedMonths, setSelectedMonths] = useState(['Apr']);
  const [showFilters, setShowFilters] = useState(false);

  const calculateTotalPoints = (user, months) => {
    return months.reduce((total, month) => {
      const monthData = user.monthlyData.find(m => m.month === month);
      return total + monthData.recycling + monthData.composting + monthData.waste + monthData.glass;
    }, 0);
  };

  const categories = {
    total_points: { label: 'Total Points', icon: Trophy, color: 'emerald' },
    recycling: { label: 'Recycling', icon: Award, color: 'blue' },
    composting: { label: 'Composting', icon: Award, color: 'green' },
    waste: { label: 'Waste Reduction', icon: Award, color: 'purple' },
    glass: { label: 'Glass Recycling', icon: Award, color: 'cyan' }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr'];

  const sortedData = data.users.map(user => {
    const totalPoints = calculateTotalPoints(user, selectedMonths);
    const monthData = selectedMonths.map(month => user.monthlyData.find(m => m.month === month));
    const combinedData = monthData.reduce((acc, curr) => ({
      recycling: acc.recycling + curr.recycling,
      composting: acc.composting + curr.composting,
      waste: acc.waste + curr.waste,
      glass: acc.glass + curr.glass
    }), { recycling: 0, composting: 0, waste: 0, glass: 0 });

    return {
      ...user,
      total_points: totalPoints,
      ...combinedData
    };
  }).sort((a, b) => {
    const aTotal = sortTypes.reduce((sum, type) => sum + a[type], 0);
    const bTotal = sortTypes.reduce((sum, type) => sum + b[type], 0);
    return bTotal - aTotal;
  });

  const getPositionStyle = (index) => {
    if (index === 0) return 'bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-400';
    if (index === 1) return 'bg-gradient-to-r from-gray-100 to-gray-50 border-l-4 border-gray-400';
    if (index === 2) return 'bg-gradient-to-r from-orange-100 to-orange-50 border-l-4 border-orange-400';
    return 'bg-white';
  };

  const getPositionIcon = (index) => {
    if (index === 0) return <Crown className="text-yellow-500" size={24} />;
    if (index === 1) return <Medal className="text-gray-500" size={24} />;
    if (index === 2) return <Medal className="text-orange-500" size={24} />;
    return null;
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    setSelectedMonths(prev =>
      prev.includes(value) ? prev.filter(month => month !== value) : [...prev, value]
    );
  };

  const handleSortTypeChange = (sortType) => {
    setSortTypes(prev =>
      prev.includes(sortType) ? prev.filter(type => type !== sortType) : [...prev, sortType]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mt-24 mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-center">
            Sustainability{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-center text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            See how you stack up against other eco-warriors in your community
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 mb-4 hover:text-emerald-600 transition-colors"
          >
            {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            Filter & Sort Options
          </button>
          
          {showFilters && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Sort By Category</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(categories).map(([value, { label, icon: Icon, color }]) => (
                    <label
                      key={value}
                      className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors
                        ${sortTypes.includes(value)
                          ? 'bg-emerald-100 text-emerald-600 border border-emerald-200'
                          : 'hover:bg-gray-100'
                        }`}
                    >
                      <input
                        type="checkbox"
                        value={value}
                        checked={sortTypes.includes(value)}
                        onChange={() => handleSortTypeChange(value)}
                        className="hidden"
                      />
                      <Icon size={16} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Select Months</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {months.map(month => (
                    <label
                      key={month}
                      className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors
                        ${selectedMonths.includes(month)
                          ? 'bg-emerald-100 text-emerald-600 border border-emerald-200'
                          : 'hover:bg-gray-100'
                        }`}
                    >
                      <input
                        type="checkbox"
                        value={month}
                        checked={selectedMonths.includes(month)}
                        onChange={handleMonthChange}
                        className="hidden"
                      />
                      {month}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="grid grid-cols-4 gap-4 font-medium text-gray-600">
              <div>Rank</div>
              <div>Name</div>
              <div>Score</div>
              <div className="text-right">Change</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {sortedData.map((user, index) => (
              <div 
                key={user.user_name}
                className={`p-4 hover:bg-gray-50 transition-colors ${getPositionStyle(index)}`}
              >
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">#{index + 1}</span>
                    {getPositionIcon(index)}
                  </div>
                  <div className="font-medium text-gray-900">{user.user_name}</div>
                  <div className="text-emerald-600 font-bold">
                    {sortTypes.reduce((sum, type) => sum + user[type], 0).toLocaleString()}
                  </div>
                  <div className="text-right text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <ChevronUp className="text-emerald-500" size={16} />
                      2
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeaderBoard;