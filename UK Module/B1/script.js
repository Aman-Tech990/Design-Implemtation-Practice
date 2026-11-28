const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageSelect = document.getElementById("image");
const filterSelect = document.getElementById("filter");

const img = new Image();
img.src = "./athena.jpg";

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.filter = "none";
    ctx.drawImage(img, 10, 10, 210, 300);

    const filter = filterSelect.value;
    if (filter === "darken") {
        ctx.filter = "brightness(50%)";
        ctx.drawImage(img, 240, 10, 210, 300);
    } else if (filter === "brighten") {
        ctx.filter = "brightness(150%)";
        ctx.drawImage(img, 240, 10, 210, 300);
    }
}

img.onload = render;

imageSelect.addEventListener("change", () => {
    img.src = imageSelect.value;
});

filterSelect.addEventListener("change", render);