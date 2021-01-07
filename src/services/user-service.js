import config from '../config';
import TokenService from './token-service';

const UserService = {
  getRecentQuestions() {
    return fetch(`${config.API_ENDPOINT}/ask`, {
      headers: { Authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAnswers() {
    return fetch(`${config.API_ENDPOINT}/ask/answers`, {
      headers: { Authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUserData(user_id) {
    return fetch(`${config.API_ENDPOINT}/ask/user/${user_id}`, {
      headers: { Authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  askQuestion(user_id,question) {
    return fetch(`${config.API_ENDPOINT}/ask/user/${user_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ user_id: user_id, question: question }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default UserService;
