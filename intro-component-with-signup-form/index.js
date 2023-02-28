const inputContainers = document.querySelectorAll(".form .form-control");
const inputElements = document.querySelectorAll(".form input");
const buttonElement = document.querySelector(".button");
const formElement = document.querySelector(".form");

inputElements.forEach((inputElement, i) => {
  inputElement.addEventListener("input", () => {
    const invalidInput = inputContainers[i].querySelector("input:invalid");
    if (invalidInput) {
      inputContainers[i].classList.add("invalid");
    } else {
      inputContainers[i].classList.remove("invalid");
    }
  });
});

buttonElement.addEventListener("click", () => {
  inputContainers.forEach((inputContainer) => {
    const invalidInput = inputContainer.querySelector("input:invalid");
    if (invalidInput) {
      inputContainer.classList.add("invalid");
    } else {
      inputContainer.classList.remove("invalid");
    }
  });
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
});
