import React from 'react';
import { MessageSquareQuote, Sparkles, Award } from 'lucide-react';

const Leadership = () => {
  // Policy Leaders (கொள்கைத் தலைவர்கள்)
  const policyLeaders = [
    {
      nameTa: 'ஷேர் ஆட்டோ சந்திரா',
      nameEn: 'Share Auto Chandra',
      roleTa: 'கொள்கைத் தலைவர் (Policy Leader)',
      quoteTa: '"ஏழை எளிய ஆட்டோ ஓட்டுநர்களின் உரிமைகளுக்காகவும் நியாயமான வாழ்வாதாரத்திற்காகவும் உறுதியுடன் நிற்போம்."',
      photo: `${import.meta.env.BASE_URL}assets/share_auto_chandra.jpg`
    },
    {
      nameTa: 'பில்லாரம்',
      nameEn: 'Billaram',
      roleTa: 'கொள்கைத் தலைவர் (Policy Leader)',
      quoteTa: '"சாலைப் பாதுகாப்பும், ஓட்டுநர்களின் ஒற்றுமையுமே நமது இயக்கத்தின் வெற்றிக்கு மூலதனம்."',
      photo: `${import.meta.env.BASE_URL}assets/dmk_logo.png`
    },
    {
      nameTa: 'ஸ்பைடர் மேன்',
      nameEn: 'Spider-Man',
      roleTa: 'கொள்கைத் தலைவர் (Policy Leader)',
      quoteTa: '"பெரிய பொறுப்புடன் ஓட்டுநர் சமூகத்திற்குச் சேவை செய்வதும், ஆபத்துக்களில் கைகொடுத்து உதவுவதும் எங்களின் கொள்கை."',
      photo: `${import.meta.env.BASE_URL}assets/dmk_logo.png`
    },
    {
      nameTa: 'ஹல்க்',
      nameEn: 'Hulk',
      roleTa: 'கொள்கைத் தலைவர் (Policy Leader)',
      quoteTa: '"அநீதிகளையும் அக்கிரமங்களையும் எதிர்க்கும் அசுர பலம் கொண்ட இயக்கமாக கழகம் தொடர்ந்து செயல்படும்."',
      photo: `${import.meta.env.BASE_URL}assets/dmk_logo.png`
    },
    {
      nameTa: 'செங்கல் சிவா',
      nameEn: 'Sengal Shiva',
      roleTa: 'கொள்கைத் தலைவர் (Policy Leader)',
      quoteTa: '"உழைக்கும் வர்க்க ஓட்டுநர்களின் கௌரவத்தையும் உழைப்பையும் யாருக்கும் விட்டுக்கொடுக்க மாட்டோம்."',
      photo: `${import.meta.env.BASE_URL}assets/dmk_logo.png`
    }
  ];

  return (
    <section id="leadership" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="red-badge tamil-text">
            <Award size={14} /> டிரைவர் முன்னேற்றக் கழகம்
          </span>
          <h2 className="section-title tamil-text">
            கழகத்தின் <span className="gold-gradient-text">கொள்கைத் தலைவர்கள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            ஓட்டுநர் சமுதாயத்தின் விடிவெள்ளியாக முன்னின்று கழகத்தின் கொள்கைகளையும் வழிகாட்டுதலையும் வழங்கும் தலைவர்கள்.
          </p>
        </div>

        {/* Policy Leaders Grid */}
        <div className="leadership-grid">
          {policyLeaders.map((leader, idx) => (
            <div key={idx} className="glass-card leader-card">
              <div className="leader-photo-box">
                <img 
                  src={leader.photo} 
                  alt={leader.nameEn} 
                  className="leader-photo logo-no-distortion"
                  onError={(e) => { e.target.src = `${import.meta.env.BASE_URL}assets/dmk_logo.png`; }}
                />
              </div>

              <h3 className="leader-name tamil-text" style={{ color: 'var(--gold-bright)' }}>
                {leader.nameTa}
              </h3>
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
