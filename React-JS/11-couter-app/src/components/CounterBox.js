import React, { Component } from 'react';
import Counter from './Counter';

class CounterBox extends Component {


    state = {
        total: 0,
        buttons:[10,20,-5,-20,100]
    }

    calculateTotal(e) {
        let { total } = this.state;
        this.setState ({ total: total + e.value })
    }

    renderButtons(){
        let {buttons}=this.state;
        return buttons.map((btn,idx)=>{
           return(
            <div key={idx} className="alert alert-info myspace">
            <Counter lable={btn} onAction={e =>this.calculateTotal(e)} />
            </div>
           ); 
        })
    }

    addComponent(){
        console.log('Value: '); 
    }

    render() {

        return (
            <div className="card">
                <div className="card-header"><h4>Counter-APP</h4></div>
                <input className="col-2"   onBlur={e=>this.addComponent()}/>
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