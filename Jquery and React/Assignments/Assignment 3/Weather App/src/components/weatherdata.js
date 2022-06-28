import React from "react";

export default class WeatherData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index1: false}
   
    
  }

  handleClick1 = () => {this.setState({index1: !this.state.index1});}
  handleClick2 = () => {this.setState({index2: !this.state.index2});}
  handleClick3 = () => {this.setState({index3: !this.state.index3});}
  handleClick4 = () => {this.setState({index4: !this.state.index4});}
  handleClick5 = () => {this.setState({index5: !this.state.index5});}


    render() {
      
      let temp, feelslike, temp2, feelslike2, temp3, feelslike3, temp4, feelslike4, temp5, feelslike5, unit
      
      let dt=new Date((this.props.weatherObj.list[0].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt2=new Date((this.props.weatherObj.list[1].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt3=new Date((this.props.weatherObj.list[2].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt4=new Date((this.props.weatherObj.list[3].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt5=new Date((this.props.weatherObj.list[4].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});


      if (this.props.tempFlag == true)

      {
        temp = parseInt(this.props.weatherObj.list[0].main.temp)
        temp2 = parseInt(this.props.weatherObj.list[1].main.temp)
        temp3 = parseInt(this.props.weatherObj.list[2].main.temp)
        temp4 = parseInt(this.props.weatherObj.list[3].main.temp)
        temp5 = parseInt(this.props.weatherObj.list[4].main.temp)
        feelslike = parseInt(this.props.weatherObj.list[0].main.feels_like)
        feelslike2 = parseInt(this.props.weatherObj.list[1].main.feels_like)
        feelslike3 = parseInt(this.props.weatherObj.list[2].main.feels_like)
        feelslike4 = parseInt(this.props.weatherObj.list[3].main.feels_like)
        feelslike5 = parseInt(this.props.weatherObj.list[4].main.feels_like)
        unit = "C";
      }
      
      else 
      {
        temp = parseInt((this.props.weatherObj.list[0].main.temp)*(9/5)) + 32;
        temp2 = parseInt((this.props.weatherObj.list[1].main.temp)*(9/5)) + 32;
        temp3 = parseInt((this.props.weatherObj.list[2].main.temp)*(9/5)) + 32;
        temp4 = parseInt((this.props.weatherObj.list[3].main.temp)*(9/5)) + 32;
        temp5 = parseInt((this.props.weatherObj.list[4].main.temp)*(9/5)) + 32;
        feelslike = parseInt((this.props.weatherObj.list[0].main.feels_like)*(9/5)) +32;
        feelslike2 = parseInt((this.props.weatherObj.list[1].main.feels_like)*(9/5)) +32;
        feelslike3 = parseInt((this.props.weatherObj.list[2].main.feels_like)*(9/5)) +32;
        feelslike4 = parseInt((this.props.weatherObj.list[3].main.feels_like)*(9/5)) +32;
        feelslike5 = parseInt((this.props.weatherObj.list[4].main.feels_like)*(9/5)) +32;
        unit = "F";
      }

      return (
        
        <div>
          <h1>{this.props.weatherObj.city.name}</h1>
          <ul>
            <li onClick={this.handleClick1}>{dt}:  {temp + unit}, {this.props.weatherObj.list[0].weather[0].description} 
            {this.state.index1 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[0].main.humidity}% <br/>Feels-like : {feelslike + unit}
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[0].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick2}>{dt2}:  {temp2 + unit}, {this.props.weatherObj.list[1].weather[0].description}
            {this.state.index2 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[1].main.humidity}% <br/>Feels-like : {feelslike2 + unit}
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[1].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick3}>{dt3}:  {temp3 + unit}, {this.props.weatherObj.list[2].weather[0].description}
            {this.state.index3 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[2].main.humidity}% <br/>Feels-like : {feelslike3 + unit} 
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[2].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick4}>{dt4}:  {temp4 + unit}, {this.props.weatherObj.list[3].weather[0].description}
            {this.state.index4 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[3].main.humidity}% <br/>Feels-like : {feelslike4 + unit} 
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[3].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick5}>{dt5}:  {temp5 + unit}, {this.props.weatherObj.list[4].weather[0].description}
            {this.state.index5 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[4].main.humidity}% <br/>Feels-like : {feelslike5 + unit}  
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[4].wind.speed)} Km/Hr </span>}</li>


          </ul>
        </div>
      )
    }
  }