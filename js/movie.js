export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  const card = document.querySelector('#card');
  card.innerHTML = movies.map((movie) => `
<div class="card-container" id=${movie.id}>
          <div class="card-content">
            <img src= https://image.tmdb.org/t/p/w500/${movie.poster_path} alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>Rating: ${movie.vote_average}</p>
          </div>
        </div>`).join('');
}


card.addEventListener("click", handleClickCard);

function handleClickCard({ target }) {

  if (target === card) return;

  if (target.matches(".movie-card")) {
    alert(`영화 id: ${target.id}`);
  } else {
    alert(`영화 id: ${target.parentNode.id}`);
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTUwNzg3ZWI2NGYxZWJmZDViZDUyNWQ0N2JfYjE5NiIsInN1YiI6IjY1OTRmZTkzNTkwN2RlMDllMDYzYmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lk1luZm3HtlDnVtkOqXjaZ4owzg4VoyvXaupQTe7whk",
    },
  };
  const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const apiKey = '5150787eb64f1ebfd5bd525d47bfb196';
  const response = await fetch(`${apiUrl}&api_key=${apiKey}`,
    options
  );
  const data = await response.json();
  return data.results;
}
