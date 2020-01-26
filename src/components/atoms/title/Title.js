import React from "react";
import "./Title.css";

function Title(props) {
  return <div className={"App-title " + props.className}>{props.name}</div>;
}
export default Title;
