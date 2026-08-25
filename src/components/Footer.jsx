import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

const Footer = ({ onOpenJoinModal }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img 
                src="/assets/dmk_logo.png" 
                alt="DMK Emblem" 
                className="brand-logo-img logo-no-distortion"
                style={{ width: '60px', height: '60px' }}
              />
              <div className="footer-title-col">
                <span className="brand-title-ta tamil-text" style={{ fontSize: '1.2rem' }}>
                  டிரைவர் முன்னேற்ற கழகம்
                </span>
                <span className="brand-subtitle-en">Driver Munnetra Kazhagam</span>
              </div>
            </div>
            
            <p className="tamil-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              தமிழ்நாடு அனைத்து ஓட்டுநர்கள் நலன், சட்டப்பூர்வ பாதுகாப்பு மற்றும் வாழ்வாதார முன்னேற்றத்திற்கான முதன்மை இயக்கம். ஒற்றுமை! ஒழுக்கம்!! உயர்வு!!!
            </p>

            <div>
              <button className="btn btn-gold btn-sm tamil-text" onClick={onOpenJoinModal}>
                கழகத்தில் இணையவும்
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-title tamil-text">முக்கிய இணைப்புகள்</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link tamil-text">முகப்பு (Home)</a></li>
              <li><a href="#about" className="footer-link tamil-text">கழக வரலாறு (About Us)</a></li>
              <li><a href="#leadership" className="footer-link tamil-text">நிர்வாகிகள் (Leadership)</a></li>
              <li><a href="#vision" className="footer-link tamil-text">கோரிக்கைகள் (Manifesto)</a></li>
              <li><a href="#events" className="footer-link tamil-text">நிகழ்வுகள் (Events)</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="footer-title tamil-text">ஆவணங்கள் & உதவி</h4>
            <ul className="footer-links">
              <li><a href="#documents" className="footer-link tamil-text">நலவாரிய படிவங்கள்</a></li>
              <li><a href="#documents" className="footer-link tamil-text">சட்ட உதவி வழிகாட்டிகள்</a></li>
              <li><a href="#gallery" className="footer-link tamil-text">புகைப்படக் காட்சியகம்</a></li>
              <li><a href="#contact" className="footer-link tamil-text">அவசர உதவி எண்</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-title tamil-text">தலைமையகம்</h4>
            <p className="tamil-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: '1.5' }}>
              எண் 45, அண்ணா சாலை, தேனாம்பேட்டை, சென்னை, தமிழ்நாடு - 600018.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              <span className="gold-bright" style={{ fontWeight: 700 }}>📞 24/7 Helpline: +91 98765 43210</span>
              <span style={{ color: 'var(--text-muted)' }}>✉️ contact@drivermunnetrakazhagam.org</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom tamil-text">
          <p>© {new Date().getFullYear()} டிரைவர் முன்னேற்ற கழகம் (Driver Munnetra Kazhagam). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
