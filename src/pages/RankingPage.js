import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Reset from '../components/Reset';

class RankingPage extends Component {
  render() {
    return (
      <div>
        <Reset />
        <h1 data-testid="ranking-title">Ranking</h1>
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
