import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Wellcome to Transflower Store</h1>
      <hr/>
      <p className="read-the-docs">
        Todays fresh flowers
      </p>
      <ol>
        <li>Rose</li>
        <li>Lily</li>
        
      </ol>
    </>
  )
}

export default App
