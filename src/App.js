import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Main from './components/main-section';
import Header from './components/header';
import 'aos/dist/aos.css';
import AboutMe from './components/about-me';
import Reviews from './components/reviews';
import Aos from "aos";
import Footer from './components/footer';
const Gallery = lazy(() => import('./components/gallery'))


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
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery he={he} />
      </Suspense>
      <Footer he={he} />
    </div>
  );
}

export default App;
