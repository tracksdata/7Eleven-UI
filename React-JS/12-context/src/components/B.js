import React, { Component } from 'react';
import C from './C';
import ColorContext from './ColorContext';
import CityContext from './CityContext';

class B extends Component {
    render() {
        return (
            <div className="card card-body">
                 <div className="card-header bg-success">B Component</div>

                <h4>
                 B-
                 <CityContext.Consumer>
                    {value=>value}
                 </CityContext.Consumer>
                 </h4>
                   
                  <C />


            </div>
        );
    }
}

export default B;