import Score from './score.model.js';
import LeaderboardService from './services/leaderboard.service.js';
import renderScoresInDOM from './displayScores.js';
import successAlert from './alert.js';

const leaderboardservice = new LeaderboardService();

const saveScores = (scores) => {
  const scoreboard = document.querySelector('.scoreboard');
  localStorage.setItem('scores', JSON.stringify(scores.result));
  renderScoresInDOM(scoreboard);
};

const updateScoreList = async () => {
  leaderboardservice
    .fetchAllScores(localStorage.getItem('gameId'))
    .then((response) => {
      saveScores(response);
    });
};

const saveNewScoreInDb = (data) => {
  leaderboardservice
    .saveScore(localStorage.getItem('gameId'), data)
    .then((response) => {
      if (response.result) {
        updateScoreList();
        successAlert('Leaderboard score created Successfully');
      }
    });
};

const addScore = (event) => {
  const scoreObj = new Score();
  scoreObj.loadScores();

  event.preventDefault();
  const user = event.target[0].value.trim();
  const score = event.target[1].value;
  saveNewScoreInDb({
    user,
    score: Number(score),
  });
  event.target.reset();
};

const addMobileScreenScore = (event) => {
  event.preventDefault();
  const closeDialogBtn = document.querySelector('.close-dialog');

  const scoreObj = new Score();
  scoreObj.loadScores();

  const user = event.target[1].value.trim();
  const score = event.target[2].value;
  saveNewScoreInDb({
    user,
    score: Number(score),
  });
  event.target.reset();
  closeDialogBtn.click();
};

export { addScore, saveScores, addMobileScreenScore };
