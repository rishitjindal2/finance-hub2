import React from 'react';
import { Globe, Eye, BarChart3, Share2 } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function PrivacySettings() {
  const { settings, updateSettings } = useSettings();

  const handlePrivacyChange = (key: keyof typeof settings.privacy, value: boolean) => {
    updateSettings({
      privacy: {
        ...settings.privacy,
        [key]: value
      }
    });
  };

  const privacyOptions = [
    {
      key: 'showBalances' as const,
      icon: Eye,
      title: 'Show Account Balances',
      description: 'Display account balances in the dashboard and reports',
      enabled: settings.privacy.showBalances
    },
    {
      key: 'dataSharing' as const,
      icon: Share2,
      title: 'Data Sharing',
      description: 'Allow sharing anonymized data for service improvements',
      enabled: settings.privacy.dataSharing
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Help improve our service by sharing usage analytics',
      enabled: settings.privacy.analytics
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Globe className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
      </div>

      <p className="text-gray-600">
        Control how your data is used and what information is visible to others.
      </p>

      <div className="space-y-4">
        {privacyOptions.map((option) => (
          <div key={option.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <option.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={option.enabled}
                onChange={(e) => handlePrivacyChange(option.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
        ))}
      </div>

      {/* Data Collection Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Globe className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-900">Data Collection</h3>
            <p className="text-sm text-amber-700 mt-1">
              We collect minimal data necessary to provide our services. Your financial data is encrypted 
              and never shared with third parties without your explicit consent. You can request a copy 
              of your data or delete your account at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Link */}
      <div className="text-center">
        <a
          href="#"
          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
        >
          Read our full Privacy Policy
        </a>
      </div>
    </div>
  );
}