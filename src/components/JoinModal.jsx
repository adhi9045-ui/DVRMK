import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Printer, UserCheck, CreditCard } from 'lucide-react';

const JoinModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    district: 'சென்னை',
    vehicleType: 'ஆட்டோ ஓட்டுநர் (Auto)',
    licenseNo: '',
    experience: '5+ ஆண்டுகள்'
  });
  const [memberId, setMemberId] = useState('');

  if (!isOpen) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setMemberId(`DMK-TN-${randomNum}`);
    setStep(2);
  };

  return (
    <div 
      className="lightbox-backdrop"
      onClick={onClose}
      style={{ zIndex: 2200 }}
    >
      <div 
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          background: 'var(--bg-modal)',
          border: '2px solid var(--gold-bright)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid var(--border-gold)',
            color: '#FFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <img 
                src="/assets/dmk_logo.png" 
                alt="DMK Emblem" 
                className="logo-no-distortion"
                style={{ width: '64px', height: '64px', margin: '0 auto 0.5rem auto' }}
              />
              <h3 className="tamil-text" style={{ fontSize: '1.3rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
                கழகத்தில் உறுப்பினராக இணையுங்கள்
              </h3>
              <p className="tamil-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                டிஜிட்டல் உறுப்பினர் அட்டை உடனடி சரிபார்ப்புடன் உருவாக்கப்படும்!
              </p>
            </div>

            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label tamil-text">முழுப் பெயர் (Full Name) *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="எ.கா. சு. முத்துச்சாமி"
                  className="form-input tamil-text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label tamil-text">கைபேசி எண் (Mobile Number) *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="9876543210"
                  className="form-input"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label tamil-text">மாவட்டம் (District)</label>
                  <select 
                    className="form-select tamil-text"
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                  >
                    <option value="சென்னை">சென்னை</option>
                    <option value="மதுரை">மதுரை</option>
                    <option value="கோவை">கோவை</option>
                    <option value="திருச்சி">திருச்சி</option>
                    <option value="சேலம்">சேலம்</option>
                    <option value="திருநெல்வேலி">திருநெல்வேலி</option>
                    <option value="வேலூர்">வேலூர்</option>
                    <option value="ஈரோடு">ஈரோடு</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label tamil-text">வாகன வகை (Vehicle)</label>
                  <select 
                    className="form-select tamil-text"
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  >
                    <option value="ஆட்டோ ஓட்டுநர்">ஆட்டோ</option>
                    <option value="லாரி ஓட்டுநர்">லாரி / கனரகம்</option>
                    <option value="பேருந்து ஓட்டுநர்">பேருந்து (Bus)</option>
                    <option value="டாக்ஸி / Cab">டாக்ஸி / Cab</option>
                    <option value="வேன் / வேன் ஓட்டுநர்">வேன்</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label tamil-text">ஓட்டுநர் உரிமம் எண் (DL Number) *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="TN-01-2020-0012345"
                  className="form-input"
                  value={formData.licenseNo}
                  onChange={(e) => setFormData({...formData, licenseNo: e.target.value})}
                />
              </div>

              <button type="submit" className="btn btn-gold btn-full tamil-text" style={{ marginTop: '1rem' }}>
                <Sparkles size={18} />
                <span>உறுப்பினர் கார்டு உருவாக்கவும்</span>
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <CheckCircle2 size={44} className="gold-bright" style={{ margin: '0 auto 0.3rem auto' }} />
              <h3 className="tamil-text" style={{ fontSize: '1.25rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
                வாழ்த்துக்கள்! உறுப்பினர் சேர்க்கை நிறைவடைந்தது
              </h3>
            </div>

            {/* Generated DMK Digital ID Pass */}
            <div className="id-card-preview">
              <div className="id-card-header">
                <img src="/assets/dmk_logo.png" alt="DMK Logo" className="id-card-logo logo-no-distortion" />
                <div>
                  <div className="id-card-title tamil-text">டிரைவர் முன்னேற்ற கழகம்</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gold-bright)', letterSpacing: '1px' }}>OFFICIAL MEMBER PASS</div>
                </div>
              </div>

              <div className="id-card-body">
                <div style={{ textAlign: 'center' }}>
                  <img 
                    src="/assets/dmk_logo.png" 
                    alt="Member" 
                    className="logo-no-distortion"
                    style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid var(--gold-bright)', margin: '0 auto' }}
                  />
                  <span className="gold-badge tamil-text" style={{ fontSize: '0.65rem', marginTop: '0.5rem' }}>
                    சரிபார்க்கப்பட்டது
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">பெயர்:</span>
                    <span className="id-field-value tamil-text">{formData.fullName}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">உறுப்பினர் எண்:</span>
                    <span className="id-field-value" style={{ color: 'var(--gold-bright)', fontSize: '0.85rem' }}>{memberId}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">மாவட்டம்:</span>
                    <span className="id-field-value tamil-text">{formData.district}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">வாகனம்:</span>
                    <span className="id-field-value tamil-text">{formData.vehicleType}</span>
                  </div>

                  <div className="id-card-field" style={{ gridColumn: 'span 2' }}>
                    <span className="id-field-label">DL NO:</span>
                    <span className="id-field-value" style={{ fontSize: '0.8rem' }}>{formData.licenseNo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <button 
                className="btn btn-gold btn-full tamil-text"
                onClick={() => window.print()}
              >
                <Printer size={18} />
                <span>கார்டை அச்சிடுக (Print Pass)</span>
              </button>
              <button 
                className="btn btn-outline btn-full tamil-text"
                onClick={onClose}
              >
                <span>முடிந்தது</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
