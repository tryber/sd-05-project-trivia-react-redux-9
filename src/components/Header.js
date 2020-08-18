import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div data-testid="header-profile-pic">
            <img
              src="https://static.thenounproject.com/png/363633-200.png"
              alt="Player's Name"
            />
          </div>
          <div className="player-name">Jogador: Eduardo</div>
          <div className="player-score">Pontos: 20</div>
        </header>
      </div>
    );
  }
}

// criei cada coisa dentro de uma div separada para facilitar o flexbox (css);
// coloquei uma imagem genérica pra substituir onde deveria ser a imagem do GravAtar;
// o nome do jogador e a pontuação devem ser obtidas a partir do LocalStorage (substituir);

export default Header;
