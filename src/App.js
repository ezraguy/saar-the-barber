import React from 'react';
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

  return (
    <div className="App">
      <Header />

      <Main />
      <AboutMe />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
