import React from "react";

// style
import "./UserOrder.css";

// components
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";

class UserOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("this is:", this);
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  };
  render() {
    console.log(this.isClicked);

    var msg;
    if (this.isClicked) {
      msg = "clicked";
    } else {
      msg = "unclicked";
    }
    console.log(msg);

    return (
      <div className="user-order">
        <Title
          name={"Cremate your own ice cream"}
          className="user-order-title"
        />
        <OrderDDList icecream={this.props.icecream} />
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
export default UserOrder;
