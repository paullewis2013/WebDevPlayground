var backgroundCanvas = document.getElementById('backgroundCanvas');

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

// Get the device pixel ratio, falling back to 1.
let dpr = window.devicePixelRatio || 1;

// Get the size of the canvas in CSS pixels.
let rect = backgroundCanvas.getBoundingClientRect();

// Set the size of the canvas in physical pixels.
backgroundCanvas.width = rect.width * dpr;
backgroundCanvas.height = rect.height * dpr;

// Scale the canvas back down to CSS pixels.
let ctx = backgroundCanvas.getContext('2d');
ctx.scale(dpr, dpr);

function generateNoise(){
    const imageData = ctx.createImageData(backgroundCanvas.width, backgroundCanvas.height);
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
    ctx.fillStyle = 'rgba(220, 67, 51, 0.5)'; // Dark blue
    ctx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
}

generateNoise();

// Re-generate noise when the window is resized
window.onresize = generateNoise;

// front canvas
var canvas = document.getElementById('canvas')
canvas.width = 200 
canvas.height = 200

// Get the size of the canvas in CSS pixels.
rect = canvas.getBoundingClientRect();

// Set the size of the canvas in physical pixels.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Scale the canvas back down to CSS pixels.
let ctx2 = canvas.getContext('2d');
ctx2.scale(dpr, dpr);

// Set the fill color to white
ctx2.fillStyle = 'black';

// Fill a rectangle that covers the entire canvas
ctx2.fillRect(0, 0, canvas.width, canvas.height);

function drawSegment(x, y, length, width, orientation) {
    ctx2.beginPath();
    if (orientation === 'horizontal') {
        ctx2.rect(x, y, length, width);
    } else if (orientation === 'vertical') {
        ctx2.rect(x, y, width, length);
    }
    ctx2.fill();
    ctx2.closePath();
}

// Dimensions and positions
var length = 50; // Length of each segment
var width = 10;  // Width of each segment
var gap = 5;     // Gap between segments

ctx2.fillStyle = 'red'

// Define segments based on orientation and position
// Horizontal segments (top, middle, bottom)
drawSegment(50, 20, length, width, 'horizontal');
drawSegment(50, 20 + length + gap, length, width, 'horizontal');
drawSegment(50, 20 + 2 * (length + gap), length, width, 'horizontal');

// Vertical segments (left top, left bottom, right top, right bottom)
drawSegment(40, 30, length, width, 'vertical');
drawSegment(40, 30 + length + gap, length, width, 'vertical');
drawSegment(50 + length + gap, 30, length, width, 'vertical');
drawSegment(50 + length + gap, 30 + length + gap, length, width, 'vertical');



function drawSegmentA(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(50, 20, length, width, 'horizontal');
}

function drawSegmentB(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(50 + length + gap, 30, length, width, 'vertical');
}

function drawSegmentC(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(50 + length + gap, 30 + length + gap, length, width, 'vertical');
}

function drawSegmentD(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(50, 20 + 2 * (length + gap), length, width, 'horizontal');
}

function drawSegmentE(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(40, 30 + length + gap, length, width, 'vertical');
}

function drawSegmentF(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(40, 30, length, width, 'vertical');
}

function drawSegmentG(on){
    if (on){
        ctx2.fillStyle = 'red';
    } else {
        ctx2.fillStyle = 'black';
    }

    drawSegment(50, 20 + length + gap, length, width, 'horizontal');
}

function drawNumber(num){

    switch(num){
        case 0:
            drawSegmentA(true)
            drawSegmentB(true)
            drawSegmentC(true)
            drawSegmentD(true)
            drawSegmentE(true)
            drawSegmentF(true)
            drawSegmentG(false)
            break;
        case 1:
            drawSegmentA(false)
            drawSegmentB(true)
            drawSegmentC(true)
            drawSegmentD(false)
            drawSegmentE(false)
            drawSegmentF(false)
            drawSegmentG(false)
            break;
        case 2:
            drawSegmentA(true)
            drawSegmentB(true)
            drawSegmentC(0)
            drawSegmentD(1)
            drawSegmentE(1)
            drawSegmentF(false)
            drawSegmentG(1)
            break;

        case 3:
            drawSegmentA(1)
            drawSegmentB(1)
            drawSegmentC(1)
            drawSegmentD(1)
            drawSegmentE(0)
            drawSegmentF(false)
            drawSegmentG(1)
            break;

        case 4:
            drawSegmentA(0)
            drawSegmentB(1)
            drawSegmentC(1)
            drawSegmentD(0)
            drawSegmentE(0)
            drawSegmentF(1)
            drawSegmentG(1)
            break;

        case 5:
            drawSegmentA(1)
            drawSegmentB(0)
            drawSegmentC(1)
            drawSegmentD(1)
            drawSegmentE(0)
            drawSegmentF(1)
            drawSegmentG(1)
            break;

            case 6:
            drawSegmentA(1)
            drawSegmentB(0)
            drawSegmentC(1)
            drawSegmentD(1)
            drawSegmentE(1)
            drawSegmentF(1)
            drawSegmentG(1)
            break;

            case 7:
            drawSegmentA(1)
            drawSegmentB(1)
            drawSegmentC(1)
            drawSegmentD(0)
            drawSegmentE(0)
            drawSegmentF(0)
            drawSegmentG(0)
            break;

            case 8:
            drawSegmentA(1)
            drawSegmentB(1)
            drawSegmentC(1)
            drawSegmentD(1)
            drawSegmentE(1)
            drawSegmentF(1)
            drawSegmentG(1)
            break;

            case 9:
            drawSegmentA(1)
            drawSegmentB(1)
            drawSegmentC(1)
            drawSegmentD(1)
            drawSegmentE(0)
            drawSegmentF(1)
            drawSegmentG(1)
            break;
    }
    


}


let globalNumber = 0;
drawNumber(0)

setInterval(drawNextNum, 500)

function drawNextNum(){
    drawNumber(globalNumber)

    globalNumber = (globalNumber + 1) % 10
}