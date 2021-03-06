import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Login from "../accounts/login";


class Header extends Component {
    render() {



        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Lead Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>






        );
    }
}

export default Header;