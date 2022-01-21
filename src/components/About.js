import React from 'react'
// import AboutRight from './AboutRight';
import './css/component.css';
function About(props) {
    return (
        <section className="services py-2 px-2">
            <div className="row" >
                <div className="col-lg-6 inner-about other">
                    <div className="about-content ">
                        <h1>More about the package here</h1>
                        <h3>INR ₹3000</h3>
                        <p>"Lorem ipsumvami ut aliq ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
                        <a className="btn primary" href="#">Book Now</a>
                    </div>
                </div>
                <div className="col-lg-6 py-2 px-0">
                    <div className="services__left set-bg about-img">
                        <img src={props.imgSrc} alt=".." />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
