import {
  API_CALL_REQUEST,
  CHECK_ANSWER,
  CLEAR_GAME,
  END_GAME,
  INIT_NEW_GAME,
  NEXT_QUESTION,
  PASS_QUESTION,
  SAVE_GAME_TIME,
  SELECT_CHARACTER,
  SET_DIFFICULTY,
  UPDATE_SETTINGS
} from "constants/actionTypes";

export const updateSettings = (label, value) => ({
  type: UPDATE_SETTINGS,
  payload: {
    label,
    value
  }
});

export const setDifficulty = event => {
  const difficulty = event ? event.value : "custom";

  return {
    type: SET_DIFFICULTY,
    payload: difficulty
  };
};

export const clearGame = () => ({
  type: CLEAR_GAME
});

export const initNewGame = () => ({
  type: INIT_NEW_GAME
});

export const selectCharacter = name => ({
  type: SELECT_CHARACTER,
  payload: name
});

export const passQuestion = answer => ({
  type: PASS_QUESTION,
  payload: answer
});

export const checkAnswer = answer => ({
  type: CHECK_ANSWER,
  payload: answer
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const endGame = () => ({
  type: END_GAME
});

export const saveGameTime = time => ({
  type: SAVE_GAME_TIME,
  payload: time
});

export const callRequest = () => ({
  type: API_CALL_REQUEST
});
