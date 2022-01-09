import './App.css';
import './components/css/component.css';
import Top from './components/header';
import Footer from './components/footer';
import TopSlider from './components/topSlider';
import SupriceItem from './components/supriceContent';
// import Gallery2 from './components/Gallery2';
import SpecialItem from './components/specialContent';
import Newsletter from './components/newsletter';
import { useState } from 'react';
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

function App() {
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
    <Router>
      <ScrollToTop />
      <div className="App" mode={mode} toggleMode={toggleMode} style={{ background: forBg, color: forColor }}>
        <Top mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<><TopSlider mode={mode} toggleMode={toggleMode} />
            <SupriceItem mode={mode} toggleMode={toggleMode} />
            <Gallery1 mode={mode} toggleMode={toggleMode} />
            <SpecialItem mode={mode} toggleMode={toggleMode} />
            </>}>
          </Route>
          <Route path="/tour" element={<Tour mode={mode} toggleMode={toggleMode} />}></Route>
          <Route path="/aboutus" element={<AboutUs mode={mode} toggleMode={toggleMode} />  }></Route>
          <Route path="/contactus" element={ <ContactUs mode={mode} toggleMode={toggleMode} /> }> </Route>
        </Routes>
        <Service mode={mode} toggleMode={toggleMode} />
        <Newsletter mode={mode} toggleMode={toggleMode} />
        <Footer mode={mode} toggleMode={toggleMode} />
      </div>
      <GoTop  mode={mode} toggleMode={toggleMode}/>
    </Router>
  );
}

export default App;
