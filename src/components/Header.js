import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';

class Header extends Component {
  render() {
    const { name, hash, score } = this.props;
    const gravatarURL = 'https://www.gravatar.com/avatar/';
    return (
      <div>
        <header className="wrapper">
          <div data-testid="header-profile-picture" className="App">
            <img src={`${gravatarURL}${hash}`} alt={`${name}`} />
          </div>
          <div>
            <strong>Jogador: </strong>
            <span data-testid="header-player-name">{name}</span>
          </div>
          <div>
            <strong>Pontos: </strong>
            <span data-testid="header-score">{`${score}`}</span>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  hash: state.requestReducer.hash,
  score: state.loginReducer.score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
