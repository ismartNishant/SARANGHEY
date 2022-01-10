import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/component.css';


export default function Navbar(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';
    let shad = props.mode ==='dark'?'1px 1px 10px rgba(250, 250, 250, 0.411)':'1px 1px 10px rgba(0, 0, 0, 0.711)';
    /// paddinfg in navbar on scrolll
    const [navStyle, setNavStyle] = useState('padclass1');
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setNavStyle('padclass2');
            } else {
                setNavStyle('padclass1');
            }
        });
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${navStyle}`} style={{ background: forBg,boxShadow:shad}}>
            <div className="container-fluid">
                <h2 className="logo">SARANG-Hey <img src="./images/sarang.png"  alt=".."/> </h2>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar" style={{background:forColor}}></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar" style={{background:forColor}}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" style={{color:forColor}}  to="/"><i className="fas fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  style={{color:forColor}}  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fas fa-search"></i> Explore
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background:forBg}}>
                                <li><a className="dropdown-item" style={{color:forColor}}  href="#suprise">Suprise Events</a></li>
                                <li><a className="dropdown-item" style={{color:forColor}}  href="#special">Special Events</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  style={{color:forColor}} to="/tour"><i className="fas fa-bolt"></i>Tour</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  style={{color:forColor}} to="/aboutus"><i className="far fa-address-book"></i> About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  style={{color:forColor}} to="/contactus"><i className="fas fa-phone-alt"></i> Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a className="btn primary" href="./login1/login.html">Sign In</a>
                    </form>
                    <i class={`bx mybx bxs-${props.mode === 'white'?'moon':'sun'} bx-${props.mode === 'white'?'':'spin'}`} 
                    onClick={props.toggleMode} style={{color:props.mode ==='dark'?'#FFAB4C':'#C2FFF9'}}></i>
                </div>
            </div>
        </nav>
    );
}
