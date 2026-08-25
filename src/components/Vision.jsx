import React from 'react';
import { CheckCircle2, Shield, HeartHandshake, Zap, FileText } from 'lucide-react';

const Vision = () => {
  const demands = [
    {
      num: '01',
      titleTa: 'ஓட்டுநர் நலவாரிய மறுசீரமைப்பு',
      descTa: 'தமிழ்நாடு அரசு ஓட்டுநர் நலவாரியத்தின் மூலம் வழங்கப்படும் விபத்து நிவாரணம் மற்றும் ஓய்வூதியத் தொகையை இருமடங்காக உயர்த்த வேண்டும்.'
    },
    {
      num: '02',
      titleTa: 'சுங்கச்சாவடி (Toll) கட்டண விலக்கு',
      descTa: 'தமிழ்நாட்டில் உள்ள அனைத்து சுங்கச்சாவடிகளிலும் உள்ளூர் ஆட்டோ மற்றும் வாடகை வாகனங்களுக்கு முழு கட்டண விலக்கு அளிக்கப்பட வேண்டும்.'
    },
    {
      num: '03',
      titleTa: '8 மணி நேர பணி வரம்பு',
      descTa: 'பேருந்து மற்றும் கனரக லாரி ஓட்டுநர்களின் விபத்துக்களைத் தடுக்க 8 மணி நேர பணி வரம்பும் கட்டாய ஓய்வு நேரமும் சட்டமாக்கப்பட வேண்டும்.'
    },
    {
      num: '04',
      titleTa: 'இலவச மருத்துவ பரிசோதனை முகாம்',
      descTa: 'அனைத்து மாவட்ட தலைநகரங்களிலும் ஓட்டுநர்களுக்கு கண் பரிசோதனை மற்றும் இரத்த அழுத்த மருத்துவ முகாம்கள் இலவசமாக நடத்தப்பட வேண்டும்.'
    },
    {
      num: '05',
      titleTa: 'காவல்துறை அத்துமீறல் தடுப்பு',
      descTa: 'வாகன தணிக்கையின் போது ஓட்டுநர்களிடம் கண்ணியமாக நடப்பதையும், தேவையின்றி அபராதம் விதிப்பதை தடுப்பதையும் அரசு உறுதி செய்ய வேண்டும்.'
    },
    {
      num: '06',
      titleTa: 'ஓட்டுநர் குடும்பங்களுக்கு இலவச வீடு',
      descTa: 'சொந்த வீடற்ற ஏழை ஓட்டுநர் குடும்பங்களுக்கு தமிழ்நாடு நகர்ப்புற வாழ்விட மேம்பாட்டு வாரியம் மூலம் முன்னுரிமை அடிப்படையில் இலவச வீடு வழங்கப்பட வேண்டும்.'
    }
  ];

  return (
    <section id="vision" className="section" style={{ background: 'rgba(10, 10, 12, 0.95)' }}>
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">நமது கோரிக்கைகள் & கொள்கை</span>
          <h2 className="section-title tamil-text">
            தமிழக அரசுக்கான <span className="gold-gradient-text">10 அம்ச கோரிக்கைகள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            ஓட்டுநர்களின் வாழ்வாதாரத்தை பாதுகாக்கவும், பாதுகாப்பான சாலைப் பயணத்தை உறுதி செய்யவும் கழகம் முன்னெடுக்கும் முதன்மை கோரிக்கைகள்.
          </p>
        </div>

        <div className="vision-grid">
          {demands.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div 
                style={{ 
                  background: 'linear-gradient(135deg, var(--gold-bright), var(--gold-dark))', 
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {item.num}
              </div>
              <div>
                <h3 className="tamil-text" style={{ fontSize: '1.15rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '0.4rem' }}>
                  {item.titleTa}
                </h3>
                <p className="tamil-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {item.descTa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
