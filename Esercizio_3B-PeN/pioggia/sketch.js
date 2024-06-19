function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
  
	for (let i = 0; i < 100; i++) { 
	  let spessore = random(1, 3); 
	  let lunghezza = random(10, 70); 
	  let posX = random(width); 
	  let posY = random(height); 
	  let opacity = random(50, 255); 
  
	  stroke(20, 255, 255, opacity); // Colore della linea con opacità
	  strokeWeight(spessore); // Spessore della linea
	  line(posX, posY, posX, posY + lunghezza); // Stampo la linea
	  // line(pos_in_x, pos_in_y, pos_fin_x, pos_fin_y)
	}
  }
  