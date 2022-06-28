import React from "react";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.showTempLine,
      show2: this.props.showWindLine,
      show3: this.props.showFeelsLine
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange = (index) => {
    this.setState({ show: index.target.checked });
    this.props.showTempGraph(this.state.show);
  };

  handleChange2 = (index) => {
    this.setState({ show2: index.target.checked });
    this.props.showWindGraph(this.state.show2);
  };

  handleChange3 = (index) => {
    this.setState({ show3: index.target.checked });
    this.props.showFeelsGraph(this.state.show3);
  };

  switchTemperatureScale = (index) => {this.setState({tempFlag: !index}); 
  //console.log(this.state.tempFlag); 
  this.props.sendTempFlag(this.state.tempFlag)}
  
  render() {
    return (
      <div>
        <div>
          <h4>Settings</h4>
          <div>
            <input
              type="radio"
              name="tempCelsius"
              id="tempUnit1"
              checked={this.props.default}
              onChange={() => this.switchTemperatureScale(true)}
            />
            <label htmlFor="Celsius">Celsius</label>
          </div>
          <div>
            <input
              type="radio"
              name="tempCelsius"
              id="tempUnit2"
              onChange={() => this.switchTemperatureScale(false)}
            />
            <label htmlFor="Fahrenheit">Fahrenheit</label>
          </div>
          <input
            className="form-check-input"
            type="checkbox"
            id="Temperature"
            checked={this.state.show}
            onChange={this.handleChange}
            name="Temperature"
          />
          <label className="form-check-label" htmlFor="Temperature">
            Temperature
          </label>

          <input
            className="form-check-input"
            type="checkbox"
            id="Wind-Speed"
            checked={this.state.show2}
            onChange={this.handleChange2}
            name="Wind-Speed"
          />
          <label className="form-check-label" htmlFor="Wind-Speed">
            Wind-Speed
          </label>

          <input
            className="form-check-input"
            type="checkbox"
            id="Feels-Like"
            checked={this.state.show3}
            onChange={this.handleChange3}
            name="Feels-Like"
          />
          <label className="form-check-label" htmlFor="Feels-Like">
            Feels-Like
          </label>
        </div>
      </div>
    );
  }
}
