import React from 'react';

const Footer = ({ onOpenJoinModal }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img 
                src={`${import.meta.env.BASE_URL}assets/dmk_logo.png`} 
                alt="DMK Emblem" 
                className="brand-logo-img footer-logo-img logo-no-distortion"
                onError={(e) => { e.target.src = "https://via.placeholder.com/60?text=DMK"; }}
              />
              <div className="footer-title-col">
                <span className="brand-title-ta footer-title-ta tamil-text">
                  டிரைவர் முன்னேற்ற கழகம்
                </span>
                <span className="brand-subtitle-en footer-subtitle-en">Driver Munnetra Kazhagam</span>
              </div>
            </div>
            
            <p className="tamil-text footer-desc">
              தமிழ்நாடு அனைத்து ஓட்டுநர்கள் நலன், சட்டப்பூர்வ பாதுகாப்பு மற்றும் வாழ்வாதார முன்னேற்றத்திற்கான முதன்மை இயக்கம். ஒற்றுமை! ஒழுக்கம்!! உயர்வு!!!
            </p>

            <div className="footer-cta-box">
              <button className="btn btn-gold btn-sm tamil-text" onClick={onOpenJoinModal}>
                கழகத்தில் இணையவும்
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
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
          <div className="footer-col">
            <h4 className="footer-title tamil-text">ஆவணங்கள் & உதவி</h4>
            <ul className="footer-links">
              <li><a href="#documents" className="footer-link tamil-text">நலவாரிய படிவங்கள்</a></li>
              <li><a href="#documents" className="footer-link tamil-text">சட்ட உதவி வழிகாட்டிகள்</a></li>
              <li><a href="#gallery" className="footer-link tamil-text">புகைப்படக் காட்சியகம்</a></li>
              <li><a href="#contact" className="footer-link tamil-text">அவசர உதவி எண்</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-title tamil-text">தொடர்பு முகவரி</h4>
            <p className="tamil-text footer-address">
              எண் 45, அண்ணா சாலை, தேனாம்பேட்டை, சென்னை, தமிழ்நாடு - 600018.
            </p>
            <div className="footer-contact-info">
              <a href="tel:+911234567890" className="footer-contact-item gold-bright">
                <span>📞</span>
                <span>24/7 Helpline: +91 12345 67890</span>
              </a>
              <a href="mailto:contact@drivermunnetrakazhagam.org" className="footer-contact-item">
                <span>✉️</span>
                <span className="footer-email-text">contact@drivermunnetrakazhagam.org</span>
              </a>
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
