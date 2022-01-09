import './css/component.css';
import React from 'react';

function Gallery1(props) {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    return (
        <section id="gallery" className="gallery">
            <h1 className="title" style={{ borderColor: forColor }}><span className="px-4 pb-1">Our gallery</span></h1>
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