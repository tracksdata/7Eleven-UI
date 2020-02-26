import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (


            <div className="card card-body">
                <button className="btn btn-primary">
                    {this.props.value}
                </button>
                <hr />
                <span className="badge badge-warning">0</span>

            </div>



        );
    }
}

export default Action;