import React from 'react';
const Story = (props) => {

    let { story } = props;  // immutable type
   
    return (
        <div className="alert alert-info">
            <span className="badge badge-dark">{story.author}</span>
            <hr />
            <div>
                {story.body} <br />

            </div>

        </div>
    );

}
export default Story;