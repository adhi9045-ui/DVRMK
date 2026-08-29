import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';
import { X, Sparkles, CheckCircle2, Download, Upload, Loader2, ShieldCheck, BadgeCheck } from 'lucide-react';

const JoinModal = ({ isOpen, onClose, initialData = null }) => {
  const [step, setStep] = useState(initialData ? 2 : 1);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    mobile: initialData?.mobile || '',
    district: initialData?.district || 'சென்னை',
    photoUrl: initialData?.photoUrl || null
  });
  const [memberId, setMemberId] = useState(initialData?.id || '');

  useEffect(() => {
    if (initialData) {
      setStep(2);
      setMemberId(initialData.id);
      setFormData({
        fullName: initialData.fullName || '',
        mobile: initialData.mobile || '',
        district: initialData.district || 'சென்னை',
        photoUrl: initialData.photoUrl || null
      });
    } else if (isOpen) {
      // If opened directly without data, default to step 1
      setStep(1);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setMemberId(`DMK-TN-${randomNum}`);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      fullName: '',
      mobile: '',
      district: 'சென்னை',
      photoUrl: null
    });
    onClose();
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setDownloading(true);
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3, // Ultra-sharp 3x crystal-clear export
        quality: 1,
        style: {
          margin: '0',
          borderRadius: '16px'
        }
      });
      const link = document.createElement('a');
      link.download = `DMK-Member-Pass-${memberId || 'ID'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Image export failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div 
      className="lightbox-backdrop"
      onClick={handleReset}
      style={{ zIndex: 2200 }}
    >
      <div 
        className="glass-card modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="modal-close-btn"
          aria-label="Close Dialog"
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
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <img 
                src={`${import.meta.env.BASE_URL}assets/dmk_logo.png`} 
                alt="DMK Emblem" 
                className="logo-no-distortion"
                style={{ width: '60px', height: '60px', margin: '0 auto 0.4rem auto' }}
              />
              <h3 className="tamil-text" style={{ fontSize: '1.3rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
                கழகத்தில் உறுப்பினராக இணையுங்கள்
              </h3>
              <p className="tamil-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                புகைப்படத்துடன் கூடிய டிஜிட்டல் உறுப்பினர் அட்டை உடனடியாக உருவாக்கப்படும்!
              </p>
            </div>

            <form onSubmit={handleRegister}>
              {/* Photo Upload Section */}
              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label tamil-text">
                  உறுப்பினர் புகைப்படம் (Member Photo) *
                </label>
                
                <div 
                  style={{
                    border: '2px dashed var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    textAlign: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0,
                      cursor: 'pointer',
                      width: '100%',
                      height: '100%'
                    }}
                  />

                  {formData.photoUrl ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                      <img 
                        src={formData.photoUrl} 
                        alt="Uploaded Preview" 
                        className="uploaded-photo-preview"
                      />
                      <div style={{ textAlign: 'left' }}>
                        <span className="tamil-text gold-bright" style={{ fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>
                          புகைப்படம் தேர்வு செய்யப்பட்டது ✓
                        </span>
                        <span className="tamil-text" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          மாற்ற கிளிக் செய்யவும்
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                      <Upload size={28} className="gold-bright" />
                      <span className="tamil-text" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)' }}>
                        புகைப்படத்தைப் பதிவேற்ற கிளிக் செய்யவும்
                      </span>
                      <span className="tamil-text" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        (PNG, JPG - உங்கள் அடையாள அட்டைக்கு)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Full Name Field */}
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

              {/* Mobile Number & District in 2 columns (responsive) */}
              <div className="modal-input-grid">
                <div className="form-group">
                  <label className="form-label tamil-text">கைபேசி எண் (Mobile) *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="10 இலக்க எண் (எ.கா. 9876543210)"
                    className="form-input"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்"
                    value={formData.mobile}
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, mobile: digitsOnly });
                    }}
                  />
                </div>

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
                    <option value="தஞ்சாவூர்">தஞ்சாவூர்</option>
                    <option value="தூத்துக்குடி">தூத்துக்குடி</option>
                  </select>
                </div>
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
              {initialData?.isScannedVerification ? (
                <BadgeCheck size={46} className="gold-bright" style={{ margin: '0 auto 0.3rem auto' }} />
              ) : (
                <CheckCircle2 size={44} className="gold-bright" style={{ margin: '0 auto 0.3rem auto' }} />
              )}
              <h3 className="tamil-text" style={{ fontSize: '1.25rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
                {initialData?.isScannedVerification 
                  ? 'அங்கீகரிக்கப்பட்ட உறுப்பினர் அட்டை (Verified Pass ✓)'
                  : 'வாழ்த்துக்கள்! உறுப்பினர் சேர்க்கை நிறைவடைந்தது'
                }
              </h3>
            </div>

            {/* Generated DMK Digital ID Pass */}
            <div 
              id="printable-member-card"
              ref={cardRef}
              className="id-card-preview"
            >
              <div className="id-card-header">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/dmk_logo.png`} 
                  alt="DMK Logo" 
                  className="id-card-logo logo-no-distortion" 
                  crossOrigin="anonymous"
                />
                <div>
                  <div className="id-card-title tamil-text">டிரைவர் முன்னேற்ற கழகம்</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gold-bright)', letterSpacing: '1px' }}>OFFICIAL MEMBER PASS</div>
                </div>
              </div>

              <div className="id-card-body">
                <div className="id-card-photo-wrapper">
                  <img 
                    src={formData.photoUrl || `${import.meta.env.BASE_URL}assets/dmk_logo.png`} 
                    alt="Member Photo" 
                    className="id-card-user-photo"
                    crossOrigin="anonymous"
                    onError={(e) => { e.target.src = `${import.meta.env.BASE_URL}assets/dmk_logo.png`; }}
                  />
                  <span className="gold-badge tamil-text" style={{ fontSize: '0.68rem', marginTop: '0.45rem' }}>
                    சரிபார்க்கப்பட்டது
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', justifyContent: 'center' }}>
                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">பெயர்:</span>
                    <span className="id-field-value tamil-text">{formData.fullName}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">உறுப்பினர் எண்:</span>
                    <span className="id-field-value" style={{ color: 'var(--gold-bright)', fontSize: '0.92rem', fontWeight: 800 }}>
                      {memberId}
                    </span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">கைபேசி எண்:</span>
                    <span className="id-field-value">{formData.mobile}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-field-label tamil-text">மாவட்டம்:</span>
                    <span className="id-field-value tamil-text">{formData.district}</span>
                  </div>
                </div>
              </div>

              {/* ID Card Footer with QR Code */}
              <div className="id-card-footer">
                <div className="id-card-footer-info">
                  <div className="id-card-footer-slogan tamil-text">
                    <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px', color: 'var(--gold-bright)' }} />
                    தமிழ்நாடு ஓட்டுநர்கள் நல இயக்கம்
                  </div>
                  <div className="id-card-footer-sub">
                    TN DRIVER WELFARE FEDERATION • GOVT REG
                  </div>
                </div>

                <div className="id-card-qr-box">
                  <QRCodeSVG 
                    value={
                      typeof window !== 'undefined'
                        ? `${window.location.origin}${import.meta.env.BASE_URL}?id=${encodeURIComponent(memberId)}&name=${encodeURIComponent(formData.fullName)}&mobile=${encodeURIComponent(formData.mobile)}&dist=${encodeURIComponent(formData.district)}`
                        : `https://adhi9045-ui.github.io/DVRMK/?id=${encodeURIComponent(memberId)}&name=${encodeURIComponent(formData.fullName)}`
                    }
                    size={52}
                    bgColor="#FFFFFF"
                    fgColor="#120A0A"
                    level="M"
                    includeMargin={false}
                  />
                  <span className="id-card-qr-label">VERIFY PASS</span>
                </div>
              </div>
            </div>

            <div className="modal-actions-group">
              <button 
                className="btn btn-gold btn-full tamil-text"
                onClick={handleDownloadImage}
                disabled={downloading}
              >
                {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                <span>கார்டை பதிவிறக்குக (Save Card PNG)</span>
              </button>

              <button 
                className="btn btn-outline btn-full tamil-text"
                onClick={handleReset}
              >
                <span>முடிந்தது (Close)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
