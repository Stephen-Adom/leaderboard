const topScores = (scores) => `
    
<div
class="second-place placement d-flex flex-column justify-content-center"
>
<div class="profile-container position-relative">
  <span class="position-absolute badge rounded-circle bg-primary">
    2
  </span>
</div>
<div class="user-info text-center mt-4">
  <h6 class="mb-0 fw-bold">${scores[1].user}</h6>
  <span class="d-block fst-italic text-muted text-muted"
    >Score: ${scores[1].score}</span
  >
</div>
</div>

<div class="first-place placement">
<div class="profile-container position-relative">
  <span class="position-absolute badge rounded-circle bg-success">
    1
  </span>
</div>
<div class="user-info text-center mt-4">
  <h6 class="mb-0 fw-bold">${scores[0].user}</h6>
  <span class="d-block fst-italic text-muted">Score: ${scores[0].score}</span>
</div>
</div>

<div class="third-place placement">
<div class="profile-container position-relative">
  <span class="position-absolute badge rounded-circle bg-warning">
    3
  </span>
</div>
<div class="user-info text-center mt-4">
  <h6 class="mb-0 fw-bold">${scores[2].user}</h6>
  <span class="d-block fst-italic text-muted">Score: ${scores[2].score}</span>
</div>
</div>
    `;

export default topScores;
