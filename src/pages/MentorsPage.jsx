import { useState } from 'react'
import { Button, Icon } from '../components/ui'

export default function MentorsPage({ onBackToHome, onNavigate }) {
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      specialization: 'AI Research Specialist',
      rating: 4.9,
      reviews: 127,
      status: 'Free',
      image: '/api/placeholder/60/60',
      experience: '15+ years',
      education: 'PhD Computer Science, Stanford',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Ethics'],
      availability: 'Mon-Fri, 2-6 PM',
      hourlyRate: 0,
      description: 'Leading AI researcher with expertise in machine learning and deep learning. Passionate about mentoring students and sharing knowledge.',
      languages: ['English', 'Mandarin'],
      achievements: ['Published 50+ papers', 'Google Scholar Award', 'IEEE Fellow']
    },
    {
      id: 2,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Biomedical Engineer',
      rating: 4.7,
      reviews: 89,
      status: 'Paid',
      image: '/api/placeholder/60/60',
      experience: '12+ years',
      education: 'PhD Biomedical Engineering, MIT',
      expertise: ['Medical Devices', 'Biomaterials', 'Tissue Engineering'],
      availability: 'Tue-Sat, 10 AM-4 PM',
      hourlyRate: 75,
      description: 'Experienced biomedical engineer specializing in medical device development and tissue engineering. Dedicated to helping students understand complex concepts.',
      languages: ['English', 'Spanish'],
      achievements: ['15 Patents', 'NSF Career Award', 'Biomedical Innovation Award']
    },
    {
      id: 3,
      name: 'Prof. David Kim',
      specialization: 'Research Scientist',
      rating: 5.0,
      reviews: 203,
      status: 'Free',
      image: '/api/placeholder/60/60',
      experience: '20+ years',
      education: 'PhD Physics, Harvard',
      expertise: ['Quantum Physics', 'Research Methods', 'Data Analysis'],
      availability: 'Mon-Thu, 1-5 PM',
      hourlyRate: 0,
      description: 'Distinguished research scientist with extensive experience in quantum physics and research methodology. Enjoys mentoring the next generation of scientists.',
      languages: ['English', 'Korean'],
      achievements: ['Nobel Prize Nominee', '100+ Publications', 'National Science Medal']
    },
    {
      id: 4,
      name: 'Dr. Sarah Johnson',
      specialization: 'Software Engineer',
      rating: 4.8,
      reviews: 156,
      status: 'Paid',
      image: '/api/placeholder/60/60',
      experience: '10+ years',
      education: 'MS Computer Science, Berkeley',
      expertise: ['Full-Stack Development', 'Cloud Computing', 'DevOps'],
      availability: 'Mon-Fri, 6-9 PM',
      hourlyRate: 60,
      description: 'Senior software engineer at a leading tech company. Passionate about teaching programming and software development best practices.',
      languages: ['English'],
      achievements: ['Google Developer Expert', 'Open Source Contributor', 'Tech Conference Speaker']
    },
    {
      id: 5,
      name: 'Dr. Ahmed Hassan',
      specialization: 'Data Scientist',
      rating: 4.6,
      reviews: 94,
      status: 'Free',
      image: '/api/placeholder/60/60',
      experience: '8+ years',
      education: 'PhD Statistics, UCLA',
      expertise: ['Data Science', 'Statistics', 'Python/R'],
      availability: 'Wed-Sun, 3-7 PM',
      hourlyRate: 0,
      description: 'Data scientist with expertise in statistical analysis and machine learning. Enjoys helping students understand data science concepts.',
      languages: ['English', 'Arabic'],
      achievements: ['Kaggle Grandmaster', 'Published 30+ Papers', 'Data Science Mentor Award']
    },
    {
      id: 6,
      name: 'Prof. Lisa Wang',
      specialization: 'Product Manager',
      rating: 4.9,
      reviews: 78,
      status: 'Paid',
      image: '/api/placeholder/60/60',
      experience: '14+ years',
      education: 'MBA, Wharton',
      expertise: ['Product Strategy', 'User Research', 'Go-to-Market'],
      availability: 'Mon-Fri, 5-8 PM',
      hourlyRate: 80,
      description: 'Experienced product manager with a track record of launching successful products. Passionate about helping students understand product development.',
      languages: ['English', 'Mandarin'],
      achievements: ['Product of the Year Award', 'Featured in TechCrunch', 'Mentor of the Year']
    }
  ]

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

  const getFilteredMentors = () => {
    if (activeFilter === 'all') return mentors
    return mentors.filter(mentor => mentor.status.toLowerCase() === activeFilter)
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
              <a href="#mentors" className="text-purple-600 font-semibold text-sm">
                Mentors
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
                  { id: 'mentors', label: 'Mentors', icon: 'users', active: true },
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                  <Icon name="users" size="xl" className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-3">
                  Expert
                  <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Mentors
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Connect with experienced professionals and researchers for personalized guidance and mentorship.
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Mentors', count: mentors.length },
                  { id: 'free', label: 'Free Mentors', count: mentors.filter(m => m.status === 'Free').length },
                  { id: 'paid', label: 'Paid Mentors', count: mentors.filter(m => m.status === 'Paid').length }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-modern'
                        : 'bg-white/50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-white/20'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getFilteredMentors().map((mentor) => (
                <div key={mentor.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-modern p-6 border border-white/20 hover:shadow-modern-lg hover:scale-105 transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-modern">
                        <Icon name="user" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.specialization}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      mentor.status === 'Free' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {mentor.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(mentor.rating)}
                    <span className="text-sm text-gray-600 ml-1">({mentor.rating})</span>
                    <span className="text-sm text-gray-500">• {mentor.reviews} reviews</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mentor.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="clock" size="sm" className="text-gray-400" />
                      <span className="text-sm text-gray-600">{mentor.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="academic-cap" size="sm" className="text-gray-400" />
                      <span className="text-sm text-gray-600">{mentor.experience} experience</span>
                    </div>
                    {mentor.hourlyRate > 0 && (
                      <div className="flex items-center space-x-2">
                        <Icon name="currency-dollar" size="sm" className="text-gray-400" />
                        <span className="text-sm text-gray-600">${mentor.hourlyRate}/hour</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => setSelectedMentor(mentor)}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mentor Detail Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-modern-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-modern">
                    <Icon name="user" size="xl" className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedMentor.name}</h2>
                    <p className="text-lg text-gray-600">{selectedMentor.specialization}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMentor(null)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Icon name="x" size="lg" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {renderStars(selectedMentor.rating)}
                  <span className="text-lg text-gray-600 ml-2">({selectedMentor.rating})</span>
                  <span className="text-lg text-gray-500">• {selectedMentor.reviews} reviews</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{selectedMentor.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-sm text-gray-600">{selectedMentor.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-sm text-gray-600">{selectedMentor.experience}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.expertise.map((skill, index) => (
                      <span key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                  <ul className="space-y-1">
                    {selectedMentor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon name="check" size="sm" className="text-green-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                    Book Session
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 