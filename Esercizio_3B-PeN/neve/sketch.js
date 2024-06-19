let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Aggiungiamo un nuovo fiocco di neve ad intervalli regolari
  if (frameCount % 9 === 1) {
    let dimensione = random(5, 12); // Dimensione randomica tra 5 e 15
    let velocitaCaduta = random(1, 4); // Velocità di caduta randomica tra 1 e 3
    let posX = random(width); // Posizione x casuale
    let posY = -dimensione; // Iniziamo i fiocchi di neve sopra il canvas
    let opacity = random(50, 255); // Opacità casuale tra 50 e 255

    snowflakes.push({ posX, posY, dimensione, velocitaCaduta, opacity });
  }

  // Disegnamo e aggiorniamo ogni fiocco di neve
  for (let flake of snowflakes) {
    fill(240, 240, 240, flake.opacity); // Colore del fiocco di neve (bianco) con opacità
    noStroke(); // Nessun contorno per il fiocco di neve

    ellipse(flake.posX, flake.posY, flake.dimensione, flake.dimensione); // Disegna un fiocco di neve come un'ellisse

    // Muovi il fiocco di neve verso il basso con la velocità di caduta
    flake.posY += flake.velocitaCaduta;

    // Se il fiocco di neve raggiunge il fondo del canvas, rimuovilo dall'array
    if (flake.posY > height) {
      let index = snowflakes.indexOf(flake);
      snowflakes.splice(index, 1);
    }
  }
}
