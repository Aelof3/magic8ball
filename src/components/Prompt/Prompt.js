import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';

class Prompt extends Component {
  static contextType = UserContext;

  renderCorrect = () => {
    const { word, guess } = this.props;

    return (
      <div className="correct">
        <h2 className="learn-header">You were correct! :D</h2>
        <div className="DisplayScore">
          <p>Your total score is: {this.context.nextWord.totalScore}</p>
        </div>
        <div className="DisplayFeedback">
          <p>
            The correct translation for {word.nextWord} was{' '}
            {this.context.nextWord.answer} and you chose {guess}!
          </p>
        </div>
      </div>
    );
  };

  renderIncorrect = () => {
    const { word, guess } = this.props;

    return (
      <div className="incorrect">
        <h2 className="learn-header">{'Good try, but not quite right :('}</h2>
        <div className="DisplayScore">
          <p>Your total score is: {this.context.nextWord.totalScore}</p>
        </div>
        <div className="DisplayFeedback">
          <p>
            The correct translation for {word.nextWord} was{' '}
            {this.context.nextWord.answer} and you chose {guess}!
          </p>
        </div>
      </div>
    );
  };
  handleNext = () => {
    this.props.clearPrompt();
    this.props.clearGuess();
    this.props.setNewWord(this.context.nextWord);
  };
  render() {
    return (
      <div>
        {this.context.nextWord.isCorrect === true
          ? this.renderCorrect()
          : this.renderIncorrect()}
        <Button onClick={() => this.handleNext()}>Try another word!</Button>
      </div>
    );
  }
}

export default Prompt;
