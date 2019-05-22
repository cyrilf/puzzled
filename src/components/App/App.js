import React from 'react'

import './App.css'
import Puzzle from '../Puzzle/Puzzle'

function App() {
  return (
    <div className="app">
      <h1>Puzzled</h1>
      <Puzzle size={3}/>
    </div>
  )
}

export default App
