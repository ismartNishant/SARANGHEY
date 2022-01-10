import './css/component.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';

    return (
        <section className="footer py-2" id="footer" style={{ background: forBg }}>
            <div className="footer-container" >
                <div className="foo-box" style={{ color: forColor }}>
                    <h3 className="ftitle"> <span>Why choose us</span> <i className="fas fa-question"></i></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iste unde reprehenderit vitae
                        consequatur incidunt totam aperiam culpa. Repellat, fugiat?</p>
                </div>
                <div className="foo-box inner-footer" style={{ color: forColor }}>
                    <h3 className="ftitle"> <span>Quick links </span> <i className="fas fa-link"></i> </h3>
                    <Link style={{ color: forColor }} to="/"><i className="fas fa-home"></i> Home</Link>
                    <Link style={{ color: forColor }} to="/suprise"><i className="fas fa-bolt"></i> Suprise Events</Link>
                    <Link style={{ color: forColor }} to="/special"><i className="fas fa-bolt"></i> Special Events</Link>
                    <Link style={{ color: forColor }} to="/"><i class="fas fa-images"></i> Gallery</Link>
                    <Link style={{ color: forColor }} to="/"><i class="far fa-star"></i> Reviews</Link>
                    <Link style={{ color: forColor }} to="/aboutus"><i class="fas fa-portrait"></i> About</Link>
                </div>
                <div className="foo-box inner-footer" style={{ color: forColor }}>
                    <h3 className="ftitle"> <span>Contact us</span>  <i className="fas fa-phone"></i> </h3>
                    <p> <i className="fas fa-map-marker-alt"></i> Nagad, india 431103 </p>
                    <p> <i className="fas fa-envelope"></i> nishantrajputa11.com </p>
                    <p> <i className="fas fa-globe"></i> www.yourwebsite.com </p>
                    <p> <i className='bx bx-phone-call bx-tada' ></i> +91 7218566898 </p>
                </div>
            </div>
            <div className="credits" style={{ color: forColor }}>
                <h3 className="credit" style={{ color: forColor }}>. . . Made with <i className='bx bxs-heart bx-burst' style={{ color: "#e23b64" }}></i> by Mr.Nishant Rajput . . .</h3>
                <div className="brand">
                    <h2 className="logo flogo">SARANG-Hey <img src="./images/sarang.png" alt=".." /></h2>
                    <div className="share" >
                        <a href="https://www.facebook.com/profile.php?id=100018164203660"><i className="fab fa-facebook-square" style={{ color: "#4267B2" }}></i></a>
                        <a href="https://www.instagram.com/being_sarcastic_14/"><i className="fab fa-instagram" style={{ color: "#f53657" }}></i></a>
                        <a href="https://twitter.com/ismart_Nishant?s=09"><i className="fab fa-twitter-square" style={{ color: "#39d7f7" }}></i></a>
                        <a href="https://www.youtube.com/channel/UCyPK-B4DU7j7TwFb90_I8pQ"><i className="fab fa-youtube" style={{ color: "red" }}></i></a>
                    </div>
                    <p> 2021 SARANG-HEY. &#169; Copyright All rights reserved</p>
                </div>
                <p className="terms"> Terms of Use || Privacy Policy</p>
            </div>
        </section>
    );
}
export default Footer;