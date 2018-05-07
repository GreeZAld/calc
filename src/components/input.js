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

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChange1(event) {
    this.setState({month: event.target.value});
  }

  handleChange2(event) {
    this.setState({option: event.target.value});
  }

  handleClick(event) {
    this.setState({
      summ: parseFloat(this.state.value) +
      (parseFloat(this.state.value) * (this.state.option / 12) / 100) *
      this.state.month,
    });
    event.preventDefault();
  }

  render() {
    const value = this.state.value;
    const summ = this.state.summ;
    const month = this.state.month;
    const option = this.state.option;
    return (
        <div>
          <h3>Выберите тип кредита: <select name="loan" value={option}
                                            onChange={this.handleChange2}>
            <option value="">---</option>
            <option value="3">для бедных</option>
            <option value="10">для обычных</option>
            <option value="0.5">для умных</option>
          </select></h3>
          <h3>Сумма кредита: <input type="text" id="money" value={value}
                            onChange={this.handleChange}/></h3>
          <h3>Срок кредитования: <input type="text" id="term" value={month}
                           onChange={this.handleChange1}/></h3>
          <button onClick={this.handleClick}>Рассчитать сумму к выплате</button>
          <hr/>
          <h3>Сумма к выплате: <text id="out">{summ}</text></h3>


        </div>
    );
  }
}

export default Input;