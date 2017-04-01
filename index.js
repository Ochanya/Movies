function useJsonOnPage (json) {
    let name = document.querySelector('.userName');
    name.textContent = json.title;
    let poster = document.querySelector(".movieposter");
    poster.src = "https://image.tmdb.org/t/p/w500" + json.poster_path;
    let aboutmovie = document.querySelector('.overview');
    aboutmovie.textContent = json.overview;
  }

  fetch("https://api.themoviedb.org/3/movie/129?api_key=2726265a35664308b2fece2a874ae26c")
    .then(response => response.json())
    .then(useJsonOnPage);
