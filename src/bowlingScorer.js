let actualScore = 0;
let frame = 0;
let turn = 0;
let isGameOver;
let pins = [];
let scoreTable = [];

/*
  {
    frameId: 0,
    throwedPins: [0, 0],
    frameScore: 0
  }
*/

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

	if (turn === 1) {
		pins = [...pins, count];
		console.log(pins);
		updateTable(pins);
		turn = 0;
		frame++;
	} else if (turn === 0) {
		pins = [count];
		updateTable(pins);
		turn++;
	}
}

function updateTable(pins) {
	scoreTable[frame] = {
		frameId: frame,
		throwedPins: pins,
	};
}

function getActualState() {
	return scoreTable;
}

export { newGame, throwedPins, getActualState };
