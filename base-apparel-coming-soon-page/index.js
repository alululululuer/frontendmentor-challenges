const buttonElement = document.querySelector(".button");
const inputContainer = document.querySelector(".input-container");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValid = inputContainer.querySelector("input:valid");

  if (inputValid) {
    inputContainer.classList.remove("invalid");
  } else {
    inputContainer.classList.add("invalid");
  }
});
