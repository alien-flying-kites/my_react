import React from "react";
import { Route } from "react-router-dom";

class Login extends React.Component {
  fnLogin = () => {
    this.props.history.push({
      pathname: "/home",
    });
  };
  render() {
    return (
      <>
        <div onClick={this.fnLogin}>登录</div>
      </>
    );
  }
}

export default Login;
