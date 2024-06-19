let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (frameCount % 9 === 1) {
    let dimensione = random(8, 18); 
    let velocitaCaduta = random(3, 5); 
    let posX = random(width);
    let posY = -dimensione; 
    let opacity = random(80, 300); 

    snowflakes.push({ posX, posY, dimensione, velocitaCaduta, opacity });
  }

  for (let flake of snowflakes) {
    fill(200, 230, 250, flake.opacity); 
    noStroke(); 

    ellipse(flake.posX, flake.posY, flake.dimensione, flake.dimensione); 

    flake.posY += flake.velocitaCaduta;

    if (flake.posY > height) {
      let index = snowflakes.indexOf(flake);
      snowflakes.splice(index, 1);
    }
  }
}
