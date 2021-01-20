import React, { Component } from 'react';
import UserService from '../../services/user-service';
import UserContext from '../../contexts/UserContext';
import './recentquestions.css';

class QuestionsFromRecent extends Component {
    static contextType = UserContext;
    state = {
        recentQuestions: [],
        interval: null
    }

    questionize = (q) => {
        const lastchar = q[q.length - 1];
        if (lastchar === "?") return q;
        return `${q}?`
    }

    refreshQuestions = () => {
        this.setState({
            interval: setInterval(()=>{
                UserService.getRecentQuestions().then((data) => {
                    const recentQuestions = data.questions;
                    this.setState({recentQuestions});
                });
            },30000)
        })
    }

    componentDidMount(){
        UserService.getRecentQuestions().then((data) => {
            const recentQuestions = data.questions;
            this.setState({recentQuestions});
        });
        this.refreshQuestions();
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    render(){
        const rq = this.state.recentQuestions.map((q,i)=>{
            return (
                <li key={`${q.user_ask_id}${q.question}${i}`} className="recentQuestion">
                    <p><strong>Q: </strong>{this.questionize(q.question)}</p>
                    <p><strong>A: </strong>{q.answer}</p>
                    <p className="recentQuestion-askedby">asked by: {q.username}</p>
                </li>
            )
        });

        return(
            <ul className="recentQuestion-list">
                <li className="recentQuestion">10 most recent questions from everybody:</li>
                {rq}
            </ul>
        )
    }
}

export default QuestionsFromRecent;