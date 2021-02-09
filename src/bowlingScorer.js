let score = 0;
let frame = 0;
let turn = 0;
let isGameOver;
const finalFrame = 10;
let pins = [];
let scoreTable = [];
let bonus = 0;

/*
  {
    frameId: 0,
    throwedPins: [0, 0],
    frameScore: 0
  }
*/

function newGame() {
	score = 0;
	frame = 0;
	turn = 0;
	isGameOver = false;
}

// function setFrame(count, newCount) {
// 	score += count;
// 	if (bonus > 0) {
// 		if (turn === 1) {
// 			scoreTable[frame - 1].frameScore = score;
// 			score += count;
// 			pins = [...pins, (count = newCount)];
// 			updateTable(pins, score);
// 			turn = 0;
// 			frame++;
// 			bonus--;
// 			console.log("bonuus");
// 		} else if (turn === 0) {
// 			// if(newCount === "X"){
// 			// 	scoreTable[frame - 1].frameScore = score;
// 			// 	score += count;
// 			// }
// 			scoreTable[frame - 1].frameScore = score;
// 			score += count;
// 			pins = [(count = newCount)];
// 			updateTable(pins, score);
// 			turn++;
// 			bonus--;
// 		}
// 	} else {
// 		if (turn === 1) {
// 			pins = [...pins, (count = newCount)];
// 			updateTable(pins, score);
// 			turn = 0;
// 			frame++;
// 		} else if (turn === 0) {
// 			if (newCount === "X") {
// 				pins = ["X", " "];
// 				updateTable(pins, score);
// 				turn = 0;
// 				frame++;
// 			} else {
// 				pins = [(count = newCount)];
// 				updateTable(pins, score);
// 				turn++;
// 			}
// 		}
// 	}
// }

function setFrame(count) {
	score += count;
	pins = [...pins, count];
	convertSpecialNumbers(pins, score);
	if (turn === 0) {
		if (count === 10) {
			updateTable(["X", " "], score); // strike
			pins = [];
			frame++;
			bonus = 2;
		} else turn++;
	} else if (turn === 1) {
		if (pins[0] + pins[1] === 10) bonus += 1; //spare .. bacha mozna jeste dela chybu se strikem
		frame++;
		turn = 0;
		pins = [];
	}
}

function applyBonus(count) {
	score += count;
	scoreTable[frame - 1].frameScore = score;
	bonus--;
}

function convertSpecialNumbers(pins, score) {
	let spareCounter = 0;
	let newPins = [...pins];
	newPins = newPins.map((pin, index) => {
		spareCounter += pin;
		if (pin === 10 && index === 0) return "X";
		if (spareCounter === 10 && pins[0] !== 10) return "/";
		if (pin === 0) return "-";
		return pin;
	});
	updateTable(newPins, score);
}

//udealm nejakou funkci ,ktera bude vracet ze setFrame prestylovany "X" "-" "/" do updateTable
//v setFrame bude jen logika pro vypocitani score, vytvoreni bonusu a spocitani bonusu
//mozna udelat specialni funkci na prepocitani bonusu

function throwedPins(count) {
	if (bonus > 0) applyBonus(count);
	setFrame(count);

	// logic 2
	// if (spare) {
	// 	setFrame(count, "/");
	// 	bonus = 1;
	// } else if (turn === 1 && count === 0) {
	// 	setFrame(count, "-");
	// } else if (turn === 1) {
	// 	setFrame(count, count);
	// } else if (strike) {
	// 	setFrame(count, "X");
	// 	bonus = 2;
	// } else if (turn === 0 && count === 0) {
	// 	setFrame(count, "-");
	// } else if (turn === 0) {
	// 	setFrame(count, count);
	// }

	//logic 1
	// if (turn === 1 && score + count === 10) {
	// 	score += count;
	// 	pins = [...pins, (count = "/")];
	// 	updateTable(pins, score);
	// 	turn = 0;
	// 	frame++;
	// } else if (turn === 1 && count === 0) {
	// 	score += count;
	// 	pins = [...pins, (count = "-")];
	// 	updateTable(pins, score);
	// 	turn = 0;
	// 	frame++;
	// } else if (turn === 1) {
	// 	score += count;
	// 	pins = [...pins, count];
	// 	updateTable(pins, score);
	// 	turn = 0;
	// 	frame++;
	// } else if (turn === 0 && count === 10) {
	// 	score += count;
	// 	pins = [(count = "X")];
	// 	updateTable(pins, score);
	// 	turn++;
	// } else if (turn === 0 && count === 0) {
	// 	score += count;
	// 	pins = [(count = "-")];
	// 	updateTable(pins, score);
	// 	turn++;
	// } else if (turn === 0) {
	// 	score += count;
	// 	pins = [count];
	// 	updateTable(pins, score);
	// 	turn++;
	// }
}

function updateTable(pins, score) {
	if (frame < finalFrame) {
		scoreTable[frame] = {
			frameId: frame,
			throwedPins: pins,
			frameScore: score,
		};
	}
	isGameOver = true;
}

function getActualState() {
	return scoreTable;
}

export { newGame, throwedPins, getActualState };
