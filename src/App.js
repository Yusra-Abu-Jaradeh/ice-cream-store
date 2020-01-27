import React from "react";
import "./App.css";
import OrderStatus from "./components/templates/order-status/OrderStatus";
import UserFeedback from "./components/molecules/user-feedback/UserFeedback";
import OrderScoreBoard from "./components/templates/order-scoreboard/OrderScoreBoard";
import UserOrder from "./components/templates/user-order/UserOrder";

function App() {
  return (
    <div id="app" className="App">
      <div className="App-header"></div>
      <div className="App-body">
        {/* <OrderStatus /> */}
        {/* <UserFeedback /> */}
        <UserOrder />
        {/* <OrderScoreBoard /> */}
      </div>
    </div>
  );
}
export default App;
