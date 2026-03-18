import React from 'react'
import { useParams } from 'react-router-dom';
import Movies from './Movies';
import Analise from './analise';

const MoviePag = () => {
  const { id } = useParams();
  const movie = Movies().find((m) => m.id === parseInt(id));

  return (

    <div className="movie-page">

      <button onClick={() => window.history.back()} className="back-button">Voltar</button>

      <img className="movie-banner" src={movie?.imagemovie} alt="banner" />

      <div className="movie-content">
        <div className="movie-info">
          <h1>{movie?.filme}</h1>
          <p><span>Gênero:</span> {movie?.genero}</p>
          <p><span>Ano:</span> {movie?.ano}</p>
          <p><span>Diretor:</span> {movie?.diretor}</p>
          <p><span>Sinopse:</span> {movie?.sinopse}</p>
        </div>

        <img className="movie-poster" src={movie?.imagem} alt={movie?.filme} />
      </div>
      
    <div className="analise-root"> 
      <Analise MovieId={id} movieName={movie?.filme} />  
    </div>

    </div>
  );
}

export default MoviePag
