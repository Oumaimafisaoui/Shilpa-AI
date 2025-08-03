import { useState } from 'react'
import { Button, Icon } from './components/ui'

export default function DashboardPage({ onBackToHome, onNavigate }) {
  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    grade: 'Grade 11 Student',
    academicStream: 'Science & Technology',
    interests: ['Biology', 'AI', 'Research'],
    personalityType: 'INFJ - Advocate'
  }

  // Mock career recommendations
  const careerRecommendations = [
    {
      id: 1,
      title: 'AI Engineer',
      match: 95,
      description: 'Design and develop artificial intelligence systems and machine learning algorithms.',
      icon: 'robot',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Biomedical Engineer',
      match: 88,
      description: 'Combine engineering principles with biological sciences to develop medical devices.',
      icon: 'users',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'Research Scientist',
      match: 82,
      description: 'Conduct scientific research to advance knowledge in various fields of study.',
      icon: 'flask',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  // Mock learning resources
  const studyMaterials = [
    {
      title: 'Advanced Mathematics',
      subtitle: 'Calculus & Linear Algebra',
      type: 'pdf'
    },
    {
      title: 'Computer Science Basics',
      subtitle: 'Programming Fundamentals',
      type: 'pdf'
    }
  ]

  const audioLessons = [
    {
      title: 'Introduction to AI',
      subtitle: '45 minutes',
      type: 'audio'
    },
    {
      title: 'Career Planning 101',
      subtitle: '32 minutes',
      type: 'audio'
    }
  ]

  // Mock assessment results
  const assessmentResults = {
    academicStream: 'Science',
    favoriteSubjects: ['Mathematics', 'Physics', 'Chemistry'],
    topSkills: ['Problem-solving', 'Analytical', 'Communication'],
    personalityTraits: {
      introvertExtrovert: 3,
      practicalImaginative: 4,
      detailBigPicture: 2
    },
    personalGoals: 'I want to work in technology and create innovative solutions that help people.'
  }

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
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
              <a href="#dashboard" className="text-purple-600 font-semibold text-sm">
                Dashboard
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
              {/* User Profile */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-modern">
                  <Icon name="user" size="xl" className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{user.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{user.grade}</p>
                <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user.academicStream}
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: 'home', active: true },
                  { id: 'resources', label: 'Resources', icon: 'document' },
                  { id: 'mentors', label: 'Mentors', icon: 'users' },
                  { id: 'progress', label: 'Progress', icon: 'chart' },
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
            {/* Welcome Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="home" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Welcome back,
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Sarah!
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Let's continue your learning journey and explore your career path.
                </p>
              </div>
            </div>

            {/* Career Recommendations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-modern">
                  <Icon name="target" size="lg" className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Career Recommendations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {careerRecommendations.map((career) => (
                  <div key={career.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20 hover:shadow-modern-lg hover:scale-105 transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${career.gradient} rounded-xl flex items-center justify-center shadow-modern`}>
                        <Icon name={career.icon} size="lg" className="text-white" />
                      </div>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        career.match >= 90 ? 'bg-green-100 text-green-700' :
                        career.match >= 80 ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {career.match}% Match
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-modern">
                  <Icon name="book" size="lg" className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Study Materials */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-modern">
                      <Icon name="document" size="lg" className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Study Materials</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {studyMaterials.map((material, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                        <Icon name="file" size="sm" className="text-red-500" />
                        <div>
                          <p className="font-medium text-gray-900">{material.title}</p>
                          <p className="text-sm text-gray-600">{material.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio Lessons */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-modern">
                      <Icon name="headphones" size="lg" className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Audio Lessons</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {audioLessons.map((lesson, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                        <Icon name="play" size="sm" className="text-green-500" />
                        <div>
                          <p className="font-medium text-gray-900">{lesson.title}</p>
                          <p className="text-sm text-gray-600">{lesson.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Results */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-modern">
                  <Icon name="brain" size="lg" className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Assessment Results</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Academic Background</h4>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-gray-700 mb-2"><strong>Stream:</strong> {assessmentResults.academicStream}</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Favorite Subjects:</strong></p>
                      <div className="flex flex-wrap gap-2">
                        {assessmentResults.favoriteSubjects.map((subject, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Top Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {assessmentResults.topSkills.map((skill, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Personality Profile</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Introvert</span>
                          <span>Extrovert</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full shadow-modern"
                            style={{ width: `${(assessmentResults.personalityTraits.introvertExtrovert / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Practical</span>
                          <span>Imaginative</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full shadow-modern"
                            style={{ width: `${(assessmentResults.personalityTraits.practicalImaginative / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Detail-oriented</span>
                          <span>Big picture</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full shadow-modern"
                            style={{ width: `${(assessmentResults.personalityTraits.detailBigPicture / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Personal Goals</h4>
                    <p className="text-sm text-gray-700 bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      {assessmentResults.personalGoals}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 