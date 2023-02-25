const ratingElement = document.querySelector(".rating");
const ratingForm = document.querySelector(".rating__form");
const scoreElement = document.getElementById("rating__score");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const checkedInput = ratingForm.querySelector("input[name='rating']:checked");

  if (!checkedInput) {
    alert("Please select a score!!!");
  } else {
    scoreElement.textContent = checkedInput.value;

    ratingElement.classList.remove("before");
    ratingElement.classList.add("after");
  }
});
