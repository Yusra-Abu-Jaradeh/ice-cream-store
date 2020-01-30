import React from "react";
import "./CheckList.css";
import CheckBox from "../../atoms/check-box/CheckBox";
import { observer } from "mobx-react";
import iceCreamStore from "../../../store";

function CheckList(props) {
  console.log("%%%%%%%%%%");
  console.log(props);
  console.log("%%%%%%%%%%");
  const flavors = props.name.map((flavor, index) => (
    <CheckBox key={index + " "} name={flavor} />
  ));
  return <div className="container-checks">{flavors}</div>;
}
export default observer(CheckList);
