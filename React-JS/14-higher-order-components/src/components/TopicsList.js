import React, { Component } from 'react';
import store from '../store';

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

    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return <li key={idx} className="list-group-item">{topic}</li>
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