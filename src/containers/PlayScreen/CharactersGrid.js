import { Character, FlexGrid } from "components";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TiTickOutline from "react-icons/lib/ti/tick-outline";
import TiTimesOutline from "react-icons/lib/ti/times-outline";

class CharactersGrid extends Component {
  render() {
    const { game, selectCharacter } = this.props;

    let gridItems = "";
    if (game.choices) {
      gridItems = game.choices.map((item, i) => {
        const isRightAnswer = item.name === game.answer.name;
        let result = "none";
        if (game.checked) {
          if (game.selected === item.name) {
            result = isRightAnswer ? "correct" : "incorrect";
          } else {
            result = isRightAnswer ? "correct" : "none";
          }
        }

        return (
          <Character
            key={item.id}
            result={result}
            selected={game.selected === item.name}
          >
            <Character.RadioBtn
              id={i}
              name="character"
              onClick={() => selectCharacter(item.name)}
              disabled={game.checked}
            />
            <Character.Label htmlFor={i}>
              <Character.Figure
                result={result}
                selected={game.selected === item.name}
              >
                {game.checked &&
                  result !== "none" && (
                    <Character.CheckBadge>
                      {isRightAnswer ? <TiTickOutline /> : <TiTimesOutline />}
                    </Character.CheckBadge>
                  )}
                <Character.Image
                  src={`${item.thumbnail.path}/standard_amazing.${
                    item.thumbnail.extension
                  }`}
                />
                <Character.Caption checked={game.checked}>
                  {game.checked ? item.name : i + 1}
                </Character.Caption>
              </Character.Figure>
            </Character.Label>
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
    answer: PropTypes.shape({
      name: PropTypes.string
    }),
    checked: PropTypes.bool,
    selected: PropTypes.string
  }).isRequired,
  selectCharacter: PropTypes.func.isRequired
};

export default CharactersGrid;
