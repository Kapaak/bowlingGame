import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();
throwedPins(1);
throwedPins(2);
throwedPins(3);
throwedPins(10);
throwedPins(6);
throwedPins(10);
// throwedPins(3);
// throwedPins(5);

console.log(getActualState());
