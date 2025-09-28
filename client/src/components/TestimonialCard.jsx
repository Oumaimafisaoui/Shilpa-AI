import { Icon } from './ui'

export function TestimonialCard({ student }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-500 border border-white/20 group hover:scale-105 h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 ${student.avatar} rounded-full flex items-center justify-center mr-4 shadow-modern group-hover:scale-110 transition-all duration-300`}>
          <span className="text-white font-bold text-lg">{student.initials}</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{student.name}</h4>
          <p className="text-sm text-gray-600 font-medium">{student.stream}</p>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <div className="flex text-yellow-400 mr-2">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="star" size="sm" className="fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic leading-relaxed text-sm flex-grow">"{student.quote}"</p>
    </div>
  )
} 