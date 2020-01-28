import React from "react";

// data
import icecream from "./data";

import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import OrderStatus from "./components/templates/order-status/OrderStatus";
import UserFeedback from "./components/molecules/user-feedback/UserFeedback";
import OrderScoreBoard from "./components/templates/order-scoreboard/OrderScoreBoard";
import UserOrder from "./components/templates/user-order/UserOrder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // const creamContent =
  render() {
    return (
      <div id="app" className="App">
        <div className="App-header"></div>
        <div className="App-body">
          {/* <OrderStatus /> */}
          {/* <UserFeedback /> */}
          <UserOrder icecream={icecream} />
          {/* <OrderScoreBoard /> */}
        </div>
      </div>
    );
  }
}
export default App;
