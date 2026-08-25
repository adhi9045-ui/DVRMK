import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Vision from './components/Vision';
import EventsNews from './components/EventsNews';
import Documents from './components/Documents';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import './App.css';

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <main>
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        <About />
        <Leadership />
        <Vision />
        <EventsNews />
        <Documents />
        <Gallery />
        <Contact />
      </main>
      <Footer onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}

export default App;
