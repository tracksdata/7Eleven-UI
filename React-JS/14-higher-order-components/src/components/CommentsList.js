import React, { Component } from 'react';
import store from '../store';
import data from '../store/data';

class CommentsList extends Component {
    constructor(props) {
        console.log("==> constructor");

        super();
        this.state = {
            commentsList: props.commentsList,
            //comments: store.getStore().comments['java'],
        }
    }

    componentDidMount() { // will call once once after render 

        console.log("==> componentDidMount");

        data.map(prod => {
            console.log(prod);

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
        let { commentsList } = this.props;
       console.log(store.getStore().comments);
        let comments=store.getStore().comments;

       // commentsList.map(comm=>{
         //   let matchingComments=comments.filter(cc=>cc[comm]==cc);
        //})

        comments.map(element => {
            console.log("====> "+element); 
        });
      

      // commentsList.map(cc=>{
       // console.log(store.getStore().comments[cc] );

         
     //  })
       
        //console.log("=========> "+status+"<==========");
        
      return  commentsList.map((comment,idx)=>{
              return store.getStore().comments[comment].map((c, idx) => {
            return <li key={idx} className="list-group-item">{c}</li>
            })
         })
       
    }

    render() {// will call every time when state, props and fourceUpdate is called
        console.log("====> render");
        return (
            <div>
                {this.renderComments()}
            </div>
        );
    }
}

export default CommentsList;