import React from "react";
import "./App.css";
import OrderStatus from "./components/templates/order-status/OrderStatus";
import UserFeedback from "./components/molecules/user-feedback/UserFeedback";
// import OrderDDList from "./components/organisms/OrderDDList";
import Button from "./components/atoms/button/Button";
import OrderRow from "./components/organisms/order-row/OrderRow";
import OrderScoreBoard from "./components/templates/order-scoreboard/OrderScoreBoard";

function App() {
  return (
    <div id="app" className="App">
      <div className="App-header"></div>
      <div className="App-body">
        <OrderStatus />
        {/* <UserFeedback /> */}
        {/* <OrderDDList /> */}
        {/* <OrderScoreBoard /> */}
      </div>
    </div>
  );
}
export default App;
