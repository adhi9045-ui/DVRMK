import React from 'react';
import { ShieldCheck, UserPlus, ArrowRight, Award, Truck, HeartHandshake } from 'lucide-react';

const Hero = ({ onOpenJoinModal }) => {
  const truckBg = `${import.meta.env.BASE_URL}assets/truck_bg.jpg`;

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 10, 12, 0.88) 0%, rgba(74, 0, 0, 0.72) 50%, rgba(10, 10, 12, 0.92) 100%), url(${truckBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Column */}
          <div className="hero-content">
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span className="red-badge tamil-text">
                <Truck size={14} /> தமிழ்நாடு அனைத்து ஓட்டுநர்கள் பேரவை
              </span>
              <span className="gold-badge tamil-text">
                <ShieldCheck size={14} /> உரிமைகள் & பாதுகாப்பு
              </span>
            </div>

            <h1 className="hero-title tamil-text">
              <span className="gold-gradient-text">டிரைவர் முன்னேற்ற கழகம்</span>
              <br />
              <span style={{ fontSize: '70%', fontWeight: 700, color: '#FFFFFF' }}>
                தமிழ்நாடு (DMK)
              </span>
            </h1>

            {/* Tamil Slogans Card */}
            <div className="hero-slogan-box">
              <div className="slogan-primary tamil-text">
                "ஒற்றுமை! ஒழுக்கம்!! உயர்வு!!!"
              </div>
              <div className="slogan-secondary tamil-text">
                பாதுகாப்பு நமது கடமை — முன்னேற்றம் நமது இலக்கம்!
              </div>
              <div className="slogan-highlight tamil-text">
                எப்பவுமே நம்மதான்!
              </div>
            </div>

            <p className="section-subtitle tamil-text" style={{ fontSize: '1.05rem', color: '#E0D8CE' }}>
              ஆட்டோ, லாரி, பஸ், டாக்ஸி, வேன் மற்றும் அனைத்து கனரக வாகன ஓட்டுநர்களின் வாழ்வாதாரம், சட்டப் பாதுகாப்பு, மருத்துவ உதவி மற்றும் சமூக விடிவிற்காக பாடுபடும் மாபெரும் மக்கள் இயக்கம்!
            </p>

            <div className="hero-cta-group">
              <button
                className="btn btn-gold"
                onClick={onOpenJoinModal}
              >
                <UserPlus size={18} />
                <span className="tamil-text">கழகத்தில் இணையவும்</span>
              </button>

              <a href="#vision" className="btn btn-outline">
                <span className="tamil-text">எங்கள் கோரிக்கைகள்</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Key Metrics */}
            <div className="hero-stats-strip">
              <div className="stat-item">
                <span className="stat-num">33+</span>
                <span className="stat-label tamil-text">உறுப்பினர்கள்</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">38</span>
                <span className="stat-label tamil-text">மாவட்ட கிளைகள்</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-label tamil-text">சட்ட & அவசர உதவி</span>
              </div>
            </div>
          </div>

          {/* Hero Logo Column */}
          <div className="hero-logo-wrapper">
            <div className="hero-logo-frame">
              <img
                src={`${import.meta.env.BASE_URL}assets/dmk_logo.png`}
                alt="Driver Munnetra Kazhagam Logo"
                className="hero-logo-img logo-no-distortion"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=DMK+Logo"; }}
              />
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid var(--border-gold)',
                padding: '0.5rem 1.2rem',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--gold-bright)'
              }}
            >
              <HeartHandshake size={18} />
              <span className="tamil-text" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                ஓட்டுநர் தோழர்களின் அதிகாரப்பூர்வ பேரியக்கம்
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
