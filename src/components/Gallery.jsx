import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const logoSrc = `${import.meta.env.BASE_URL}assets/dmk_logo.png`;

  const images = [
    {
      id: 1,
      title: 'மாநில அளவிலான ஓட்டுநர் பேரணி',
      captionTa: 'சென்னை அண்ணா சாலையில் நடைபெற்ற மாபெரும் ஓட்டுநர் உரிமை பேரணி.',
      src: logoSrc
    },
    {
      id: 2,
      title: 'இலவச மருத்துவ முகாம்',
      captionTa: 'ஆட்டோ மற்றும் லாரி ஓட்டுநர்களுக்கான கண் பரிசோதனை முகாம்.',
      src: logoSrc
    },
    {
      id: 3,
      title: 'நிர்வாகிகள் கலந்தாய்வு கூட்டம்',
      captionTa: 'மதுரை கிளை வளர்ச்சி மற்றும் புதிய உறுப்பினர் சேர்க்கை ஆலோசனை.',
      src: logoSrc
    },
    {
      id: 4,
      title: 'ஓட்டுநர் குடும்பங்களுக்கு நிவாரணம்',
      captionTa: 'பணியின் போது உயிரிழந்த ஓட்டுநர் குடும்பத்திற்கு நிதி உதவி வழங்கல்.',
      src: logoSrc
    }
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">புகைப்படக் காட்சியகம்</span>
          <h2 className="section-title tamil-text">
            கழகத்தின் <span className="gold-gradient-text">நினைவுச் சுவடுகள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            ஆர்ப்பாட்டங்கள், மாநாடுகள், மற்றும் களப் பணிகளின் வரலாற்றுப் படங்கள்.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #2D0505, #140505)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="gallery-img logo-no-distortion"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>

              <div className="gallery-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span className="gallery-caption tamil-text">{img.title}</span>
                  <Maximize2 size={20} className="gold-bright" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal Lightbox */}
      {selectedImage && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image lightbox"
            >
              <X size={22} />
            </button>

            <div style={{ background: '#0F0909', padding: '2rem', borderRadius: '16px', border: '2px solid var(--gold-bright)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="lightbox-img logo-no-distortion"
                style={{ width: '260px', height: '260px' }}
              />
              <div className="lightbox-caption tamil-text">{selectedImage.title}</div>
              <p className="tamil-text" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', textAlign: 'center' }}>
                {selectedImage.captionTa}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery