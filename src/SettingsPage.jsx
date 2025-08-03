import { useState } from 'react'
import { Button, Icon } from './components/ui'

export default function SettingsPage({ onBackToHome, onNavigate }) {
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    weekly: true,
    achievements: true,
    mentor: true
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showProgress: true,
    allowMentorContact: true,
    dataSharing: false
  })

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handlePrivacyChange = (key, value) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="brain" size="sm" className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shilpa AI
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#settings" className="text-purple-600 font-semibold text-sm">
                Settings
              </a>
              <button className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                <Icon name="bell" size="sm" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Icon name="user" size="sm" className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20 sticky top-8">
              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: 'home' },
                  { id: 'resources', label: 'Resources', icon: 'document' },
                  { id: 'mentors', label: 'Mentors', icon: 'users' },
                  { id: 'progress', label: 'Progress', icon: 'chart' },
                  { id: 'settings', label: 'Settings', icon: 'settings', active: true }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      item.active
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-modern'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon name={item.icon} size="sm" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="settings" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Account
                  <span className="block bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
                    Settings
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Manage your account preferences, notifications, and privacy settings.
                </p>
              </div>
            </div>

            {/* Settings Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'profile', label: 'Profile' },
                  { id: 'notifications', label: 'Notifications' },
                  { id: 'privacy', label: 'Privacy' },
                  { id: 'security', label: 'Security' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-modern'
                        : 'bg-white/50 text-gray-700 hover:bg-gray-50 hover:text-gray-600 border border-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="Sarah Johnson"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="sarah.johnson@email.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Academic Stream</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                          <option>Science & Technology</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                          <option>Grade 13</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                          <div>
                            <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                            <p className="text-sm text-gray-600">
                              {key === 'email' && 'Receive notifications via email'}
                              {key === 'push' && 'Receive push notifications'}
                              {key === 'sms' && 'Receive SMS notifications'}
                              {key === 'weekly' && 'Weekly progress summaries'}
                              {key === 'achievements' && 'Achievement notifications'}
                              {key === 'mentor' && 'Mentor session reminders'}
                            </p>
                          </div>
                          <button
                            onClick={() => handleNotificationChange(key)}
                            className={`w-12 h-6 rounded-full transition-all duration-300 ${
                              value ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
                        <select
                          value={privacy.profileVisibility}
                          onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        >
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="friends">Friends Only</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">Show Progress</p>
                          <p className="text-sm text-gray-600">Allow others to see your learning progress</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('showProgress', !privacy.showProgress)}
                          className={`w-12 h-6 rounded-full transition-all duration-300 ${
                            privacy.showProgress ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 transform ${
                            privacy.showProgress ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">Allow Mentor Contact</p>
                          <p className="text-sm text-gray-600">Allow mentors to contact you directly</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('allowMentorContact', !privacy.allowMentorContact)}
                          className={`w-12 h-6 rounded-full transition-all duration-300 ${
                            privacy.allowMentorContact ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 transform ${
                            privacy.allowMentorContact ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">Data Sharing</p>
                          <p className="text-sm text-gray-600">Allow anonymous data sharing for research</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('dataSharing', !privacy.dataSharing)}
                          className={`w-12 h-6 rounded-full transition-all duration-300 ${
                            privacy.dataSharing ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 transform ${
                            privacy.dataSharing ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          placeholder="Enter current password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div className="mt-6">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                        Delete Account
                      </Button>
                      <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                        Export Data
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 