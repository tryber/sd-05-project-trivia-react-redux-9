import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    // const { name, email, hash } = this.props;
    const { name, hash } = this.props;
    const gravatarURL = "https://www.gravatar.com/avatar/";
    return (
      <div>
        <header>
          <div data-testid="header-profile-picture">
            <img src={`${gravatarURL}${hash}`} alt={`${name}`} />
          </div>
          <div data-testid="header-player-name">
            Jogador:
            {name}
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

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  // email: state.loginReducer.email,
  hash: state.requestReducer.hash,
});

// coloquei uma imagem genérica pra substituir onde deveria ser a imagem do GravAtar;

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};
