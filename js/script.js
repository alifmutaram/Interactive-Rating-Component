const MainContainer = document.querySelector("main");
const submit = document.querySelector(".submit");
const sectionThank = document.querySelector("section");
const BtnRating = document.querySelectorAll(".btn-rating");
const containerRtg = document.getElementById("rating");
const button = document.getElementsByClassName(".btn-rating");

submit.addEventListener("click", () => {
  MainContainer.classList.add("hidden");
  sectionThank.classList.remove("hidden");
});

BtnRating.forEach((rating) => {
  rating.addEventListener("click", () => {
    containerRtg.innerHTML = rating.innerHTML;
  });
});
BtnRating.forEach((Rtg) => {
  Rtg.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "orange";
  });
});
