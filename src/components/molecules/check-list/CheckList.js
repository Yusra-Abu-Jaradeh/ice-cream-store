import React from "react";
import "./CheckList.css";
import CheckBox from "../../atoms/check-box/CheckBox";

function CheckList(props) {
  console.log("%%%%%%%%%%");
  console.log(props);
  console.log("%%%%%%%%%%");
  const flavors = props.icecream.map((flavor, index) => (
    <CheckBox key={flavor.title + index} flavor={flavor} />
  ));
  return <div className="container-checks">{flavors}</div>;
}
export default CheckList;
