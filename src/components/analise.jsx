import React, { useState, useEffect } from 'react';

const Analise = ({ MovieId, movieName }) => {

  const [analises, setAnalises] = useState(() => {
    const saved = localStorage.getItem("analises");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("analises", JSON.stringify(analises));
  }, [analises]);

  const addanalise = (analise, nota) => {
    const newAnalise = {
      id: Date.now(),      
      movieId: MovieId,    
      filme: movieName,
      analise,
      nota
    };

    setAnalises([...analises, newAnalise]);
  };

  const analisesDoFilme = analises.filter(
    (a) => a.movieId == MovieId
  );

  return (
    <div className="analise-container">

      <h2 className="analise-titulo">Sua análise</h2>

      <form className="analise-form" onSubmit={(e) => {
        e.preventDefault();
        const analise = e.target.analise.value;
        const nota = e.target.nota.value;
        addanalise(analise, nota);
        e.target.reset();
      }}>

        <textarea 
          name="analise" 
          placeholder="Escreva sua análise..." 
          className="analise-textarea"
          required
        />

        <input 
          type="number" 
          name="nota" 
          placeholder="Nota (0 a 10)" 
          className="analise-input"
          min="0"
          max="10"
        />

        <button type="submit" className="analise-button">
          Publicar
        </button>
      </form>

      <div className="analise-lista">
        {analisesDoFilme.map((a) => (
          <div key={a.id} className="analise-card">
            <div className="analise-header">
              <span className="analise-filme">{a.filme}</span>
              <span className="analise-nota">⭐ {a.nota}</span>
            </div>
            <p className="analise-texto">{a.analise}</p>
            <button className="analise-delete" onClick={() => {
                setAnalises(analises.filter((x) => x.id !== a.id));
            }}>Excluir</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Analise;