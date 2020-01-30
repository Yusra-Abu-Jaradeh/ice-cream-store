import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// data
import Store from "./store";

import "./App.css";
import OrderStatus from "./components/templates/order-status/OrderStatus";
import UserFeedback from "./components/molecules/user-feedback/UserFeedback";
import OrderScoreBoard from "./components/templates/order-scoreboard/OrderScoreBoard";
import UserOrder from "./components/templates/user-order/UserOrder";

function App() {
  const getView = () => {
    // if (Store.loading) {
    //   return <Loading />;
    // } else {
    return (
      <Switch>
        <Redirect exact from="/" to="/icecream" />
        <Route path="/icecream/" component={UserFeedback} />
      </Switch>
    );
    // }
  };

  return (
    <div id="app" className="App">
      <div className="App-header"></div>
      <div className="App-body">
        {/* <OrderStatus />*/}
        {/* <UserFeedback />*/}
        <UserOrder icecream={getView()} />
        {/* <OrderScoreBoard />*/}
      </div>
    </div>
  );
}
export default withRouter(observer(App));
