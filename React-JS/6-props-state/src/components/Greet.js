import React, { Component } from 'react';

class Greet extends Component {
    
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-title bg-primary">
                            Greet Component 
                    </div>

                    <div className="card-body">
                        <div className="text-center">
                        <h1>  {this.props.pMsg}</h1>
                        </div>
                             
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Greet;