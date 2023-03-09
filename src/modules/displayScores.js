import Score from './score.model.js';

const leaderboardScore = new Score();

const sortByScores = (scores) => scores.sort((a, b) => b.score - a.score);

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

    return html;
  }
  return '<li>No Scores Available!!</li>';
};

const renderScoresInDOM = (scoreboard) => {
  const htmlScores = displayAllScores();
  scoreboard.innerHTML = htmlScores;
};

export default renderScoresInDOM;
