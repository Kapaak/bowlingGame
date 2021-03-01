import { TestScheduler } from "jest";
import { throwedPins, getActualState } from "./bowlingScorer.js";

test("If throwed Pin is 9", () => {
	throwedPins(9);
	expect(getActualState()[0].throwedPins).toStrictEqual([9]);
});
