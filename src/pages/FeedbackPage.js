import React from 'react';
import { Link } from 'react-router-dom';

class FeedBack extends React.Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <img data-testid="header-profile-picture" alt="user-img" />
            <h1 data-testid="header-player-name">Eduardo</h1>
            <h2 data-testid="header-score">50 Pontos</h2>
          </header>
        </div>
        <div>
          {/* if (correctAnswer < 3) */}
          <p data-testid="feedback-text">Podia ser melhor...</p>
          {/* else */}
          <p data-testid="feedback-text">Mandou bem!</p>
        </div>
        <div>
          <p data-testid="feedback-total-score">Placar Final:</p>
          <p data-testid="feedback-total-question">Número de Acertos:</p>
        </div>
        <div>
          <Link to="/">
            <button type="button" data-testid="btn-play-again">Jogar Novamente</button>
          </Link>
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default FeedBack;
