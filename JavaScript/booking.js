let movieTableBody = document.getElementById("movie-table-body");
let totalPriceElement = document.getElementById("total-price");
let selectedMovies = JSON.parse(localStorage.getItem('movies'));

function renderMovieTable() {
  movieTableBody.innerHTML = "";
  selectedMovies.forEach((movie, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${movie.name}</td>
      <td>${movie.count}</td>
      <td>${movie.count * 200}</td>
      <td><button class="remove-btn" data-index="${index}">Remove</button></td>
    `;
    movieTableBody.appendChild(row);
  });
}

function calculateTotalPrice() {
  let totalPrice = 0;
  selectedMovies.forEach(movie => {
    totalPrice += movie.count * 200;
  });
  return totalPrice;
}

function updateTotalPriceDisplay() {
  totalPriceElement.textContent = calculateTotalPrice();
}

renderMovieTable();
updateTotalPriceDisplay();

movieTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    let index = e.target.dataset.index;
    selectedMovies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(selectedMovies));
    renderMovieTable();
    updateTotalPriceDisplay();
  }
});