let letters = [
	"SONORLEBORE",
	"ÈRLUNASDUEZ",
	"TREOTTONOVE",
	"DIECIUNDICI",
	"DODICISETTE",
	"QUATTROCSEI",
	"CINQUEAMENO",
	"ECUNOQUARTO",
	"VENTICINQUE",
	"DIECIPMEZZA"
  ];
  
  let letterSize = 30;  // Dimensione del carattere
  let letterSpacing = 5;  // Spaziatura tra le lettere
  let gridSize = 10;  // Numero di lettere per riga e colonna
  
  function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(letterSize);
	noLoop();
	updateClock();
	setInterval(updateClock, 60000); // Update every minute
  }
  
  function draw() {
	background(200);
	drawGrid();
  }
  
  function drawGrid() {
	let highlightedWords = getItalianTime().split(" ");
  
	let offsetX = (width - gridSize * (letterSize + letterSpacing)) / 2;
	let offsetY = (height - gridSize * (letterSize + letterSpacing)) / 2;
  
	for (let row = 0; row < letters.length; row++) {
	  for (let col = 0; col < letters[row].length; col++) {
		let letter = letters[row][col];
		let x = offsetX + col * (letterSize + letterSpacing);
		let y = offsetY + row * (letterSize + letterSpacing);
  
		if (letter !== " ") {
		  if (shouldHighlight(row, col, highlightedWords)) {
			fill(0); // Black color for highlighted letters
		  } else {
			fill(150); // Grey color for non-highlighted letters
		  }
		  text(letter, x + letterSize / 2, y + letterSize / 2);
		}
	  }
	}
  }
  
  function shouldHighlight(row, col, highlightedWords) {
	for (let word of highlightedWords) {
	  let wordLength = word.length;
	  if (letters[row].substring(col, col + wordLength) === word) {
		return true;
	  }
	}
	return false;
  }
  
  function getItalianTime() {
	const now = new Date();
	const hours = (now.getUTCHours() + 2) % 24; // Ora corrente della Svizzera
	const minutes = now.getMinutes();
  
	const hourWords = ["UNA", "DUE", "TRE", "QUATTRO", "CINQUE", "SEI", "SETTE", "OTTO", "NOVE", "DIECI", "UNDICI", "DODICI"];
	const minuteWords = ["", "E CINQUE", "E DIECI", "E UN QUARTO", "E VENTI", "E VENTICINQUE", "E MEZZA", "MENO VENTICINQUE", "MENO VENTI", "MENO UN QUARTO", "MENO DIECI", "MENO CINQUE"];
	
	let hourIndex = hours % 12;
	let minuteIndex = Math.floor(minutes / 5);
  
	let hourWord = hourWords[hourIndex];
	let minuteWord = minuteWords[minuteIndex];
  
	if (hours === 0 && minutes === 0) {
		return "È MEZZANOTTE";
	} else if (hours === 12 && minutes === 0) {
		return "È MEZZOGIORNO";
	} else if (minuteIndex > 6) {
		hourWord = hourWords[(hourIndex + 1) % 12];
	}
  
	return `SONO LE ${hourWord} ${minuteWord}`.trim();
  }
  
  function updateClock() {
	redraw(); // Redraw the canvas with the new time
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	redraw();
  }
  