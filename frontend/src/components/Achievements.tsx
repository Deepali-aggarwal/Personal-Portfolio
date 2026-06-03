import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Code2, Cpu, Trophy, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal-ach'),
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const hackathons = [
    { name: 'HACK7DAYS (7-day Hackathon by Tezos India, GTBIT)', status: 'Top 5 position', icon: <Trophy size={18} style={{ color: 'var(--secondary)' }} /> },
    { name: 'Code Genesis Hackathon (MAIT CSI Innowave)', status: 'Top 15 position', icon: <Award size={18} style={{ color: 'var(--accent)' }} /> },
    { name: 'Build with India Hackathon', status: 'Top 5,000 out of 25,000 teams', icon: <Zap size={18} style={{ color: 'var(--accent-pink)' }} /> },
    { name: 'Ideathon 2.0 Competition', status: 'Finalist', icon: <Trophy size={18} style={{ color: 'var(--primary)' }} /> },
    { name: 'Vegathon 2024 (24-hour Hackathon by IEEE GTBIT SB)', status: 'Participant', icon: <Award size={18} style={{ color: 'var(--text-muted)' }} /> },
    { name: 'Veshack Hackathon', status: 'Participant', icon: <Award size={18} style={{ color: 'var(--text-muted)' }} /> },
    { name: 'IEEE DTU & IEEE GTBIT Competition', status: '2-day Event Participant', icon: <Award size={18} style={{ color: 'var(--text-muted)' }} /> },
    { name: 'Nationwide Digital India RISC-V Vega Processor', status: '2-day Workshop Participant', icon: <Cpu size={18} style={{ color: 'var(--secondary)' }} /> },
  ];

  return (
    <section id="achievements" ref={sectionRef} style={{ background: 'var(--section-subtle)' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper gsap-reveal-ach">
          <span className="section-subtitle">Rankings & Stats</span>
          <h2 className="section-title">Achievements & Coding</h2>
        </div>

        <div 
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'start' }}
          className="ach-grid"
        >
          {/* Hackathons Card */}
          <div className="glass-panel gsap-reveal-ach" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Trophy style={{ color: 'var(--secondary)' }} />
              <span>Hackathons & Certificates</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {hackathons.map((hack, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: idx === hackathons.length - 1 ? 'none' : '1px solid var(--border-glass)'
                  }}
                >
                  <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', marginTop: '2px' }}>
                    {hack.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{hack.name}</h4>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--secondary)' }}>{hack.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Stats Card */}
          <div 
            className="glass-panel gsap-reveal-ach" 
            style={{ 
              padding: '2.5rem', 
              background: 'linear-gradient(135deg, rgba(10, 16, 45, 0.4) 0%, rgba(139, 92, 246, 0.05) 100%)',
              borderLeft: '4px solid var(--accent)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Code2 style={{ color: 'var(--accent)' }} />
              <span>Competitive Coding</span>
            </h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Solving algorithmic problems trains computational thinking and structured logic. I regularly solve challenges on industry-standard platforms.
            </p>

            {/* Circular stat ring representation */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'conic-gradient(var(--accent) 0% 75%, rgba(255,255,255,0.05) 75% 100%)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
              }}>
                {/* Inner mask */}
                <div style={{
                  width: '144px',
                  height: '144px',
                  borderRadius: '50%',
                  background: 'var(--bg-dark)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-headers)' }}>200+</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Problems</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600 }}>LeetCode Profile</span>
                <a 
                  href="https://leetcode.com/u/deepali_codes/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary" 
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                >
                  View Profile
                </a>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600 }}>GeeksforGeeks Profile</span>
                <a 
                  href="https://auth.geeksforgeeks.org/user/deepali_codes" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary" 
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                >
                  View Profile
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media screen and (max-width: 900px) {
          .ach-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
