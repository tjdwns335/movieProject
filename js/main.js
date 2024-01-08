
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTUwNzg3ZWI2NGYxZWJmZDViZDUyNWQ0N2JfYjE5NiIsInN1YiI6IjY1OTRmZTkzNTkwN2RlMDllMDYzYmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lk1luZm3HtlDnVtkOqXjaZ4owzg4VoyvXaupQTe7whk',
  }
};

const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const apiKey = '5150787eb64f1ebfd5bd525d47bfb196';

fetch(`${apiUrl}&api_key=${apiKey}`, options)
  .then(response => response.json())
  .then(response => console.log(response)).then(data => {
    let aplData = data;
    aplData.results.forEach(movie => {
      let title = movie['original_title'];
      let image = movie['poster_path'];
      let view = movie['overview'];
      let vote = movie['vote_average'];
      let movieId = movie['id'];
      const cardId = document.querySelector('#card');
      const temp_html = `
        <div class="card-container">
          <div class="card-content">
            <img src= https://image.tmdb.org/t/p/w500/${image} alt="test">
            <h3>${title}</h3>
            <p>${view}</p>
            <p>Rating: ${vote}</p>
          </div>
        </div>`;
      cardId.append(temp_html);

      let searchBtn = document.querySelector('#search-btn');
      let inputValue = document.querySelector('#input_id').value;
      searchBtn.addEventListener('click', function () {
        if (inputValue === movieId) {
          document.querySelector('#card-container').removeClass('hidden');
        }else{
          document.querySelector('#card-container').addClass('hidden');
        }
      })
    });
  })
  .catch(err => console.error(err));











