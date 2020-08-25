import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';
import { randomIndex } from '../actions';
// import FeedbackPage from '../pages/FeedbackPage';

class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffleIndex: [0],
    };
    this.randomId = this.randomId.bind(this);
  }

  randomId() {
    // const { shuffleId } = this.props;
    const { shuffleIndex } = this.state;
    const aux = [];
    const index = aux.push(Math.floor(Math.random() * 5));
    this.setState({ shuffleIndex: index });
    console.log(shuffleIndex);
    // this.setState({ shuffleIndex: shuffleIndex.push(Math.floor(Math.random() * 5)) });
    // shuffleId(shuffle);
  }

  render() {
    const { counter, shuffle } = this.props;
    const { shuffleIndex } = this.state;
    return (
      <div>
        {this.randomId()}
        {/* {shuffleId(Math.floor(Math.random() * 5))} */}
        {
      (counter < 5) ? (
        <div>
          <p data-testid="question-category">
            Category:
            {questions.results[shuffleIndex].category}
          </p>
          <p data-testid="question-text">
            {`Question 0${counter + 1}: `}
            {questions.results[shuffleIndex].question}
          </p>
        </div>
      )
        : (
          <span />
        )
}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.requestReducer.counter,
  shuffle: state.questionsReducer.shuffle,
});

const mapDispatchToProps = (dispatch) => ({
  shuffleId: (shuffle) => dispatch(randomIndex(shuffle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quizz);

Quizz.propTypes = {
  counter: PropTypes.number.isRequired,
  shuffle: PropTypes.number.isRequired,
  shuffleId: PropTypes.func.isRequired,
};
