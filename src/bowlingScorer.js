let actualScore = 0;
let frame = 0;
let turn = 0;
let isGameOver;

/*
{
    frameId:0,
    throwedPins: [0,0],
    frameScore:0
}
*/

let scoreTable = [];

function newGame() {
	actualScore = 0;
	frame = 1;
	turn = 0;
	isGameOver = false;
}

function throwedPins(count) {
	if (frame == 10) isGameOver = true;

	while (!isGameOver) {
		if (turn == 2) {
			frame += 1;
			turn = 1;
		} else {
			turn += 1;
		}

		scoreTable[frame] = {
			frameId: frame,
			throwedPins: [
				...(scoreTable[frame] && scoreTable[frame]["throwedPins"]
					? scoreTable[frame]["throwedPins"]
					: []),
				count,
			],
			frameScore: count,
		};
	}
}

function getActualState() {
	return scoreTable;
}

export { newGame, throwedPins, getActualState };
