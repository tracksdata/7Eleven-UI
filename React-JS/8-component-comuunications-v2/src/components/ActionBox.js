import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {

    renderActions() {
        let numbers = [1, 2, 3, -4, 5, 6, -7, 8, -9, 10]
        return numbers.map((number, index) => {
            return (
                <Action btnLable={number} key={index} />
            );
        })


    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-header">Action Box</div>
                <div className="card-body">
                    {this.renderActions()}
                </div>
            </div>
        );
    }
}

export default ActionBox;