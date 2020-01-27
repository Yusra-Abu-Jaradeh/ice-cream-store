import React from "react";
import "./UserOrder.css";
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";

function UserOrder() {
  return (
    <div className="user-order">
      <Title name={"Cremate your own ice cream"} className="user-order-title" />
      <OrderDDList name={"Base (required)"} />
      <OrderDDList name={"nuts"} />
      <OrderDDList name={"sauces"} />
      <OrderDDList name={"fruits"} />
      <OrderDDList name={"boxed yuminess"} />
      <Button name={"Submit order"} className={"submit"} />
    </div>
  );
}
export default UserOrder;
