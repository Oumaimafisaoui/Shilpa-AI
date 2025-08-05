import { useState, useEffect } from 'react'
import { Button, Icon } from '../components/ui'
import { TestimonialCard } from '../components/TestimonialCard'
import { FeatureCard } from '../components/FeatureCard'
import { StepCard } from '../components/StepCard'

// Data for features
const features = [
  {
    icon: 'target',
    title: 'Career Path Analysis',
    description: 'Get personalized career recommendations based on your academic stream and interests',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: 'book',
    title: 'Study Resources',
    description: 'Access curated study materials and audio lessons for OL/AL subjects',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: 'mentor',
    title: 'Mentor Connect',
    description: 'Connect with experienced mentors for personalized guidance and support',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: 'progress',
    title: 'Progress Tracking',
    description: 'Monitor your academic progress and career preparation journey',
    gradient: 'from-purple-500 to-pink-600'
  }
]

// Data for steps
const steps = [
  {
    title: 'Complete Assessment',
    description: 'Answer questions about your academic stream, interests, and personality traits',
    icon: 'sparkles'
  },
  {
    title: 'Get AI Insights',
    description: 'Receive personalized career recommendations powered by Azure AI',
    icon: 'brain'
  },
  {
    title: 'Take Action',
    description: 'Access resources, connect with mentors, and start your journey',
    icon: 'rocket'
  }
]

// Data for testimonials
const testimonials = [
  {
    name: 'Priya Perera',
    initials: 'PP',
    stream: 'AL Science Student',
    quote: 'Shilpa AI helped me discover my passion for biomedical engineering. The career guidance was spot-on!',
    avatar: 'bg-gradient-to-br from-purple-400 to-pink-400'
  },
  {
    name: 'Kasun Silva',
    initials: 'KS',
    stream: 'AL Commerce Student',
    quote: 'The mentor connection feature was amazing. I got real insights into the business world.',
    avatar: 'bg-gradient-to-br from-blue-400 to-cyan-400'
  },
  {
    name: 'Nimal Fernando',
    initials: 'NF',
    stream: 'AL Arts Student',
    quote: 'The audio lessons were perfect for my commute. Made studying so much easier!',
    avatar: 'bg-gradient-to-br from-green-400 to-emerald-400'
  }
]

function Header({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-modern border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-modern-lg transition-all duration-300">
                <Icon name="sparkles" size="md" className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shilpa AI
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-purple-600 px-3 py-2 text-sm font-semibold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a href="#career-guide" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
              Career Guide
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#resources" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#mentors" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
              Success Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavigation('login')}
              className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-all duration-300 hover:scale-105 px-4 py-2"
            >
              Sign In
            </button>
            <button 
              onClick={() => handleNavigation('signup')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-modern hover:shadow-modern-lg hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 p-2 transition-all duration-300"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-purple-600 px-3 py-2 text-sm font-semibold text-left hover:bg-purple-50 rounded-lg transition-all duration-300"
              >
                Home
              </button>
              <a href="#career-guide" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg">
                Career Guide
              </a>
              <a href="#resources" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg">
                How It Works
              </a>
              <a href="#mentors" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg">
                Success Stories
              </a>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleNavigation('login')}
                  className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 w-full text-left hover:bg-purple-50 rounded-lg"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => handleNavigation('signup')}
                  className="block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 mt-2 w-full text-left shadow-modern"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default function HomePage({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Header onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                <Icon name="sparkles" size="sm" className="text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">AI-Powered Career Guidance</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Your Future
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Discover your perfect career path with personalized AI guidance. Get tailored recommendations based on your academic stream, interests, and skills.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 text-lg font-bold shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate('signup')}
              >
                Start Career Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-5 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-modern">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Icon name="check" size="xs" className="text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Free for students</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-modern">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Icon name="brain" size="xs" className="text-white" />
                </div>
                <span className="text-gray-700 font-semibold">AI-powered insights</span>
              </div>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-12 h-[500px] flex items-center justify-center shadow-modern-lg border border-white/20">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto flex items-center justify-center shadow-modern-lg animate-float">
                      <Icon name="graduation" size="2xl" className="text-white" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                      <Icon name="star" size="xs" className="text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                      <Icon name="check" size="xs" className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-purple-700 font-bold text-lg">Students with AI Guidance</p>
                    <p className="text-gray-600 text-sm">Join thousands of students discovering their path</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Career Guidance Section */}
      <section id="career-guide" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Icon name="target" size="sm" className="text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Comprehensive Guidance</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform provides everything you need to make informed career decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Shilpa AI Works Section */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Icon name="rocket" size="sm" className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Simple Process</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              How Shilpa AI
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple steps to discover your ideal career path
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <StepCard step={step} number={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories Section */}
      <section id="mentors" className="py-24 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
              <Icon name="trophy" size="sm" className="text-green-600" />
              <span className="text-sm font-semibold text-green-700">Success Stories</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Student Success
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from students who found their path with Shilpa AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <TestimonialCard student={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Icon name="sparkles" size="sm" className="text-white" />
            <span className="text-sm font-semibold text-white">Ready to Start?</span>
          </div>
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Discover
            <span className="block">Your Future?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have found their perfect career path with Shilpa AI
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-purple-500 text-purple-600 hover:bg-gray-100 px-12 py-5 text-lg font-bold shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
              onClick={() => onNavigate('signup')}
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 