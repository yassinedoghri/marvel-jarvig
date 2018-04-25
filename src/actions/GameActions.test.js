import {
  API_CALL_REQUEST,
  CHECK_ANSWER,
  CLEAR_GAME,
  END_GAME,
  INIT_NEW_GAME,
  NEXT_QUESTION,
  PASS_QUESTION,
  SELECT_CHARACTER,
  SET_DIFFICULTY,
  UPDATE_SETTINGS
} from "constants/actionTypes";

import {
  updateSettings,
  setDifficulty,
  clearGame,
  initNewGame,
  selectCharacter,
  passQuestion,
  checkAnswer,
  nextQuestion,
  endGame,
  callRequest
} from "actions/GameActions";

describe("Game actions", () => {
  describe("updateSettings", () => {
    it("should return the correct constant", () => {
      const label = "numberOfLives";
      const value = 5;
      const expectedAction = {
        type: UPDATE_SETTINGS,
        payload: {
          label,
          value
        }
      };
      expect(updateSettings(label, value)).toEqual(expectedAction);
    });
  });
  describe("setDifficulty", () => {
    it("should return the correct constant", () => {
      const event = { value: "easy" };
      const expectedAction = {
        type: SET_DIFFICULTY,
        payload: event.value
      };
      expect(setDifficulty(event)).toEqual(expectedAction);
    });
  });
  describe("clearGame", () => {
    it("should return the correct constant", () => {
      expect(clearGame()).toEqual({
        type: CLEAR_GAME
      });
    });
  });
  describe("initNewGame", () => {
    it("should return the correct constant", () => {
      expect(initNewGame()).toEqual({
        type: INIT_NEW_GAME
      });
    });
  });
  describe("selectCharacter", () => {
    it("should return the correct constant", () => {
      expect(selectCharacter()).toEqual({
        type: SELECT_CHARACTER
      });
    });
  });
  describe("passQuestion", () => {
    it("should return the correct constant", () => {
      expect(passQuestion()).toEqual({
        type: PASS_QUESTION
      });
    });
  });
  describe("checkAnswer", () => {
    it("should return the correct constant", () => {
      expect(checkAnswer()).toEqual({
        type: CHECK_ANSWER
      });
    });
  });
  describe("nextQuestion", () => {
    it("should return the correct constant", () => {
      expect(nextQuestion()).toEqual({
        type: NEXT_QUESTION
      });
    });
  });
  describe("endGame", () => {
    it("should return the correct constant", () => {
      expect(endGame()).toEqual({
        type: END_GAME
      });
    });
  });
  describe("callRequest", () => {
    it("should return the correct constant", () => {
      expect(callRequest()).toEqual({
        type: API_CALL_REQUEST
      });
    });
  });
});
