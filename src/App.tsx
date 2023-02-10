import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import FirstMenu from './components/FirstMenu'
import Descripcion from './components/Descripcion'
import Lenguajes from './components/Lenguajes'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar/>
        <FirstMenu/>
        <Lenguajes/>
        <Footer/>
    </div>
                  
  )
}

export default App
