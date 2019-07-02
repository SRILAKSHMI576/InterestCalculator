import React from "react";
import "./style.css";

function Result() {
  return (
    <div className="box">
      <h3 className="res">Result</h3>
      <hr />
      <div className="interest">
        <h3>Interest rate: </h3>
        <h3>0.32</h3>
      </div>
      <hr />
      <div className="monthly">
        <h3>Monthly payment: </h3>
        <h3>220.0</h3>
      </div>
      <hr />
      <div className="yearly">
        <h3>Yearly payment: </h3>
        <h3>9,00,000</h3>
      </div>
    </div>
  );
}
export default Result;
