import React from "react";
import Slider from "../Slider/Slider";
import Result from "../Result/Result";
import "./style.css";
import { async } from "q";

class InterestCalculator extends React.Component {
  state = {
    loan: 6,
    amount: 500,
    interestRate: 0,
    monthlyPayment: 0
  };
  componentDidMount = () => {
    this.getAmount();
  };
  getAmount = async () => {
    const response = await fetch(
      "https://ftl-frontend-test.herokuapp.com/interest?amount=2000&numMonths=12"
    );
    const data = await response.json();
    this.setState({
      interestRate: data.interestRate,
      monthlyPayment: data.monthlyPayment.amount
    });
  };
  render() {
    return (
      <div className="interest-calculator">
        <div className="slider-sec">
          <Slider title="Amount" min="500" max="5000" />
          <Slider title="Loan duration" min="6" max="24" />
        </div>
        <Result
          interestRate={this.state.interestRate}
          monthlyPayment={this.state.monthlyPayment}
        />
      </div>
    );
  }
}

export default InterestCalculator;
