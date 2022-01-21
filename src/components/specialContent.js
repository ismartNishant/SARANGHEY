import './css/component.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SpecialItem(props){
  let forColor = props.mode === 'dark' ? '#fff' : '#000';
  let forBg = props.mode === 'dark' ? '#000' : '#fff';
    let forHeading = props.mode === 'dark' ? '#ffffff0a' : '#00000017';


    return(
        <section className="special" id="special">
        <div className="special-event-container" id="special-container">
          <h1 className="title" style={{backgroundColor:forHeading}}><span className="px-4 pb-1"> Special Events</span></h1>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col">
              <div className="card h-100">
                <img src="./images/special/newyear.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">New year</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-.</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/special/valentin-01.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Valentine</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in t</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/special/holi.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Holi</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead in to</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/special/friendship-day.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Friendship Day</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to.</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/special/halloween.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Halloween</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to </p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default SpecialItem;