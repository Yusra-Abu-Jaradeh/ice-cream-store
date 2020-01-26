import React from "react";
import "./SubTitle.css";

function SubTitle(props) {
  return <div className={"App-subTitle " + props.className}>{props.name}</div>;
}
export default SubTitle;
