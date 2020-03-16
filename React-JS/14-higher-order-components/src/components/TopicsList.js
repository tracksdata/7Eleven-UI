import React, { Component } from 'react';
import store from '../store';
import CommentsList from './CommentsList';

class TopicsList extends Component {
    constructor(props) {
        super();
        this.state = {
            topics: store.getStore().topics
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            // ... fetch new topics from here
        })
    }

    componentWillUnmount() {
        // ... un-subscribe 
    }

    test(e) {
       
    }

    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return <li
                key={idx}
                className="list-group-item"
                onClick={e => this.test(topic)}
                style={{ cursor: 'pointer' }}
            >{topic}</li>
        })
    }

    render() {
        return (
            <div>
                {this.renderTopics()}
            </div>
        );
    }
}

export default TopicsList;