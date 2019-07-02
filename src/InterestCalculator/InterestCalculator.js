import React from "react";
import Slider from "../Slider/Slider";
import Result from "../Result/Result";

class InterestCalculator extends React.Component {
  render() {
    return (
      <div>
        <Slider title="Amount" min="500" max="5000" />
        <Slider title="Loan duration" min="6" max="24" />
        <Result />
      </div>
    );
  }
}

export default InterestCalculator;
