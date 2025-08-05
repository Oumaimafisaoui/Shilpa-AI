import { Icon } from './ui'

export function FeatureCard({ feature }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-500 border border-white/20 group hover:scale-105 h-full flex flex-col">
      <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-modern`}>
        <Icon name={feature.icon} size="lg" className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm flex-grow">{feature.description}</p>
    </div>
  )
} 