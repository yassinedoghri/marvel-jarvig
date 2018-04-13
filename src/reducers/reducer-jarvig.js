import {SET_DIFFICULTY, UPDATE_SETTINGS} from "../constants/actionTypes";

const difficultySettings = {
    easy: {
        numberOfHearts: 4,
        time: 3,
        numberOfQuestions: 10,
        charactersPerQuestion: 4,
    },
    medium: {
        numberOfHearts: 3,
        time: 2,
        numberOfQuestions: 10,
        charactersPerQuestion: 6,
    },
    hard: {
        numberOfHearts: 2,
        time: 1,
        numberOfQuestions: 10,
        charactersPerQuestion: 10,
    },
};

const difficulties = [
    { value: 'easy', label: 'Newbie' },
    { value: 'medium', label: 'Getting There' },
    { value: 'hard', label: 'Master' },
];

export default (state = {
    settings: difficultySettings.medium,
    difficulty: 'medium',
    difficulties: difficulties,
    result: {
        
    }
}, action) => {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    [action.payload.label]: action.payload.value
                },
                difficulty: 'custom',
            };
        case SET_DIFFICULTY:
            const difficulty = action.payload;
            return {
                ...state,
                settings: difficultySettings[difficulty],
                difficulty: difficulty
            };
        default:
            return state
    }
};
