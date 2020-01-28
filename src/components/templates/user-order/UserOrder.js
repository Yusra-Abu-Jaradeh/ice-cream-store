import React from "react";

// style
import "./UserOrder.css";

// components
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";

function UserOrder(props) {
  return (
    <div className="user-order">
      <Title name={"Cremate your own ice cream"} className="user-order-title" />
      <OrderDDList icecream={props.icecream} />
      <Button name={"Submit order"} className={"submit"} />
    </div>
  );
}
export default UserOrder;
