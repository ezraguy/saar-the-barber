import React, { useState } from 'react';
import './App.css';
import Main from './components/main-section';
import Header from './components/header';
import 'aos/dist/aos.css';
import AboutMe from './components/about-me';
import Reviews from './components/reviews';
import Aos from "aos";
import Footer from './components/footer';
import Gallery from './components/gallery';


function App() {
  Aos.init();
  let [he, setlang] = useState(true)
  const changeLang = () => {
    setlang(!he);
  }
  return (
    <div className="App">

      <label className="switch">
        <input type="checkbox" onChange={changeLang} />
        <div className="slider round"><span> EN </span>   <span> HE </span></div>
      </label>
      <Header he={he} />
      <Main he={he} />
      <AboutMe he={he} />
      <Reviews he={he} />
      <Gallery he={he} />
      <Footer he={he} />
    </div>
  );
}

export default App;
