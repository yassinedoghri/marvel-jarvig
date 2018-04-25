import React, { Component } from "react";
import { FlexGrid, Character } from "components";
import TiTimesOutline from "react-icons/lib/ti/times-outline";
import TiTickOutline from "react-icons/lib/ti/tick-outline";
import PropTypes from "prop-types";

class CharactersGrid extends Component {
  render() {
    const { game, selectCharacter } = this.props;

    let gridItems = "";
    if (game.choices) {
      gridItems = game.choices.map((item, i) => {
        const isRightAnswer = item.name === game.answer.name;
        let result;
        if (game.checked) {
          if (game.selected === item.name) {
            result = isRightAnswer ? "selectedRight" : "selectedWrong";
          } else {
            result = isRightAnswer ? "answerRight" : "none";
          }
        }

        let isRightAnswerString = "none";
        if (game.checked) {
          isRightAnswerString = isRightAnswer ? "correct" : "incorrect";
        }

        return (
          <Character key={item.id}>
            <Character.RadioBtn
              id={i}
              name="character"
              onClick={() => selectCharacter(item.name)}
              disabled={game.checked}
              result={result}
            />
            <label htmlFor={i}>
              <Character.Figure>
                {game.selected === item.name && (
                  <Character.CheckBadge answer={isRightAnswerString}>
                    {isRightAnswer ? <TiTickOutline /> : <TiTimesOutline />}
                  </Character.CheckBadge>
                )}
                <Character.Image
                  src={`${item.thumbnail.path}/standard_large.${
                    item.thumbnail.extension
                  }`}
                />
                <Character.Caption checked={game.checked}>
                  {game.checked ? item.name : i + 1}
                </Character.Caption>
              </Character.Figure>
            </label>
          </Character>
        );
      });
    }

    return <FlexGrid>{gridItems}</FlexGrid>;
  }
}

CharactersGrid.propTypes = {
  game: PropTypes.shape({
    choices: PropTypes.array,
    answer: PropTypes.object,
    checked: PropTypes.bool,
    selected: PropTypes.string
  }).isRequired,
  selectCharacter: PropTypes.func.isRequired
};

export default CharactersGrid;
