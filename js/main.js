const reviewBtn = document.querySelector(".reviews-btn");
const backdrop = document.querySelector(".backdrop");

reviewBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

const closeBtn = document.querySelector(".modal-close-btn");

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});
