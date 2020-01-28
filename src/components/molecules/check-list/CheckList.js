import React from "react";
import "./CheckList.css";
import CheckBox from "../../atoms/check-box/CheckBox";

function CheckList(props) {
  //   console.log("%%%%%%%%%%");
  //   console.log(props.name);
  //   console.log("%%%%%%%%%%");
  const flavors = props.name.map((flavor, index) => (
    <CheckBox key={index + " "} name={flavor} />
  ));
  return <div className="container-checks">{flavors}</div>;
}
export default CheckList;
