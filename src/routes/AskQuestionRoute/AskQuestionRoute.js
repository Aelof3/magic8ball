import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Magic8ball from '../../components/Magic8ball/Magic8ball';
import BallSphere2 from '../../components/Styles/BallSphere';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';

class AskQuestionRoute extends Component {
  static contextType = UserContext;

  state = {
    facingSide: 1
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const question = form.get("ask-question-input");
    UserService.askQuestion(this.context.user.id, question)
      .then(data => {
        this.setState({
          facingSide: data.answer_id
        })
        document.getElementById("ask-question-input").value = "";
      })
  }

  render() {
    return (
      <section id="ask-question">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Ask the magic 8 ball a question</h1>
            <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="ask-question-input">Q:</label>
              <input className="Input" type="text" id="ask-question-input" name="ask-question-input"></input>
              <button className="btn" type="submit">Submit</button>
            </form>
            <Link className="btn" to="/">
              Back to main
            </Link>
          </div>
          <BallSphere2>
            <Magic8ball facingSide={this.state.facingSide}/>
          </BallSphere2>
        </div>
      </section>
    );
  }
}

export default AskQuestionRoute;
