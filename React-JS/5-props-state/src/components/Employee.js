import React from 'react';

const Employee = (props) => {

    let {employee}=props;
    return (
        
        <div className="col-6 md-col-6">

            <div className="card">
                <div className="card-header">{employee.name}</div>
                <div className="card-body">

                    {employee.id} <br />
                    {employee.isPromoted} <br />
                    {employee.joinedIn} <br />
                    {employee.gender} <br />

                </div>

            </div>
        </div>
    );

}
export default Employee;