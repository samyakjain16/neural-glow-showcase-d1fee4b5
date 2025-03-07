
import React from 'react';

interface FeatureCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const FeatureCard = ({ title, items, icon }: FeatureCardProps) => (
  <div className="glass-card p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="rounded-full bg-white/10 p-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-ai-purple mt-1">•</span>
          <span className="text-white/80">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;
