import './css/component.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SupriceItem(props){
  let forColor = props.mode === 'dark' ? '#fff' : '#000';
  let forBg = props.mode === 'dark' ? '#000' : '#fff';
  let forBorder = props.mode === 'dark' ? '#fff' : '#fff';

    return(
        <section className="suprise" id="suprise">
        <div className="suprise-container" id="suprise-container">
          <h1 className="title" style={{borderColor:forColor}}><span className="px-4 pb-1">Suprise Events</span></h1>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col" >
              <div className="card h-100 " style={{borderColor:forBorder}}>
                <img src="./images/suprise/date.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Suprise Date</h5>
                  <p className="card-text">This is a longer card with supporting text below.</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">Book Now</Link>
                </div>
              </div>
            </div>
            <div className="col" >
              <div className="card h-100">
                <img src="./images/suprise/birthday.jpeg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Suprise BirthDay</h5>
                  <p className="card-text">This is a longer card with supporting text below.</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">Book Now</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/suprise/anivaersary.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Aniversary</h5>
                  <p className="card-text">This is a longer card with supporting text below.</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">Book Now</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./images/suprise/proposal.jpg" className="card-img-top"  alt="..."/>
                <div className="card-body" style={{background:forBg,color:forColor}}>
                  <h5 className="card-title">Suprise Proposal</h5>
                  <p className="card-text">This is a longer card with supporting text below .</p>
                  <Link style={{color:forColor}} to="/tour" className="btn btn-primary">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default SupriceItem;