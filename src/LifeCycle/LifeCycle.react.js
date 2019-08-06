import React from 'react';
import ReactDOM from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Ramesh',
            city:'Chennai'
        }
        console.log("constructor *****");
    }

    componentDidMount() {
        console.log("Component Did mount called");
        //const elemnentToAdd = '<h1>Added by Method</h1>';
        
        const element = ReactDOM.findDOMNode(this);

        const child = element.firstChild;
        ReactDOM.render("Ramesh",child);
        //console.log(element);
    }

    change = () => {
        console.log("Change fired");
        this.setState({name:this.state.name+'ji', city: "Coimbatore"});
    }
    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        console.log("Component Did update called");
    }
    render() {
        console.log("Render method called");
        return (
            <div >
                <h2>{this.state.name}</h2>
                <ShowCity city={this.state.city}></ShowCity>
                <button onClick={this.change}>Update</button>
                
            </div>
        );
    }
}

export default LifeCycle;