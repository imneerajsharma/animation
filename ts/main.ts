// const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// // Load the shape image
// const shapeImage = new Image();
// shapeImage.src = './image.png'; // Update the path to your shape image

// // Animation parameters
// let fillHeight = 0; // Start filling from the bottom
// const fillSpeed = 2; // Pixels per frame

// // Function to animate the shape fill
// function animateShapeFill() {
//   if (!ctx) return;

//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the shape image
//   ctx.drawImage(shapeImage, 0, 0, canvas.width, canvas.height);

//   // Create a clipping region for the shape
//   ctx.globalCompositeOperation = 'source-in';

//   // Draw the blue filling
//   ctx.fillStyle = 'blue'; // Fill color
//   ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);

//   // Restore the default composite operation
//   ctx.globalCompositeOperation = 'source-over';

//   // Increment the fill height
//   if (fillHeight < canvas.height) {
//     fillHeight += fillSpeed;
//     requestAnimationFrame(animateShapeFill);
//   }
// }

// // Start the animation once the image is fully loaded
// shapeImage.onload = () => {
//   animateShapeFill();
// };
