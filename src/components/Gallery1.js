import './css/component.css';
import React from 'react';

function Gallery1(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forHeading = props.mode === 'dark' ? '#ffffff0a' : '#00000017';

    return (
        <section id="gallery" className="gallery">
            <h1 className="title" style={{ backgroundColor:forHeading }}><span className="px-4 pb-1">Our gallery</span></h1>
            <div className="main">
                <div className="inner-gallery">
                    <div className="img">
                        <img src="./images/gallery/g1.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g2.jpg"  alt=".." />
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g3.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g4.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g5.jpg"  alt=".." />
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g6.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g7.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g8.jpg"  alt=".."/>
                    </div>
                    <div className="img">
                        <img src="./images/gallery/g9.jpg"  alt=".."/>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Gallery1;