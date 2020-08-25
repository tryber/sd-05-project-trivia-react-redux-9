import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import questions from '../mock_data/questions';
import { setCounter, getAnswer, resetColors } from '../actions';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVisible: false,
    };
    this.setVisible = this.setVisible.bind(this);
    this.answerButtons = this.answerButtons.bind(this);
  }

  setVisible() {
    this.setState({ buttonVisible: true });
  }

  answerButtons() {
    const { counter, correctanswer, wronganswer, setCorrectAnswer } = this.props;
    return (
      <div>
        <button
          type="button"
          className={correctanswer}
          data-testid="correct-answer"
          onClick={() => { this.setVisible(); setCorrectAnswer(); }}
        >
          {questions.results[counter].correct_answer}
        </button>
        {questions.results[counter].incorrect_answers.map((wrong) => (
          <button
            type="button"
            className={wronganswer}
            data-testid={`wrong-answer-${wrong}`}
            key={wrong}
            onClick={() => { this.setVisible(); setCorrectAnswer(); }}
          >
            {wrong}
          </button>
        ))}
      </div>
    );
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
            onClick={() => { increaseCounter(counter); resetColorBtn(); }}
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
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (counter) => dispatch(setCounter(counter)),
  setCorrectAnswer: () => dispatch(getAnswer('correct', 'wrong')),
  resetColorBtn: () => dispatch(resetColors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);

Answers.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  counter: PropTypes.func.isRequired,
  correctanswer: PropTypes.func.isRequired,
  wronganswer: PropTypes.func.isRequired,
  setCorrectAnswer: PropTypes.func.isRequired,
  resetColorBtn: PropTypes.func.isRequired,
};
