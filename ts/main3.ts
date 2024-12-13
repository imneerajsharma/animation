// const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// // Get the slider element
// const slider = document.getElementById('fillSlider') as HTMLInputElement;

// // Function to define the exact custom shape path
// function drawCustomShape() {
//   ctx.beginPath();

//   // Draw the circular top (handle)
//   ctx.arc(200, 101, 50, 0, Math.PI * 2); // Circle at (200, 100) with radius 50

//   // Draw the vertical stem (connecting bar)
//   ctx.moveTo(180, 150); // Start where the circle ends (bottom of the circle)
//   ctx.lineTo(180, 250); // Left side of the bar
//   ctx.lineTo(220, 250); // Bottom of the bar
//   ctx.lineTo(220, 150); // Right side of the bar
//   ctx.closePath();

//   // Draw the rectangular base
//   ctx.moveTo(100, 250); // Start at bottom-left corner of the base
//   ctx.lineTo(300, 250); // Bottom edge
//   ctx.lineTo(300, 300); // Right edge
//   ctx.lineTo(100, 300); // Left edge
//   ctx.closePath();
// }

// // Function to render the joystick with the current fill level
// function renderJoystick(fillPercentage: number) {
//   if (!ctx) return;

//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the custom shape outline
//   drawCustomShape();

//   // Clip the custom shape
//   ctx.save();
//   ctx.clip();

//   // Calculate the fill height based on the slider value
//   const fillHeight = (canvas.height * fillPercentage) / 100;

//   // Fill the shape with color
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);

//   // Restore the context
//   ctx.restore();

//   // Draw the shape outline
//   ctx.strokeStyle = 'blue';
//   ctx.lineWidth = 2;
//   drawCustomShape();
//   ctx.stroke();
// }

// // Listen for changes on the slider and update the joystick fill
// slider.addEventListener('input', () => {
//   const fillPercentage = parseInt(slider.value, 10);
//   renderJoystick(fillPercentage);
// });

// // Initial render
// renderJoystick(0);
