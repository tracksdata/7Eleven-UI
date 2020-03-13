import React, { Component } from 'react';
import store from '../store';
import data from '../store/data';

class CommentsList extends Component {
    constructor(props) {
        console.log("==> constructor");

        super();
        this.state = {
            commentsList:props.commentsList,
            comments: store.getStore().comments['java'],
            name: 'value will reolace in 5 secs'
        }
    }

    componentDidMount() { // will call once once after render 

        console.log("==> componentDidMount");

        data.map(prod=>{
            console.log(prod);
            
        })
         
     



        setTimeout(() => {
            this.setState({ name: 'Praveen' })
        }, 5000)

        store.subscribe(() => {
            // ... fetch new topics from here

        })

    }

    componentDidUpdate() { // every time after render
        console.log("==> componentDidUpdate");
        let topics = store.subscribe(() => {
        })
        console.log(topics);



    }

    componentWillUnmount() { // only when component is destroyed
        console.log("==> componentWillUnmount");

        // ... un-subscribe 
    }

    renderComments() {
        let { comments } = this.state;

        return comments.map((comment, idx) => {
            return <li key={idx} className="list-group-item">{comment}</li>
        })
    }

    render() {// will call every time when state, props and fourceUpdate is called
        console.log("====> render");

        return (
            <div>
                <h1>{this.state.name}</h1>
                {this.renderComments()}
            </div>
        );
    }
}

export default CommentsList;