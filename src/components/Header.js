import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, hash, score } = this.props;
    const gravatarURL = 'https://www.gravatar.com/avatar/';
    return (
      <div>
        <header>
          <div data-testid="header-profile-picture">
            <img src={`${gravatarURL}${hash}`} alt={`${name}`} />
          </div>
          <div data-testid="header-player-name">
            <strong>Jogador: </strong>
            {name}
          </div>
          <div data-testid="header-score">
            <strong>Pontos: </strong>
            {`${score}`}
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
