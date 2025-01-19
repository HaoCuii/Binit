import React from 'react';
import { Camera, Award, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Instant Recognition",
      description: "Simply snap a photo of your waste and let our AI do the sorting"
    },
    {
      icon: Award,
      title: "Earn Rewards",
      description: "Get points and badges for proper waste management"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor your environmental impact with detailed analytics"
    }
  ];

  return (
    <div className="bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
