import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { resetCounter } from '../actions';
import RankingBtn from '../components/RankingBtn';

class Feedback extends React.Component {
  componentDidMount() {
    const { name, score, picture } = this.props;
    const currentPlayer = {
      name,
      score,
      picture,
    };
    const getRank = JSON.parse(localStorage.getItem('ranking'));
    if (getRank) {
      localStorage.setItem('ranking', JSON.stringify(
        [...getRank, currentPlayer],
      ));
    } else {
      localStorage.setItem('ranking', JSON.stringify(
        [currentPlayer],
      ));
    }
  }

  render() {
    const { score, assertions, zerarContador } = this.props;
    return (
      <div>
        <Header />
        {assertions < 3
          ? <p data-testid="feedback-text" style={{ color: 'red' }}>Podia ser melhor...</p>
          : <p data-testid="feedback-text" style={{ color: 'blue' }}>Mandou bem!</p>}
        <p>
          <strong>Placar Final: </strong>
          <span data-testid="feedback-total-score">{score}</span>
        </p>
        <p>
          <strong>Número de Acertos: </strong>
          <span data-testid="feedback-total-question">{assertions}</span>
        </p>
        <p>Placar Final:</p>
        <span data-testid="feedback-total-score">{score}</span>
        <p>Número de Acertos:</p>
        <span data-testid="feedback-total-question">{assertions}</span>
        <Link to="/">
          <button type="button" data-testid="btn-play-again"
            onClick={() => zerarContador()}>Jogar Novamente</button>
        </Link>
        <RankingBtn />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.loginReducer.score,
  assertions: state.loginReducer.assertions,
  name: state.loginReducer.name,
  picture: state.loginReducer.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  zerarContador: () => dispatch(resetCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  zerarContador: PropTypes.func.isRequired,
};
