import React from 'react';
import { Phone, Mail, Award, MessageSquareQuote } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      nameTa: 'சு. செல்வம் (கழகத் தலைவர்)',
      nameEn: 'S. Selvam',
      roleTa: 'நிறுவனத் தலைவர், DMK',
      quoteTa: '"ஓட்டுநர் சமூகத்தின் நலனுக்காகவும் அவர்களின் உரிமைகளுக்காகவும் எங்களின் குரல் எப்போதும் ஒலித்துக் கொண்டே இருக்கும்."',
      photo: '/assets/dmk_logo.png'
    },
    {
      nameTa: 'இரா. சரவணன் (பொதுச்செயலாளர்)',
      nameEn: 'R. Saravanan',
      roleTa: 'மாநில பொதுச்செயலாளர்',
      quoteTa: '"ஒவ்வொரு ஓட்டுநரின் குடும்பப் பாதுகாப்பையும், குழந்தைகளின் உயர்கல்வியையும் உறுதி செய்முறையே எங்களின் முதன்மை இலக்கு."',
      photo: '/assets/dmk_logo.png'
    },
    {
      nameTa: 'கே. கார்த்திக் (பொருளாளர்)',
      nameEn: 'K. Karthik',
      roleTa: 'மாநில பொருளாளர்',
      quoteTa: '"கழகத்தில் சேரும் ஒவ்வொரு தொகையும் ஓட்டுநர்களின் அவசர மருத்துவ மற்றும் சட்ட உதவி நிதிக்காகவே நேர்மையாகப் பயன்படுத்தப்படுகிறது."',
      photo: '/assets/dmk_logo.png'
    },
    {
      nameTa: 'எம். பிரகாஷ் (இளைஞரணி தலைவர்)',
      nameEn: 'M. Prakash',
      roleTa: 'மாநில இளைஞரணி செயலாளர்',
      quoteTa: '"இளம் ஓட்டுநர்களுக்கு நவீன தொழில் நுட்பப் பயிற்சியும், ஓட்டுநர் உரிமம் சார்ந்த விழிப்புணர்வும் வழங்க இளைஞரணி முன்நிற்கும்."',
      photo: '/assets/dmk_logo.png'
    }
  ];

  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">தலைமை நிர்வாகிகள்</span>
          <h2 className="section-title tamil-text">
            கழகத்தின் <span className="gold-gradient-text">வழிநடத்துனர்கள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            ஓட்டுநர் சமுதாயத்தின் விடிவெள்ளியாக முன்னின்று கழகத்தை வழிநடத்தும் மாநில மற்றும் மாவட்ட முக்கிய நிர்வாகிகள்.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="glass-card leader-card">
              <div className="leader-photo-box">
                <img 
                  src={leader.photo} 
                  alt={leader.nameEn} 
                  className="leader-photo logo-no-distortion"
                />
              </div>

              <h3 className="leader-name tamil-text">{leader.nameTa}</h3>
              <div className="leader-role tamil-text">{leader.roleTa}</div>

              <div className="leader-quote tamil-text">
                <MessageSquareQuote size={16} className="gold-bright" style={{ marginBottom: '0.2rem' }} />
                <br />
                {leader.quoteTa}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
