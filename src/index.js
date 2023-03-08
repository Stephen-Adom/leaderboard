import './styles.css';
import { homeLayout, displayAllScores, LeaderboardService } from './modules';

const mainContainer = document.querySelector('main');
const leaderboardservice = new LeaderboardService();

const initialiseGame = () => {
  if (localStorage.getItem('gameId')) {
    leaderboardservice.saveGameID(localStorage.getItem('gameId'));
  } else {
    leaderboardservice
      .createGame({
        name: 'Alaska Game',
      })
      .then((response) => {
        if (response && response.result) {
          const { result } = response;
          localStorage.setItem('gameId', result.split(' ')[3]);
          leaderboardservice.saveGameID(result.split(' ')[3]);
        }
      });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homeLayout();
  setTimeout(() => {
    const scoreboard = document.querySelector('.scoreboard');
    const htmlScores = displayAllScores();
    scoreboard.innerHTML = htmlScores;
    initialiseGame();
    displayAllScores();
  }, 50);
});
