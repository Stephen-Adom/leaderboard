export default class Score {
  leaderBoardScores;

  constructor() {
    this.leaderBoardScores = [];
  }

  loadScores() {
    this.leaderBoardScores = localStorage.getItem('scores')
      ? JSON.parse(localStorage.getItem('scores'))
      : [
        {
          user: 'alberta',
          score: 100,
        },
        {
          user: 'john',
          score: 90,
        },
        {
          user: 'sam',
          score: 80,
        },
        {
          user: 'rachael',
          score: 60,
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
