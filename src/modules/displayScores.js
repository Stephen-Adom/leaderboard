import Score from './score.model.js';

const leaderboardScore = new Score();

const displayAllScores = () => {
  leaderboardScore.loadScores();
  const scores = leaderboardScore.getScores();

  if (scores && scores.length) {
    let html = '';

    scores.forEach((score) => {
      html += `
        <li>${score.name}: ${score.score}</li>
        `;
    });

    return html;
  }
  return '';
};

export default displayAllScores;
