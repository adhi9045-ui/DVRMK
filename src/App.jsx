import React, { useState, useEffect } from 'react';
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
  const [initialMemberData, setInitialMemberData] = useState(null);

  useEffect(() => {
    // Check if user scanned QR code or arrived with member verification query params
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || params.get('memberId');
    const name = params.get('name') || params.get('fullName');
    const mobile = params.get('mobile') || params.get('phone');
    const district = params.get('dist') || params.get('district') || 'சென்னை';

    if (id && name) {
      setInitialMemberData({
        id,
        fullName: decodeURIComponent(name),
        mobile: mobile ? decodeURIComponent(mobile) : '',
        district: decodeURIComponent(district),
        photoUrl: null,
        isScannedVerification: true
      });
      setIsJoinModalOpen(true);
    }
  }, []);

  return (
    <div className="app-root">
      <Navbar onOpenJoinModal={() => {
        setInitialMemberData(null);
        setIsJoinModalOpen(true);
      }} />
      <main>
        <Hero onOpenJoinModal={() => {
          setInitialMemberData(null);
          setIsJoinModalOpen(true);
        }} />
        <About />
        <Leadership />
        <Vision />
        <EventsNews />
        <Documents />
        <Gallery />
        <Contact />
      </main>
      <Footer onOpenJoinModal={() => {
        setInitialMemberData(null);
        setIsJoinModalOpen(true);
      }} />
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => {
          setIsJoinModalOpen(false);
          setInitialMemberData(null);
        }} 
        initialData={initialMemberData}
      />
    </div>
  );
}

export default App;
