import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();
throwedPins(3);
throwedPins(7);
throwedPins(3);
throwedPins(1);
throwedPins(10);
throwedPins(2);
throwedPins(3);
throwedPins(1);
throwedPins(9);

console.log(getActualState());
