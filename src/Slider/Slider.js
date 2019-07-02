import React from "react";
import "./style.css";

class Slider extends React.Component {
  state = {
    value: this.props.min
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
          <h3>{this.props.title}</h3>
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
          min={this.props.min}
          max={this.props.max}
          onChange={e => this.changeValue(e.target.value)}
          value={this.state.value}
          className="slider"
        />
      </div>
    );
  }
}
export default Slider;
