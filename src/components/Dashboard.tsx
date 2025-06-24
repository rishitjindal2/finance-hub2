import React from 'react';
import DashboardStats from './dashboard/DashboardStats';
import SpendingChart from './dashboard/SpendingChart';
import RecentTransactions from './dashboard/RecentTransactions';
import BudgetOverview from './dashboard/BudgetOverview';
import GoalsProgress from './dashboard/GoalsProgress';
import AccountBalances from './dashboard/AccountBalances';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentTransactions />
          <SpendingChart />
        </div>
        <div className="space-y-6">
          <AccountBalances />
          <BudgetOverview />
        </div>
      </div>

      <GoalsProgress />
    </div>
  );
}