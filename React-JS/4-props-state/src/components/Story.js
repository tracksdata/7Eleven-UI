import React from 'react';
const Story = (props) => {

    let {story}=props;
    return (
        <div className="alert alert-info">
            <span className="badge badge-dark">{story.author}</span>
            <hr />
            <div>
                {story.body}
            </div>

        </div>
    );

}
export default Story;