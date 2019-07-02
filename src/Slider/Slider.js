import React from "react";
import "./style.css";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <div className="slider-result">
          <h3>Amount</h3>
          <input className="result" type="text" value="1000" disabled />
        </div>
        <br />
        <input type="range" min="1" max="100" value="50" className="slider" />
      </div>
    );
  }
}
export default Slider;
