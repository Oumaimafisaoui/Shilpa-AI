import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Shilpa AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors relative group"
              activeProps={{ className: "text-purple-600" }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/career-guide" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors relative group"
            >
              Career Guide
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/mentors" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors relative group"
            >
              Mentors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/signin" 
              className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/get-started" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                activeProps={{ className: "text-purple-600 bg-purple-50" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/career-guide" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career Guide
              </Link>
              <Link 
                to="/resources" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/mentors" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mentors
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/signin" 
                  className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/get-started" 
                  className="block bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 