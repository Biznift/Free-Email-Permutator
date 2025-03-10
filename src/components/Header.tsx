import React from 'react'
import { Mailbox } from 'lucide-react'

function Header() {
  return (
    <header className="py-6 px-8 flex items-center justify-between">
      <a href="/" className="flex items-center text-xl font-semibold">
        <Mailbox className="mr-2 w-6 h-6 text-blue-400" />
        Free Email Permutator
      </a>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="https://biznift.com" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.biznift.com/free-tools"
              className="hover:text-blue-300"
            >
              More Free Tools
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
