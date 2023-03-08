const homeLayout = () => `
    
    <h1>Leaderboard</h1>

    <section class="leaderboard-container">
      <div class="recent-scores">
        <div class="recent-scores-header">
          <h2>Recent scores</h2>
          <button type="button" class="refresh-btn default-btn">
            Refresh
          </button>
        </div>

        <ul class="scoreboard">
        </ul>
      </div>

      <div class="add-score-section">
        <h2>Add your scores</h2>

        <form action="">
          <div class="form-group">
            <input type="text" required name="name" placeholder="Your name" aria-label="name" />
          </div>
          <div class="form-group">
            <input
              required
              type="number"
              placeholder="Your score"
              aria-label="score"
              name="score"
            />
          </div>

          <div class="form-group text-right">
            <button type="submit" class="default-btn submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
    `;

export default homeLayout;
