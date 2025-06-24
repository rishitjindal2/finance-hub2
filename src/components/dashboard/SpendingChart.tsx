import React from 'react';
import { mockCategoryData } from '../../data/mockData';

export default function SpendingChart() {
  const totalSpent = mockCategoryData.reduce((sum, category) => sum + category.amount, 0);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>
      
      <div className="space-y-4">
        {mockCategoryData.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${category.percentage}%`,
                    backgroundColor: category.color 
                  }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                ${category.amount.toFixed(0)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total Spent</span>
          <span className="text-lg font-bold text-gray-900">${totalSpent.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}