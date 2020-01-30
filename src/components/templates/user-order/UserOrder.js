import React from "react";
import iceCreamStore from "../../../store.js";
import { observer } from "mobx-react";

// style
import "./UserOrder.css";

// components
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";

class UserOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("handleClick=> this is:", this);
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  };
  render() {
    // console.log("************");
    // console.log(this.state.isClicked);

    return (
      <div className="user-order">
        <Title
          name={"Cremate your own ice cream"}
          className="user-order-title"
        />
        <OrderDDList store={iceCreamStore} />
        <Button
          name={"Submit order"}
          className={"submit"}
          onClick={this.handleClick}
          // onClick={() => props.selectionFunction(author)}
        />
      </div>
    );
  }
}
export default observer(UserOrder);
