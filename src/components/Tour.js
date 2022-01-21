import React from 'react'
import About from './About';
import AboutRight from './AboutRight';
import Gallery2 from './Gallery2';


function Tour(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';
    let forHeading = props.mode === 'dark' ? '#ffffff0a' : '#00000017';


    return (
        <div style={{ background: forBg, color: forColor }} >
            <div className="tour">
                <img src="./images/countdown-bg.jpg" className="img-fluid" alt="..."></img>
            </div>
            <h1 className="title pt-3 px-2" style={{backgroundColor:forHeading }}><span className="px-4">Our Pacakages</span></h1>
            <About imgSrc={"./images/g2.jpg"} />
            <AboutRight imgSrc={"./images/about/about.png"} />
            <About imgSrc={"./images/jk.jpg"} />
            <Gallery2 />

        </div>
    )
}

export default Tour;
