import React from "react";
import "./UserFeedback.css";
import Title from "../../../components/atoms/title/Title";
import SubTitle from "../../../components/atoms/sub-title/SubTitle";

function UserFeedback(props) {
  return (
    <div className="container-feedback">
      <Title name={"Thank you for your order"} className={"title-feedback"} />
      <SubTitle
        className={"subTitle-feedback"}
        // name={"Order #" + props.orderNumber}
        name={"Order #       "}
      />
    </div>
  );
}
export default UserFeedback;
