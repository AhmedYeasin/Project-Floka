import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Navbar/>

        <p className='text-center text-2xl text-blue-700 font-medium'>Welcome to Project Floka</p>
      </section>
    </>
  )
}

export default App
