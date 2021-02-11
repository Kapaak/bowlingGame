import { newGame, throwedPins, getActualState } from "./bowlingScorer.js";

newGame();

throwedPins(10);

throwedPins(3);
throwedPins(2);
throwedPins(5);
throwedPins(3);
throwedPins(8);
throwedPins(1);
throwedPins(3);
throwedPins(4);
throwedPins(6);
throwedPins(2);
throwedPins(10);
throwedPins(8);
throwedPins(1);

console.log(getActualState());
