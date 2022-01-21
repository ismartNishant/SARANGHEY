import './App.css';
import './components/css/component.css';
import Navbar from './components/header';
import Footer from './components/footer';
import TopSlider from './components/topSlider';
import SupriceItem from './components/supriceContent';
// import Gallery2 from './components/Gallery2';
import SpecialItem from './components/specialContent';
import Newsletter from './components/newsletter';
import { useState, useEffect } from 'react';
import ContactUs from './components/ContactUs';
import Tour from './components/Tour';
import Gallery1 from './components/Gallery1';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import ScrollToTop from './components/ScrollToTopAuto';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GoTop from './components/GoTopOnclick';
// import LoadingBar from 'react-top-loading-bar';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  justify-content: center;
  position:relative;
`;

const App = () => {
  // const[progress,setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.style.backgroundColor = '#000';
    setTimeout(() => {
      setLoading(false);
      document.body.style.backgroundColor = '#fff';
    }, 8000)
  }, [])

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('white');
      document.body.style.backgroundColor = '#fff';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#000';
    }
  }
  let forColor = mode === 'dark' ? '#fff' : '#000';
  let forBg = mode === 'dark' ? '#000' : '#fff';

  return (

    <div>
      {loading ?
        <div className='myloader'>
          <HashLoader  css={override} color={"#870cb8"} loading={loading} size={50} />
          <h3>LOADING<i className='bx bxs-circle bx-fade' ></i><i className='bx bxs-circle bx-fade-right'></i><i className='bx bxs-circle bx-fade-right' ></i><i className='bx bxs-circle bx-fade-right'></i></h3>
        </div>
        :
        (<Router>
          <ScrollToTop />
          <div className="App" mode={mode} toggleMode={toggleMode} style={{ background: forBg, color: forColor }}>
            <Navbar mode={mode} toggleMode={toggleMode} />

            <Routes>
              <Route path="/" element={
                <><TopSlider mode={mode} toggleMode={toggleMode} />
                  <SupriceItem mode={mode} toggleMode={toggleMode} />
                  <Gallery1 mode={mode} toggleMode={toggleMode} />
                  <SpecialItem mode={mode} toggleMode={toggleMode} />
                </>}>
              </Route>
              <Route path="/suprise" element={<div className="speandsup">
                  <SupriceItem mode={mode} toggleMode={toggleMode} />
                  <Gallery1 mode={mode} toggleMode={toggleMode} />
                </div>}>
              </Route>
              <Route path="/special" element={<div className="speandsup">
                <SpecialItem mode={mode} toggleMode={toggleMode} />
                <Gallery1 mode={mode} toggleMode={toggleMode} />
              </div>}>
              </Route>
              <Route path="/tour" element={<Tour mode={mode} toggleMode={toggleMode} />}></Route>
              <Route path="/aboutus" element={
              <div className="speandsup"><AboutUs mode={mode} toggleMode={toggleMode} />
              </div>}></Route>
              <Route path="/contactus" element={ <div className="speandsup"><ContactUs mode={mode} toggleMode={toggleMode} /></div>}> </Route>
            </Routes>
            <Service mode={mode} toggleMode={toggleMode} />
            <Newsletter mode={mode} toggleMode={toggleMode} />
            <Footer mode={mode} toggleMode={toggleMode} />
          </div>
          <GoTop mode={mode} toggleMode={toggleMode} />
        </Router>)}

    </div>
  );
}

export default App;
