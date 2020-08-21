import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {correct, wrong} from '../App.css';
import FeedbackBtn from './FeedbackBtn';
import questions from '../mock_data/questions';
import { setCounter } from '../actions';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVisible: false,
    };
    this.setVisible = this.setVisible.bind(this);
    // this.correctButton = this.correctButton.bind(this);
    // this.wrongButtons = this.wrongButtons.bind(this);
    this.answerButtons = this.answerButtons.bind(this);
  }

  setVisible() {
    this.setState({ buttonVisible: true });
  }

  // correctButton() {
  //   const { counter } = this.props;
  //   return (
  //     <button
  //       type="button"
  //       className="correct"
  //       data-testid="correct-answer"
  //       onClick={() => this.setVisible()}
  //     >
  //       {questions.results[counter].correct_answer}
  //     </button>
  //   );
  // }

  // wrongButtons() {
  //   const { counter } = this.props;
  //   return (
  //     questions.results[counter].incorrect_answers.map((wrong) => (
  //       <button
  //         type="button"
  //         className="wrong"
  //         data-testid={`wrong-answer-${wrong}`}
  //         key={wrong}
  //         onClick={() => this.setVisible()}
  //       >
  //         {wrong}
  //       </button>
  //     ))
  //   );
  // }

  answerButtons() {
    // this.correctButton();
    // this.wrongButtons();
    const { counter } = this.props;

    return (
      <div>
        <button
          type="button"
          className="correct"
          data-testid="correct-answer"
          onClick={() => this.setVisible()}
        >
          {questions.results[counter].correct_answer}
        </button>
        {questions.results[counter].incorrect_answers.map((wrong) => (
          <button
            type="button"
            className="wrong"
            data-testid={`wrong-answer-${wrong}`}
            key={wrong}
            onClick={() => this.setVisible()}
          >
            {wrong}
          </button>
        ))}
      </div>
    );
  }

  render() {
    const { buttonVisible } = this.state;
    const { counter, increaseCounter } = this.props;
    return (
      <div>
        {/* {this.answerButtons()} */}
        {(counter < 5) ? (this.answerButtons())
          : (<span />)}
        <br />
        {(counter === 5) ? <FeedbackBtn />
          : buttonVisible && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={() => increaseCounter(counter)}
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
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (counter) => dispatch(setCounter(counter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);

Answers.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  counter: PropTypes.func.isRequired,
};
