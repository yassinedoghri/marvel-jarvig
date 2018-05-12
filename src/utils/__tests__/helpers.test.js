import {
  generateAnswers,
  generateQuery,
  getArrayCounts,
  randomIntFromInterval
} from "utils/helpers";

const characters = require("utils/data_test");

describe("Helper functions", () => {
  describe("randomIntFromInterval", () => {
    it("should return a random number between 2 numbers", () => {
      const result = randomIntFromInterval(0, 5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(5);
      // TODO: Test Integer
    });
  });
  describe("generateQuery", () => {
    it("should return given object parameters as string separated by &", () => {
      const expectedString = "foo=foo&bar=2";
      expect(generateQuery({ foo: "foo", bar: 2 })).toMatch(expectedString);
    });
  });
  describe("getArrayCounts", () => {
    it("should return an object the occurrences of an array elements", () => {
      expect(getArrayCounts(["0", "1", "1"])).toEqual({
        0: 1,
        1: 2
      });
    });
  });
  describe("generateAnswers", () => {
    it("should return the right number of characters to display a random answer from those characters", () => {
      const { charactersToDisplay, answer } = generateAnswers(
        characters,
        5,
        []
      );
      expect(charactersToDisplay).toHaveLength(5);
      expect(charactersToDisplay).toEqual(expect.arrayContaining([answer]));
    });
  });
});
