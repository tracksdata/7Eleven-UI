import React, { Component } from 'react';

class Greet extends Component {
    constructor(props){
        super(props);
        console.log("Greet::constructor");
    }
    render() {
        console.log("Greet::render");
        const {message}=this.props;
        return (
            <div>
                <div className="alert alert-info">
                    <div>{message}</div>
                    <hr/>
                    {new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'})}
                </div>
                
            </div>
        );
    }
}

export default Greet;