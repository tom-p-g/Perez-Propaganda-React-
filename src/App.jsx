import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const proyecto = "Perez Propaganda"

  return (
    <>
    <h1>{proyecto}</h1>
    </>
  )
}

export default App
