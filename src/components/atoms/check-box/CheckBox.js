import React from "react";
import "./CheckBox.css";
import OrderDDList from "../../organisms/order-dd-list/OrderDDList";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.isChecked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      isChecked: true
    });
  }

  render() {
    console.log("--------");
    console.log(this.props);
    console.log("--------");

    return (
      <form>
        <label className="checkbox-title">
          <input
            className="box"
            // name="checkbox"
            type="checkbox"
            isChecked={this.state.isChecked}
            onChange={this.handleInputChange}
          />
          {this.props.name}
        </label>
      </form>
    );
  }
}

export default CheckBox;
