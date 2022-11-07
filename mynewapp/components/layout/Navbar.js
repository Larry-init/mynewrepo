import React from "react";
import {NavLink} from 'react-router-dom' //stops the page from refreshing when clicked

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">User Management</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Banking</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/createacc">Create Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar