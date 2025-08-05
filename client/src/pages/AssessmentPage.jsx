import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button, Icon } from '../components/ui'

export default function AssessmentPage({ onBackToHome, onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [formData, setFormData] = useState({
    academicStream: '',
    favoriteSubjects: [],
    topSkills: [],
    personalityTraits: {
      introvertExtrovert: 3,
      practicalImaginative: 4,
      detailBigPicture: 2
    },
    personalGoals: ''
  })

  const totalSteps = 5
  const progressPercentage = (currentStep / totalSteps) * 100

  const academicStreams = [
    'Science',
    'Commerce',
    'Arts',
    'Technology',
    'Engineering',
    'Medicine',
    'Law',
    'Education'
  ]

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'English', 'History', 'Geography', 'Art', 'Economics'
  ]

  const skills = [
    'Problem-solving', 'Creativity', 'Communication',
    'Leadership', 'Analytical', 'Teamwork'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubjectToggle = (subject) => {
    setFormData(prev => ({
      ...prev,
      favoriteSubjects: prev.favoriteSubjects.includes(subject)
        ? prev.favoriteSubjects.filter(s => s !== subject)
        : [...prev.favoriteSubjects, subject]
    }))
  }

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      topSkills: prev.topSkills.includes(skill)
        ? prev.topSkills.filter(s => s !== skill)
        : prev.topSkills.length < 3
        ? [...prev.topSkills, skill]
        : prev.topSkills
    }))
  }

  const handlePersonalityChange = (trait, value) => {
    setFormData(prev => ({
      ...prev,
      personalityTraits: {
        ...prev.personalityTraits,
        [trait]: value
      }
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Assessment submitted:', formData)
    // Handle assessment submission and navigate to dashboard
    if (onNavigate) {
      onNavigate('dashboard')
    }
  }

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...')
    if (onNavigate) {
      onNavigate('home')
    }
  }

  const handleSettings = () => {
    // Handle settings navigation
    console.log('Opening settings...')
    // You can navigate to a settings page here
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-dropdown')) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showProfileMenu])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-modern">
                <Icon name="graduation" size="lg" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Academic Stream</h3>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select your academic stream
              </label>
              <select
                value={formData.academicStream}
                onChange={(e) => handleInputChange('academicStream', e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <option value="">Select your academic stream</option>
                {academicStreams.map(stream => (
                  <option key={stream} value={stream}>{stream}</option>
                ))}
              </select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-modern">
                <Icon name="book" size="lg" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Favorite Subjects</h3>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select your favorite subjects (choose multiple)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {subjects.map(subject => (
                  <label key={subject} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-purple-500 cursor-pointer transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <input
                      type="checkbox"
                      checked={formData.favoriteSubjects.includes(subject)}
                      onChange={() => handleSubjectToggle(subject)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-modern">
                <Icon name="star" size="lg" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Top 3 Skills</h3>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select your top 3 skills (max 3)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {skills.map(skill => (
                  <label key={skill} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-purple-500 cursor-pointer transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <input
                      type="checkbox"
                      checked={formData.topSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                      disabled={!formData.topSkills.includes(skill) && formData.topSkills.length >= 3}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 disabled:opacity-50"
                    />
                    <span className="text-sm text-gray-700 font-medium">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-modern">
                <Icon name="brain" size="lg" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Personality Traits</h3>
            </div>
            <div className="space-y-6">
              {[
                { key: 'introvertExtrovert', label: 'Introvert vs Extrovert', left: 'Introvert', right: 'Extrovert' },
                { key: 'practicalImaginative', label: 'Practical vs Imaginative', left: 'Practical', right: 'Imaginative' },
                { key: 'detailBigPicture', label: 'Detail vs Big Picture', left: 'Detail', right: 'Big Picture' }
              ].map(trait => (
                <div key={trait.key} className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    {trait.label}
                  </label>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-gray-500 font-medium">{trait.left}</span>
                    <div className="flex-1">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={formData.personalityTraits[trait.key]}
                        onChange={(e) => handlePersonalityChange(trait.key, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{trait.right}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-purple-600">
                      {formData.personalityTraits[trait.key]}/5
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-modern">
                <Icon name="target" size="lg" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Personal Goals</h3>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What are your career goals and aspirations?
              </label>
              <textarea
                value={formData.personalGoals}
                onChange={(e) => handleInputChange('personalGoals', e.target.value)}
                placeholder="Tell us about your career goals, what you hope to achieve, and what motivates you..."
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
              />
            </div>
          </div>
        )

      default:
        return null
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
                <Icon name="target" size="sm" className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shilpa AI
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#assessment" className="text-purple-600 font-semibold text-sm">
                Career Assessment
              </a>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
                >
                  <Icon name="user" size="sm" className="text-white" />
                </button>
                
                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className="profile-dropdown absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-modern-lg border border-white/20 z-50">
                    <div className="py-2">
                      <button
                        onClick={handleSettings}
                        className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 flex items-center space-x-3"
                      >
                        <Icon name="settings" size="sm" className="text-gray-500" />
                        <span>Settings</span>
                      </button>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 flex items-center space-x-3"
                      >
                        <Icon name="logout" size="sm" className="text-gray-500" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              {/* Title and Progress */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                    <Icon name="target" size="xl" className="text-white" />
                  </div>
                  <h1 className="text-3xl font-black text-gray-900 mb-3">
                    Discover Your Ideal
                    <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Career Path
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Answer a few questions to get personalized career suggestions tailored to your strengths and interests.
                  </p>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm font-semibold text-purple-600">
                      {Math.round(progressPercentage)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-modern"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="min-h-[400px]">
                {renderStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-500 transition-all duration-300 px-6 py-3 rounded-xl"
                >
                  Previous
                </Button>
                
                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                  >
                    Get My Career Matches
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Meet Shilpa */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Meet Shilpa</h3>
              <p className="text-gray-600 mb-4">Your AI career guidance assistant.</p>
              <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center shadow-modern">
                    <Icon name="robot" size="lg" className="text-white" />
                  </div>
                  <p className="text-sm text-purple-600 font-semibold">AI Assistant</p>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-modern">
                  <Icon name="lightbulb" size="sm" className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pro Tip</h4>
                  <p className="text-sm text-gray-600">
                    Be honest with your answers. The more accurate your responses, the better career matches you'll receive!
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <h4 className="font-bold text-gray-900 mb-4">What you'll get:</h4>
              <div className="space-y-3">
                {[
                  'Personalized recommendations',
                  'Industry insights',
                  'Educational pathways'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-modern">
                      <Icon name="check" size="xs" className="text-white" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 