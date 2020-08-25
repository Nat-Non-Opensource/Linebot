import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() => {
    getAPIVersion()
  })

  function getAPIVersion() {
    axios
      .get('/api/version')
      .then((response) => {
        console.log(`version=${response.data}`)
      })
      .catch((error) => {
        console.error('error:', error.status, error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Artisan-parking</p>
      </header>
    </div>
  )
}

export default App
