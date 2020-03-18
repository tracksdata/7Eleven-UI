import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>

                <ul className="nav flex-column">
                    <li className="nav-item">

                        <Link className="nav-link" to={"/"}> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/products"}> Products </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/product"}> Product </Link>
                    </li>
                   
                </ul>

            </div>
        );
    }
}

export default Navbar;