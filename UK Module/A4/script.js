const stoicFace = document.querySelector(".stoic");
const happyFace = document.querySelector(".happy");
const sadFace = document.querySelector(".sad");
const stoicBtn = document.querySelector(".stoic-btn");
const happyBtn = document.querySelector(".happy-btn");
const sadBtn = document.querySelector(".sad-btn");

stoicBtn.addEventListener("click", () => {
    stoicFace.style.display = "block";
    happyFace.style.display = "none";
    sadFace.style.display = "none";
});
happyBtn.addEventListener("click", () => {
    stoicFace.style.display = "none";
    happyFace.style.display = "block";
    sadFace.style.display = "none";
});
sadBtn.addEventListener("click", () => {
    stoicFace.style.display = "none";
    happyFace.style.display = "none";
    sadFace.style.display = "block";
});