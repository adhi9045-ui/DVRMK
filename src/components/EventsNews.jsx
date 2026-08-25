import React, { useState } from 'react';
import { Calendar, Tag, ArrowUpRight, Sparkles } from 'lucide-react';

const EventsNews = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      id: 1,
      type: 'events',
      titleTa: 'மாபெரும் மாநில ஓட்டுநர்கள் மாநாடு - சென்னை',
      date: 'செப்டம்பர் 15, 2026',
      categoryTa: 'மாநாடு',
      descTa: 'தமிழ்நாடு முழுவதிலும் இருந்து 10,000க்கும் மேற்பட்ட ஓட்டுநர்கள் பங்கேற்கும் மாபெரும் உரிமை முழக்க மாநாடு சென்னை YMCA மைதானத்தில் நடைபெறுகிறது.'
    },
    {
      id: 2,
      type: 'news',
      titleTa: 'ஓட்டுநர்களுக்கு இலவச கண் பரிசோதனை முகாம்',
      date: 'ஆகஸ்ட் 20, 2026',
      categoryTa: 'மருத்துவ முகாம்',
      descTa: 'மதுரை கிளை சார்பில் 500க்கும் மேற்பட்ட ஆட்டோ மற்றும் பேருந்து ஓட்டுநர்களுக்கு இலவச கண் பரிசோதனை மற்றும் கண்ணாடி வழங்கும் முகாம் வெற்றிகரமாக நடைபெற்றது.'
    },
    {
      id: 3,
      type: 'press',
      titleTa: 'சுங்கச்சாவடி கட்டண உயர்வை திரும்ப பெற வலியுறுத்தல்',
      date: 'ஆகஸ்ட் 10, 2026',
      categoryTa: 'அறிக்கை',
      descTa: 'தேசிய நெடுஞ்சாலைகளில் திடீரென உயர்த்தப்பட்ட சுங்கச்சாவடி கட்டணத்தை உடனடியாக திரும்ப பெற வலியுறுத்தி கழகத் தலைவர் அறிக்கை வெளியீடு.'
    },
    {
      id: 4,
      type: 'events',
      titleTa: 'கோவை மண்டல நிர்வாகிகள் ஆலோசனை கூட்டம்',
      date: 'ஆகஸ்ட் 05, 2026',
      categoryTa: 'கூட்டம்',
      descTa: 'கோவை, திருப்பூர், ஈரோடு மாவட்ட நிர்வாகிகளுக்கான புதிய உறுப்பினர் சேர்க்கை மற்றும் கழக வளர்ச்சி பற்றிய ஆலோசனைக் கூட்டம்.'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <section id="events" className="section">
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">நிகழ்வுகள் & செய்திகள்</span>
          <h2 className="section-title tamil-text">
            கழகத்தின் <span className="gold-gradient-text">செயல்பாடுகள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            கழகத்தின் சமீபத்திய ஆர்ப்பாட்டங்கள், மாநாடுகள், நலத்திட்ட உதவிகள் மற்றும் பத்திரிகை செய்திகள்.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="tab-controls">
          <button 
            className={`tab-btn tamil-text ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            அனைத்தும்
          </button>
          <button 
            className={`tab-btn tamil-text ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            மாநாடுகள் & நிகழ்வுகள்
          </button>
          <button 
            className={`tab-btn tamil-text ${filter === 'news' ? 'active' : ''}`}
            onClick={() => setFilter('news')}
          >
            நலத்திட்ட உதவிகள்
          </button>
          <button 
            className={`tab-btn tamil-text ${filter === 'press' ? 'active' : ''}`}
            onClick={() => setFilter('press')}
          >
            பத்திரிகை அறிக்கைகள்
          </button>
        </div>

        {/* Cards Grid */}
        <div className="news-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card news-card">
              <div className="news-img-box" style={{ background: 'linear-gradient(135deg, #2D0505, #140505)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/assets/dmk_logo.png" 
                  alt={item.titleTa} 
                  className="logo-no-distortion"
                  style={{ width: '90px', height: '90px', opacity: 0.9 }} 
                />
                <span className="news-date tamil-text">{item.date}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                <span className="gold-badge tamil-text" style={{ fontSize: '0.75rem' }}>
                  <Tag size={12} /> {item.categoryTa}
                </span>
              </div>

              <h3 className="news-title tamil-text">{item.titleTa}</h3>
              <p className="news-desc tamil-text">{item.descTa}</p>

              <button className="btn btn-outline btn-full tamil-text" style={{ padding: '0.5rem', fontSize: '0.85rem' }}>
                <span>மேலும் வாசிக்க</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsNews;
