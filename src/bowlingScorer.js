let score = 0;
let frame = 0;
let turn = 0;
let isGameOver;
const finalFrame = 10;
let pins = [];
let scoreTable = [];
let bonus = 0;
let updateTarget = 0;

function newGame() {
	score = 0;
	frame = 0;
	turn = 0;
	isGameOver = false;
}

function setFrame(count) {
	score += count;
	pins = [...pins, count];
	updateTable(pins, score);
	if (turn === 0) {
		if (count === 10) {
			pins = [];
			frame++;
			bonus = 2;
			if (updateTarget < 2) updateTarget += 1;
		} else {
			turn++;
		}
	} else if (turn === 1) {
		if (pins[0] + pins[1] === 10) bonus += 1; //spare .. bacha mozna jeste dela chybu se strikem
		frame++;
		turn = 0;
		pins = [];
	}
}
function applyBonus(count) {
	if (updateTarget === 1) {
		scoreTable[frame - 1].frameScore += count;
		score += count;
		bonus--;
		console.log(
			"added",
			count,
			" to",
			frame - 1,
			"score is ",
			score,
			"turn",
			turn
		);
	} else if (updateTarget === 2) {
		if (count !== 10) {
			if (turn === 0) {
				console.log(
					"added",
					count,
					" to",
					frame - 1,
					"score is ",
					score,
					"turn",
					turn
				);
				scoreTable[frame - 2].frameScore += count;
				score += count;

				updateTarget--;
				console.log(score);
				scoreTable[frame - 1].frameScore += count + count;
				score += count;
				console.log(score);
				bonus--;
			}
			if (turn === 1) {
				console.log("added", count, " to", frame - 1, "score is ", score);
				scoreTable[frame - 1].frameScore += count;
				score += count;
				bonus--;
			}
		} else {
			console.log("added", count, " to", frame - 1, "score is ", score);
			scoreTable[frame - 2].frameScore += count;
			score += count;
			// updateTarget--;
			scoreTable[frame - 1].frameScore += count;
			score += count;
			bonus--;
		}
	}
}
// function applyBonus(count) {
// 	scoreTable[frame - updateTarget].frameScore += count;
// 	score += count;
// 	bonus--;
// 	if (updateTarget === 2) updateTarget = 1;
// }

// function convertSpecialNumbers(pins, score, turnScore, numberOfTurns) {
// 	let spareCounter = 0;
// 	let newPins = [...pins];
// 	newPins = newPins.map((pin, index) => {
// 		spareCounter += pin;
// 		if (pin === 10 && index === 0) return "X";
// 		if (spareCounter === 10 && pins[0] !== 10) return "/";
// 		if (pin === 0) return "-";
// 		return pin;
// 	});
// 	updateTable(newPins, score, turnScore, numberOfTurns);
// }

function throwedPins(count) {
	if (bonus > 0) applyBonus(count);
	setFrame(count);
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
