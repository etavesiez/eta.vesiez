import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';

function App() {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar scrollToSection={scrollToSection} />
      
      <main className="flex-grow">
        <section id={SectionId.HOME}>
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id={SectionId.SERVICES}>
          <Services />
        </section>
        
        <section id={SectionId.ABOUT}>
          <About />
        </section>
        
        <section id={SectionId.PRICING}>
          <Pricing />
        </section>
        
        <section id={SectionId.CONTACT}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;