import React from 'react'
import EmailForm from './components/EmailForm'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <EmailForm />
      </div>
      <Footer />
    </div>
  )
}

export default App
