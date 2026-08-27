import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(15, 12, 12, 0.9)' }}>
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">தொடர்புகொள்ள</span>
          <h2 className="section-title tamil-text">
            கழகத் தலைமை <span className="gold-gradient-text">அலுவலகம்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            உங்கள் சந்தேகங்கள், சட்ட உதவி தேவைகள் அல்லது புதிய கிளை துவங்குதல் பற்றிய தகவல்களுக்கு தொடர்பு கொள்ளவும்.
          </p>
        </div>

        <div className="contact-grid">
          {/* HQ Info Card */}
          <div className="glass-card" style={{ border: '2px solid var(--border-gold)' }}>
            <h3 className="tamil-text" style={{ fontSize: '1.4rem', color: 'var(--gold-bright)', fontWeight: 800, marginBottom: '1.25rem' }}>
              தலைமையகம் (HQ)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="vision-icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="tamil-text" style={{ fontWeight: 700, color: 'var(--text-light)', display: 'block' }}>முகவரி (Address)</span>
                  <span className="tamil-text" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    டிரைவர் முன்னேற்ற கழகம், எண் 45, அண்ணா சாலை, தேனாம்பேட்டை, சென்னை, தமிழ்நாடு - 600018.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="vision-icon-box">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="tamil-text" style={{ fontWeight: 700, color: 'var(--text-light)', display: 'block' }}>அவசர உதவி எண் (24/7 Helpline)</span>
                  <span className="gold-bright" style={{ fontWeight: 800, fontSize: '1.1rem' }}>+91 12345 67890 / 044-2435 9999</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="vision-icon-box">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="tamil-text" style={{ fontWeight: 700, color: 'var(--text-light)', display: 'block' }}>மின்னஞ்சல் (Email)</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>contact@drivermunnetrakazhagam.org</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="vision-icon-box">
                  <Clock size={24} />
                </div>
                <div>
                  <span className="tamil-text" style={{ fontWeight: 700, color: 'var(--text-light)', display: 'block' }}>அலுவலக நேரம் (Office Hours)</span>
                  <span className="tamil-text" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>திங்கள் - சனி: காலை 9:00 - மாலை 7:00 வரை</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="glass-card">
            <h3 className="tamil-text" style={{ fontSize: '1.3rem', color: 'var(--text-light)', fontWeight: 800, marginBottom: '1rem' }}>
              செய்தி அனுப்பவும்
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={56} className="gold-bright" style={{ margin: '0 auto 1rem auto' }} />
                <h4 className="tamil-text" style={{ color: 'var(--gold-bright)', fontSize: '1.2rem', fontWeight: 700 }}>
                  நன்றி! செய்தி பெறப்பட்டது.
                </h4>
                <p className="tamil-text" style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  எங்கள் கழகப் பிரதிநிதி உங்களை விரைவில் தொலைபேசியில் தொடர்புகொள்வார்.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label tamil-text">உங்கள் பெயர் (Name)</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="எ.கா. மு. காமராஜ்"
                    className="form-input tamil-text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label tamil-text">தொலைபேசி எண் (Mobile Number)</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="1234567890"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label tamil-text">மாவட்டம் (District)</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="எ.கா. சென்னை / மதுரை / கோவை"
                    className="form-input tamil-text"
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label tamil-text">செய்தி (Message)</label>
                  <textarea 
                    rows="3" 
                    required 
                    placeholder="உங்கள் விவரங்கள் அல்லது சந்தேகங்களை எழுதவும்..."
                    className="form-input tamil-text"
                    style={{ resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-full tamil-text" style={{ marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>செய்தி அனுப்புக (Send Message)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
