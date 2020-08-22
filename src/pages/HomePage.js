import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CryptoJs from 'crypto-js';
import { requestAPI } from '../services';
import { setStatus, setToken, setHash } from '../actions';
import RankingBtn from '../components/RankingBtn';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.checkLogin = this.checkLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getName = this.getName.bind(this);
  }

  getEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="email-input">
        Email:
        <input
          data-testid="input-gravatar-email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
      </label>
    );
  }

  getName() {
    const { name } = this.state;
    return (
      <label htmlFor="name-input">
        Name:
        <input
          data-testid="input-player-name"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </label>
    );
  }

  getGravatar() {
    const { email } = this.state;
    const { hashGravatar } = this.props;
    const hash = CryptoJs.MD5(email).toString();
    hashGravatar(hash);
    // console.log(hash);
    // requestGravatar(hash);
  }

  // função que verifica se os campos email e nome foram preenchidos
  // pra então habilitar o botão "jogar"
  checkLogin() {
    const { email, name } = this.state;
    if (!email || !name) return true;
    return false;
  }

  // função que é chamada ao clicar o botão "jogar"
  clickPlayButton() {
    const { requestToken, setLogin, player } = this.props;
    const { email, name } = this.state;
    setLogin(email, name);
    console.log(player);
    localStorage.setItem('player', JSON.stringify(player));
    requestAPI()
      .then((value) => {
        requestToken(value);
        localStorage.setItem('token', value.token);
      });
    this.getGravatar();
  }

  render() {
    return (
      <div>
        <form>
          {this.getEmail()}
          <br />
          {this.getName()}
          <br />
          <Link to="/game">
            <button
              data-testid="btn-play"
              disabled={this.checkLogin()}
              onClick={() => this.clickPlayButton()}
              type="button"
            >
              Jogar
            </button>
          </Link>
          <Link to="/settings">
            <button data-testid="btn-settings" type="button"> Configurações </button>
          </Link>
          <RankingBtn />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.loginReducer.player,
});
const mapDispatchToProps = (dispatch) => ({
  setLogin: (email, name) => dispatch(setStatus(email, name)),
  requestToken: (value) => dispatch(setToken(value.token)),
  hashGravatar: (hash) => dispatch(setHash(hash)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

HomePage.propTypes = {
  setLogin: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
  hashGravatar: PropTypes.func.isRequired,
  player: PropTypes.func.isRequired,
};
