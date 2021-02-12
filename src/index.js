import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();

throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);
throwedPins(10);

console.log(getActualState());
