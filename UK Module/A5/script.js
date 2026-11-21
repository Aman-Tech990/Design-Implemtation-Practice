const img = document.querySelector(".img");

img.addEventListener("mousemove", () => {
    img.style.mixBlendMode = "normal";
});

img.addEventListener("mouseleave", () => {
    img.style.mixBlendMode = "difference";
})