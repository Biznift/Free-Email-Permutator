import React from 'react'
import { Rocket, ShieldCheck, BarChartBig } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Enhanced Delivery',
    description: 'Ensure your emails reach the inbox every time with our advanced permeation techniques.',
  },
  {
    icon: ShieldCheck,
    title: 'Unbreakable Security',
    description: 'Protect your sensitive information with our state-of-the-art encryption and security protocols.',
  },
  {
    icon: BarChartBig,
    title: 'Performance Analytics',
    description: 'Track and optimize your email campaigns with detailed analytics and reporting.',
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
