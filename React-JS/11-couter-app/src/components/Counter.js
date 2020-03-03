import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        isEdit:false
    }
    calculateTotalHits(){
        let {count}=this.state;
        this.setState({count:count+1},()=>{
            let {onAction}=this.props;
            onAction({value:this.props.lable}); // child invokes parents onAction's property value
        })
    }

    renderEdit(){
        console.log('--- renderedit '+this.props.lable);
        this.setState({isEdit:true})
    }

    deleteComponent(){
        console.log('delete component '+this.props.lable);
        
    }
    render() {
        let {isEdit}=this.state;
        return (
            <div className="mystyle">
             {isEdit?<input type="text" size="3"/>:<span onDoubleClick={e=>this.renderEdit()}>{this.props.lable}</span>}   
             
               <button className="btn btn-primary" onClick={e=>this.calculateTotalHits()}>{this.state.count}</button>
              <span style={{margin:'3px'}}>
              <i className="fas fa-trash-alt" onClick={e=>this.deleteComponent()}/>	
              </span>
            </div>
        );
    }

    componentWillUnmount(){
        console.log('--- Component Removed'); 
    }

}

export default Counter;