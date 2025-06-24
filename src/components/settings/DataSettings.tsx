import React, { useState } from 'react';
import { Download, Upload, Trash2, Archive, AlertTriangle, FileText } from 'lucide-react';

export default function DataSettings() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleExportData = () => {
    // Simulate data export
    const data = {
      transactions: [],
      budgets: [],
      goals: [],
      accounts: [],
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finance-hub-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    setShowDeleteConfirm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Archive className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Data & Storage</h2>
      </div>

      {/* Data Export */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Download className="w-5 h-5 text-gray-600" />
            <div>
              <h3 className="font-medium text-gray-900">Export Your Data</h3>
              <p className="text-sm text-gray-600">
                Download a copy of all your financial data in JSON format
              </p>
            </div>
          </div>
          <button
            onClick={handleExportData}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            Export Data
          </button>
        </div>
      </div>

      {/* Data Import */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Upload className="w-5 h-5 text-gray-600" />
            <div>
              <h3 className="font-medium text-gray-900">Import Data</h3>
              <p className="text-sm text-gray-600">
                Import transactions from CSV files or other financial apps
              </p>
            </div>
          </div>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Import Data
          </button>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="w-5 h-5 text-gray-600" />
          <div>
            <h3 className="font-medium text-gray-900">Storage Usage</h3>
            <p className="text-sm text-gray-600">
              Current data usage and storage limits
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transactions</span>
            <span className="font-medium">2.3 MB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Attachments</span>
            <span className="font-medium">1.7 MB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Reports</span>
            <span className="font-medium">0.8 MB</span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between font-medium">
            <span>Total Usage</span>
            <span>4.8 MB / 100 MB</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '4.8%' }}></div>
          </div>
        </div>
      </div>

      {/* Data Retention */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Archive className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900">Data Retention Policy</h3>
            <p className="text-sm text-blue-700 mt-1">
              We keep your data for as long as your account is active. Deleted data is permanently 
              removed after 30 days. You can export your data at any time before deletion.
            </p>
          </div>
        </div>
      </div>

      {/* Delete Account */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trash2 className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="font-medium text-red-900">Delete Account</h3>
              <p className="text-sm text-red-700">
                Permanently delete your account and all associated data
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and all 
              your data will be permanently removed.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={handleDeleteAccount}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Yes, Delete Account
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}