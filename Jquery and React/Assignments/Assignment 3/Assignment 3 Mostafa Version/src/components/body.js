import React from "react";
import WeatherItem from "./weather-item";
import Settings from "./settings";
import SettingsFunction from "./settingsFunction";
import Graph from "./graph";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
                'tempCelsius': true,
                'displayTemp': true,
                'displayWind': true,
                'displayIcon': true,
                'displayHumidity': true
            }
        };
        this.handleSettingsChange = this.handleSettingsChange.bind(this)
    }

    componentDidMount() {
        // API docs https://openweathermap.org/forecast5
        const Weather_API_key = 'c4d82bdd65f56d1cb9b019f6160e8153'
        const url = 'https://api.openweathermap.org/data/2.5/forecast';
        // Read about Fetch API here: https://javascript.info/fetch
        fetch(`${url}?q=Toronto,ON,CA&appid=${Weather_API_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ weatherObj: data });
                console.log('API data came mounted')
            });

    }

    handleSettingsChange(settingsUpdate) {
        // console.log(settingsUpdate)
        this.setState((state, props) => {
            const newSettings = { ...state['settings'], ...settingsUpdate };
            return {
                ...state, settings: newSettings
            }
        });
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.weatherObj &&
                    <h4>{this.state.weatherObj.city.name} - {this.state.weatherObj.city.country}</h4>}
                <div className='row'>
                    <div className='col'>
                        <WeatherItem />
                    </div>
                    <div className='col'>
                        {/* <Settings settings={this.state.settings} settingsChangeHandler={this.handleSettingsChange} /> */}
                        <SettingsFunction settings={this.state.settings} settingsChangeHandler={this.handleSettingsChange} />
                    </div>
                </div>
                <div className='row'>
                    {this.state.weatherObj &&
                        <Graph data={this.state.weatherObj}
                            dayIndex={1} />}
                </div>
            </div>
        );
    }
}
