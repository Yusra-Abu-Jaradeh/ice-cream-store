import React from "react";
import "./OrderDDList.css";
import Title from "../../../components/atoms/title/Title";
import CheckList from "../../../components/molecules/check-list/CheckList";

function OrderDDList(props) {
  const headers = props.icecream.map((header, index) => (
    <Title key={index + " " + console.log(header.title)} header={header} />
  ));
  const creamates = props.icecream.map((creamate, index) => (
    <CheckList key={index + " " + creamate.title} creamate={creamate} />
  ));
  //   console.log("}}}}}}}}}}");
  //   console.log(headers);
  //   console.log("{{{{{{{{{{");
  return (
    <div className="Order-dd-list">
      <Title className="Order-list-title" icecream={headers}>
        {console.log(headers)}
        {headers}
      </Title>
    </div>
  );
}
export default OrderDDList;
{
  /* <CheckList key={index + creamate.ingredients} creamate={creamate}>
{creamate.ingredients}
</CheckList> */
}
