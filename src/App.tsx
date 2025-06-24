import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import AuthPage from './components/auth/AuthPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TransactionsView from './components/TransactionsView';
import BudgetManager from './components/BudgetManager';
import GoalsView from './components/GoalsView';
import SettingsView from './components/settings/SettingsView';
import { Loader } from 'lucide-react';

function AppContent() {
  const { isAuthenticated, loading } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-emerald-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading Finance Hub...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <TransactionsView />;
      case 'budgets':
        return <BudgetManager />;
      case 'goals':
        return <GoalsView />;
      case 'settings':
        return <SettingsView />;
      case 'accounts':
        return <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounts Management</h2>
          <p className="text-gray-600">Coming soon - Manage all your financial accounts in one place</p>
        </div>;
      case 'analytics':
        return <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
          <p className="text-gray-600">Coming soon - Deep insights into your financial patterns</p>
        </div>;
      case 'help':
        return <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Help & Support</h2>
          <p className="text-gray-600">Coming soon - Get help and support for using Finance Hub</p>
        </div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      <div className="flex">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1">
          <Header currentView={currentView} />
          <main className="p-6">
            {renderCurrentView()}
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <AppContent />
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;