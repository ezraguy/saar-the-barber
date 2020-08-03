import React from 'react';
import './App.css';
import Main from './components/main-section';
import Header from './components/header';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
