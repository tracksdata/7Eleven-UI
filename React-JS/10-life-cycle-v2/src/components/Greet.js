import React, { Component } from 'react';

class Greet extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-success">Greet Component</div>
                <div className="card-body text-center">
                    <h1>{this.props.message}</h1>
                </div>
            </div>
        );
    }
}

export default Greet;