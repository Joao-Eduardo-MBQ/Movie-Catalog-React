import { useEffect, useState, useRef, use } from "react";
import Movies from "./Movies";

import React from 'react'

const Card = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const cards = Movies();

  const previousCard = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

useEffect(() => {
  const container = containerRef.current;
  const activeItem = itemsRef.current[index];

  if (container && activeItem) {
    const containerWidth = container.offsetWidth;
    const itemLeft = activeItem.offsetLeft;
    const itemWidth = activeItem.offsetWidth;

    // Pega o centro do card (sem scale) e centraliza ele na tela
    const itemCenter = itemLeft + itemWidth / 2;
    const scrollPosition = itemCenter - containerWidth / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }
}, [index]);

  return (

    <div className="card-container">

     <button className="arrow left" onClick={previousCard}>◀</button>

      <div
        className="card-track"
        ref={containerRef}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`card ${i === 0 ? 'first' : ''} ${i === cards.length - 1 ? 'last' : ''} ${i === index ? "active" : ""}`}
          >
            <img src={card.imagem} alt={card.filme} />
            <h3>{card.filme}</h3>
            <p>{card.genero}</p>
            <p>{card.ano}</p>
            <p>{card.diretor}</p>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={nextCard}>▶</button>

    </div>
  )
}

export default Card
