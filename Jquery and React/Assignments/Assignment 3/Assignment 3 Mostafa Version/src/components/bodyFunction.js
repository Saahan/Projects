import React, { useEffect, useState } from "react";
import WeatherItem from "./weather-item";
import Settings from "./settings";
import SettingsFunction from "./settingsFunction";
import Graph from "./graph";

export default function Body(props) {
    const [settings, setSettings] = useState(
        {
            'tempCelsius': true,
            'displayTemp': true,
            'displayWind': true,
            'displayIcon': true,
            'displayHumidity': true
        });
    const [weatherObj, setWeatherObj] = useState(null);

    useEffect(() => {
        // API docs https://openweathermap.org/forecast5
        const Weather_API_key = 'c4d82bdd65f56d1cb9b019f6160e8153'
        const url = 'https://api.openweathermap.org/data/2.5/forecast';
        // Read about Fetch API here: https://javascript.info/fetch
        fetch(`${url}?q=Calgary,AB,CA&appid=${Weather_API_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeatherObj(data);
                console.log('API data came mounted')
            });
    }, []);

    function handleSettingsChange(settingsUpdate) {
        //console.table(settingsUpdate)
        setSettings((state, props) => {
            // Object Destructuring (use the three dots)
            // https://dmitripavlutin.com/javascript-object-destructuring/
            const newSettings = { ...settings, ...settingsUpdate };
            //console.table(newSettings);
            return newSettings;
        });
        //console.table(settings)
    }

    return (
        <div>
            {weatherObj &&
                <h4>{weatherObj.city.name} - {weatherObj.city.country}</h4>}
            <div className='row'>
                <div className='col'>
                    <WeatherItem />
                </div>
                <div className='col'>
                    {/* <Settings settings={this.state.settings} settingsChangeHandler={this.handleSettingsChange} /> */}
                    <SettingsFunction settings={settings} settingsChangeHandler={handleSettingsChange} />
                </div>
            </div>
            <div className='row'>
                {weatherObj &&
                    <Graph data={weatherObj}
                        dayIndex={1} />}
            </div>
        </div>
    );
}
