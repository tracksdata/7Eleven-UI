import React, { Component } from 'react';
import EMPLOYEES from './employees';
import Employee from './Employee';

class EmployeeList extends Component {

    renderEmployees() {
        let employees = EMPLOYEES;
       
        return employees.map((employee,index) => {
            return (
               <Employee employee={employee} key={index}/>
            );
        })

    }

    render() {

        return (
            <div>
                {this.renderEmployees()}
            </div>
        );
    }
}

export default EmployeeList;