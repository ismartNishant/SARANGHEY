import React from 'react';
import './css/component.css';
function Service(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';
    return (
        <section className="services p-0 ">
            <div className=" py-3" style={{ color: forColor }}>
                <div className="row p-0">
                    <div className="col-lg-6 p-0">
                        <div className="services__left set-bg">
                            <img src="./images/services/service-left.jpg" alt=".." />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="row services__list p-0">
                            <div className="col-lg-6  order-lg-1 col-md-6 order-md-1">
                                <div className="service__item deep-bg" style={{ color: forBg }}>
                                    <img src="./images/services/service-1.png" alt="" />
                                    <h4>Wedding</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 col-md-6 order-md-2">
                                <div className="service__item">
                                    <img src="./images/services/service-2.png" alt="" />
                                    <h4>Clubs and bar</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                            <div className="col-lg-6  order-lg-4 col-md-6 order-md-4">
                                <div className="service__item deep-bg" style={{ color: forBg }}>
                                    <img src="./images/services/service-4.png" alt="" />
                                    <h4>DJ lessons</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                            <div className="col-lg-6  order-lg-3 col-md-6 order-md-3">
                                <div className="service__item">
                                    <img src="./images/services/service-3.png" alt="" />
                                    <h4>Corporate events</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Service;
