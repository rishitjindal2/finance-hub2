import React, { useState } from 'react';
import { Plus, TrendingUp, AlertTriangle, CheckCircle, Clock, Edit, Trash2 } from 'lucide-react';
import { mockBudgets } from '../data/mockData';
import { Budget } from '../types';

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>(mockBudgets);
  const [showForm, setShowForm] = useState(false);

  const getBudgetStatus = (spent: number, amount: number) => {
    const percentage = (spent / amount) * 100;
    if (percentage >= 90) return 'danger';
    if (percentage >= 75) return 'warning';
    return 'good';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'danger':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <Clock className="w-5 h-5 text-amber-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger':
        return 'from-red-500 to-red-600';
      case 'warning':
        return 'from-amber-500 to-amber-600';
      default:
        return 'from-emerald-500 to-emerald-600';
    }
  };

  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const overallPercentage = (totalSpent / totalBudget) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Budget Manager</h1>
          <p className="text-gray-600">Plan and track your monthly spending across categories</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          <span>Add Budget</span>
        </button>
      </div>

      {/* Overview Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Budget</p>
            <p className="text-2xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">${totalSpent.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Remaining</p>
            <p className="text-2xl font-bold text-gray-900">${(totalBudget - totalSpent).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Usage</p>
            <p className="text-2xl font-bold text-gray-900">{overallPercentage.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      {/* Budget Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.amount) * 100;
          const status = getBudgetStatus(budget.spent, budget.amount);
          
          return (
            <div key={budget.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(status)}
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                    {budget.category}
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 flex space-x-2 transition-opacity duration-200">
                  <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spent</span>
                  <span className="font-medium">${budget.spent.toFixed(0)} / ${budget.amount.toFixed(0)}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 bg-gradient-to-r ${getStatusColor(status)} rounded-full transition-all duration-500`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{percentage.toFixed(1)}% used</span>
                  <span className={`font-medium ${
                    budget.amount - budget.spent < 0 ? 'text-red-600' : 'text-emerald-600'
                  }`}>
                    ${Math.abs(budget.amount - budget.spent).toFixed(0)} {budget.amount - budget.spent < 0 ? 'over' : 'left'}
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 capitalize">
                    {budget.period} budget • Ends {new Date(budget.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {budgets.length === 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200/50 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No budgets yet</h3>
          <p className="text-gray-500 mb-4">Create your first budget to start tracking your spending</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
          >
            Create Budget
          </button>
        </div>
      )}
    </div>
  );
}