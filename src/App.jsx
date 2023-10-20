import { useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
// import './App.css'
import { Criar } from './pages/Criar'
import { Home } from './pages/Home'
import { Navbar } from './layout/Navbar'
import {Footer} from './layout/Footer'
import { Procurar } from './pages/Procurar'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/criar' element={<Criar/>}/>
        <Route path='/procurar' element={<Procurar/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    )
}

export default App
