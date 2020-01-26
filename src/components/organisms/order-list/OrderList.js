import React from "react";
import "./OrderList.css";
import Title from "../../atoms/title/Title.js";
import OrderNumbers from "../../molecules/order-numbers/OrderNumbers";
// import Separator from "../../atoms/separator/Separator";

function OrderList(props) {
  return (
    <div className="Order-list">
      <Title name={"ready for pickup"} />
      <OrderNumbers />
    </div>
  );
}
export default OrderList;
