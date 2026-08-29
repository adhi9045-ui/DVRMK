import React from 'react';
import { Shield, Award, HeartPulse, BookOpen, Clock, AlertCircle } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Shield size={28} />,
      titleTa: 'சட்டப்பூர்வ பாதுகாப்பு',
      titleEn: 'Legal Protection & Aid',
      desc: 'விபத்து மற்றும் காவல் விசாரணை நேரங்களில் ஓட்டுநர்களுக்கு இலவச 24 மணி நேர சட்ட ஆலோசனையும் வக்கீல் உதவிகளும் வழங்கப்படுகின்றன.'
    },
    {
      icon: <HeartPulse size={28} />,
      titleTa: 'மருத்துவ & விபத்து காப்பீடு',
      titleEn: 'Health & Accident Cover',
      desc: 'அனைத்து ஓட்டுநர்களுக்கும் மற்றும் அவர்தம் குடும்பத்தினருக்கும் ரூ.5 லட்சம் வரையிலான விபத்து காப்பீடு கிடைக்க நடவடிக்கை எடுக்கப்படுகிறது.'
    },
    {
      icon: <Clock size={28} />,
      titleTa: 'நெடுஞ்சாலை ஓய்வுக்கூடங்கள்',
      titleEn: 'Highway Rest Plazas',
      desc: 'நீண்ட தூர ஓட்டுநர்கள் பாதுகாப்பாக ஓய்வெடுக்க தமிழ்நாடு முழுவதும் நவீன நெடுஞ்சாலை ஓய்வுக்கூடங்கள் அமைக்க அரசுக்கு அழுத்தம் தரப்படுகிறது.'
    },
    {
      icon: <BookOpen size={28} />,
      titleTa: 'குழந்தைகள் கல்வி நிதியம்',
      titleEn: 'Education Scholarship Fund',
      desc: 'பணியின் போது உயிரிழந்த அல்லது மாற்றுத்திறனாளியான ஓட்டுநர்களின் குழந்தைகளின் பள்ளி மற்றும் கல்லூரி படிப்பிற்கான முழு கல்வி உதவித்தொகை.'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(15, 12, 12, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">கழக வரலாறு & கொள்கைகள்</span>
          <h2 className="section-title tamil-text">
            ஏன் <span className="gold-gradient-text">டிரைவர் முன்னேற்ற கழகம்?</span>
          </h2>
          <p className="section-subtitle tamil-text">
            நிரந்தர வருமானமின்றி, இரவு பகலாக உழைத்து நாட்டின் பொருளாதார சக்கரத்தை சுழற்றும் ஓட்டுநர் சமூகத்திற்கு நிலையான மரியாதையையும் பாதுகாப்பையும் உறுதி செய்யும் நோக்கில் உருவாக்கப்பட்ட பேரியக்கம்!
          </p>
        </div>

        <div className="vision-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="glass-card vision-card">
              <div className="vision-icon-box">
                {item.icon}
              </div>
              <div>
                <h3 className="vision-card-title tamil-text">{item.titleTa}</h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {item.titleEn}
                </div>
                <p className="vision-card-desc tamil-text">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Box */}
        <div
          className="glass-card"
          style={{
            marginTop: '3rem',
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(20, 16, 16, 0.9) 100%)',
            border: '2px solid var(--border-gold)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <AlertCircle size={36} className="gold-bright" />
            <div style={{ flex: 1 }}>
              <h3 className="tamil-text" style={{ fontSize: '1.25rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
                நமது சபதம்: ஓட்டுநர் வாழ்வாதார மேம்பாடு!
              </h3>
              <p className="tamil-text" style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                தமிழ்நாட்டின் 38 மாவட்டங்களிலும் உள்ள ஆட்டோ ஓட்டுநர்கள், லாரி ஓட்டுநர்கள், பேருந்து ஓட்டுநர்கள் மற்றும் டாக்ஸி ஓட்டுநர்களை ஒரே கூரையின் கீழ் இணைத்து உரிமைகளை வென்றெடுப்போம்!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
