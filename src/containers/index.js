import React, { Suspense, lazy } from "react";
// import { connect } from "react-redux";
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Loading from "../components/Loading";

// use which mode router
const Router = process.env.router === "hash" ? HashRouter : BrowserRouter;
console.log("---", Router);
// lazy load
const Login = lazy(() => import(/* webpackChunkName: "login" */ "./Login")); // 登录
const MainPage = lazy(() => import(/* webpackChunkName: "mainPage" */ "./Main")); // 主框架
class App extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <Router basename={`${process.env.publicPath}`}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/login`} component={Login} />
            <PrivateRoute path={`/`} component={MainPage} {...props} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

class PrivateRoute extends React.Component {
  render() {
    let { component: Component, token, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )}
      />
    );
  }
}

export default App;
