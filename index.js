function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#amy-app-city")
  cityElement.innerHTML = searchInput.value;
}

let searchFormElememt = document.querySelector("#search-form");
searchFormElememt.addEventListener ("submit", handleSearchSubmit);