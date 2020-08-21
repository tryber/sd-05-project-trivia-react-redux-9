import React from 'react';
import { Link } from 'react-router-dom';

function FeedbackBtn() {
  return (
    <Link to="/feedback">
      <button type="button">
        Feedback
      </button>
    </Link>
  );
}

export default FeedbackBtn;
