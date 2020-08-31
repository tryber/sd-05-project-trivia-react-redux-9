/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CryptoJs from 'crypto-js';
import Card from '../layouts/Card';
import { requestAPI } from '../services';
// import { requestAPI, requestQuestions } from '../services';
import {
  setStatus, setToken, setHash, randomIndex,
  // getQuestions,
} from '../actions';
import RankingBtn from '../components/RankingBtn';
import logo from '../trivia.png';

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
    this.durstenfeld = this.durstenfeld.bind(this);
    this.buttonPlay = this.buttonPlay.bind(this);
  }

  componentDidMount() {
    // const { setQuizz } = this.props;
    // const token = localStorage.getItem('token');
    // requestQuestions(token)
    //   .then((data) => setQuizz(data));
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
  }

  // função que verifica se os campos email e nome foram preenchidos
  // pra então habilitar o botão "jogar"
  checkLogin() {
    const { email, name } = this.state;
    return !(email && name);
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm  https://bit.ly/2EBiyEC */
  durstenfeld(array) {
    const aux = array; // https://bit.ly/3jdBxEn
    for (let i = aux.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [aux[i], aux[j]] = [aux[j], aux[i]];
    }
    // console.log(this.aux);
    return aux;
  }

  // função que é chamada ao clicar o botão "jogar"
  clickPlayButton() {
    const { requestToken, setLogin } = this.props;
    const { email, name } = this.state;
    setLogin(email, name);
    requestAPI()
      .then((value) => {
        requestToken(value);
        localStorage.setItem('token', value.token);
      });
    this.getGravatar();
  }

  buttonPlay() {
    const { durstenfeldShuffle } = this.props;
    const aux = [0, 1, 2, 3, 4];
    return (
      <Link to="/game">
        <button
          data-testid="btn-play"
          disabled={this.checkLogin()}
          onClick={() => { durstenfeldShuffle(this.durstenfeld(aux)); this.clickPlayButton(); }}
          type="button"
        >
          Jogar
        </button>
      </Link>
    );
  }

  render() {
    return (
      <Card>
        <form>
          <div>
            <img src={logo} alt="trivia" style={{ width: '320px' }} />
          </div>
          <div className="Conteudo">
            {this.getEmail()}
            <br />
            {this.getName()}
          </div>
          <div>
            {this.buttonPlay()}
            <Link to="/settings">
              <button data-testid="btn-settings" type="button"> Configurações </button>
            </Link>
            <RankingBtn />
          </div>
        </form>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (email, name) => dispatch(setStatus(email, name)),
  requestToken: (value) => dispatch(setToken(value.token)),
  hashGravatar: (hash) => dispatch(setHash(hash)),
  durstenfeldShuffle: (shuffle) => dispatch(randomIndex(shuffle)),
  // setQuizz: (data) => dispatch(getQuestions(data)),
});

export default connect(null, mapDispatchToProps)(HomePage);

HomePage.propTypes = {
  setLogin: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
  hashGravatar: PropTypes.func.isRequired,
  durstenfeldShuffle: PropTypes.func.isRequired,
  // setQuizz: PropTypes.func.isRequired,
};
