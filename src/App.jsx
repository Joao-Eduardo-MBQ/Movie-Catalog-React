import React from 'react'
import Card from './components/Card.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import MoviePag from './components/MoviePag.jsx';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/moviepag/:id" element={<MoviePag />} />
    </Routes>
  )
}

export default App
