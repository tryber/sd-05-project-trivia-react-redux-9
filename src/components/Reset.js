import React from 'react';
import { Link } from 'react-router-dom';

function Reset() {
  return (
    <Link to="/">
      <button type="button" data-testid="btn-go-home">
        Voltar ao início
      </button>
    </Link>
  );
}

export default Reset;
