import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';


class ActionBox extends Component {


    state={
        totalCount:0
    }

    calculateTotalCount(e){
         let {totalCount}=this.state; 
        this.setState({totalCount:totalCount+1})
            
    }

    render() {
        let {totalCount}=this.state; 
        return (

            <div className="card">
                <div className="card-header">Action Box - <span className="badge badge-warning"></span>{totalCount}</div>

                <div className="card-body">

                    <Action btnLable={"Run"} key={10} onAction={e=>this.calculateTotalCount(e)}/>
                    <Action btnLable={"Walk"} key={11} onAction={e=>this.calculateTotalCount(e)}/>
                    <hr/>
                    <div style={{clear:'both'}}>
                        <Summary totalActions={totalCount}/>

                    </div>
                </div>

            </div>



        );
    }
}

export default ActionBox;