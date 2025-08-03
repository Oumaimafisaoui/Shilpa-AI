import { useState } from 'react'
import { Button, Icon } from '../components/ui'

export default function ProgressPage({ onBackToHome, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock progress data
  const progressData = {
    overallProgress: 78,
    completedCourses: 12,
    totalCourses: 20,
    studyHours: 156,
    currentStreak: 7,
    longestStreak: 21,
    achievements: [
      { id: 1, name: 'First Steps', description: 'Complete your first course', icon: 'star', earned: true },
      { id: 2, name: 'Week Warrior', description: 'Study for 7 consecutive days', icon: 'star', earned: true },
      { id: 3, name: 'Knowledge Seeker', description: 'Complete 10 courses', icon: 'star', earned: true },
      { id: 4, name: 'Master Learner', description: 'Complete 20 courses', icon: 'star', earned: false },
      { id: 5, name: 'Perfect Score', description: 'Get 100% on any assessment', icon: 'star', earned: false }
    ],
    recentActivity: [
      { id: 1, type: 'course_completed', title: 'Python Programming Basics', date: '2024-01-15', time: '2 hours ago' },
      { id: 2, type: 'assessment_taken', title: 'Mathematics Quiz', score: 85, date: '2024-01-14', time: '1 day ago' },
      { id: 3, type: 'mentor_session', title: 'Chat with Dr. Chen', date: '2024-01-13', time: '2 days ago' },
      { id: 4, type: 'resource_downloaded', title: 'Advanced Calculus Notes', date: '2024-01-12', time: '3 days ago' },
      { id: 5, type: 'course_started', title: 'Data Science Fundamentals', date: '2024-01-11', time: '4 days ago' }
    ],
    courseProgress: [
      { id: 1, title: 'Python Programming', progress: 100, status: 'completed', lastAccessed: '2024-01-15' },
      { id: 2, title: 'Mathematics for Engineers', progress: 85, status: 'in_progress', lastAccessed: '2024-01-14' },
      { id: 3, title: 'Data Science Basics', progress: 60, status: 'in_progress', lastAccessed: '2024-01-13' },
      { id: 4, title: 'Machine Learning', progress: 30, status: 'in_progress', lastAccessed: '2024-01-12' },
      { id: 5, title: 'Career Planning', progress: 0, status: 'not_started', lastAccessed: null }
    ],
    weeklyStats: [
      { day: 'Mon', hours: 3.5, courses: 2 },
      { day: 'Tue', hours: 2.8, courses: 1 },
      { day: 'Wed', hours: 4.2, courses: 3 },
      { day: 'Thu', hours: 3.1, courses: 2 },
      { day: 'Fri', hours: 2.5, courses: 1 },
      { day: 'Sat', hours: 5.0, courses: 4 },
      { day: 'Sun', hours: 1.8, courses: 1 }
    ]
  }

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'course_completed': return 'check'
      case 'assessment_taken': return 'chart'
      case 'mentor_session': return 'message'
      case 'resource_downloaded': return 'download'
      case 'course_started': return 'play'
      default: return 'star'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700'
      case 'in_progress': return 'bg-blue-100 text-blue-700'
      case 'not_started': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
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
              <a href="#progress" className="text-purple-600 font-semibold text-sm">
                Progress
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
                  { id: 'progress', label: 'Progress', icon: 'chart', active: true },
                  { id: 'settings', label: 'Settings', icon: 'settings' }
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="chart" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Your Learning
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Progress
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Track your learning journey, achievements, and continuous improvement.
                </p>
              </div>
            </div>

            {/* Progress Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-modern">
                    <Icon name="chart" size="lg" className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Overall Progress</p>
                    <p className="text-2xl font-bold text-gray-900">{progressData.overallProgress}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-modern">
                    <Icon name="academic-cap" size="lg" className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Courses Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{progressData.completedCourses}/{progressData.totalCourses}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-modern">
                    <Icon name="clock" size="lg" className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Study Hours</p>
                    <p className="text-2xl font-bold text-gray-900">{progressData.studyHours}h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-modern">
                    <Icon name="fire" size="lg" className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Current Streak</p>
                    <p className="text-2xl font-bold text-gray-900">{progressData.currentStreak} days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'courses', label: 'Course Progress' },
                  { id: 'achievements', label: 'Achievements' },
                  { id: 'activity', label: 'Recent Activity' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-modern'
                        : 'bg-white/50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Stats */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Study Stats</h3>
                  <div className="space-y-4">
                    {progressData.weeklyStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{stat.day}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" className="text-gray-400" />
                            <span className="text-sm text-gray-600">{stat.hours}h</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="academic-cap" size="sm" className="text-gray-400" />
                            <span className="text-sm text-gray-600">{stat.courses} courses</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements Preview */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    {progressData.achievements.slice(0, 3).map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-modern' 
                            : 'bg-gray-200'
                        }`}>
                          <Icon name={achievement.icon} size="sm" className={achievement.earned ? 'text-white' : 'text-gray-400'} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{achievement.name}</p>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Course Progress</h3>
                <div className="space-y-4">
                  {progressData.courseProgress.map((course) => (
                    <div key={course.id} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${getStatusColor(course.status)}`}>
                          {course.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              course.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                              course.status === 'in_progress' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                              'bg-gray-300'
                            }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        {course.lastAccessed && (
                          <p className="text-xs text-gray-500">Last accessed: {course.lastAccessed}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {progressData.achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-4 rounded-xl border transition-all duration-300 ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 shadow-modern' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-modern' 
                            : 'bg-gray-200'
                        }`}>
                          <Icon name={achievement.icon} size="sm" className={achievement.earned ? 'text-white' : 'text-gray-400'} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{achievement.name}</p>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {progressData.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-modern">
                        <Icon name={getActivityIcon(activity.type)} size="sm" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <span className="text-sm font-medium text-green-600">{activity.score}%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 