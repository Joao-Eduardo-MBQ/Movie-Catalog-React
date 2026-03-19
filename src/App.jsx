import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Card from './components/Card.jsx'
import MoviePag from './components/MoviePag.jsx'
import Desejo from './components/Desejo.jsx'

import './App.css'

const App = () => {

  const [desejo, setDesejo] = useState([])

  useEffect(() => {
  const dados = localStorage.getItem("desejo");
  if (dados) {
    setDesejo(JSON.parse(dados));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem("desejo", JSON.stringify(desejo));
  }, [desejo]);

  return (
    <Routes>

      <Route 
        path="/" 
        element={<Card />} 
      />

      <Route 
        path="/moviepag/:id" 
        element={
          <MoviePag 
            desejo={desejo} 
            setDesejo={setDesejo} 
          />
        } 
      />

      <Route 
        path="/desejo" 
        element={
        <Desejo 
          desejo={desejo} 
          setDesejo={setDesejo} />
        } 
      />

    </Routes>
  )
}

export default App