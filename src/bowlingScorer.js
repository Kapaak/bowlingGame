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

function setFrame(count, bonus = false) {
	// if (turn === 0 && !bonus) {
	// }
	score += count;
	pins = [...pins, count];

	if (turn === 0) {
		updateTable(pins, score, score);
		turn++;
	} else if (turn === 1) {
		convertSpecialNumbers(pins, score, pins[0] + pins[1]);
		frame++;
		turn = 0;
		pins = [];
	}
}

function convertSpecialNumbers(pins, score, frameScore) {
	let newPins = [...pins];

	newPins.map((pin, index) => {
		if (pin === 10 && index === 0) newPins[index] = "X";
		else if (pin[0] + pin[1] === 10) newPins[index] = "/";
		else if (pin === 0) newPins[index] = "-";
	});
	//tohle dole mi nefungovalo
	// newPins.map((pin, index) => {
	// 	if (pin === 10 && index === 0) pin = "X";
	// 	else if (pin[0] + pin[1] === 10) pin = "/";
	// 	else if (pin === 0) pin = "-";
	// });

	console.log(newPins);
	updateTable(newPins, score);
}

//udealm nejakou funkci ,ktera bude vracet ze setFrame prestylovany "X" "-" "/" do updateTable
//v setFrame bude jen logika pro vypocitani score, vytvoreni bonusu a spocitani bonusu
//mozna udelat specialni funkci na prepocitani bonusu

function throwedPins(count) {
	const strike = turn === 0 && count === 10;
	const spare =
		(turn === 1 && pins[0] + count === 10) || (turn === 1 && count === 10);

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
