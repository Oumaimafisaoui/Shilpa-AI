import { Icon } from './ui'

export function StepCard({ step, number }) {
  return (
    <div className="text-center group relative">
      {/* Connection line - now extends past all icons including the third */}
      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform -translate-x-1/2"></div>
      
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-modern-lg relative z-20">
          <Icon name={step.icon} size="lg" className="text-white" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-all duration-300">
        {step.title}
      </h3>
      <p className="text-gray-600 leading-relaxed max-w-xs mx-auto text-sm">{step.description}</p>
    </div>
  )
} 