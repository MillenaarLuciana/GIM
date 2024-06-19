function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	stroke(30, 60, 80)


	for (let i = 0; i < 150; i++){
		let lunghezza = random(25, 25)
		let gocciax = random(0, width)
		let gocciay = random(- lunghezza, height)
		strokeWeight(random(2, 5))
		line(gocciax, gocciay, gocciax, gocciay + lunghezza)
	}
	if (random(100) < 0.2)background(255)
} 