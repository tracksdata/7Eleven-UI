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

    renderButtons(){
        let buttons=[10,20,-5,-20,50,100];
        return buttons.map((btn,idx)=>{
           return(
            <div key={idx} className="alert alert-info myspace">
            <Counter lable={btn} onAction={e =>this.calculateTotal(e)} />
            </div>
           ); 
        })
    }

    render() {

        return (
            <div className="card">
                <div className="card-header"><h4>Counter-APP</h4></div>

                <div className="card-body row"> 
                   {this.renderButtons()}
                </div>

                <div className="card-footer">
                    <h4>Total Sum:  {this.state.total}</h4>
                </div>

            </div>
        );
    }
}

export default CounterBox;