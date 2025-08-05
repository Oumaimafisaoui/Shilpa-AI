import { forwardRef } from 'react'
import { clsx } from 'clsx'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  loading = false,
  disabled,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden'
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:shadow-md active:scale-95',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-sm hover:shadow-md active:scale-95',
    outline: 'border-2 border-purple-600 bg-transparent text-purple-600 hover:bg-purple-50 active:scale-95',
    ghost: 'hover:bg-purple-50 text-gray-700 hover:text-purple-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md active:scale-95',
  }
  
  const sizes = {
    sm: 'h-9 px-4 py-2 text-sm',
    md: 'h-11 px-6 py-2.5 text-base',
    lg: 'h-14 px-8 py-3.5 text-lg',
    xl: 'h-16 px-12 py-4 text-xl',
  }
  
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      <span className={clsx(loading && 'opacity-0')}>
        {children}
      </span>
    </button>
  )
})

Button.displayName = 'Button'

export { Button } 