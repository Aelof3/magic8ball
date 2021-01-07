import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="registration">
        <p className="reg-p">
          Create an account to ask the magic 8 ball questions!
        </p>
        <div className="wrapper">
          <h2>Sign up</h2>

          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute;
