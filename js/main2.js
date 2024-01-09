import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();

const searchInput = document.querySelector("#input_search");
searchInput.focus();

const form = document.querySelector("#form-area");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});