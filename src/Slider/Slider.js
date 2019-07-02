import React from "react";
import "./style.css";

class Slider extends React.Component {
  state = {
    value: 70
  };
  changeValue = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <div>
        <div className="slider-result">
          <h3>Amount</h3>
          <input
            className="result"
            type="text"
            value={this.state.value}
            disabled
          />
        </div>
        <br />
        <input
          type="range"
          min="1"
          max="100"
          onChange={e => this.changeValue(e.target.value)}
          value={this.state.value}
          className="slider"
        />
      </div>
    );
  }
}
export default Slider;
