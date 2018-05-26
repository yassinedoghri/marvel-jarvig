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
  SAVE_GAME_TIME,
  SELECT_CHARACTER,
  SET_DIFFICULTY,
  UPDATE_SETTINGS
} from "constants/actionTypes";
import { generateAnswers } from "utils/helpers";

export const difficultySettings = {
  easy: {
    numberOfLives: 4,
    time: 3,
    numberOfQuestions: 10,
    charactersPerQuestion: 3,
    hints: true
  },
  medium: {
    numberOfLives: 3,
    time: 2,
    numberOfQuestions: 10,
    charactersPerQuestion: 6,
    hints: true
  },
  hard: {
    numberOfLives: 2,
    time: 1,
    numberOfQuestions: 10,
    charactersPerQuestion: 10,
    hints: false
  },
  custom: {
    numberOfLives: 1,
    time: 1,
    numberOfQuestions: 1,
    charactersPerQuestion: 2,
    hints: false
  }
};

const difficulties = [
  { value: "easy", label: "Newbie" },
  { value: "medium", label: "Intermediate" },
  { value: "hard", label: "Master" }
];

export const gameDefaults = {
  choices: null,
  selected: null,
  answer: null,
  result: [],
  remainingLives: 0,
  checked: false,
  over: false,
  timer: null
};

// Black listed characters (eg. they don't have an image)
const bannedChars = [
  "Pretty Boy",
  "Revanche",
  "Cerebro",
  "Unus (Ultimate)",
  "Catseye",
  "Battering Ram",
  "Synch",
  "Beef"
];

export const initialState = {
  settings: difficultySettings.easy,
  difficulty: "easy",
  difficulties,
  game: gameDefaults,
  attributionText: "",
  characters: null,
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.label]: action.payload.value
        },
        difficulty: "custom"
      };
    }
    case SET_DIFFICULTY: {
      const difficulty = action.payload;
      return {
        ...state,
        settings: difficultySettings[difficulty],
        difficulty
      };
    }
    case CLEAR_GAME: {
      return {
        ...state,
        error: null,
        game: gameDefaults
      };
    }
    case INIT_NEW_GAME: {
      return {
        ...state,
        game: {
          ...state.game,
          over: false,
          clear: false,
          result: [],
          remainingLives: state.settings.numberOfLives
        }
      };
    }
    case PASS_QUESTION: {
      return {
        ...state,
        game: {
          ...state.game,
          result: [...state.game.result, "0"], // set 0 as "wrong answer" because passed
          checked: true
        }
      };
    }
    case CHECK_ANSWER: {
      const lives = state.game.remainingLives;
      return {
        ...state,
        game: {
          ...state.game,
          result: [...state.game.result, action.payload ? "1" : "0"], // set 1 if correct, 0 if not
          checked: true,
          remainingLives: action.payload ? lives : lives - 1
        }
      };
    }
    case NEXT_QUESTION: {
      return {
        ...state,
        game: {
          ...state.game,
          choices: null,
          answer: null,
          selected: null,
          checked: false
        }
      };
    }
    case SELECT_CHARACTER: {
      return {
        ...state,
        game: {
          ...state.game,
          selected: action.payload
        }
      };
    }
    case END_GAME: {
      return {
        ...state,
        game: {
          ...state.game,
          over: true
        }
      };
    }
    case SAVE_GAME_TIME: {
      return {
        ...state,
        game: {
          ...state.game,
          time: action.payload
        }
      };
    }
    case API_CALL_REQUEST: {
      return { ...state, fetching: true, error: null };
    }
    case API_CALL_SUCCESS: {
      const { characters, attributionText } = action.payload;
      const { charactersToDisplay, answer } = generateAnswers(
        characters,
        state.settings.charactersPerQuestion,
        bannedChars
      );
      return {
        ...state,
        fetching: false,
        error: null,
        characters: action.payload,
        attributionText,
        game: {
          ...state.game,
          choices: charactersToDisplay,
          answer
        }
      };
    }
    case API_CALL_FAILURE: {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
