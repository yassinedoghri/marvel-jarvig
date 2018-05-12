import QuestionCard from "containers/PlayScreen/QuestionCard";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("QuestionCard container", () => {
  it("renders without crashing", () => {
    const game = {
      choices: [],
      selected: null,
      answer: {
        name: "Iron Man",
        description: ""
      },
      result: [],
      remainingLives: 0,
      checked: false,
      over: false
    };
    const jarvigSettings = {
      numberOfQuestions: 10,
      hints: true
    };
    renderInContext(
      <QuestionCard
        game={game}
        jarvigSettings={jarvigSettings}
        isHintOpen={false}
        toggleHint={() => console.info("toggleHint")}
        checkAnswer={() => console.info("CheckAnswer")}
        selectCharacter={() => console.info("selectCharacter")}
        nextQuestion={() => console.info("nextQuestion")}
        passQuestion={() => console.info("passQuestion")}
      />
    );
  });
});
