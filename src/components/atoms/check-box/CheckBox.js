import React from "react";
import "./CheckBox.css";
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";
import iceCreamStore from "../../../store";
import { observer } from "mobx-react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    ///this.props.iceCreamStoreFunction(value, name)
    const target = event.target;
    const value = target.type === "checkbox" ? target.isChecked : target.value;
    const name = target.name;
    console.log("&&&&&&&&&&&&");
    console.log(this.props);
    console.log("&&&&&&&&&&&&");

    iceCreamStore.setState({
      [name]: value,
      isChecked: true
    });
  }
  // const chosenIcecream = this.props.name.map(ice=>(

  // ))
  render() {
    // console.log("--------");
    // console.log(this.props.isChecked);
    // console.log("--------");

    return (
      <form>
        <label className="checkbox-title">
          <input
            className="box"
            // name="checkbox"
            type="checkbox"
            isChecked={this.state.isChecked}
            onChange={this.state.handleInputChange}
          />
          {this.props.name}
        </label>
      </form>
    );
  }
}

// export default observer(CheckBox);
export default CheckBox;
