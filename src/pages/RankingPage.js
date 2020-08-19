import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RankingPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Voltar ao início</button>
        </Link>
        <h1>Ranking</h1>
        <table>
          <thead>
            <th>Jogador</th>
            <th>Pontuação</th>
          </thead>
          <tbody>
            <tr>
              <td data-testid="player-name-0">Eduardo</td>
              <td data-testid="player-score-0">50 pontos</td>
            </tr>
            <tr>
              <td data-testid="player-name-1">Camila</td>
              <td data-testid="player-score-1">45 pontos</td>
            </tr>
            <tr>
              <td data-testid="player-name-2">Jorge</td>
              <td data-testid="player-score-2">40 pontos</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// OBS.1: data-testid com o valor player-name-${index} e player-score-${index}
// onde ${index} é iniciado em zero
// OBS.2: o ranking deve ser armazenado no LocalStorage.

export default RankingPage;
