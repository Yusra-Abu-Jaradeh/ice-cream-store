import React from "react";
import { observer } from "mobx-react";

import "./OrderDDList.css";
import Title from "../../../components/atoms/title/Title";
import CheckList from "../../../components/molecules/check-list/CheckList";
function OrderDDList(props) {
  const creamates = props.store.data
    ? props.store.data.map((creamate, index) => (
        <div className="container-order-dd-list">
          <Title
            key={index + " " + creamate.title}
            name={creamate.title}
            className="Order-list-title"
          />
          <CheckList
            key={index + " " + creamate.id}
            name={creamate.ingredients}
            className="Order-dd-list"
          />
        </div>
      ))
    : null;

  //   console.log("}}}}}}}}}}");
  //   console.log(props.store.data);
  //   console.log("{{{{{{{{{{");
  return <div className="container-order-dd-list">{creamates}</div>;
}
export default observer(OrderDDList);
