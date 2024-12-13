const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
// Animation parameters
let fillHeight = 0; // Start filling from the bottom
const fillSpeed = 0.8; // Pixels per frame
// Function to define the exact custom shape path
// function drawCustomShape() {
//   ctx.beginPath();
//   // Define the bottom rectangle
//   ctx.moveTo(100, 300);
//   ctx.lineTo(300, 300);
//   ctx.lineTo(300, 200);
//   ctx.lineTo(200, 200);
//   // Define the vertical bar
//   ctx.lineTo(200, 100);
//   ctx.arc(150, 100, 50, 0, Math.PI, true); // Circular top
//   ctx.lineTo(100, 100);
//   ctx.lineTo(100, 200);
//   ctx.closePath();
// }
// function drawCustomShape() {
//     ctx.beginPath();
//     // Draw the circular top (handle)
//     ctx.arc(200, 100, 50, 0, Math.PI * 2); // Circle at (200, 100) with radius 50
//     // Draw the vertical stem (connecting bar)
//     ctx.moveTo(180, 150); // Start bottom of the circle
//     ctx.lineTo(180, 250); // Left side of the bar
//     ctx.lineTo(220, 250); // Bottom of the bar
//     ctx.lineTo(220, 150); // Right side of the bar
//     // Draw the rectangular base
//     ctx.moveTo(100, 250); // Start at bottom-left corner of the base
//     ctx.lineTo(300, 250); // Bottom edge
//     ctx.lineTo(300, 300); // Right edge
//     ctx.lineTo(100, 300); // Left edge
//     ctx.closePath();
//   }
function drawCustomShape() {
    ctx.beginPath();
    // Draw the circular top (handle)
    ctx.arc(200, 101, 50, 0, Math.PI * 2); // Circle at (200, 100) with radius 50
    // Draw the vertical stem (connecting bar)
    ctx.moveTo(180, 150); // Start where the circle ends (bottom of the circle)
    ctx.lineTo(180, 250); // Left side of the bar
    ctx.lineTo(220, 250); // Bottom of the bar
    ctx.lineTo(220, 150); // Right side of the bar
    ctx.closePath();
    // Draw the rectangular base
    ctx.moveTo(100, 250); // Start at bottom-left corner of the base
    ctx.lineTo(300, 250); // Bottom edge
    ctx.lineTo(300, 300); // Right edge
    ctx.lineTo(100, 300); // Left edge
    ctx.closePath();
}
// Function to animate the fill effect
function animateShapeFill() {
    if (!ctx)
        return;
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the custom shape outline
    ctx.strokeStyle = 'blue';
    drawCustomShape();
    ctx.stroke();
    // Create a clipping region for the custom shape
    ctx.save();
    drawCustomShape();
    ctx.clip();
    // Fill the shape with color
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);
    ctx.restore();
    // Increment the fill height for the animation
    if (fillHeight < canvas.height) {
        fillHeight += fillSpeed;
        requestAnimationFrame(animateShapeFill);
    }
}
// Start the animation
animateShapeFill();
//# sourceMappingURL=main2.js.map