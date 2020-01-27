import React from "react";
import "./Header.css";
import Title from "../../../components/atoms/title/Title";
import SubTitle from "../../atoms/sub-title/SubTitle";

function Header() {
  return (
    <div className="Order-row">
      <Title name="# " className="Order-row-title" />
      <SubTitle name={"order"} className="Order-row-title" />
      <SubTitle name={"order"} className="Order-row-title" />
    </div>
  );
}
export default Header;
