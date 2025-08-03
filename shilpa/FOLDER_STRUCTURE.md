# Project Folder Structure

This document describes the folder structure of the Shilpa React + Vite + TanStack Router project.

## Overview

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, etc.)
│   └── layout/         # Layout components (Header, Footer, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Third-party library configurations and constants
├── routes/             # TanStack Router route files
│   ├── __root.jsx      # Root route with layout
│   ├── index.jsx       # Home page route
│   └── about.jsx       # About page route
├── styles/             # Global styles and CSS modules
├── types/              # TypeScript type definitions (if using TS)
├── utils/              # Utility functions and helpers
├── App.jsx             # Main App component (legacy)
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Detailed Description

### `/components`
Reusable UI components organized by purpose:
- **`/ui`**: Basic, reusable UI components like buttons, cards, inputs, etc.
- **`/layout`**: Layout-specific components like headers, footers, sidebars, etc.

### `/hooks`
Custom React hooks for shared logic:
- `useLocalStorage.js` - Hook for localStorage management
- `useDebounce.js` - Hook for debouncing values (useful for search)

### `/lib`
Third-party library configurations and application constants:
- `constants.js` - Application-wide constants and configuration

### `/routes`
TanStack Router route files:
- `__root.jsx` - Root route that defines the overall layout
- `index.jsx` - Home page route
- `about.jsx` - About page route

### `/utils`
Utility functions organized by purpose:
- `format.js` - Date, number, and text formatting utilities
- `validation.js` - Form validation utilities

### `/styles`
Global styles and CSS modules (currently using Tailwind CSS)

### `/types`
TypeScript type definitions (for future TypeScript migration)

## Import Patterns

### Components
```javascript
import { Button, Card } from '@/components/ui'
import { Header } from '@/components/layout/Header'
```

### Hooks
```javascript
import { useLocalStorage, useDebounce } from '@/hooks'
```

### Utils
```javascript
import { formatDate, isValidEmail } from '@/utils'
```

### Constants
```javascript
import { APP_NAME, STORAGE_KEYS } from '@/lib/constants'
```

## Best Practices

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **File Naming**: Use PascalCase for components, camelCase for utilities and hooks
3. **Index Files**: Use index files to create clean import paths
4. **Type Safety**: Consider migrating to TypeScript for better type safety
5. **Testing**: Add test files alongside the components they test

## Adding New Features

When adding new features:
1. Create appropriate route files in `/routes`
2. Add reusable components to `/components/ui` or `/components/layout`
3. Create custom hooks in `/hooks` for shared logic
4. Add utility functions to `/utils` for common operations
5. Update constants in `/lib/constants.js` if needed 