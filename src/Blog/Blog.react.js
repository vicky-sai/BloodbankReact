import React from 'react';
import BlogChild from '../BlogChild/BlogChild.react';


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clapCount:0
        }
        
    }
    increment = () => {
        //console.log('Increment called');
        this.setState({clapCount : this.state.clapCount+1});
    }
    decrement = () => {
        this.setState({clapCount : this.state.clapCount-1});
    }
    render() {
        //console.log('Render called');
        return (
            <div >
                <p>
                    <button className="fa fa-thumbs-up" onClick={this.increment}></button><br/>
                    <span>Likes : </span>{this.state.clapCount}                                 
                </p>
                <BlogChild clapCount={this.decrement}></BlogChild>   
            </div>
        );
    }
}

export default Blog;