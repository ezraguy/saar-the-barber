import React from 'react';
import './App.css';
import Main from './components/main-section';
import Header from './components/header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './components/about-me';
import Gallery from './components/gallery';
import Reviews from './components/reviews';


function App() {
  AOS.init({ offset: 300, });
  return (
    <div className="App">
      <Header />

      <Main />
      <Gallery />
      <AboutMe />
      <Reviews />
    </div>
  );
}

export default App;
