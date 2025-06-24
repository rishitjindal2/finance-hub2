import { Transaction, Budget, Goal, Account, CategoryData } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 2500,
    description: 'Salary',
    category: 'Income',
    type: 'income',
    date: '2024-01-15',
    account: 'checking'
  },
  {
    id: '2',
    amount: 850,
    description: 'Rent Payment',
    category: 'Housing',
    type: 'expense',
    date: '2024-01-14',
    account: 'checking'
  },
  {
    id: '3',
    amount: 120,
    description: 'Grocery Shopping',
    category: 'Food',
    type: 'expense',
    date: '2024-01-13',
    account: 'checking'
  },
  {
    id: '4',
    amount: 45,
    description: 'Coffee & Breakfast',
    category: 'Food',
    type: 'expense',
    date: '2024-01-13',
    account: 'checking'
  },
  {
    id: '5',
    amount: 200,
    description: 'Freelance Project',
    category: 'Income',
    type: 'income',
    date: '2024-01-12',
    account: 'checking'
  },
  {
    id: '6',
    amount: 75,
    description: 'Gas Station',
    category: 'Transportation',
    type: 'expense',
    date: '2024-01-11',
    account: 'credit'
  },
  {
    id: '7',
    amount: 299,
    description: 'Online Course',
    category: 'Education',
    type: 'expense',
    date: '2024-01-10',
    account: 'checking'
  }
];

export const mockBudgets: Budget[] = [
  {
    id: '1',
    category: 'Food',
    amount: 400,
    spent: 165,
    period: 'monthly',
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  },
  {
    id: '2',
    category: 'Transportation',
    amount: 200,
    spent: 75,
    period: 'monthly',
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  },
  {
    id: '3',
    category: 'Entertainment',
    amount: 150,
    spent: 0,
    period: 'monthly',
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  },
  {
    id: '4',
    category: 'Education',
    amount: 300,
    spent: 299,
    period: 'monthly',
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  }
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Emergency Fund',
    description: 'Build emergency fund for 6 months of expenses',
    targetAmount: 10000,
    currentAmount: 3500,
    targetDate: '2024-12-31',
    category: 'Savings',
    priority: 'high',
    status: 'active'
  },
  {
    id: '2',
    title: 'Vacation Fund',
    description: 'Save for summer vacation in Europe',
    targetAmount: 5000,
    currentAmount: 1200,
    targetDate: '2024-06-30',
    category: 'Travel',
    priority: 'medium',
    status: 'active'
  },
  {
    id: '3',
    title: 'New Laptop',
    description: 'MacBook Pro for work',
    targetAmount: 2500,
    currentAmount: 800,
    targetDate: '2024-03-31',
    category: 'Technology',
    priority: 'medium',
    status: 'active'
  },
  {
    id: '4',
    title: 'Investment Portfolio',
    description: 'Start investing in index funds',
    targetAmount: 15000,
    currentAmount: 5000,
    targetDate: '2025-01-01',
    category: 'Investment',
    priority: 'high',
    status: 'active'
  }
];

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Main Checking',
    type: 'checking',
    balance: 3250.75,
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    name: 'Savings Account',
    type: 'savings',
    balance: 12500.00,
    lastUpdated: '2024-01-15'
  },
  {
    id: '3',
    name: 'Credit Card',
    type: 'credit',
    balance: -1850.25,
    lastUpdated: '2024-01-14'
  },
  {
    id: '4',
    name: 'Investment Account',
    type: 'investment',
    balance: 8750.30,
    lastUpdated: '2024-01-13'
  }
];

export const mockCategoryData: CategoryData[] = [
  { name: 'Housing', amount: 850, percentage: 45, color: '#EF4444', transactions: 1 },
  { name: 'Food', amount: 165, percentage: 15, color: '#F59E0B', transactions: 2 },
  { name: 'Transportation', amount: 75, percentage: 8, color: '#10B981', transactions: 1 },
  { name: 'Education', amount: 299, percentage: 18, color: '#3B82F6', transactions: 1 },
  { name: 'Entertainment', amount: 0, percentage: 0, color: '#8B5CF6', transactions: 0 },
  { name: 'Other', amount: 250, percentage: 14, color: '#6B7280', transactions: 3 }
];