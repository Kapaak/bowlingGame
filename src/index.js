import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();
throwedPins(1);
throwedPins(6);
throwedPins(6);
throwedPins(6);
throwedPins(10);
throwedPins();
console.log(getActualState());
