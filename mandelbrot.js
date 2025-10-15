
let zoom = 1;
let centerX = -0.7463;
let centerY = 0.1102;
const width = 80;
const height = 40;
const chars = ' .:-=+*#%@';
let frameCount = 0;
const maxFrames = 100;

function render() {
  if (frameCount >= maxFrames) {
    return;
  }
  
  console.clear();
  console.log(`🌀 Mandelbrot Zoom: ${zoom.toFixed(1)}x (Frame ${frameCount + 1}/${maxFrames})\n`);
  
  for (let y = 0; y < height; y++) {
    let line = '';
    for (let x = 0; x < width; x++) {
      const real = centerX + (x / width - 0.5) * (3 / zoom);
      const imag = centerY + (y / height - 0.5) * (2 / zoom);
      
      let zr = 0, zi = 0;
      let iterations = 0;
      const maxIter = 100;
      
      while (iterations < maxIter && zr*zr + zi*zi < 4) {
        const temp = zr*zr - zi*zi + real;
        zi = 2*zr*zi + imag;
        zr = temp;
        iterations++;
      }
      
      const charIndex = Math.floor(iterations / maxIter * (chars.length - 1));
      line += chars[charIndex];
    }
    console.log(line);
  }
  
  zoom *= 1.15;
  frameCount++;
  
  setTimeout(render, 50);
}

render();
