let secondCircle, minuteCircle, hourCircle;
let centerX, centerY; // Posizione centrale della canvas

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateCirclePositions();
  // Aggiorna l'orologio ogni secondo
  setInterval(updateTime, 1000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateCirclePositions();
}

function updateCirclePositions() {
  // Calcola la posizione centrale della canvas
  centerX = width / 2;
  centerY = height / 2;

  // Calcola il raggio dei cerchi
  let triangleSize = min(width, height) * 0.45;  // Dimensione del triangolo (distanza tra i cerchi)
  let circleSize = min(width, height) * 0.1;   // Dimensione dei cerchi

  // Definisci i cerchi per secondi, minuti e ore
  secondCircle = createCircle(centerX - triangleSize / 2, centerY + triangleSize / (2 * sqrt(3)), circleSize * 2, 2, 60); // Cerchio dei secondi doppio
  minuteCircle = createCircle(centerX + 40, centerY - triangleSize / (2 * sqrt(3)), circleSize * 1.5, 4, 60); // Cerchio dei minuti spostato di 1 cm a destra
  hourCircle = createCircle(centerX + triangleSize / 2 - 120, centerY + triangleSize / (2 * sqrt(3)) + 30, circleSize, 6, 12); // Cerchio delle ore spostato di 2 cm a sinistra e 30 pixel più in basso
}

function createCircle(x, y, radius, thickness, range) {
  return { x, y, radius, thickness, range };
}

function draw() {
  background(0); // Sfondo nero

  // Ottieni l'ora attuale
  let hr = hour();
  let min = minute();
  let sec = second();

  // Disegna i cerchi dell'orologio
  drawClockCircle(secondCircle, sec, "Seconds");
  drawClockCircle(minuteCircle, min, "Minutes");
  drawClockCircle(hourCircle, hr % 12, "Hours");

  // Disegna i numeri dei secondi, minuti e ore
  drawClockNumbers(secondCircle, 60, 1); // Disegna tutti i numeri da 0 a 59 per i secondi
  drawClockNumbers(minuteCircle, 60, 5); // Disegna i numeri ogni 5 per i minuti
  drawHourClockNumbers(hourCircle, 12, 1); // Disegna i numeri dall'1 al 12 per le ore
}

function drawClockCircle(circle, value, label) {
  let angle = map(value % circle.range, 0, circle.range, -HALF_PI, TWO_PI - HALF_PI);

  noFill();
  stroke(255); // Colore bianco
  strokeWeight(circle.thickness);
  ellipse(circle.x, circle.y, circle.radius * 2);

  let x = circle.x + cos(angle) * circle.radius;
  let y = circle.y + sin(angle) * circle.radius;
  strokeWeight(2);
  line(circle.x, circle.y, x, y);

  // Etichetta il cerchio con il nome
  drawLabel(circle, label);
}

function drawLabel(circle, label) {
  textAlign(CENTER, CENTER);
  fill(255); // Colore bianco
  noStroke();
  textSize(12);
  text(label, circle.x, circle.y + circle.radius + 15);
}

function drawClockNumbers(circle, totalNumbers, step) {
  let radius = circle.radius - 15;
  let spacing = TWO_PI / totalNumbers; // Spaziatura tra i numeri

  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255); // Colore bianco
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
  let spacing = TWO_PI / totalNumbers; // Spaziatura tra i numeri

  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255); // Colore bianco
  noStroke();

  for (let i = 0; i < totalNumbers; i += step) {
    let angle = map(i, 0, totalNumbers, -HALF_PI, TWO_PI - HALF_PI);
    let numX = circle.x + cos(angle) * radius;
    let numY = circle.y + sin(angle) * radius;
    let displayNumber = i === 0 ? 12 : i; // Sostituisce 0 con 12
    text(displayNumber, numX, numY);
  }
}

function updateTime() {
  redraw(); // Richiama la funzione draw() per aggiornare l'orologio ogni secondo
}
