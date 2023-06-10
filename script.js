const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const buttonMain = document.getElementById("buttonClick");
const search = document.getElementById("search");

const myFunction = (inputValue) => {
  const api = SEARCH_API + inputValue;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const data = JSON.parse(this.responseText);
    const movies = data.results;

    movies.map((movie) => {
      const searchMovie = document.createElement("div");
      searchMovie.classList.add("movie");
      searchMovie.style.cssText +=
        "width:300px; background-color:yellow; text-align:center;border: 2px solid black; height:auto; margin-bottom:10px";
        searchMovie.innerHTML = `
            <div>
            <img src="${IMG_PATH + movie.poster_path}" alt="${
        movie.title
      }" width= "100%">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
                </div>
                <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
            </div>`;
      main.appendChild(searchMovie);
    });
  };


  xhttp.open("GET", api);
  xhttp.send();
};

buttonMain.addEventListener("click", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    myFunction(searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
