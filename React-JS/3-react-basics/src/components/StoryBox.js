import React, { Component } from 'react';



class StoryBox extends Component {
   
    render() {
        console.log('test...');
        console.log(this.props);
        

        let {title}=this.props;
        return (
            
            <div>

                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand" href="#">{title}</a>
                </nav>

            </div>
        );
    }
}

export default StoryBox;