import React from "react";
import "./OrderList.css";
import Title from "../../../components/atoms/title/Title";
import OrderNumbers from "../../molecules/order-numbers/OrderNumbers";
// import Separator from "../../atoms/separator/Separator";

function OrderList(props) {
  return (
    <div className="Order-list">
      <Title name={props.name} />
      <OrderNumbers />
    </div>
  );
}
export default OrderList;
