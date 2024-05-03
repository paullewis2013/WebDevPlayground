var canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the device pixel ratio, falling back to 1.
let dpr = window.devicePixelRatio || 1;

// Get the size of the canvas in CSS pixels.
let rect = canvas.getBoundingClientRect();

// Set the size of the canvas in physical pixels.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Scale the canvas back down to CSS pixels.
let ctx = canvas.getContext('2d');
ctx.scale(dpr, dpr);

function generateNoise(){
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // Random gray value for noise
        const val = Math.floor(Math.random() * 255);
        data[i] = val;      // Red
        data[i+1] = val;    // Green
        data[i+2] = val;    // Blue
        data[i+3] = 50;     // Alpha, somewhat transparent
    }

    ctx.putImageData(imageData, 0, 0);

    // Overlay with dark blue using globalCompositeOperation
    ctx.fillStyle = 'rgba(0, 0, 139, 0.5)'; // Dark blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

generateNoise();

// Re-generate noise when the window is resized
window.onresize = generateNoise;