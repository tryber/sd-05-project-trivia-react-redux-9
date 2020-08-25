import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class FeedBack extends React.Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          {assertions < 3
            ? <p data-testid="feedback-text">Podia ser melhor...</p>
            : <p data-testid="feedback-text">Mandou bem!</p>}
        </div>
        <div>
          <p>
            Placar Final:
            <span data-testid="feedback-total-score">{score}</span>
          </p>
          <p>
            Número de Acertos:
            <span data-testid="feedback-total-question">{assertions}</span>
          </p>
        </div>
        <div>
          <Link to="/">
            <button type="button" data-testid="btn-play-again">Jogar Novamente</button>
          </Link>
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.loginReducer.score,
  assertions: state.loginReducer.assertions,
});

export default connect(mapStateToProps)(FeedBack);

FeedBack.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};
