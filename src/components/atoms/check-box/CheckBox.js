import React from "react";
import "./CheckBox.css";

// function CheckBox(props) {

const CheckBox = props => {
  return (
    <form>
      <label className="checkbox-title">
        <input
          className="box"
          name="checkbox"
          type="checkbox"
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
        />
        {props.name}
      </label>
    </form>
  );
};

export default CheckBox;
