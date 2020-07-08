import React, { Component } from "react";
import { InputField } from "./InputField";
import { Select } from "./Select";

class Calculator extends Component {
  state = {
    option: 3,
    totalAmount: 0
  };
  handleInput = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  calculateSum = () => {
    const { amount, option, month } = this.state;
    let totalAmount =
      parseFloat(amount) + ((amount * (option / 12)) / 100) * month;
    const fixedAmount = totalAmount.toFixed(2);
    this.setState({ totalAmount: fixedAmount });
  };

  render() {
    const { totalAmount, option } = this.state;
    return (
      <div>
        <h3>Выберите тип кредита:</h3>
        <span>Ставка:</span>
        <Select onChange={this.handleInput} value={option} />

        <span>Сумма:</span>
        <InputField
          onChange={this.handleInput}
          onKeyUp={this.calculateSum}
          name="amount"
        />
        <span>мес.:</span>
        <InputField
          onChange={this.handleInput}
          name="month"
          onKeyUp={this.calculateSum}
        />
        <hr />
        <h3>
          Сумма к выплате:{" "}
          <span id="out">{isNaN(totalAmount) ? null : totalAmount}</span> р.
        </h3>
      </div>
    );
  }
}

export default Calculator;
