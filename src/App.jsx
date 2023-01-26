import { useState } from 'react'
import './App.css'
import Header from '../components/Header.jsx'
import Meme from '../components/Meme.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  )
}

export default App
