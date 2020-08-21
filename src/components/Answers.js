import React, { Component } from 'react';
import questions from '../mock_data/questions';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosed: true,
    };
    this.setVisible = this.setVisible.bind(this);
  }

  setVisible() {
    this.setState({ chosed: false });
  }

  render() {
    const { chosed } = this.state;
    return (
      <div>
        <button
          data-testid="correct-answer"
          onClick={() => this.setVisible()}
        >
          {questions.results[0].correct_answer}
        </button>
        {questions.results[0].incorrect_answers.map((wrong) => (
          <button
            data-testid={`wrong-answer-${wrong}`}
            key={wrong}
            onClick={() => this.setVisible()}
          >
            {wrong}
          </button>
        ))}
        <br />
        <button
          type="button"
          data-testid="btn-next"
          // disabled={chosed}
          visibility={chosed}
        >
          Próxima
        </button>
      </div>
    );
  }
}

export default Answers;
