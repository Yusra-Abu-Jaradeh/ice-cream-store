import React from "react";
import "./CheckList.css";
import CheckBox from "../../atoms/check-box/CheckBox";

function CheckList(props) {
  return (
    <div className="container-checks">
      <CheckBox name="Vanilla" />
      <CheckBox name="Chocolate" />
      <CheckBox name="Coffee" />
      <CheckBox name="Mango" />
      <CheckBox name="Strawberry" />
      <CheckBox name="Lemon" />
    </div>
  );
}
export default CheckList;
