export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".card-container");

  movieCards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};