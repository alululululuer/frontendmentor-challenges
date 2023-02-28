const emailContainer = document.querySelector(".form-control");
const emailInput = document.getElementById("email");
const buttonElement = document.getElementById("btn");
const errorElement = document.querySelector(".error-msg");

function changeStyles() {
  const isValid = emailContainer.querySelector("#email:valid");

  if (emailInput.value === "") {
    errorElement.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    errorElement.textContent = "Please provide a valid email address";
  }

  if (isValid) {
    emailContainer.classList.remove("invalid");
    emailContainer.classList.add("valid");
  } else {
    emailContainer.classList.remove("valid");
    emailContainer.classList.add("invalid");
  }
}

emailInput.addEventListener("input", changeStyles);

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  changeStyles();
});
