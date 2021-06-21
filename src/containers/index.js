import React, { Suspense, lazy } from "react";
// import { connect } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Loading from "../components/Loading";

// use which mode router
// lazy load
const Login = lazy(() => import(/* webpackChunkName: "" */ "./Login")); // 登录
const MainPage = lazy(() => import(/* webpackChunkName: "mainPage" */ "./Main")); // 主框架
class App extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/login`} component={Login} />
            <Route path={`/home`} component={MainPage} {...props} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

// class PrivateRoute extends React.Component {
//   render() {
//     let { component: Component, token, ...rest } = this.props;
//     return (
//       <Route
//         {...rest}
//         render={(props) => (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location },
//             }}
//           />
//         )}
//       />
//     );
//   }
// }

export default App;
