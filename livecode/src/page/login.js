import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import LoginForm from "../component/loginForm";
import { connect } from "unistore/react";
import { actions } from "../component/store";

const hostLogin = "https://api-todofancy.herokuapp.com/api/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: { username: "", password: "" }
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
  }

  componentDidMount() {
    this.renderRedirect();
  }

  handleLoginUsernameChange(event) {
    this.setState({ login: { username: event.target.value } });
  }

  handleLoginPasswordChange(event) {
    this.setState({ login: { password: event.target.value } });
  }

  handleSignOut() {
    this.props.setIsLogin = "";
  }

  handleLoginSubmit(event) {
    let data = {
      name: this.state.login.username,
      password: this.state.login.password
    };
    this.postLogin(data);
    event.preventDefault();
  }

  postLogin = data => {
    const self = this;
    axios.post(hostLogin, data).then(function(response) {
      console.log(response);
      // localStorage.setItem("nama", response.data.nama);
      // localStorage.setItem("email", response.data.email);
      // localStorage.setItem("isLogin", 1);
      self.props.setUserName(response.data.nama);
      self.props.setEmail(response.data.email);
      self.props.setIsLogin(response.data.isLogin);
      self.props.history.push("/");
    });
  };

  renderRedirect = () => {
    //   // console.log(JSON.parse(localStorage.getItem("isLogin")));
    //   // if (JSON.parse(localStorage.getItem("isLogin")) == 1) {
    if (this.props.isLogin == true) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <LoginForm
          onPasswordChange={this.handleLoginPasswordChange}
          onUsernameChange={this.handleLoginUsernameChange}
          onSubmit={this.handleLoginSubmit}
          data={this.state.login}
        />
        {/* <HeaderLogin onClick={this.handleSignOut} /> */}
      </div>
    );
  }
}

export default connect(
  "username, email, isLogin",
  actions
)(Login);
