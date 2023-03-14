import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
// import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [pages] = useState(
    ["About", "Portfolio", "Resume"])
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function renderSwitch(page) {
    switch (page) {
      case "About":
        return <About />
      case "Portfolio":
        return <Project />
      // case "Contact":
      //   return <Contact />
      case "Resume":
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Header/>
      <Nav
      pages={pages}
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      />
      <main>
        {renderSwitch(currentPage)}
      </main>
      <Footer/>
    </div>
  );
}

export default App;