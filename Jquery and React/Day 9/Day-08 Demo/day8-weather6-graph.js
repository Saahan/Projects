class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // See API documentation here: https://openweathermap.org/forecast5
        const data = this.props.data;
        const temp_min = [];
        const temp_max = [];
        const temp_time = [];
        // The required day index to display in the graph 
        const startIndex = this.props.dayIndex * 8
        const endIndex = (this.props.dayIndex + 1) * 8 - 1;
        data.list.forEach((sample, index) => {
            if (index < startIndex || index > endIndex) return;
            const d = new Date(sample.dt * 1000);
            //console.log(d)
            temp_min.push(sample.main.temp_min);
            temp_max.push(sample.main.temp_max);
            temp_time.push(d.toLocaleTimeString());
        });
        //console.log('Graph mounted')
        new Chart("myChart", {
            type: "line",
            data: {
                labels: temp_time,
                datasets: [{
                    data: temp_min,
                    borderColor: "blue",
                    fill: false
                }, {
                    data: temp_max,
                    borderColor: "red",
                    fill: false
                }]
            },
            options: {
                legend: { display: false }
            }
        });

    }
    render() {
        return (
            <div>
                <h4>Hourly Temperature data</h4>
                <canvas id="myChart" style={{ width: '100%', maxWidth: 600 }}></canvas>
            </div >
        );
    }
}
