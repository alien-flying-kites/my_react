import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  fnLogin = () => {
    console.log("1231");
    const { from } = {
      from: { pathname: "/" }, // default site
    };
    console.log(from);
    return <Redirect to={from} />;
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
