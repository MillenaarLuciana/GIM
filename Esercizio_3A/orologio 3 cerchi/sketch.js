function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(200);
  
	translate(width / 2, height / 2);
  
	// Disegna i cerchi per ore, minuti e secondi
	drawClockCircle(hour(), 12, 140, 12); 
	drawClockCircle(minute(), 60, 100, 8); 
	drawClockCircle(second(), 60, 60, 4); 
  
	// Disegna il cerchio centrale
	fill(200);
	circle(0, 0, 20);

  }
  
  function drawClockCircle(value, range, radius, thickness) {
	let angle = map(value % range, 0, range, 0, TWO_PI);
  
	noFill();
	stroke(0);
	strokeWeight(thickness);
	ellipse(0, 0, radius * 2);
  
	let x = cos(angle - HALF_PI) * radius;
	let y = sin(angle - HALF_PI) * radius;
	strokeWeight(2);
	line(0, 0, x, y);
  }
  