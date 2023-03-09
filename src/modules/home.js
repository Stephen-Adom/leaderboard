const homeLayout = () => `
    
<section
class="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
>
<div
  class="app-header d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start flex-row"
>
  <img
    src=""
    width="30%"
    alt="mario-kart"
    class="app_icon"
  />
  <div>
    <h1 class="mb-1 fw-extrabold">Leaderboard</h1>
    <h5 class="fst-italic text-muted">Mario Kart Game</h5>
  </div>
</div>

<div
class="top-score-board d-flex align-items-center justify-content-center gap-5 mb-4 mt-5"
>

</div>
</section>

<section class="leaderboard-container">
<div class="recent-scores">
  <div class="recent-scores-header">
    <h4>Recent scores</h4>
    <button
      type="button"
      class="refresh-btn default-btn btn btn-outline-secondary"
    >
      Refresh
    </button>
  </div>

  <div class="card mt-3">
    <div class="card-body p-0">
      <ul class="scoreboard"></ul>
    </div>
  </div>
</div>

<div
  class="add-score-section d-none d-sm-none d-md-none d-lg-block d-xl-block"
>
  <h5 class="text-center">Add your scores</h5>

  <form action="">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        required
        name="name"
        id="name"
        placeholder="Your name"
        aria-label="name"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="score" class="form-label">Score</label>
      <input
        required
        type="number"
        placeholder="Your score"
        aria-label="score"
        name="score"
        id="score"
        class="form-control"
      />
    </div>

    <div class="form-group text-right">
      <button
        type="submit"
        class="default-btn submit-btn btn btn-primary"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</section>

<button
type="button"
data-bs-toggle="modal"
data-bs-target="#addScoreModal"
class="btn btn-primary position-absolute mobile-add-btn d-flex align-items-center justify-content-center d-block d-sm-block d-md-block d-lg-none d-xl-none"
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 6v12m6-6H6"
  />
</svg>
</button>

<!-- Modal -->
<div
class="modal fade"
id="addScoreModal"
tabindex="-1"
aria-labelledby="addScoreModal"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <form action="">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Add your score
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="Your name"
            aria-label="name"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="score" class="form-label">Score</label>
          <input
            required
            type="number"
            placeholder="Your score"
            aria-label="score"
            name="score"
            id="score"
            class="form-control"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary close-dialog"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</div>
</div>

    `;

export default homeLayout;
