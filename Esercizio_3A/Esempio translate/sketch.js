function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255)
	noStroke()
	fill(0)

	translate(width/2, height/2)
	rect(0, 0, 100, 20)

	translate(110, 0)
	
}