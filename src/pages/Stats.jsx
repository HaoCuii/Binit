import React, { useState, useEffect } from 'react';
import { RiDeleteBin7Line, RiLeafLine, RiWaterFlashLine, RiTreeLine, RiRecycleLine, RiPlantLine, RiEarthLine } from "react-icons/ri";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Stats = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/stats/', { user_name: 'JohnDoe' });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { monthlyData } = data;
  const aprilData = monthlyData.find(month => month.month === 'Apr');
  const { recycling: Recycle, composting: Compost, waste: Garbage, glass: Glass } = aprilData;
  const totalBins = Recycle + Compost + Garbage + Glass;

  const StatCard = ({ title, value, subtitle, icon: Icon, gradient }) => (
    <div className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow ${gradient}`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Icon size={48} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );

  const ImpactCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'trends', label: 'Trends' },
    { id: 'impact', label: 'Environmental Impact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mt-24 mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-center">
            Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Sustainability Dashboard
            </span>
          </h1>
          <p className="text-center text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Track your environmental impact, recycling progress, and contribution to a sustainable future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 2x2 Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <StatCard 
                  title="Total Items Processed"
                  value={totalBins}
                  subtitle="Items properly sorted and processed"
                  icon={RiDeleteBin7Line}
                  gradient="bg-gradient-to-br from-emerald-50 to-teal-50"
                />
              </div>
              <StatCard   
                title="Recycling Rate"
                value={`${((Recycle / totalBins) * 100).toFixed(1)}%`}
                subtitle="Of your waste is recycled"
                icon={RiRecycleLine}
                gradient="bg-gradient-to-br from-teal-50 to-cyan-50"
              />
              <StatCard 
                title="Composting Rate"
                value={`${((Compost / totalBins) * 100).toFixed(1)}%`}
                subtitle="Of your waste is composted"
                icon={RiPlantLine}
                gradient="bg-gradient-to-br from-cyan-50 to-sky-50"
              />
              <StatCard 
                title="Waste Rate"
                value={`${(((Garbage / totalBins)) * 100).toFixed(1)}%`}
                subtitle="Of your waste is garbage"
                icon={RiEarthLine}
                gradient="bg-gradient-to-br from-sky-50 to-blue-50"
              />

              <StatCard 
                title="Glass Recycling Rate"
                value={`${(((Glass / totalBins)) * 100).toFixed(1)}%`}
                subtitle="Of your waste is glass"
                icon={RiEarthLine}
                gradient="bg-gradient-to-br from-sky-50 to-blue-50"
              />
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-medium text-gray-700 mb-6">Monthly Recycling Trends</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="recycling" stroke="#10B981" name="Recycling %" />
                    <Line type="monotone" dataKey="composting" stroke="#0EA5E9" name="Composting %" />
                    <Line type="monotone" dataKey="waste" stroke="#6B7280" name="Waste %" />
                    <Line type="monotone" dataKey="glass" stroke="#F59E0B" name="Glass %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImpactCard
                title="Carbon Impact"
                value="2.5 tons"
                subtitle="CO₂ emissions prevented this year"
                icon={RiLeafLine}
                color="bg-emerald-500"
              />
              <ImpactCard
                title="Water Saved"
                value="15,000 L"
                subtitle="Water conservation through recycling"
                icon={RiWaterFlashLine}
                color="bg-blue-500"
              />
              <ImpactCard
                title="Trees Saved"
                value="45"
                subtitle="Trees preserved through paper recycling"
                icon={RiTreeLine}
                color="bg-green-600"
              />
            </div>

            
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Stats;