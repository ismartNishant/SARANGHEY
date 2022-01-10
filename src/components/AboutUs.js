import React from 'react';
import './css/component.css';
function AboutUs(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';
    return (
        <section className="services about-us" style={{ background: forBg, color: forColor }}>
            <h1 className="title" style={{ borderColor: forColor }}><span className="px-4 pb-1">About Us</span></h1>
            <div className="row py-2 " >
                <div className="col-lg-6 inner-about ">
                    <div className="about-content">
                        <h1>Who We are <i className="fas fa-question" style={{ color: "#e23b64" }}></i></h1>
                        <p className="py-3 m-0">"Lorem ipsumve tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultricesniami ut aliquip ex ea commodo consequat.tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices Duis aute irure dolor in reprehenderit
                            in voluptate velit esse olor in reprehenderit in voluptate velit esse"</p>
                        <div className="about-social">
                            <a href="https://www.facebook.com/profile.php?id=100018164203660"><i className="fab fa-facebook-square" style={{ color: "#4267B2" }}></i></a>
                            <a href="https://www.instagram.com/being_sarcastic_14/"><i className="fab fa-instagram" style={{ color: "#f53657" }}></i></a>
                            <a href="https://twitter.com/ismart_Nishant?s=09"><i className="fab fa-twitter-square" style={{ color: "#39d7f7" }}></i></a>
                            <a href="https://www.youtube.com/channel/UCyPK-B4DU7j7TwFb90_I8pQ"><i className="fab fa-youtube" style={{ color: "red" }}></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="services__left set-bg about-img">
                        <img src="./images/g2.jpg" alt=".." />
                    </div>
                </div>
            </div>
            <div className="what-we-do py-3" style={{ background: forBg, color: forColor }}>
                <h1 className="pb-2">What we do</h1>
                <div className="what-inner">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col" >
                            <div className="card h-100" style={{ background: forBg, color: forColor }} >
                                <img src="./images/g2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h4 className="">Parties</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{ background: forBg, color: forColor }}>
                                <img src="./images/g2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="">Festival</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{ background: forBg, color: forColor }}>
                                <img src="./images/g2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="">Events</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{ background: forBg, color: forColor }}>
                                <img src="./images/g2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="">Weekends Dhamal</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact__address">
                                <div className="section-title">
                                    <h2>Contact info</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore.</p>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <h5>Address</h5>
                                        <p>Akurdi Pune , 430112</p>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <h5>Call Us</h5>
                                        <span>+91 7218566898</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        <h5>Email</h5>
                                        <p>nishantrajputa11@gamail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact__form">
                                <div className="section-title">
                                    <h2>Get in touch</h2>
                                </div>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <form action="#">
                                    <div className="input__list">
                                        <input type="text" placeholder="First Name" />
                                        <input type="text" placeholder="Last Name" />
                                        <input type="text" placeholder="Email" />

                                    </div>
                                    <textarea placeholder="Comment"></textarea>
                                    <button type="submit" style={{ color: forColor }} className="site-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default AboutUs;
