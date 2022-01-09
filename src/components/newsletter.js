import './css/component.css';
import React from 'react';
function Newsletter() {
    return (
        <section className="newsletter" style={{ backgroundImage: "url(/images/bg.jpg)"}}>
            <h1 style={{color:"#fff"}}>Newsletter</h1>
            <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" placeholder="Enter your email. . ." />
                <input type="submit" value="subscribe" />
            </form>
        </section>
    );
}
export default Newsletter;