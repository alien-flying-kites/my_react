import { Component } from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import { hot } from "react-hot-loader/root";
import App from "./containers";
const store = createStore();

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
        {/* <div style={{ position: "fixed", bottom: 0, color: "red" }} onClick={() => window.location.reload()}>刷新</div> */}
      </Provider>
    );
  }
}

export default hot(Index);
