import React, { Component } from 'react';

class NonVeg extends Component {
    render() {
        return (
            <div>
                NonVeg
                {this.props.children}
            </div>
        );
    }
}

export default NonVeg;