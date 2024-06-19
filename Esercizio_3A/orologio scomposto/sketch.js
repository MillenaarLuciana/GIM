let secondCircle, minuteCircle, hourCircle;
let centerX, centerY; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateCirclePositions();
  
  setInterval(updateTime, 1000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateCirclePositions();
}

function updateCirclePositions() {
  centerX = width / 2;
  centerY = height / 2;

  let triangleSize = min(width, height) * 0.45;  
  let circleSize = min(width, height) * 0.1;  

  secondCircle = createCircle(centerX - triangleSize / 2, centerY + triangleSize / (2 * sqrt(3)), circleSize * 2, 2, 60); 
  minuteCircle = createCircle(centerX + 40, centerY - triangleSize / (2 * sqrt(3)), circleSize * 1.5, 4, 60); 
  hourCircle = createCircle(centerX + triangleSize / 2 - 120, centerY + triangleSize / (2 * sqrt(3)) + 30, circleSize, 6, 12);
}

function createCircle(x, y, radius, thickness, range) {
  return { x, y, radius, thickness, range };
}

function draw() {
  background(0); 

  let hr = hour();
  let min = minute();
  let sec = second();

  drawClockCircle(secondCircle, sec, "Seconds");
  drawClockCircle(minuteCircle, min, "Minutes");
  drawClockCircle(hourCircle, hr % 12, "Hours");

  drawClockNumbers(secondCircle, 60, 1); 
  drawClockNumbers(minuteCircle, 60, 5); 
  drawHourClockNumbers(hourCircle, 12, 1); 
}

function drawClockCircle(circle, value, label) {
  let angle = map(value % circle.range, 0, circle.range, -HALF_PI, TWO_PI - HALF_PI);

  noFill();
  stroke(255); 
  strokeWeight(circle.thickness);
  ellipse(circle.x, circle.y, circle.radius * 2);

  let x = circle.x + cos(angle) * circle.radius;
  let y = circle.y + sin(angle) * circle.radius;
  strokeWeight(2);
  line(circle.x, circle.y, x, y);

  drawLabel(circle, label);
}

function drawLabel(circle, label) {
  textAlign(CENTER, CENTER);
  fill(255); 
  noStroke();
  textSize(12);
  text(label, circle.x, circle.y + circle.radius + 15);
}

function drawClockNumbers(circle, totalNumbers, step) {
  let radius = circle.radius - 15;
  let spacing = TWO_PI / totalNumbers; 

  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255); 
  noStroke();

  for (let i = 0; i < totalNumbers; i += step) {
    let angle = map(i, 0, totalNumbers, -HALF_PI, TWO_PI - HALF_PI);
    let numX = circle.x + cos(angle) * radius;
    let numY = circle.y + sin(angle) * radius;
    text(i, numX, numY);
  }
}

function drawHourClockNumbers(circle, totalNumbers, step) {
  let radius = circle.radius - 15;
  let spacing = TWO_PI / totalNumbers; 

  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255); 
  noStroke();

  for (let i = 0; i < totalNumbers; i += step) {
    let angle = map(i, 0, totalNumbers, -HALF_PI, TWO_PI - HALF_PI);
    let numX = circle.x + cos(angle) * radius;
    let numY = circle.y + sin(angle) * radius;
    let displayNumber = i === 0 ? 12 : i; 
    text(displayNumber, numX, numY);
  }
}

function updateTime() {
  redraw(); 
}
