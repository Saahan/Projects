import React from "react";

export default class Select extends React.Component {
    constructor(props) {
        super(props);
       

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // Get the input from the user and save it in a state variable
        // event.target is the input element
        this.setState({ userInput: event.target.value });
    }

    handleSubmit(event) {
        console.log('The form submitted with input: ' + this.state.userInput);
        this.setState((state, props) => { return { selectedValue: state.userInput } })
        event.preventDefault(); // Prevent default form submission behavior 
    }

    render() {
        // const countries = [
        //     { country: "ca", name: 'Canada' },
        //     { country: 'us', name: 'USA' },
        //     { country: "eg", name: 'Egypt' }];
        const cities = this.props.data
        return (
            <div>
                <form onSubmit={this.handleSubmit} className=' row g-3'>
                    <label className="col-sm col-form-label">
                        Choose your country:</label>
                    <select value={this.state.userInput} onChange={this.handleChange}
                        className='form-select col-md'>
                        {cities.map((city, index) =>
                            <option key={city.country + index} value={`${city.name} , ${city.country}`}>
                                {city.name}, {city.country}</option>
                        )}
                    </select>
                    <div className="col-sm col-form-label">
                        <input type="submit" value="Submit" className="btn btn-primary mb-3" />
                    </div>
                </form>

                {
                    this.state.selectedValue &&
                    <div> You selected {this.state.selectedValue} </div>
                }
            </div>
        );
    }
}
