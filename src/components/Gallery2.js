import React from 'react';
import './css/component.css';

function Gallery2(props) {
    let forHeading = props.mode === 'dark' ? '#ffffff0a' : '#00000017';

    return (
        <div className="pt-2 pb-3 px-4">
            <h1 className="title" style={{ backgroundColor:forHeading}} ><span style={{borderColor:"#000"}}> Gallery</span></h1>
            <div className="row gal">
                <div className="column">
                    <img src="./images/gallery/g2.jpg"  alt=".."/>
                    <img src="./images/gallery/g3.jpg"  alt=".."/>
                </div>
                <div className="column">
                    <img src="./images/gallery/g3.jpg"  alt=".."/>
                    <img src="./images/gallery/g9.jpg"  alt=".."/>
                </div>
                <div className="column">
                    <img src="./images/gallery/g1.jpg"  alt=".."/>
                    <img src="./images/gallery/g8.jpg"  alt=".."/>
                    <img src="./images/gallery/g5.jpg"  alt=".."/>
                </div>
                <div className="column">
                    <img src="./images/gallery/g4.jpg"  alt=".."/>
                    <img src="./images/gallery/g3.jpg"  alt=".."/>
                </div>
            </div>
        </div>
    )
}

export default Gallery2;
