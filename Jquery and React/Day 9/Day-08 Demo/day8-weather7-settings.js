class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleTempUnitChange = this.handleTempUnitChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleTempUnitChange(value) {
        this.props.settingsChangeHandler({ tempCelsius: value })
    }
    handleChange(event) {
        // console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.checked;
        this.props.settingsChangeHandler({ [name]: value })
    }

    render() {
        const celsius = this.props.settings['tempCelsius'];
        // console.log(celsius)
        return (
            <div className="card">
                <div className="card-body">
                    <h4>Settings</h4>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tempCelsius" id='tempUnit1'
                            checked={celsius} onChange={() => this.handleTempUnitChange(true)} />
                        <label className="form-check-label" htmlFor="tempUnit1">
                            Celsius
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tempCelsius" id='tempUnit2'
                            checked={!celsius} onChange={() => this.handleTempUnitChange(false)} />
                        <label className="form-check-label" htmlFor="tempUnit2">
                            Fahrenheit
                        </label>
                    </div>

                    <CheckBox name='displayTemp' checked={this.props.settings['displayTemp']}
                        text='Temperature' handleChange={this.handleChange} />

                    <CheckBox name='displayWind' checked={this.props.settings['displayWind']}
                        text='Wind Speed' handleChange={this.handleChange} />
                </div>
            </div>
        );
    }
}


function CheckBox(props) {
    return (
        <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id={props.name}
                checked={props.checked} onChange={props.handleChange} name={props.name}
            />
            <label className="form-check-label" htmlFor={props.name}>
                {props.text}
            </label>
        </div>
    );
}
