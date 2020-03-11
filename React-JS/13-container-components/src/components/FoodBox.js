import React, { Component } from 'react';
import Veg from './Veg';
import NonVeg from './NonVeg';

class FoodBox extends Component {

    renderChildren() {
        let { children } = this.props;

        return children.map((child, idx) => {
            return <li key={idx} className="list-group-item">{child}</li>
        })

    }

    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">
                    <div className="list-group">
                        {this.renderChildren()}
                    </div>
                </div>



            </div>
        );
    }
}

export default FoodBox;