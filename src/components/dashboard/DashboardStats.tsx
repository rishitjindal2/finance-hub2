import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target, PiggyBank, CreditCard } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  gradient: string;
}

function StatsCard({ title, value, change, changeType, icon, gradient }: StatsCardProps) {
  const changeIcon = changeType === 'positive' ? TrendingUp : changeType === 'negative' ? TrendingDown : null;
  const changeColor = changeType === 'positive' ? 'text-emerald-600' : changeType === 'negative' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        {changeIcon && (
          <div className={`flex items-center space-x-1 ${changeColor}`}>
            {React.createElement(changeIcon, { className: 'w-4 h-4' })}
            <span className="text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      title: 'Total Balance',
      value: '$22,650.80',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-r from-emerald-500 to-green-600'
    },
    {
      title: 'Monthly Income',
      value: '$2,700.00',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Monthly Expenses',
      value: '$1,389.00',
      change: '-5.1%',
      changeType: 'positive' as const,
      icon: <CreditCard className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      title: 'Savings Goal',
      value: '68%',
      change: '+15%',
      changeType: 'positive' as const,
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-r from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}