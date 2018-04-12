import React, {Component} from 'react';
import {FlexSection, FlexGrid, Character, QuestionCard, FlexAside, PlayDiv} from "../../components";

class PlayScreen extends Component {
    render() {
        return (
            <PlayDiv>
                <FlexAside half>
                    <QuestionCard>
                        <QuestionCard.Question>
                            Can you find "Iron man"?
                        </QuestionCard.Question>
                        <QuestionCard.Instruction center sm>Choose a character and press Next</QuestionCard.Instruction>
                        <QuestionCard.Action primary dark>Pass</QuestionCard.Action>
                        <QuestionCard.Action accent2 dark disabled>Next</QuestionCard.Action>
                    </QuestionCard>
                </FlexAside>
                <FlexSection spaceRight spaceLeft play>
                    <FlexGrid>
                        <Character>
                            <Character.RadioBtn id="1" name="character"/>
                            <label htmlFor="1">
                                <Character.Image src={"http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="2" name="character"/>
                            <label htmlFor="2">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="3" name="character"/>
                            <label htmlFor="3">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="4" name="character"/>
                            <label htmlFor="4">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="5" name="character"/>
                            <label htmlFor="5">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="6" name="character"/>
                            <label htmlFor="6">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="7" name="character"/>
                            <label htmlFor="7">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581/standard_large.jpg"}/>
                            </label>
                        </Character>
                        <Character>
                            <Character.RadioBtn id="8" name="character"/>
                            <label htmlFor="8">
                                <Character.Image src={"http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73/standard_large.jpg"}/>
                            </label>
                        </Character>
                    </FlexGrid>
                </FlexSection>
            </PlayDiv>
        );
    }
}

export default PlayScreen;
