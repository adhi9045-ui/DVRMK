import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Users, ChevronRight, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenJoinModal }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelTa: 'முகப்பு', labelEn: 'Home' },
    { id: 'about', labelTa: 'கழகம்', labelEn: 'About' },
    { id: 'leadership', labelTa: 'நிர்வாகிகள்', labelEn: 'Leadership' },
    { id: 'vision', labelTa: 'கோரிக்கைகள்', labelEn: 'Vision' },
    { id: 'events', labelTa: 'நிகழ்வுகள்', labelEn: 'Events' },
    { id: 'news', labelTa: 'செய்திகள்', labelEn: 'News' },
    { id: 'gallery', labelTa: 'காட்சியகம்', labelEn: 'Gallery' },
    { id: 'documents', labelTa: 'ஆவணங்கள்', labelEn: 'Documents' },
    { id: 'contact', labelTa: 'தொடர்பு', labelEn: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo & Brand Name */}
          <a href="#home" className="brand-logo-link" onClick={() => handleNavClick('home')}>
            <img 
              src="/assets/dmk_logo.png" 
              alt="DMK Logo" 
              className="brand-logo-img logo-no-distortion"
              onError={(e) => { e.target.src = "https://via.placeholder.com/60?text=DMK"; }}
            />
            <div className="brand-text-box">
              <span className="brand-title-ta tamil-text">டிரைவர் முன்னேற்ற கழகம்</span>
              <span className="brand-subtitle-en">Driver Munnetra Kazhagam</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link tamil-text ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.labelTa}
              </a>
            ))}
            
            <button 
              className="btn btn-gold btn-sm"
              onClick={onOpenJoinModal}
            >
              <Sparkles size={16} />
              <span className="tamil-text">இணையுங்கள்</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div 
        className={`mobile-drawer-overlay ${isDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-logo-link">
            <img 
              src="/assets/dmk_logo.png" 
              alt="DMK Logo" 
              className="brand-logo-img logo-no-distortion" 
            />
            <div className="brand-text-box">
              <span className="brand-title-ta tamil-text" style={{ fontSize: '1rem' }}>டிரைவர் முன்னேற்ற கழகம்</span>
              <span className="brand-subtitle-en">DMK TAMIL NADU</span>
            </div>
          </div>
          <button 
            className="drawer-close-btn"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link tamil-text ${activeNav === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              <ChevronRight size={18} className="gold-bright" />
              <span>{item.labelTa} ({item.labelEn})</span>
            </a>
          ))}

          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-gold)' }}>
            <button 
              className="btn btn-gold btn-full"
              onClick={() => {
                setIsDrawerOpen(false);
                onOpenJoinModal();
              }}
            >
              <Users size={18} />
              <span className="tamil-text">கழகத்தில் இணையவும் (Join DMK)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
