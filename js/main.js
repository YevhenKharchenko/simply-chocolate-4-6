const reviewBtn = document.querySelector(".reviews-btn");
const backdrop = document.querySelector(".backdrop");

reviewBtn.addEventListener("click", onButtonClick);

function onButtonClick() {
  backdrop.classList.add("is-open");
}

const closeBtn = document.querySelector(".modal-close-btn");

closeBtn.addEventListener("click", onCloseButtonClick);

function onCloseButtonClick() {
  backdrop.classList.remove("is-open");
}
