import { useState } from 'react'
import {
  HomePage,
  LoginPage,
  SignupPage,
  AssessmentPage,
  DashboardPage,
  ResourcesPage,
  MentorsPage,
  ProgressPage,
  SettingsPage
} from './pages'

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
      case 'settings':
        return <SettingsPage onBackToHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
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
