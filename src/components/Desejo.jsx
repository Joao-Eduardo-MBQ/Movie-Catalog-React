import React from 'react'
import { useNavigate } from 'react-router-dom'

const Desejo = ({desejo, setDesejo}) => {

  const navigate = useNavigate();
  const removeDesejo = (id) => {
  const novaLista = desejo.filter((movie) => movie.id !== id);
  setDesejo(novaLista);
  localStorage.setItem("desejo", JSON.stringify(novaLista));
};

  return (
    <div className='desejo-container'>

        <button onClick={() => window.history.back()} className="back-button">Voltar</button>

        <h1>Lista de Desejo</h1>
        <ul className='desejo-lista'>
            {desejo.map((movie, index) => (
                <li key={index} className='desejo-item'>
                    <button className="remove-button"onClick={() => removeDesejo(movie.id)}>✕</button>
                    <img src={movie.imagem} alt={movie.filme} onClick={() => navigate(`/moviepag/${movie.id}`)} className='desejo-poster' />
                    <div className='desejo-info'>
                        <h2>{movie.filme}</h2>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Desejo
