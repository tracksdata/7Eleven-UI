import React, { Component } from 'react';
import ColorContext from './ColorContext';
import CityContext from './CityContext';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
               <div className="card-header bg-warning">C Component</div>
              
               <h4>
                 C-
                 <CityContext.Consumer>
                    {value=>value}
                 </CityContext.Consumer>
                 </h4>
                   

            </div>
        );
    }
}

export default C;