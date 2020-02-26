import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {
    render() {
        return (
            <div className="mystyle">
                <div className="card">
                    <div className="card-header">Action Box</div>
                    <Action  value={"Run"}/>
                    <Action value={"Walk"}/>
                </div>


            </div>
        );
    }
}

export default ActionBox;