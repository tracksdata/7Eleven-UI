import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        isEdit: false
    }
    calculateTotalHits() {
        let { count, isEdit } = this.state;
        if (isEdit === true) {
            this.setState({ isEdit: false });
        }
        this.setState({ count: count + 1 }, () => {
            let { onAction } = this.props;
            onAction({ value: this.props.lable }); // child invokes parents onAction's property value
        })
    }

    renderEdit() {
        this.setState({ isEdit: !this.state.isEdit })
    }

    deleteComponent(e) {

        let { removeAction } = this.props;
        removeAction({ value: this.props.lable, count: this.state.count });
        this.setState({ count: 0 })

    }
    changeLable(e) {

        if (e.target.value.length == 0 || isNaN(e.target.value)) {
            console.log('dgdhsgdsdgs');
            return false;
        }

        let key = e.which || e.keyCode;
        console.log("Key: " + key);



        if (key === 27) { // escape key 
            console.log('escape...');
            this.setState({ isEdit: false })
        }

        if (key === 13) {
            //console.log(e.target.value);
            let { addComponent } = this.props;
            this.setState({ isEdit: false })
            addComponent({ oldLable: this.props.lable, newLable: e.target.value, count: this.state.count })
        }

    }

    handleTextField(e) {
       // let {isEdit } = this.state;
        this.setState({ isEdit: false })

    }
    render() {
        let { isEdit } = this.state;
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4">
                <div className="card mb-3">
                    <div className="card-body text-center">
                        {isEdit ? <input type="text" placeholder={this.props.lable} size="3" onKeyDown={e => this.changeLable(e)} onMouseOut={e => this.handleTextField(e)} /> : <span onDoubleClick={e => this.renderEdit()}>{this.props.lable}</span>}
                        <button className="btn btn-primary" onClick={e => this.calculateTotalHits()}>{this.state.count}</button>
                        <span style={{ margin: '3px', color: 'red', fontSize: '18px' }} >
                            <i className="fas fa-trash-alt" onClick={e => this.deleteComponent(e)} />
                        </span>
                    </div>
                </div>

            </div>
        );
    }

    componentWillUnmount() {
        console.log('--- Component Removed');
    }

}

export default Counter;