import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    }
    calculateTotalHits(){
        let {count}=this.state;
        this.setState({count:count+1},()=>{
            let {onAction}=this.props;
            onAction({value:this.props.lable}); // child invokes parents onAction's property value
        })
    }


    render() {
        return (
            <div className="mystyle">
              {this.props.lable}  <button className="btn btn-primary" onClick={e=>this.calculateTotalHits()}>{this.state.count}</button>
              <span style={{margin:'3px'}}>
              <i className="fas fa-trash-alt"></i>	
              </span>
            </div>
        );
    }
}

export default Counter;