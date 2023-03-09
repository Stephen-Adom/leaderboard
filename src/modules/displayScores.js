import Score from './score.model.js';
import topScores from './topScores.js';

const leaderboardScore = new Score();

const sortByScores = (scores) => scores.sort((a, b) => b.score - a.score);

const renderTopScores = (scores) => {
  if (scores.length > 3) {
    return topScores(scores);
  }

  return '';
};

const displayAllScores = () => {
  leaderboardScore.loadScores();
  const scores = sortByScores(leaderboardScore.getScores());

  if (scores && scores.length) {
    let html = '';

    scores.forEach((score) => {
      html += `
        <li>${score.user}: ${score.score}</li>
        `;
    });

    const topScores = scores.length > 3 ? renderTopScores(scores) : '';

    return {
      listhtml: html,
      topScores,
    };
  }
  return {
    listhtml: '<li>No Scores Available!!</li>',
    topScores: '',
  };
};

const renderScoresInDOM = (scoreboard) => {
  const topScoreBoard = document.querySelector('.top-score-board');
  const { listhtml, topScores } = displayAllScores();

  scoreboard.innerHTML = listhtml;
  if (topScoreBoard) {
    topScoreBoard.innerHTML = topScores || '';
  }
};

export default renderScoresInDOM;
