let score = 0;
let frame = 0;
let turn = 0;
let isGameOver;
const finalFrame = 10;
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
	score = 0;
	frame = 0;
	turn = 0;
	isGameOver = false;
}

function throwedPins(count) {
	// dummy logic
	if (turn === 1 && count === 10) {
		score += count;
		pins = [...pins, (count = "X")];
		updateTable(pins, score);
		turn = 0;
		frame++;
	} else if (turn === 1) {
		score += count;
		pins = [...pins, count];
		updateTable(pins, score);
		turn = 0;
		frame++;
	} else if (turn === 0 && count === 10) {
		score = count;
		pins = [(count = "X")];
		updateTable(pins, score);
		turn++;
	} else if (turn === 0) {
		score = count;
		pins = [count];
		updateTable(pins, score);
		turn++;
	}
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
