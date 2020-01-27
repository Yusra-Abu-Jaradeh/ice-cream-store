import React from "react";
import "./OrderDDList.css";
import Title from "../../../components/atoms/title/Title";
import CheckList from "../../../components/molecules/check-list/CheckList";
import CheckBox from "../../atoms/check-box/CheckBox";

function OrderDDList(props) {
  const base = [
    "Vanilla ",
    "Chocolate ",
    "Coffee ",
    "Mango ",
    "Strawberry ",
    "Lemon "
  ];
  return (
    <div className="Order-dd-list">
      <Title className="Order-list-title" name={props.name} />
      <CheckList list={[base]} />
    </div>
  );
}
export default OrderDDList;
