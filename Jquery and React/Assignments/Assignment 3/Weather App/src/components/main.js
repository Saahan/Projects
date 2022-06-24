import React from "react";
import Search from "./search";
// import Body from "./body";
import Body from "./bodyFunction";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { weatherObj: null };

    }

    render() {
        return (
            <div className='container'>
                <h2 className='m-3'>My React Weather Application</h2>
                <Search />
                <hr />
                <Body />
            </div>
        );
    }
}