import { useState } from 'react'
import { Button, Icon } from '../components/ui'

export default function ResourcesPage({ onBackToHome, onNavigate }) {
  const [activeTab, setActiveTab] = useState('all')

  // Mock resources data
  const resources = {
    studyMaterials: [
      {
        id: 1,
        title: 'Advanced Mathematics',
        subtitle: 'Calculus & Linear Algebra',
        type: 'pdf',
        duration: '2 hours',
        difficulty: 'Advanced',
        rating: 4.8,
        downloads: 1247
      },
      {
        id: 2,
        title: 'Computer Science Basics',
        subtitle: 'Programming Fundamentals',
        type: 'pdf',
        duration: '3 hours',
        difficulty: 'Beginner',
        rating: 4.6,
        downloads: 2156
      },
      {
        id: 3,
        title: 'Physics for Engineers',
        subtitle: 'Mechanics & Thermodynamics',
        type: 'pdf',
        duration: '4 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        downloads: 892
      },
      {
        id: 4,
        title: 'Chemistry Lab Manual',
        subtitle: 'Practical Experiments',
        type: 'pdf',
        duration: '1.5 hours',
        difficulty: 'Intermediate',
        rating: 4.5,
        downloads: 567
      }
    ],
    audioLessons: [
      {
        id: 5,
        title: 'Introduction to AI',
        subtitle: '45 minutes',
        type: 'audio',
        duration: '45 min',
        difficulty: 'Beginner',
        rating: 4.9,
        plays: 3421
      },
      {
        id: 6,
        title: 'Career Planning 101',
        subtitle: '32 minutes',
        type: 'audio',
        duration: '32 min',
        difficulty: 'Beginner',
        rating: 4.7,
        plays: 2890
      },
      {
        id: 7,
        title: 'Study Techniques',
        subtitle: '28 minutes',
        type: 'audio',
        duration: '28 min',
        difficulty: 'Beginner',
        rating: 4.8,
        plays: 1567
      },
      {
        id: 8,
        title: 'Time Management',
        subtitle: '38 minutes',
        type: 'audio',
        duration: '38 min',
        difficulty: 'Intermediate',
        rating: 4.6,
        plays: 1234
      }
    ],
    videos: [
      {
        id: 9,
        title: 'Python Programming Tutorial',
        subtitle: 'Complete Beginner Guide',
        type: 'video',
        duration: '2:15:30',
        difficulty: 'Beginner',
        rating: 4.9,
        views: 15678
      },
      {
        id: 10,
        title: 'Data Science Fundamentals',
        subtitle: 'Statistics & Machine Learning',
        type: 'video',
        duration: '3:45:20',
        difficulty: 'Intermediate',
        rating: 4.7,
        views: 8923
      },
      {
        id: 11,
        title: 'Web Development Bootcamp',
        subtitle: 'HTML, CSS & JavaScript',
        type: 'video',
        duration: '4:20:15',
        difficulty: 'Beginner',
        rating: 4.8,
        views: 12345
      },
      {
        id: 12,
        title: 'Mobile App Development',
        subtitle: 'React Native Tutorial',
        type: 'video',
        duration: '5:10:30',
        difficulty: 'Advanced',
        rating: 4.6,
        views: 5678
      }
    ]
  }

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="star" size="xs" className="text-yellow-400 fill-current" />)
    }

    if (hasHalfStar) {
      stars.push(<Icon key="half" name="star-half" size="xs" className="text-yellow-400 fill-current" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="star" size="xs" className="text-gray-300" />)
    }

    return stars
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-700'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf':
        return 'file'
      case 'audio':
        return 'headphones'
      case 'video':
        return 'play'
      default:
        return 'document'
    }
  }

  const getAllResources = () => {
    return [
      ...resources.studyMaterials,
      ...resources.audioLessons,
      ...resources.videos
    ]
  }

  const getFilteredResources = () => {
    switch (activeTab) {
      case 'study':
        return resources.studyMaterials
      case 'audio':
        return resources.audioLessons
      case 'video':
        return resources.videos
      default:
        return getAllResources()
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
              <a href="#resources" className="text-purple-600 font-semibold text-sm">
                Resources
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
                  { id: 'resources', label: 'Resources', icon: 'document', active: true },
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
            {/* Header Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="book" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Learning
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Resources
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Access curated study materials, audio lessons, and video tutorials to enhance your learning journey.
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Resources', count: getAllResources().length },
                  { id: 'study', label: 'Study Materials', count: resources.studyMaterials.length },
                  { id: 'audio', label: 'Audio Lessons', count: resources.audioLessons.length },
                  { id: 'video', label: 'Video Tutorials', count: resources.videos.length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-modern'
                        : 'bg-white/50 text-gray-700 hover:bg-green-50 hover:text-green-600 border border-white/20'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredResources().map((resource) => (
                <div key={resource.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20 hover:shadow-modern-lg hover:scale-105 transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      resource.type === 'pdf' ? 'from-blue-500 to-purple-600' :
                      resource.type === 'audio' ? 'from-green-500 to-emerald-600' :
                      'from-orange-500 to-red-600'
                    } rounded-xl flex items-center justify-center shadow-modern`}>
                      <Icon name={getTypeIcon(resource.type)} size="lg" className="text-white" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.subtitle}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(resource.rating)}
                      <span className="text-sm text-gray-600 ml-1">({resource.rating})</span>
                    </div>
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {resource.downloads ? `${resource.downloads} downloads` : 
                       resource.plays ? `${resource.plays} plays` : 
                       `${resource.views} views`}
                    </span>
                    <Button
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                    >
                      {resource.type === 'pdf' ? 'Download' : 'Play'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 