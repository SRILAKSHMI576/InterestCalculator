import React from "react";
import "./style.css";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <h3>Amount</h3>
        <input type="text" value="1000" disabled />
        <br />
        <br />
        <input type="range" min="1" max="100" value="50" className="slider" />
      </div>
    );
  }
}
export default Slider;
