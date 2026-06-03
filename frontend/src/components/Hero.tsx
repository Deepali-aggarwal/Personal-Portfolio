import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    
    // Initial fade in for hero elements
    tl.to(titleRef.current, { opacity: 1, y: 0, delay: 0.2 })
      .to(subtitleRef.current, { opacity: 1, y: 0 }, '-=0.6')
      .to(ctaRef.current, { opacity: 1, y: 0 }, '-=0.6')
      .to(cardContainerRef.current?.children || [], { opacity: 1, y: 0, stagger: 0.15 }, '-=0.4');
  }, []);

  return (
    <section id="home" ref={containerRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '8rem 0 4rem' }}>
      {/* Background ambient lighting */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center', zIndex: 2 }}>
        
        {/* Intro Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              width: 'max-content',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--secondary)',
              letterSpacing: '0.05em',
            }}
          >
            <Terminal size={14} />
            <span>AVAILABLE FOR HIRE</span>
          </div>

          <h1
            ref={titleRef}
            className="gsap-reveal"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              opacity: 0,
              transform: 'translateY(30px)',
            }}
          >
            Hi, I'm <span className="text-gradient">DEEPALI</span>
            <br />
            Building Interactive <span className="text-gradient-purple">Full-Stack</span> Apps
          </h1>

          <p
            ref={subtitleRef}
            className="gsap-reveal"
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '580px',
              opacity: 0,
              transform: 'translateY(30px)',
            }}
          >
            B.Tech graduate in Electronics & Communication Engineering, specializing in building responsive, scalable full-stack web applications. I turn complex logic into smooth, animated digital experiences.
          </p>

          {/* Call to actions */}
          <div
            ref={ctaRef}
            className="gsap-reveal"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', opacity: 0, transform: 'translateY(30px)' }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <a 
              href="https://www.linkedin.com/in/deepali-aggarwal-80367b243/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <LinkedInIcon width={24} height={24} />
            </a>
            <a 
              href="https://github.com/deepali-aggarwal" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <GitHubIcon width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Floating Visual Cards */}
        <div 
          ref={cardContainerRef} 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}
          className="hero-cards"
        >
          {/* Card 1 */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              transform: 'translateY(30px) rotate(-1deg)',
              opacity: 0,
              maxWidth: '380px',
              alignSelf: 'flex-start',
            }}
          >
            <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(99,102,241,0.15)', color: 'var(--primary)' }}>
              <Terminal size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Frontend Engineer</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>React.js, Next.js, GSAP & Locomotive.js animations.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              transform: 'translateY(30px) rotate(1deg)',
              opacity: 0,
              maxWidth: '380px',
              alignSelf: 'center',
              borderLeft: '3px solid var(--secondary)',
            }}
          >
            <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(6,182,212,0.15)', color: 'var(--secondary)' }}>
              <Terminal size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Backend</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Express.js, Node.js, JSON structure, and robust validation.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              transform: 'translateY(30px) rotate(-2deg)',
              opacity: 0,
              maxWidth: '380px',
              alignSelf: 'flex-end',
            }}
          >
            <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(139,92,246,0.15)', color: 'var(--accent)' }}>
              <Terminal size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>DSA & Problem Solving</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>200+ Solved algorithmic problems on Leetcode / GFG.</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media screen and (max-width: 900px) {
          #home .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home .container > div {
            align-items: center;
          }
          .hero-cards {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
