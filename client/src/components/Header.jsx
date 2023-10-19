import React from 'react'

const Header = () => {
  return (
    <header className="py-10 mx-36 flex justify-between text-white">
      <h1 className="text-lg">Menu based chatbot</h1>
      <ul className="flex">
        <li>Search Engine</li>
        <li className="ml-5">IQ</li>
      </ul>
    </header>
  )
}

export default Header