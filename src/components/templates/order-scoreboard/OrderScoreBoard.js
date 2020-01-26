import React from "react";
import "./OrderScoreBoard.css";
import OrderRow from "../../../components/organisms/order-row/OrderRow";
import Title from "../../../components/atoms/title/Title";

function OrderScoreBoard() {
  return (
    <div className="scoreboard">
      <Title className="scoreboard-title" name={"Orders"} />
      <OrderRow className="scoreboard-table" />
    </div>
  );
}
export default OrderScoreBoard;
