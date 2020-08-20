import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div data-testid="header-profile-picture">
            <img
              src="https://static.thenounproject.com/png/363633-200.png"
              alt="Player's Name"
            />
          </div>
          <div data-testid="header-player-name">
            Jogador:
            {localStorage.getItem('name')}
          </div>
          <div data-testid="header-player-score">
            Pontos:
            {localStorage.getItem('score')}
          </div>
        </header>
      </div>
    );
  }
}

// coloquei uma imagem genérica pra substituir onde deveria ser a imagem do GravAtar;

export default Header;
