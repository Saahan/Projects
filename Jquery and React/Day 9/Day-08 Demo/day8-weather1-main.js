class Main extends React.Component {
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