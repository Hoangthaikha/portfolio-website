import React from 'react'

import { About, Footer, Header, Skills, Testmonial, Works } from './container';
import Navbar from './components/navbar/Navbar';

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testmonial />
      <Footer />
    </div>

  );
}

export default App;