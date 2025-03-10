import React from 'react'

function HeroSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative">
        <h1 className="text-4xl font-bold mb-6">Unlock the Power of Email Permutations</h1>
        <p className="text-lg mb-8">
          Generate all possible email formats with our cutting-edge permutation technology.
        </p>
        <a
          href="#email-form"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default HeroSection
