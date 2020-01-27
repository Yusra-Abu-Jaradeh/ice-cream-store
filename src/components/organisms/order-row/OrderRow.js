import React from "react";
import "./OrderRow.css";
import Title from "../../../components/atoms/title/Title";
import SubTitle from "../../atoms/sub-title/SubTitle";
import Button from "../../atoms/button/Button";
import Header from "../../organisms/order-list-header/Header";
import Body from "../../organisms/order-list-body/Body";

function OrderRow() {
  return (
    <div className="Order-row">
      <table className="table" align="center">
        <tr>
          <th>#</th>
          <th>Order</th>
          <th>Order</th>
        </tr>
        <tr>
          <td>Order-number</td>
          <td className="row-description">Order-description</td>
          <Button name="ready" className={"order-row-button"} />
        </tr>
      </table>
    </div>
  );
}
export default OrderRow;
