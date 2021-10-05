import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand ms-5 fs-1 fw-bolder" >BeFit</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <NavLink to="/home" className="nav-link link-style"
                                style={{
                                    color: '#f8f8ff',
                                    fontSize: '18px',
                                    pointer: 'cursor',
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    color: '#89CFF0',
                                    fontWeight: '700',
                                    fontSize: '1.2em',
                                    borderBottom: '1px solid white',

                                }}
                            >Home</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/about" className="nav-link link-style"
                                style={{
                                    color: '#f8f8ff',
                                    fontSize: '18px',
                                    pointer: 'cursor',
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    color: '#89CFF0',
                                    fontWeight: '700',
                                    fontSize: '1.2em',
                                    borderBottom: '1px solid white'
                                }}>About</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/services" className="nav-link link-style"
                                style={{
                                    color: '#f8f8ff',
                                    fontSize: '18px',
                                    pointer: 'cursor',
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    color: '#89CFF0',
                                    fontWeight: '700',
                                    fontSize: '1.2em',
                                    borderBottom: '1px solid white'
                                }}>Services</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="contact" className="nav-link link-style"
                                style={{
                                    color: '#f8f8ff',
                                    fontSize: '18px',
                                    pointer: 'cursor',
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    color: '#89CFF0',
                                    fontWeight: '700',
                                    fontSize: '1.2em',
                                    borderBottom: '1px solid white'
                                }}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;