import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';
import './magic8ball.css';

class Magic8ball extends Component {
  static contextType = UserContext;

  state = {
    answers: []
  }

  componentDidMount() {
    UserService.getAnswers().then((data) => {
      const answers = data.answers;
      this.setState({answers});
    });
  }
  generateSides = () => {
    return [...Array(20)].map( (x,i) => {
      const txt = this.state.answers.length > 0 ? this.state.answers[i].answer : "no text";
      return (
        <div 
          key={`magic8ball-side-${i}`}
          className="magic8ball-side">
            <div className="magic8ball-side-text">{txt}</div>
        </div>
      )
    })
  }
  
  render() {
    return (
        <div className="magic8ball-wrapper">
            <div className={`magic8ball magic8ball-side-${this.props.facingSide}`}>
                {this.generateSides()}
            </div>
        </div>
    );
  }
}

export default Magic8ball;
