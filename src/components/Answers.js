import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';
import {
  setCounter, getAnswer, resetColors, setScore,
} from '../actions';

const difLevels = {
  hard: 3,
  medium: 2,
  easy: 1,
};

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVisible: false,
      score: 0,
    };
    this.setVisible = this.setVisible.bind(this);
    this.answerButtons = this.answerButtons.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  setVisible() {
    const { buttonVisible } = this.state;
    this.setState({ buttonVisible: !buttonVisible });
  }

  updateScore(id) {
    const { score } = this.state;
    const { changeScore, gameData } = this.props;
    // const aux = gameData;
    // const valor = 10 + (difLevels[aux.gameData[id].difficulty] * 20);
    const valor = 10 + (difLevels[questions.results[id].difficulty] * 20);
    this.setState({
      score: score + valor,
    });
    changeScore(valor);
  }

  correctButton() {
    const {
      counter, correctanswer, setCollors, shuffle, gameData,
    } = this.props;
    // const aux = gameData;
    return (
      <span>
        <button
          type="button"
          className={correctanswer}
          data-testid="correct-answer"
          onClick={() => {
            this.setVisible();
            this.updateScore(counter);
            setCollors();
          }}
        >
          {questions.results[shuffle[counter]]?.correct_answer}
          {/* {aux.gameData[shuffle[counter]].correct_answer} */}
        </button>
      </span>
    );
  }

  wrongButtons() {
    const {
      counter, wronganswer, setCollors, shuffle, gameData,
    } = this.props;
    // const aux = gameData;
    return (
      <span>
        {/* {aux.gameData[shuffle[counter]].incorrect_answers.map((wrong) => ( */}
        {questions.results[shuffle[counter]]?.incorrect_answers.map((wrong) => (
          <button
            type="button"
            className={wronganswer}
            data-testid={`wrong-answer-${wrong}`}
            key={wrong}
            onClick={() => { this.setVisible(); setCollors(); }}
          >
            {wrong}
          </button>
        ))}
      </span>
    );
  }

  answerButtons() {
    const aux = [this.correctButton(), this.wrongButtons()];
    // console.log(aux);
    for (let i = aux.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [aux[i], aux[j]] = [aux[j], aux[i]];
    }
    return aux;
  }

  render() {
    const { buttonVisible } = this.state;
    const { counter, increaseCounter, resetColorBtn } = this.props;
    return (
      <div>
        {(counter < 5) ? (this.answerButtons())
          : (<span />)}
        <br />
        {(counter === 5) ? <Redirect to="/feedback" />
          : buttonVisible && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={() => { this.setVisible(); increaseCounter(counter); resetColorBtn(); }}
          >
            Próxima
          </button>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.requestReducer.counter,
  correctanswer: state.questionsReducer.correct,
  wronganswer: state.questionsReducer.wrong,
  shuffle: state.questionsReducer.shuffle,
  gameData: state.questionsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (counter) => dispatch(setCounter(counter)),
  setCollors: () => dispatch(getAnswer('correct', 'wrong')),
  resetColorBtn: () => dispatch(resetColors()),
  changeScore: (score) => dispatch(setScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);

Answers.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  correctanswer: PropTypes.string.isRequired,
  wronganswer: PropTypes.string.isRequired,
  setCollors: PropTypes.func.isRequired,
  resetColorBtn: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  shuffle: PropTypes.arrayOf(PropTypes.number).isRequired,
  gameData: PropTypes.objectOf(PropTypes.object).isRequired,
};
