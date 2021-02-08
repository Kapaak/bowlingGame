import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();
throwedPins(3);
throwedPins(7);
throwedPins(10);
throwedPins(0);
throwedPins(0);
throwedPins(1);

console.log(getActualState());
