const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageSelect = document.getElementById('image');
const filterSelect = document.getElementById('brightness');

const img = new Image();
img.src = 'athena.jpg';

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.filter = 'none';
    ctx.drawImage(img, 10, 10, 210, 300);

    if (filterSelect.value !== 'none') {
        ctx.filter = filterSelect.value;
        ctx.drawImage(img, 240, 10, 210, 300);
    }
}

img.onload = drawCanvas;

imageSelect.addEventListener('change', () => {
    img.src = imageSelect.value;
});

filterSelect.addEventListener('change', drawCanvas);