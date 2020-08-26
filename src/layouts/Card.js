import React from 'react';
import './Card.css';

export default (Card) => (
  <div className="Card" style={{ borderColor: Card.color || '#000' }}>
    <div className="Conteudo">
      {Card.children}
    </div>
    <div className="Footer" style={{ backgroundColor: Card.color || '#000' }}>
      {Card.titulo}
    </div>
  </div>
);
