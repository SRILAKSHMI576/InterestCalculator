import React from "react";
import Slider from "../Slider/Slider";
import Result from "../Result/Result";
import "./style.css";

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
  changeAmount = value => {
    this.setState({
      amount: value
    });
    this.getAmount();
  };
  changeLoanDuration = value => {
    this.setState({
      loan: value
    });
    this.getAmount();
  };
  getAmount = async () => {
    const response = await fetch(
      "https://ftl-frontend-test.herokuapp.com/interest?amount=" +
        this.state.amount +
        "&numMonths=" +
        this.state.loan
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
          <Slider
            onChange={this.changeAmount}
            title="Amount"
            min="500"
            max="5000"
          />
          <Slider
            onChange={this.changeLoanDuration}
            title="Loan duration"
            min="6"
            max="24"
          />
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
