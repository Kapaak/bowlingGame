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
	console.log(updateTarget, "  ", bonus, frame);
	score += count;
	pins = [...pins, count];
	updateTable(pins, score);

	if (turn === 0) {
		if (count === 10) {
			if (bonus === 0) updateTarget = 0;
			pins = [];
			frame++;
			bonus = 2;
			if (updateTarget < 2) updateTarget += 1;
		} else {
			turn++;
			if (bonus > 0) bonus--;
			if (bonus === 0) updateTarget = 0;
			// updateTarget = 0;
		}
	} else if (turn === 1) {
		frame++;

		if (pins[0] + pins[1] === 10 || pins[1] === 10) {
			//spare .. bacha mozna jeste dela chybu se strikem
			bonus = 1;
			console.log("kraa");
		} else if (bonus > 0) bonus--;
		turn = 0;
		pins = [];
	}
	// console.log(
	// 	"added",
	// 	count,
	// 	" to",
	// 	frame - 1,
	// 	"score is ",
	// 	score,
	// 	"turn",
	// 	turn
	// );
}
function applyBonus(count) {
	if (updateTarget === 1) {
		scoreTable[frame - 1].frameScore += count;
		score += count;
		bonus--;
	} else if (updateTarget === 2) {
		if (count !== 10) {
			if (turn === 0) {
				score += count;
				score += count;
				updateTarget--;
				scoreTable[frame - 2].frameScore += count;
				scoreTable[frame - 1].frameScore += count + count;
			}
			if (turn === 1) {
				scoreTable[frame - 1].frameScore += count;
				score += count;
			}
		} else {
			scoreTable[frame - 2].frameScore += count;
			scoreTable[frame - 1].frameScore += count + count;
			score += count;
			score += count;
		}
	}
}

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
