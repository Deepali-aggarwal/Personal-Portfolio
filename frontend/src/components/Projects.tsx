import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Heart, MessageSquare, Shield, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal-proj'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const projects = [
    {
      title: 'MEDICHAIN',
      category: 'Virtual Healthcare Platform',
      description: 'A responsive virtual healthcare web platform designed to simplify access to medical consultations. Features secure, webcam-based virtual consultations and outlines an intelligent AI medical assistant integration in its architecture roadmap.',
      tech: ['React.js', 'WebRTC', 'Node.js', 'Express.js', 'CSS Grid', 'Tailwind API'],
      liveUrl: 'https://medichain-kappa.vercel.app/',
      githubUrl: '#',
      color: 'var(--secondary)',
      mockup: (
        <div style={{
          height: '200px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-glass)',
        }}>
          {/* Mockup Header bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '24px', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: '8px', fontFamily: 'monospace' }}>medichain.org/live-consultation</span>
          </div>
          
          {/* Video call simulator */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '90%', height: '70%', marginTop: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--secondary)' }}>Doctor (Live)</span>
              <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Patient (You)</span>
            </div>
          </div>
          
          {/* Heart rate indicator */}
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '50px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <Heart size={10} style={{ color: '#ef4444', animation: 'heartbeat 1.2s infinite' }} />
            <span style={{ fontSize: '10px', color: '#fca5a5', fontFamily: 'monospace', fontWeight: 600 }}>72 BPM</span>
          </div>

          <style>{`
            @keyframes heartbeat {
              0% { transform: scale(1); }
              30% { transform: scale(1.25); }
              60% { transform: scale(1); }
              80% { transform: scale(1.15); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
      )
    },
    {
      title: 'MINDCARE',
      category: 'Mental Health & Wellness Platform',
      description: 'A wellness web platform supporting user emotional well-being. Leverages client browser LocalStorage to cache interactions, mood logs, and personal configurations, delivering a highly responsive, customized, and private user experience.',
      tech: ['React.js', 'LocalStorage', 'CSS Custom Vars', 'Chart.js', 'JSON Store'],
      liveUrl: 'https://mindcare-project.vercel.app/',
      githubUrl: '#',
      color: 'var(--accent)',
      mockup: (
        <div style={{
          height: '200px',
          background: 'linear-gradient(135deg, #090514 0%, #1e1145 100%)',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-glass)',
        }}>
          {/* Mockup Header bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '24px', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: '8px', fontFamily: 'monospace' }}>mindcare.app/dashboard</span>
          </div>

          {/* Mood tracker simulator */}
          <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)' }}>How is your mood?</span>
              <Smile size={14} style={{ color: 'var(--accent)' }} />
            </div>
            
            {/* Slider bar */}
            <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: '50px', position: 'relative' }}>
              <div style={{ height: '100%', width: '75%', background: 'linear-gradient(90deg, var(--accent), var(--accent-pink))', borderRadius: '50px' }}></div>
              <div style={{ position: 'absolute', top: '-4px', left: '75%', width: '14px', height: '14px', borderRadius: '50%', background: '#fff', border: '2px solid var(--accent)', boxShadow: '0 0 10px var(--accent)' }}></div>
            </div>

            {/* Mood indicator badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginTop: '4px' }}>
              {['Calm', 'Happy', 'Anxious', 'Tired'].map((mood, idx) => (
                <div key={idx} style={{
                  padding: '3px 4px',
                  borderRadius: '4px',
                  background: idx === 1 ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.02)',
                  border: idx === 1 ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.04)',
                  fontSize: '9px',
                  textAlign: 'center',
                  color: idx === 1 ? 'var(--accent)' : 'var(--text-muted)'
                }}>
                  {mood}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" ref={containerRef}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper gsap-reveal-proj">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}
          className="projects-grid"
        >
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="glass-panel gsap-reveal-proj"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: '16px', 
                overflow: 'hidden',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Custom CSS/SVG Mockup */}
              {proj.mockup}

              {/* Content description */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
                
                <div>
                  <span style={{ fontSize: '0.8rem', color: proj.color, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {proj.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.2rem' }}>
                    {proj.title}
                  </h3>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0' }}>
                  {proj.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.6rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.2rem', marginTop: '0.5rem' }}>
                  <a 
                    href={proj.liveUrl} 
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = proj.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media screen and (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
