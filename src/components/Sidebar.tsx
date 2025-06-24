import React from 'react';
import { 
  LayoutDashboard, 
  Receipt, 
  Target, 
  PiggyBank, 
  CreditCard,
  TrendingUp,
  Settings,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'transactions', icon: Receipt, label: 'Transactions' },
    { id: 'budgets', icon: PiggyBank, label: 'Budgets' },
    { id: 'goals', icon: Target, label: 'Goals' },
    { id: 'accounts', icon: CreditCard, label: 'Accounts' },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
  ];

  const secondaryItems = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <aside className="bg-white/80 backdrop-blur-sm border-r border-gray-200/50 w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">FH</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Finance Hub</h2>
            <p className="text-xs text-gray-500">Personal Finance</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                currentView === item.id 
                  ? 'text-white' 
                  : 'text-gray-500 group-hover:text-gray-700'
              }`} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-200/50">
        <nav className="space-y-2">
          {secondaryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 group"
            >
              <item.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}