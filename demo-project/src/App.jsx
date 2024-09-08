import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './nav'
import MainSection from './mainSection'
import Footer from './footer'
import Chatbot from './bot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainSection/>
    <Footer/>
    <Chatbot/>

    </>
  )
}

export default App
