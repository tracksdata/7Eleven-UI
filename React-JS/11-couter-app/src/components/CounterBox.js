import React, { Component } from 'react';
import Counter from './Counter';

class CounterBox extends Component {


    state = {
        total: 0,
        buttons: [10, 20, -5, -20, 100,-50]
    }

    calculateTotal(e) {
        let { total } = this.state;
        this.setState({ total: total + e.value })
    }

    removeComponent(e) {
        let { total } = this.state;

        console.log(e.count);
        let { buttons } = this.state;
        let newButtons = buttons.filter(button => button !== e.value);
        console.log(buttons);
        console.log(newButtons);
        this.setState({ buttons: newButtons, total: total - (e.value * e.count) });

    }

    renderButtons() {
        let { buttons } = this.state;
        return buttons.map((btn, idx) => {
            return (
                <Counter lable={btn}
                    key={idx}
                    onAction={e => this.calculateTotal(e)}
                    removeAction={e => this.removeComponent(e)}
                    addComponent={e => this.editComponent(e)}
                />

            );
        })
    }

    editComponent(e) {

        let { buttons, total } = this.state;
        let oldLable = Number.parseInt(e.oldLable);
        let newLable = Number.parseInt(e.newLable);

        let status = buttons.includes(newLable);
        buttons.map((button, idx) => (!(status)) ? (button === oldLable) ? buttons[idx] = newLable : null : null);
        this.setState({ buttons: buttons, total: (total + (e.newLable * e.count)) - e.oldLable * e.count })

    }
    addNewComponent(e) {
        let key = e.which || e.keyCode;
        if (key === 13) {
            let { buttons } = this.state;
            let newLable = Number.parseInt(e.target.value);
            let status = buttons.includes(newLable);
            if (!status && !(isNaN(newLable))) {
                buttons.push(newLable);
            }

            this.setState({ buttons: buttons })
        }

    }

    resetAll(e) {

        console.log('--- reseting all');
        let { buttons } = this.state;
        buttons = [10, 20, -5, -20, 100,-50];
        this.setState({ buttons: buttons, total: 0 })

    }

    render() {

        return (
            <div className="card">
                <div className="card-header text-center"><h4>Counter-APP</h4></div>
                <div className="form-inline mt-3" style={{ alignSelf: 'center' }}>
                    <input className="form-control mr-1" onKeyPress={e => this.addNewComponent(e)} placeholder="New Lable" />
                    <button className="btn btn-danger" >Add</button>
                    <button className="btn btn-danger" style={{ margin: '5px' }} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.resetAll(e) }}>Reset</button>

                </div>
                <hr />

                <div className="card-body">
                    <div className="row">
                        {this.renderButtons()}
                    </div>



                </div>

                <div className="card-footer text-center">
                    <h4>Total Sum: <span className="badge badge-dark">{this.state.total}</span> </h4>
                </div>

            </div>
        );
    }
}

export default CounterBox;