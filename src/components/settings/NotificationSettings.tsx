import React from 'react';
import { Bell, Mail, Smartphone, AlertTriangle, Target, BarChart3 } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function NotificationSettings() {
  const { settings, updateSettings } = useSettings();

  const handleNotificationChange = (key: keyof typeof settings.notifications, value: boolean) => {
    updateSettings({
      notifications: {
        ...settings.notifications,
        [key]: value
      }
    });
  };

  const notificationTypes = [
    {
      key: 'email' as const,
      icon: Mail,
      title: 'Email Notifications',
      description: 'Receive notifications via email',
      enabled: settings.notifications.email
    },
    {
      key: 'push' as const,
      icon: Smartphone,
      title: 'Push Notifications',
      description: 'Receive push notifications on your device',
      enabled: settings.notifications.push
    },
    {
      key: 'budgetAlerts' as const,
      icon: AlertTriangle,
      title: 'Budget Alerts',
      description: 'Get notified when you exceed budget limits',
      enabled: settings.notifications.budgetAlerts
    },
    {
      key: 'goalReminders' as const,
      icon: Target,
      title: 'Goal Reminders',
      description: 'Reminders about your financial goals',
      enabled: settings.notifications.goalReminders
    },
    {
      key: 'weeklyReports' as const,
      icon: BarChart3,
      title: 'Weekly Reports',
      description: 'Weekly summary of your financial activity',
      enabled: settings.notifications.weeklyReports
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Bell className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
      </div>

      <p className="text-gray-600">
        Choose how you want to be notified about important updates and activities.
      </p>

      <div className="space-y-4">
        {notificationTypes.map((notification) => (
          <div key={notification.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <notification.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{notification.title}</h3>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notification.enabled}
                onChange={(e) => handleNotificationChange(notification.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900">Notification Timing</h3>
            <p className="text-sm text-blue-700 mt-1">
              Most notifications are sent during business hours (9 AM - 6 PM) in your local timezone. 
              Critical alerts like security notifications are sent immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200">
          Test Notifications
        </button>
      </div>
    </div>
  );
}