import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>BeFits Fitness Club</h1>

                                <p className="mt-4 ">
                                    <small>
                                        We have our own expert specialised trainer who will look after your diet and food and lifestyle continousely.
                                    </small>
                                </p>


                                <div className=" mx-auto mt-3 text-secondary">
                                    <i className="fab fa-facebook-square fa-2x icon facebook-icon-color"></i>
                                    <i className="fab fa-twitter-square fa-2x icon twitter-icon-color"></i>
                                    <i className="fab fa-linkedin fa-2x icon linkedin-icon-color"></i>
                                    <i className="fab fa-youtube-square fa-2x icon youtube-icon-color"></i>
                                    <i className="fab fa-whatsapp-square fa-2x icon whatsapp-icon-color"></i>


                                </div>

                                <p className="mt-5">
                                    <small>Copyright © 2021 BeFits. All Rights Reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-link-container">   <h4 className="text-danger fw-bolder">Quick Links</h4>
                                <ul>
                                    <NavLink to="/home" style={{
                                        color: "white",
                                        textDecoration: 'none'
                                    }}><li className="footer-nav"><i className="fas fa-check"></i>&nbsp;&nbsp;Home</li></NavLink>
                                    <NavLink to="/about" style={{
                                        color: "white",
                                        textDecoration: 'none'
                                    }}><li className="footer-nav"><i className="fas fa-check"></i>&nbsp;&nbsp;About</li></NavLink>
                                    <NavLink to="/services" style={{
                                        color: "white",
                                        textDecoration: 'none'
                                    }}><li className="footer-nav"><i className="fas fa-check"></i>&nbsp;&nbsp;Services</li></NavLink>
                                    <NavLink to="/contact" style={{
                                        color: "white",
                                        textDecoration: 'none'
                                    }}><li className="footer-nav"><i className="fas fa-check"></i>&nbsp;&nbsp;Contact</li></NavLink>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Join Our Mailing List!</h3>
                                <input
                                    className="footer-input "
                                    type="text"
                                    placeholder="enter your email"
                                />
                                <button type="button" class="btn btn-primary btn-sm newsletter-btn ms-2">Subscribe</button>
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-phone-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h5>&nbsp;&nbsp;+880125673552</h5>
                                    </div>
                                </div>
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-address-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h5>&nbsp;&nbsp;48 Priyanka City,Uttara,Dhaka.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;