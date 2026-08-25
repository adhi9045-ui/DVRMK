import React from 'react';
import { FileText, Download, Eye, ShieldCheck, CheckSquare } from 'lucide-react';

const Documents = () => {
  const docs = [
    {
      titleTa: 'கழக சட்டதிட்டங்கள் & விதிமுறைகள்',
      size: '2.4 MB PDF',
      descTa: 'டிரைவர் முன்னேற்ற கழகத்தின் கொள்கைகள், உறுப்பினர் உரிமைகள் மற்றும் அமைப்புக் கட்டமைப்பு கையேடு.'
    },
    {
      titleTa: 'ஓட்டுநர் நலவாரிய விண்ணப்பப் படிவம்',
      size: '1.1 MB PDF',
      descTa: 'தமிழ்நாடு அரசு ஓட்டுநர் நலவாரியத்தில் பதிவு செய்து மருத்துவ மற்றும் விபத்து உதவி பெறுவதற்கான படிவம்.'
    },
    {
      titleTa: 'அவசர சட்ட உதவி வழிகாட்டி கையேடு',
      size: '1.8 MB PDF',
      descTa: 'வாகன விபத்து மற்றும் காவல் விசாரணை நேரங்களில் ஓட்டுநர்கள் அறிய வேண்டிய அடிப்படை உரிமைகள்.'
    }
  ];

  return (
    <section id="documents" className="section" style={{ background: 'rgba(15, 12, 12, 0.7)' }}>
      <div className="container">
        <div className="section-header">
          <span className="red-badge tamil-text">ஆவணங்கள் & படிவங்கள்</span>
          <h2 className="section-title tamil-text">
            அதிகாரப்பூர்வ <span className="gold-gradient-text">அறிக்கைகள் & கையேடுகள்</span>
          </h2>
          <p className="section-subtitle tamil-text">
            ஓட்டுநர் தோழர்கள் பதிவிறக்கம் செய்து பயன்படுத்திக்கொள்ள வேண்டிய முக்கிய ஆவணங்கள்.
          </p>
        </div>

        <div className="vision-grid">
          {docs.map((doc, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div className="vision-icon-box">
                  <FileText size={26} />
                </div>
                <div>
                  <h3 className="tamil-text" style={{ fontSize: '1.1rem', color: 'var(--gold-bright)', fontWeight: 700 }}>
                    {doc.titleTa}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{doc.size}</span>
                </div>
              </div>

              <p className="tamil-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                {doc.descTa}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-gold btn-full tamil-text" style={{ padding: '0.5rem', fontSize: '0.85rem' }}>
                  <Download size={16} />
                  <span>பதிவிறக்கம்</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
