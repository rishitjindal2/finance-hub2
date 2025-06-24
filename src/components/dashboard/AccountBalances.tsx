import React from 'react';
import { CreditCard, Settings as Savings, TrendingUp, Eye, EyeOff } from 'lucide-react';
import { mockAccounts } from '../../data/mockData';

export default function AccountBalances() {
  const [showBalances, setShowBalances] = React.useState(true);

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'checking':
        return <CreditCard className="w-5 h-5" />;
      case 'savings':
        return <Savings className="w-5 h-5" />;
      case 'investment':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <CreditCard className="w-5 h-5" />;
    }
  };

  const getAccountGradient = (type: string) => {
    switch (type) {
      case 'checking':
        return 'from-blue-500 to-blue-600';
      case 'savings':
        return 'from-emerald-500 to-emerald-600';
      case 'credit':
        return 'from-red-500 to-red-600';
      case 'investment':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatBalance = (balance: number) => {
    if (!showBalances) return '••••••';
    return balance < 0 ? `-$${Math.abs(balance).toLocaleString()}` : `$${balance.toLocaleString()}`;
  };

  const totalBalance = mockAccounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Account Balances</h3>
        <button 
          onClick={() => setShowBalances(!showBalances)}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
        >
          {showBalances ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      </div>

      <div className="space-y-4">
        {mockAccounts.map((account) => (
          <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${getAccountGradient(account.type)} rounded-lg flex items-center justify-center text-white`}>
                {getAccountIcon(account.type)}
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {account.name}
                </p>
                <p className="text-sm text-gray-500 capitalize">{account.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${
                account.balance < 0 ? 'text-red-600' : 'text-gray-900'
              }`}>
                {formatBalance(account.balance)}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(account.lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Total Net Worth</span>
          <span className="text-xl font-bold text-gray-900">
            {formatBalance(totalBalance)}
          </span>
        </div>
      </div>
    </div>
  );
}