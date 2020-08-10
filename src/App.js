import React, { useState } from 'react';
import './App.css';
import Main from './components/main-section';
import Header from './components/header';
import 'aos/dist/aos.css';
import AboutMe from './components/about-me';
import Gallery from './components/gallery';
import Reviews from './components/reviews';
import Aos from "aos";
import Footer from './components/footer';


function App() {
  Aos.init({ mirror: false, });

  let [he, setlang] = useState(true)
  const changeLang = () => {
    setlang(!he);
  }
  return (
    <div className="App">

      <label class="switch">

        <input type="checkbox" onChange={changeLang} />
        <span class="slider round">EN  HE</span>


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
