function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(200);
  
	translate(width / 2, height / 2);
  
	// Disegna il cerchio centrale
	fill(200);
	circle(0, 0, 20);
  
	// Disegna i numeri intorno al cerchio
	let radius = min(width, height) * 0.4; // Raggio del cerchio dei numeri
	textSize(24);
	textAlign(CENTER, CENTER);
	fill(0);
	noStroke();
  
	// Ruota il sistema di coordinate iniziale per posizionare il 12 in alto
	rotate(-HALF_PI);
  
	for (let i = 1; i <= 12; i++) {
	  let angle = map(i, 0, 12, 0, TWO_PI);
	  let numX = cos(angle) * radius;
	  let numY = sin(angle) * radius;
	  text(i, numX, numY);
	}
  }
  