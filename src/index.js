import './styles.css';
import { homeLayout, displayAllScores } from './modules/index.js';

const mainContainer = document.querySelector('main');

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homeLayout();
  setTimeout(() => {
    const scoreboard = document.querySelector('.scoreboard');
    const htmlScores = displayAllScores();
    scoreboard.innerHTML = htmlScores;

    displayAllScores();
  }, 50);
});
