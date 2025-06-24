import React from 'react';
import { TrendingUp, Shield, BarChart3, Target } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const features = [
    {
      icon: TrendingUp,
      title: 'Track Your Finances',
      description: 'Monitor income, expenses, and investments in real-time'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get insights into your spending patterns and trends'
    },
    {
      icon: Target,
      title: 'Achieve Goals',
      description: 'Set and track financial goals with visual progress'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Bank-level security to protect your financial data'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12">
        <div className="max-w-md">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">FH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Finance Hub</h1>
              <p className="text-gray-600">Your Personal Finance Companion</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Take Control of Your Financial Future
          </h2>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50">
            <p className="text-sm text-gray-600">
              "Finance Hub has completely transformed how I manage my money. The insights are incredible!"
            </p>
            <div className="flex items-center mt-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" 
                alt="User" 
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Finance Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}