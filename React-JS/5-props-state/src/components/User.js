import React, { Component } from 'react';

class User extends Component {

    render() {
        let {
            data: {
                phone, name: name, website, email, username, id,
                address: {
                    city, street, suite, zipcode
                },
                company: {
                    name: companyName, catchPhrase, bs
                },

            }
        } = this.props;
        return (


            <div className="col-12 col-sm-12 col-md-4 col-lg-4 py-1">



                    <div className="card bg-info">
                        <div className="card-header bg-info text-center"><b>{name}</b></div>

                        <div className="card-body">
                            <span className="badge badge-success">{companyName}</span>
                            <hr />
                            <address>
                                {catchPhrase},{bs}
                            </address>
                            <hr />
                            <span className="badge badge-success">Address</span>
                            <address>
                                {city},
                             {street},
                             {suite},
                             {zipcode}
                            </address>
                        </div>
                    </div>
                </div>


        );
    }
}

export default User;