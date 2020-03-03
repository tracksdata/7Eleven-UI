import React, { Component } from 'react';
import Counter from './Counter';

class CounterBox extends Component {


    state = {
        total: 0
    }

    calculateTotal(e) {
        let { total } = this.state;
        this.setState ({ total: total + e.value })
    }
    render() {

        return (
            <div className="card">
                <div className="card-header"><h4>Counter-APP</h4></div>

                <div className="card-body">
                    <Counter lable={10} onAction={e =>this.calculateTotal(e)} />
                    <Counter lable={20} onAction={e => this.calculateTotal(e)}/>
                    <Counter lable={-5} onAction={e => this.calculateTotal(e)}/>
                    <Counter lable={-20} onAction={e => this.calculateTotal(e)}/>
                </div>

                <div className="card-footer">
                    <h4>Total Sum:  {this.state.total}</h4>
                </div>

            </div>
        );
    }
}

export default CounterBox;