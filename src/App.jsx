import React from 'react';
import Contact from './components/contact/Contact';
import Skills from './components/Skills/Skills'
import Footer from './components/footer/Footer'
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/Topbar/Topbar';

function App(){
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
