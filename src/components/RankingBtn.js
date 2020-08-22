import React from 'react';
import { Link } from 'react-router-dom';

function RankingBtn() {
  return (
    <Link to="/ranking">
      <button type="button" data-testid="btn-ranking">
        Ranking
      </button>
    </Link>
  );
}

export default RankingBtn;
