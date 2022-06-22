import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from './containers/List/List'
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
import './App.css'


function App() {
  return (
    //Definimos la estructura básica de la web con header y footer y ponemos las rutas a los distintos containers
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<Contact />} />
            <Route path="/movies" element={<List />} />
          </Routes>

      </BrowserRouter>
  )
}

export default App
