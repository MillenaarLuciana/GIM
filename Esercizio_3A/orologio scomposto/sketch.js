let secondCircle, minuteCircle, hourCircle;
let centerX, centerY; // Posizione centrale della canvas

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Calcola la posizione centrale della canvas
  centerX = width / 2;
  centerY = height / 2;
  
  // Calcola il raggio dei cerchi
  let triangleSize = min(width, height) * 0.35;  // Dimensione del triangolo (distanza tra i cerchi)
  let circleSize = min(width, height) * 0.1;   // Dimensione dei cerchi
  
  // Definisci i cerchi per secondi, minuti e ore
  secondCircle = {
    range: 60,
    radius: circleSize,
    thickness: 2,
    x: centerX - triangleSize / 2,
    y: centerY + triangleSize / (2 * sqrt(3))
  };
  
  minuteCircle = {
    range: 60,
    radius: circleSize,
    thickness: 4,
    x: centerX,
    y: centerY - triangleSize / (2 * sqrt(3))
  };
  
  hourCircle = {
    range: 12,
    radius: circleSize,
    thickness: 6,
    x: centerX + triangleSize / 2,
    y: centerY + triangleSize / (2 * sqrt(3))
  };
  
  // Aggiorna l'orologio ogni secondo
  setInterval(updateTime, 1000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Ricalcola la posizione dei cerchi al ridimensionamento della finestra
  centerX = width / 2;
  centerY = height / 2;
  
  let triangleSize = min(width, height) * 0.35;  // Dimensione del triangolo (distanza tra i cerchi)
  let circleSize = min(width, height) * 0.1;   // Dimensione dei cerchi
  
  // Definisci i cerchi per secondi, minuti e ore con la nuova posizione
  secondCircle.radius = circleSize;
  secondCircle.x = centerX - triangleSize / 2;
  secondCircle.y = centerY + triangleSize / (2 * sqrt(3));
  
  minuteCircle.radius = circleSize;
  minuteCircle.x = centerX;
  minuteCircle.y = centerY - triangleSize / (2 * sqrt(3));
  
  hourCircle.radius = circleSize;
  hourCircle.x = centerX + triangleSize / 2;
  hourCircle.y = centerY + triangleSize / (2 * sqrt(3));
}

function draw() {
  background(200);
  
  // Ottieni l'ora attuale
  let hr = hour();
  let min = minute();
  let sec = second();
  
  // Disegna il cerchio per i secondi
  drawClockCircle(secondCircle, sec, 60, "Seconds");
  
  // Disegna il cerchio per i minuti
  drawClockCircle(minuteCircle, min, 60, "Minutes");
  
  // Disegna il cerchio per le ore
  drawClockCircle(hourCircle, hr % 12, 12, "Hours");
  
  // Disegna i numeri all'interno di ciascun cerchio
  drawClockNumbers(secondCircle);
  drawClockNumbers(minuteCircle);
  drawClockNumbers(hourCircle);
}

function drawClockCircle(circle, value, range, label) {
  let angle = map(value % range, 0, range, -HALF_PI, TWO_PI - HALF_PI);
  
  noFill();
  stroke(0);
  strokeWeight(circle.thickness);
  ellipse(circle.x, circle.y, circle.radius * 2);
  
  let x = circle.x + cos(angle) * circle.radius;
  let y = circle.y + sin(angle) * circle.radius;
  strokeWeight(2);
  line(circle.x, circle.y, x, y);
  
  // Etichetta il cerchio con il nome
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  textSize(12);
  text(label, circle.x, circle.y + circle.radius + 15);
}

function drawClockNumbers(circle) {
  let radius = circle.radius - 15;
  let spacing = TWO_PI / 12;
  
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);
  noStroke();
  
  for (let i = 1; i <= 12; i++) {
    let angle = map(i, 0, 12, -HALF_PI, TWO_PI - HALF_PI);
    let numX = circle.x + cos(angle) * radius;
    let numY = circle.y + sin(angle) * radius;
    text(i, numX, numY);
  }
}

function updateTime() {
  redraw(); // Richiama la funzione draw() per aggiornare l'orologio ogni secondo
}
