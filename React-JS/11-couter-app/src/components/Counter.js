import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        isEdit: false
    }
    calculateTotalHits() {
        let { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            let { onAction } = this.props;
            onAction({ value: this.props.lable }); // child invokes parents onAction's property value
        })
    }

    renderEdit() {
        console.log('--- renderedit ' + this.props.lable);
        this.setState({ isEdit: true })
    }

    deleteComponent(e) {
        let { removeAction } = this.props;
        removeAction({ value: this.props.lable, count: this.state.count });
        this.setState({ count: 0 })

    }
    changeLable(e) {
        let key = e.which || e.keyCode;
        if (key === 13) {
            //console.log(e.target.value);
            let { addComponent } = this.props;
            this.setState({ isEdit: false })
            addComponent({ oldLable: this.props.lable, newLable: e.target.value, count: this.state.count })
        }

    }
    render() {
        let { isEdit } = this.state;
        return (
            <div className="mystyle">
                {isEdit ? <input type="text" size="3" onKeyPress={e => this.changeLable(e)} /> : <span onDoubleClick={e => this.renderEdit()}>{this.props.lable}</span>}
                <button className="btn btn-primary" onClick={e => this.calculateTotalHits()}>{this.state.count}</button>
                <span style={{ margin: '3px',color:'red',fontSize:'18px' }} >
                    <i className="fas fa-trash-alt" onClick={e => this.deleteComponent(e)} />
                </span>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('--- Component Removed');
    }

}

export default Counter;