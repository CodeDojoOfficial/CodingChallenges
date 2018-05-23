// Coding Challenge #1: 10 PRINT
// By CodeDojo
// 
// Challenge Completed by: 
// For references, go to p5js.org/references. Learn about this subject at 10print.org.
// BASIC Code: 10 PRINT CHR$(205.5+RND(1)); : GOTO 10

let x = 0;
let y = 0;
let scale = 20; // The size of the slashes

function setup() {
  createCanvas(500, 400);
  background(0, 0, 255);
}

function draw() {
  stroke(255);
  
  if(random(1) < 0.5) { // 0.5 refers to how often a backslash will occur. Try setting it to 0.9!
    line(x, y, x+scale, y+scale);
  } else {
    line(x, y+scale, x+scale, y);
  }
  
  x += scale;
  
  if(x > width) {
    y += scale;
    x = 0;
  }
  
  if(y >= height) {
    background(0, 0, 255);
    x = 0;
    y = 0;
  }
}
