export default class Score {
  leaderBoardScores;

  constructor() {
    this.leaderBoardScores = [];
  }

  createScore(name, score) {
    this.name = name;
    this.score = score;
  }

  loadScores() {
    this.leaderBoardScores = localStorage.getItem('scores')
      ? JSON.parse(localStorage.getItem('scores'))
      : [
        {
          name: 'Alaska',
          score: 100,
        },
        {
          name: 'James',
          score: 130,
        },
        {
          name: 'Alberta',
          score: 30,
        },
        {
          name: 'Cynthia',
          score: 150,
        },
      ];
  }

  addScores(score) {
    this.leaderBoardScores = [...this.leaderBoardScores, score];
    this.saveScores(this.leaderBoardScores);
  }

  getScores() {
    return this.leaderBoardScores;
  }

  static saveScores(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}
