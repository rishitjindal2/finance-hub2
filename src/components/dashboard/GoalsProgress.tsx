import React from 'react';
import { Target, Calendar, TrendingUp } from 'lucide-react';
import { mockGoals } from '../../data/mockData';

export default function GoalsProgress() {
  const activeGoals = mockGoals.filter(goal => goal.status === 'active').slice(0, 4);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      default:
        return 'bg-emerald-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Financial Goals</h3>
        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activeGoals.map((goal) => {
          const percentage = (goal.currentAmount / goal.targetAmount) * 100;
          
          return (
            <div key={goal.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                      {goal.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(goal.targetDate)}</span>
                    </div>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${getPriorityColor(goal.priority)}`}></div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">
                    ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{percentage.toFixed(1)}% complete</span>
                <div className="flex items-center space-x-1 text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>${(goal.targetAmount - goal.currentAmount).toLocaleString()} to go</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}