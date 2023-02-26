const shareButtons = document.querySelectorAll(".share-btn");
const articleElement = document.querySelector(".article");

shareButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    articleElement.classList.toggle("share");
  });
});
