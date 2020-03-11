import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext';
import CityContext from './CityContext';

class A extends Component {
    render() {
        return (
            <div className="card card-body">
               <div className="card-header bg-primary">A Component</div>
                    <span> <h4>A- {this.props.city} </h4></span>
                
                <CityContext.Provider value={this.props.city}>
                <B/>
                </CityContext.Provider>
                
              

            </div>
        );
    }
}

export default A;