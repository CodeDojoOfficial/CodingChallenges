// Coding Challenge #1: Make a Clock
// By CodeDojo
// 
// Challenge Completed by: 
// For references, go to p5js.org/references.

var sc;
var mn;
var hr;

function setup() {
  createCanvas(400, 400);
  // required so that angle mode is not radians.
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  rotate(-90);
  
  background(0);
  
  sc = map(second(), 0, 60, 0, 360);
  mn = map(minute(), 0, 60, 0, 360);
  hr = map(hour() % 12, 0, 12, 0, 360);
  
  
  // initialize circle drawing
  strokeWeight(8);
  noFill();
  
  // Hour circle
  stroke(255, 0, 255);
  arc(0, 0, 360, 360, 0, hr);
  
  // Minute cirvle
  stroke(120, 127, 255);
  arc(0, 0, 340, 340, 0, mn);
  
  // Second circle
  stroke(127, 255, 127);
  arc(0, 0, 320, 320, 0, sc);
  
  // Hand drawing
  push(); // until pop, no action effects the color and rotation.
  rotate(hr);
  stroke(255, 0, 255);
  line(0, 0, 50, 0);
  pop();
  
  push();
  rotate(mn);
  stroke(120, 127, 255);
  line(0, 0, 75, 0);
  pop();
  
  push();
  rotate(sc);
  stroke(127, 255, 127);
  line(0, 0, 100, 0);
  pop();
  
  strokeWeight(16);
  stroke(255, 255, 255, 127);
  point(0, 0);
  
}
