import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 fs-1 fw-bolder" href="#">BeFit</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <NavLink to="/home" className="nav-link" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/about" className="nav-link" href="#">About</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/services" className="nav-link" href="#">Services</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="contact" className="nav-link" href="#">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;