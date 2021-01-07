import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';
import QuestionsFromRecent from '../../components/Questions/QuestionsFromRecent';
import QuestionsFromUser from '../../components/Questions/QuestionsFromUser';
import './dashboard.css';

class DashboardRoute extends Component {
  static contextType = UserContext;
  state = {
    width: `${this.context.score}%`,
    recentQuestions: [],
    userQuestions: []
  };

  componentDidMount() {
    this.mounted = true;

    UserService.getUserData(this.context.user.id).then((data) => {
      if (!this.mounted) return;
      const userQuestions = data.questions;
      this.setState({userQuestions});
    });
    UserService.getRecentQuestions().then((data) => {
      if (!this.mounted) return;
      const recentQuestions = data.questions;
      this.setState({recentQuestions});
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <section className="dashboard-main">
        <div className="dashboard-header wrapper">
          <Link className="btn" to="/ask">
            Ask the magic 8 ball a question!
          </Link>
          <div className="questions-wrapper">
            <QuestionsFromUser />
            <QuestionsFromRecent />
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
