const shareButton = document.getElementById("share-btn");
const articleElement = document.querySelector(".article");

shareButton.addEventListener("click", () => {
  articleElement.classList.toggle("share");
});
