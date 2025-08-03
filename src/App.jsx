import { useState } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import AssessmentPage from './AssessmentPage'
import DashboardPage from './DashboardPage'
import ResourcesPage from './ResourcesPage'
import MentorsPage from './MentorsPage'
import ProgressPage from './ProgressPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onBackToHome={() => setCurrentPage('home')} />
      case 'signup':
        return <SignupPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'assessment':
        return <AssessmentPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'dashboard':
        return <DashboardPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'resources':
        return <ResourcesPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'mentors':
        return <MentorsPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'progress':
        return <ProgressPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}
