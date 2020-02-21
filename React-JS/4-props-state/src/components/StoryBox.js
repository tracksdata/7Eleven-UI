import React, { Component } from 'react';
import Story from './Story';

class StoryBox extends Component {

    // state -> data of a component
    constructor(props) {
        super(props);

        this.state = {
            stories: [
                { 'id': 1, 'author': 'Praveen', 'body': 'this is story-1' },
                { 'id': 2, 'author': 'Bucky', 'body': 'this is story-2' }
            ],
        }
    }

    renderStories() {

        let { stories } = this.state;
      
        return stories.map((story,idx) => {
            return( // jsx
              <Story story={story} key={idx}/>
            );

        })

    }


    render() {
        return (
            <div className="card">
                <div className="card-header">story box</div>
                <div className="card-body">
                    {this.renderStories()}
                   
                    <hr/>
                </div>
            </div>
        )
    }
}

export default StoryBox;