import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import FirstMenu from './components/FirstMenu'
import Descripcion from './components/Descripcion'
import Lenguajes from './components/Lenguajes'
import Footer from './components/Footer'
import MasSobremi from './components/MasSobremi'
import Proyectos from './components/Proyectos'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <FirstMenu/>
        <MasSobremi/>
        <Lenguajes/>
        <Proyectos/>
        <Footer/>
    </div>
                  
  )
}

export default App
