const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageSelect = document.getElementById('image');
const filterSelect = document.getElementById('brightness');

const img = new Image();
img.src = 'athena.jpg'; // Default image

function drawCanvas() {
    // 1. Clear the entire 460x320 canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Draw the original image on the LEFT side (no filter)
    ctx.filter = 'none';
    ctx.drawImage(img, 10, 10, 210, 300);

    // 3. If a filter is selected, draw the filtered image on the RIGHT side
    if (filterSelect.value !== 'none') {
        ctx.filter = filterSelect.value;
        ctx.drawImage(img, 240, 10, 210, 300);
    }
}

// Redraw whenever the image finishes loading
img.onload = drawCanvas;

// Change image when dropdown changes
imageSelect.addEventListener('change', () => {
    img.src = imageSelect.value;
});

// Re-apply filter when filter dropdown changes
filterSelect.addEventListener('change', drawCanvas);