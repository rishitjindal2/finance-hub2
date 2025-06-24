import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { mockBudgets } from '../../data/mockData';

export default function BudgetOverview() {
  const getBudgetStatus = (spent: number, amount: number) => {
    const percentage = (spent / amount) * 100;
    if (percentage >= 90) return 'danger';
    if (percentage >= 75) return 'warning';
    return 'good';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'danger':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <Clock className="w-4 h-4 text-amber-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger':
        return 'bg-red-500';
      case 'warning':
        return 'bg-amber-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget Overview</h3>
      
      <div className="space-y-4">
        {mockBudgets.map((budget) => {
          const percentage = (budget.spent / budget.amount) * 100;
          const status = getBudgetStatus(budget.spent, budget.amount);
          
          return (
            <div key={budget.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(status)}
                  <span className="font-medium text-gray-900">{budget.category}</span>
                </div>
                <span className="text-sm text-gray-600">
                  ${budget.spent.toFixed(0)} / ${budget.amount.toFixed(0)}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${getStatusColor(status)}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{percentage.toFixed(0)}% used</span>
                <span className="text-gray-600">
                  ${(budget.amount - budget.spent).toFixed(0)} remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200">
        Manage Budgets
      </button>
    </div>
  );
}