import React from "react";
import "./CheckList.css";
import CheckBox from "../../atoms/check-box/CheckBox";

function CheckList(props) {
  console.log(props.list);

  return (
    <div className="container-checks">
      <CheckBox name={props.list} />
    </div>
  );
}
export default CheckList;
