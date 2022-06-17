class WeatherItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const dt = data && (new Date(data.dt * 1000)).toLocaleTimeString();
        //console.log((data.dt - 21600) % (86400), dt)
        return (
            <div>
                {data &&
                    <li >
                        {dt} -
                        Temperature {data.main.temp}C, Feels Like {data.main.feels_like}C -
                        Wind Speed {data.wind.speed}
                    </li>
                }
            </div>
        );
    }
}
