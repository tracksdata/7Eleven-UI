import React, { Component } from 'react';

class Greet extends Component {

    constructor(props) {
        super(props);
        console.log("Greet::constructor");
    }

    render() {
        console.log("Greet::render");

        return (
            <div>
<hr/>
                <div className="card">
                    <div className="card-title bg-primary">
                        Greet Component
                    </div>

                    <div className="card-body">
                        <div className="text-center">
                          
                            <h1>  {this.props.message} - {this.props.countDown}</h1>
                            <hr/>
                            <span className="badge badge-warning">
                                {new Date().toLocaleTimeString()}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        );
    }

    componentDidMount() {
        console.log("Greet::componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greet::componentDidUpdate");
        console.log(this.props);
        console.log(prevProps) ; 
     // setInterval(()=>{
       //     this.forceUpdate();
       //},1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Greet::shouldComponentUpdate");
        return this.props.message!==nextProps.message; // if true , then only Greet components render method gets called
    }


}

export default Greet;