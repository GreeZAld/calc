import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      summ: '',
      month: '',
      option: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  calculateSum = () => {
    this.setState({
      summ: parseFloat(this.state.value) +
      (parseFloat(this.state.value) * (this.state.option / 12) / 100) *
      this.state.month,
    });
  };

  render() {
    const value = this.state.value;
    const summ = this.state.summ;
    const month = this.state.month;
    const option = this.state.option;
    return (
        <div>
          <h3>Выберите тип кредита: <select name="option" value={option}
                                            onChange={this.handleInputChange}>
            <option value="">---</option>
            <option value="3">для бедных</option>
            <option value="10">для обычных</option>
            <option value="0.5">для умных</option>
          </select></h3>
          <h3>Сумма кредита: <input type="number" id="money" name="value" value={value}
                                    onChange={this.handleInputChange}/> р.</h3>
          <h3>Срок кредитования: <input type="number" id="term" name="month" value={month}
                                        onChange={this.handleInputChange}
                                        onKeyUp={this.calculateSum}/> мес.</h3>
          <hr/>
          <h3>Сумма к выплате: <text id="out">{summ}</text> р.</h3>


        </div>
    );
  }
}

export default Input;