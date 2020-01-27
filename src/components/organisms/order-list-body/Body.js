import React from "react";
import "./Body.css";
import Title from "../../../components/atoms/title/Title";
import SubTitle from "../../atoms/sub-title/SubTitle";
import Button from "../../atoms/button/Button";

function Body() {
  return (
    <div className="Order-row">
      <Title name="# " className="Order-row-title" />
      <SubTitle name={"order"} className="Order-row-title" />
      <Button />
    </div>
  );
}
export default Body;
