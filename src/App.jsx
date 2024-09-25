import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count:</h2>
        <img className='samosa' src="src\assets\samosa.png" alt="" />
      </div>
    </div>
  )
}

export default App
