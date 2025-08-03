import { useState } from 'react'
import { Button, Icon } from './components/ui'

export default function SignupPage({ onBackToHome, onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    academicStream: '',
    agreeToTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup attempt:', formData)
    
    // Navigate to assessment page after successful signup
    if (onNavigate) {
      onNavigate('assessment')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="flex min-h-screen">
        {/* Left Column - Signup Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={onBackToHome}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Icon name="chevronRight" size="sm" className="rotate-180" />
                <span className="text-sm font-medium">Back to Home</span>
              </button>
            </div>

            {/* Signup Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern-lg p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="plus" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Join
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Shilpa AI
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">Start your career discovery journey today</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create password"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-3">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm password"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="academicStream" className="block text-sm font-semibold text-gray-700 mb-3">
                    Academic Stream
                  </label>
                  <select
                    id="academicStream"
                    name="academicStream"
                    value={formData.academicStream}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  >
                    <option value="">Select your stream</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#terms" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#privacy" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-bold shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                >
                  Create Account
                </Button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <span className="text-gray-600">Already have an account? </span>
                  <a href="#login" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                    Login
                  </a>
                </div>
              </form>
            </div>

            {/* Features Card */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-modern p-6 mt-8 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-modern">
                  <Icon name="rocket" size="lg" className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Ready to start your journey?</h3>
                  <p className="text-sm text-gray-600">Get personalized career guidance!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Promotional Section */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 items-center justify-center p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="text-center text-white max-w-md relative z-10">
            {/* Illustration */}
            <div className="relative mb-8">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto border border-white/20 shadow-modern-lg">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto flex items-center justify-center shadow-modern">
                    <Icon name="rocket" size="2xl" className="text-white" />
                  </div>
                  <p className="text-white/90 font-semibold text-lg">Start your career journey</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
                <Icon name="star" size="xs" className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Icon name="check" size="xs" className="text-white" />
              </div>
            </div>

            <h2 className="text-4xl font-black mb-6">
              Begin Your
              <span className="block">Career Journey</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of students discovering their perfect career path with AI guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 