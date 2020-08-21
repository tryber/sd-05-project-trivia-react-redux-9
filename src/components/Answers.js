import React, { Component } from 'react';
import questions from '../mock_data/questions';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVisible: false,
    };
    this.setVisible = this.setVisible.bind(this);
  }

  setVisible() {
    this.setState({ buttonVisible: true });
  }

  render() {
    const { buttonVisible } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="correct-answer"
          onClick={() => this.setVisible()}
        >
          {questions.results[0].correct_answer}
        </button>
        {questions.results[0].incorrect_answers.map((wrong) => (
          <button
            type="button"
            data-testid={`wrong-answer-${wrong}`}
            key={wrong}
            onClick={() => this.setVisible()}
          >
            {wrong}
          </button>
        ))}
        <br />
        {buttonVisible && (
          <button
            type="button"
            data-testid="btn-next"
          >
            Próxima
          </button>
        )}
      </div>
    );
  }
}

export default Answers;
