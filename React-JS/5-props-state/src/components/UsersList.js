import React, { Component } from 'react';
import USERS from './users';
import User from './User';
class UsersList extends Component {
    
renderUsers(){
    let users=USERS;

    

    return users.map((user,index)=>{
        return(
          <User data={user}/>
        );
    })

}

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Users</div>
                    <div className="card-body">
                        {this.renderUsers()}
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersList;