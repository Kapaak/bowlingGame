let actualScore = 0;
let frame = 0;
let turn = 0;
let isGameOver;
let table = [];
let pins = [];
/*
  {
    frameId: 0,
    throwedPins: [0, 0],
    frameScore: 0
  }
*/

let scoreTable = [];

function newGame() {
	actualScore = 0;
	frame = 0;
	turn = 0;
	isGameOver = false;
}

function gameOver() {
	if (frame >= 10 && turn == 2) {
		!isGameOver;
		alert("game over");
		return;
	}
}

function throwedPins(count) {
	// dummy logic
	if (turn === 1 && count === 10) {
		count = "X";
		//spare
	}
	if (turn === 0 && count === 10) {
		count = "X";
	}
	if (turn === 1) {
		pins = [...pins, count];
		updateTable(pins);
		turn = 0;
	}

	if (turn === 0) {
		pins = [count];
		turn++;
	}
}

function updateTable(pins) {
	table[frame] = {
		frameId: frame,
		throwedPins: pins,
	};
	console.log(table);
	frame++;
}

function getActualState() {
	return scoreTable;
}

export { newGame, throwedPins, getActualState };
