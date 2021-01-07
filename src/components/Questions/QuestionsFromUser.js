import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';
import './recentquestions.css';

class QuestionsFromUser extends Component {
    static contextType = UserContext;
    state = {
        questions: []
    }

    questionize = (q) => {
        const lastchar = q[q.length - 1];
        if (lastchar === "?") return q;
        return `${q}?`
    }

    questionCheck = () => {
        if (this.state.questions.length > 0) {
            return <li className="recentQuestion">Questions you have asked:</li>    
        } else {
            return "";
        }
    }

    componentDidMount(){
        UserService.getUserData(this.context.user.id).then((data) => {
            const questions = data.questions;
            this.setState({questions});
        });
    }

    render(){
        const rq = this.state.questions.map((q,i)=>{
            return (
                <li key={`${q.user_ask_id}${q.question}${i}`} className="recentQuestion">
                    <p><strong>Q: </strong>{this.questionize(q.question)}</p>
                    <p><strong>A: </strong>{q.answer}</p>
                </li>
            )
        });

        return(
            <ul className="recentQuestion-list">
                {this.questionCheck()}
                {rq}
            </ul>
        )
    }
}

export default QuestionsFromUser;