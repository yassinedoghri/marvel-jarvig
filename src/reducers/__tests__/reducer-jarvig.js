import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
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
import JarvigReducer, {
  initialState,
  difficultySettings,
  gameDefaults
} from "reducers/reducer-jarvig";

describe("jarvig reducer", () => {
  it("should return the initial state", () => {
    expect(JarvigReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle API_CALL_FAILURE", () => {
    expect(
      JarvigReducer(initialState, {
        type: API_CALL_FAILURE,
        payload: { message: "An error occured!" }
      })
    ).toEqual({
      ...initialState,
      error: { message: "An error occured!" }
    });
  });

  it("should handle API_CALL_REQUEST", () => {
    expect(
      JarvigReducer(initialState, {
        type: API_CALL_REQUEST
      })
    ).toEqual({
      ...initialState,
      fetching: true,
      error: null
    });
  });

  it("should handle API_CALL_SUCCESS", () => {
    // TODO: init static data from Marvel API ?
  });
  it("should handle CHECK_ANSWER", () => {
    // Good Answer
    expect(
      JarvigReducer(
        {
          ...initialState,
          game: {
            ...initialState.game,
            result: [],
            remainingLives: 5
          }
        },
        {
          type: CHECK_ANSWER,
          payload: true
        }
      )
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        result: ["1"],
        checked: true,
        remainingLives: 5
      }
    });

    // Wrong Answer
    expect(
      JarvigReducer(
        {
          ...initialState,
          game: {
            ...initialState.game,
            result: [],
            remainingLives: 5
          }
        },
        {
          type: CHECK_ANSWER,
          payload: false
        }
      )
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        result: ["0"],
        checked: true,
        remainingLives: 4
      }
    });
  });
  it("should handle CLEAR_GAME", () => {
    expect(
      JarvigReducer(initialState, {
        type: CLEAR_GAME
      })
    ).toEqual({
      ...initialState,
      error: null,
      game: gameDefaults
    });

    expect(
      JarvigReducer(
        {
          ...initialState,
          error: null,
          game: {
            choices: null,
            selected: "Iron Man",
            answer: "Iron Man",
            result: ["1", "0", "1"],
            remainingLives: 5,
            checked: false,
            over: false
          }
        },
        {
          type: CLEAR_GAME
        }
      )
    ).toEqual({
      ...initialState,
      error: null,
      game: gameDefaults
    });
  });
  it("should handle END_GAME", () => {
    expect(
      JarvigReducer(initialState, {
        type: END_GAME
      })
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        over: true
      }
    });
  });
  it("should handle INIT_NEW_GAME", () => {
    expect(
      JarvigReducer(initialState, {
        type: INIT_NEW_GAME
      })
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        over: false,
        clear: false,
        result: [],
        remainingLives: initialState.settings.numberOfLives
      }
    });
  });
  it("should handle NEXT_QUESTION", () => {
    expect(
      JarvigReducer(
        {
          ...initialState,
          game: {
            ...initialState.game,
            choices: ["Iron Man", "Captain America", "Hulk"],
            answer: "Iron Man",
            selected: "Captain America",
            checked: true
          }
        },
        {
          type: NEXT_QUESTION
        }
      )
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        choices: null,
        answer: null,
        selected: null,
        checked: false
      }
    });
  });
  it("should handle PASS_QUESTION", () => {
    expect(
      JarvigReducer(
        {
          ...initialState,
          game: {
            ...initialState.game,
            result: [],
            checked: false
          }
        },
        {
          type: PASS_QUESTION
        }
      )
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        result: ["0"], // set 0 as "wrong answer" because passed
        checked: true
      }
    });
  });
  it("should handle SELECT_CHARACTER", () => {
    expect(
      JarvigReducer(initialState, {
        type: SELECT_CHARACTER,
        payload: "Spider Man"
      })
    ).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        selected: "Spider Man"
      }
    });
  });
  it("should handle SET_DIFFICULTY", () => {
    expect(
      JarvigReducer(initialState, {
        type: SET_DIFFICULTY,
        payload: "medium"
      })
    ).toEqual({
      ...initialState,
      settings: difficultySettings.medium,
      difficulty: "medium"
    });
  });
  it("should handle UPDATE_SETTINGS", () => {
    expect(
      JarvigReducer(initialState, {
        type: UPDATE_SETTINGS,
        payload: {
          label: "numberOfLives",
          value: 5
        }
      })
    ).toEqual({
      ...initialState,
      settings: {
        ...initialState.settings,
        numberOfLives: 5
      },
      difficulty: "custom"
    });
  });
});
