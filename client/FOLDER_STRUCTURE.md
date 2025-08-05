# Project Folder Structure

This document describes the folder structure of the Shilpa React + Vite project.

## Overview

```
src/
├── pages/              # Page components
│   ├── index.js        # Page exports
│   ├── HomePage.jsx    # Home page
│   ├── LoginPage.jsx   # Login page
│   ├── SignupPage.jsx  # Signup page
│   ├── AssessmentPage.jsx # Career assessment page
│   ├── DashboardPage.jsx  # User dashboard
│   ├── ResourcesPage.jsx  # Learning resources page
│   ├── MentorsPage.jsx    # Mentors page
│   ├── ProgressPage.jsx   # Progress tracking page
│   └── SettingsPage.jsx   # Account settings page
├── layouts/            # Layout components
│   ├── index.js        # Layout exports
│   └── Header.jsx      # Main header component
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components (Button, Card, Icon, etc.)
│   ├── FeatureCard.jsx # Feature display component
│   ├── TestimonialCard.jsx # Testimonial display component
│   └── StepCard.jsx   # Step process component
├── hooks/             # Custom React hooks
├── lib/               # Third-party library configurations and constants
├── utils/             # Utility functions and helpers
├── assets/            # Static assets (images, icons, etc.)
├── App.jsx            # Main App component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles with Tailwind CSS
```

## Detailed Description

### `/pages`
All page components for the application:
- **`HomePage.jsx`**: Landing page with features, testimonials, and how-it-works section
- **`LoginPage.jsx`**: User authentication page
- **`SignupPage.jsx`**: User registration page
- **`AssessmentPage.jsx`**: Career assessment form with multiple steps
- **`DashboardPage.jsx`**: User dashboard with progress overview and career recommendations
- **`ResourcesPage.jsx`**: Learning resources including PDFs, audio lessons, and videos
- **`MentorsPage.jsx`**: Mentor directory with filtering and booking functionality
- **`ProgressPage.jsx`**: Learning progress tracking with achievements and statistics
- **`SettingsPage.jsx`**: Account settings, notifications, and privacy controls
- **`index.js`**: Clean exports for all page components

### `/layouts`
Layout components for consistent page structure:
- **`Header.jsx`**: Main navigation header component
- **`index.js`**: Layout component exports

### `/components`
Reusable UI components organized by purpose:
- **`/ui`**: Basic, reusable UI components (Button, Card, Icon, etc.)
- **`FeatureCard.jsx`**: Feature display component for homepage
- **`TestimonialCard.jsx`**: User testimonial display component
- **`StepCard.jsx`**: Step process component for how-it-works section

### `/hooks`
Custom React hooks for shared logic:
- `useLocalStorage.js` - Hook for localStorage management
- `useDebounce.js` - Hook for debouncing values (useful for search)

### `/lib`
Third-party library configurations and application constants:
- `constants.js` - Application-wide constants and configuration

### `/utils`
Utility functions organized by purpose:
- `format.js` - Date, number, and text formatting utilities
- `validation.js` - Form validation utilities

### `/assets`
Static assets including images, icons, and other media files

## Import Patterns

### Pages
```javascript
import {
  HomePage,
  LoginPage,
  DashboardPage,
  AssessmentPage
} from './pages'
```

### Components
```javascript
import { Button, Icon, Card } from '../components/ui'
import { FeatureCard } from '../components/FeatureCard'
```

### Layouts
```javascript
import { Header } from '../layouts'
```

### Hooks
```javascript
import { useLocalStorage, useDebounce } from '../hooks'
```

### Utils
```javascript
import { formatDate, isValidEmail } from '../utils'
```

### Constants
```javascript
import { APP_NAME, STORAGE_KEYS } from '../lib/constants'
```

## Best Practices

1. **Page Organization**: Keep page components in `/pages` directory for clear navigation structure
2. **Component Reusability**: Place reusable components in `/components/ui` for consistency
3. **Clean Imports**: Use index files to create clean import paths
4. **Modern Styling**: Consistent use of Tailwind CSS with gradient themes and glass morphism effects
5. **File Naming**: Use PascalCase for components, camelCase for utilities and hooks
6. **State Management**: Use React hooks for state management within components

## Styling Architecture

The project uses a modern design system with:
- **Gradient Backgrounds**: Each page has a unique gradient theme
- **Glass Morphism**: `backdrop-blur-sm` and `bg-white/80` for modern card effects
- **Modern Shadows**: Custom shadow utilities (`shadow-modern`, `shadow-modern-lg`)
- **Smooth Animations**: Hover effects and transitions for interactive elements
- **Consistent Color Scheme**: Purple-to-blue gradient as the primary brand colors

## Adding New Features

When adding new features:
1. Create page components in `/pages` with appropriate navigation routing
2. Add reusable components to `/components/ui` for shared functionality
3. Create custom hooks in `/hooks` for shared logic
4. Add utility functions to `/utils` for common operations
5. Update constants in `/lib/constants.js` if needed
6. Maintain consistent styling with existing gradient themes and glass morphism effects 