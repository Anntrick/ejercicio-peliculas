import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from './containers/List/List'
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import './App.css'


function App() {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<List />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
