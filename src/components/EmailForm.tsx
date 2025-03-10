import React, { useState } from 'react'
import { Copy, RefreshCw } from 'lucide-react'

function EmailForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [domain, setDomain] = useState('')
  const [permutations, setPermutations] = useState<string[]>([])
  const [isCopied, setIsCopied] = useState(false)

  const generatePermutations = () => {
    if (!firstName || !lastName || !domain) {
      alert('Please fill in all fields.')
      return
    }

    const generatedPermutations = [
      `${firstName}.${lastName}@${domain}`,
      `${firstName}@${domain}`,
      `${lastName}@${domain}`,
      `${firstName}${lastName}@${domain}`,
      `${lastName}${firstName}@${domain}`,
      `${firstName}_${lastName}@${domain}`,
      `${lastName}_${firstName}@${domain}`,
      `${firstName}-${lastName}@${domain}`,
      `${lastName}-${firstName}@${domain}`,
      `${firstName.charAt(0)}${lastName}@${domain}`,
      `${lastName.charAt(0)}${firstName}@${domain}`,
      `${firstName.charAt(0)}.${lastName}@${domain}`,
      `${lastName.charAt(0)}.${firstName}@${domain}`,
    ]

    setPermutations(generatedPermutations)
  }

  const copyToClipboard = async () => {
    if (permutations.length === 0) {
      alert('No permutations to copy.')
      return
    }

    try {
      await navigator.clipboard.writeText(permutations.join('\n'))
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err)
      // Fallback for browsers that don't support the Clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = permutations.join('\n')
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (copyErr) {
        console.error('Fallback: Failed to copy: ', copyErr)
        alert('Failed to copy, please copy manually.')
      } finally {
        document.body.removeChild(textArea)
      }
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Generate Email Permutations
      </h2>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="domain"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Domain:
        </label>
        <input
          type="text"
          id="domain"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={generatePermutations}
        >
          <RefreshCw className="inline-block mr-2 w-4 h-4" />
          Generate
        </button>
      </div>
      {permutations.length > 0 && (
        <div className="mt-6">
          <label
            htmlFor="permutations"
            className="block text-gray-300 text-sm font-bold mb-2 text-center"
          >
            Email Permutations:
          </label>
          <div className="flex justify-center">
            <textarea
              id="permutations"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              value={permutations.join('\n')}
              rows={5} // Adjust the number of rows as needed
              readOnly
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={copyToClipboard}
              disabled={isCopied}
            >
              <Copy className="inline-block mr-2 w-4 h-4" />
              {isCopied ? 'Copied!' : 'Copy All'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailForm
