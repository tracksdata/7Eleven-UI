import React, { Component } from 'react';

class User extends Component {

    render() {
        let{
            data:{
            address:{
                city,street
            },
            company:{
                name
            },
            }
        }=this.props;
        return (
            <div>
                <div className="alert alert-info">
                <hr/>
                <span className="badge badge-dark">{name}</span>
                <hr/>
                {city},{street}
            </div>
            </div>
        );
    }
}

export default User;