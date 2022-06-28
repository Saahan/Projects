import React from "react";
import Search from "./search";
import Body from "./body";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataSearchtoMain : "", weatherObj: ""}

    this.dataSearchtoMain = this.dataSearchtoMain.bind(this);
    
  }

  dataSearchtoMain = (userInput) => {

    this.setState({ dataSearchtoMain: userInput });
    console.log(userInput);

    const Weather_API_key = "667a02c0339d273699a620c39b57e886";
    const url = "https://api.openweathermap.org/data/2.5/forecast";
    
    fetch(`${url}?q=${userInput}&appid=${Weather_API_key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ weatherObj: data });
        console.log("API data came mounted");
      });
      
      
    };

       

  render() {
    return (
      <div>
        <Search dataSearchtoMain={this.dataSearchtoMain} />
        <hr />
        {this.state.weatherObj.city ?
        (<Body weatherObj={this.state.weatherObj} showTempGraph = {true} showWindGraph = {true} showFeelsGraph={true} />) : (<p>{this.state.weatherObj.message}</p>)}
      </div>
    );
  }
}
