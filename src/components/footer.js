import './css/component.css';
import React from 'react';

function Footer(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';

    return (
        <section className="footer py-2" id="footer" style={{background:forBg}}>
            <div className="footer-container" >
                <div className="foo-box" style={{color:forColor}}>
                    <h3 className="ftitle"> <span>Why choose us</span> <i className="fas fa-question"></i></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iste unde reprehenderit vitae
                        consequatur incidunt totam aperiam culpa. Repellat, fugiat?</p>
                </div>
                <div className="foo-box" style={{color:forColor}}>
                    <h3 className="ftitle"> <span>Quick links </span> <i className="fas fa-link"></i> </h3>
                    <a style={{color:forColor}} href="#">Home</a>
                    <a style={{color:forColor}} href="#suprise">Suprise Events</a>
                    <a style={{color:forColor}} href="#special">Special Events</a>
                    <a style={{color:forColor}} href="#gallery">Gallery</a>
                    <a style={{color:forColor}} href="#reviews">Reviews</a>
                    <a style={{color:forColor}} href="#about">About</a>
                </div>
                <div className="foo-box" style={{color:forColor}}>
                    <h3 className="ftitle"> <span>Contact us</span>  <i className="fas fa-phone"></i> </h3>
                    <p> <i className="fas fa-map-marker-alt"></i> Nagad, india 431103 </p>
                    <p> <i className="fas fa-envelope"></i> nishantrajputa11.com </p>
                    <p> <i className="fas fa-globe"></i> www.yourwebsite.com </p>
                    <p> <i className='bx bx-phone-call bx-tada' ></i> +91 7218566898 </p>
                </div>
            </div>
            <div className="credits" style={{color:forColor}}>
                <h3 className="credit" style={{color:forColor}}>. . . Made with <i className='bx bxs-heart bx-burst' style={{color:"#e23b64"}}></i> by Mr.Nishant Rajput . . .</h3>
                <div className="brand">
                    <h2 className="logo flogo">SARANG-Hey <img src="./images/sarang.png"  alt=".."/></h2>
                    <div className="share" >
                        <a style={{color:forColor}} href="#"><i className="fab fa-facebook-square"></i></a>
                        <a style={{color:forColor}} href="#"><i className="fab fa-instagram"></i></a>
                        <a style={{color:forColor}} href="#"><i className="fab fa-twitter-square"></i></a>
                        <a style={{color:forColor}} href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                    <p> 2021 SARANG-HEY. &#169; Copyright All rights reserved</p>
                </div>
                <p  className="terms"> Terms of Use || Privacy Policy</p>
            </div>
        </section>
    );
}
export default Footer;