import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, CheckCircle, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { submitContact } from '../api';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal-contact'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMsg('');

    try {
      const data = await submitContact(formData);
      setStatus('success');
      setStatusMsg(data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      if (err?.errors) {
        setStatusMsg(err.errors.map((e: any) => e.msg).join('. '));
      } else {
        setStatusMsg(err?.message || 'Failed to send message.');
      }
    }
  };

  return (
    <section id="contact" ref={containerRef}>
      {/* Background decoration */}
      <div className="ambient-glow glow-1" style={{ top: 'auto', bottom: '-200px', right: '10%' }}></div>

      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper gsap-reveal-contact">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Info Details */}
          <div className="gsap-reveal-contact" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Let's build something <span className="text-gradient">incredible</span> together.
            </h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Have a project in mind, need a full-stack developer for your team, or just want to connect? Send a message through the form, or reach out directly via email or social links!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', border: '1px solid var(--border-glass)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email</h4>
                  <a href="mailto:deepaggarwall2004@gmail.com" style={{ fontSize: '1.05rem', fontWeight: 600, transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                    deepaggarwall2004@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(6,182,212,0.1)', color: 'var(--secondary)', border: '1px solid var(--border-glass)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Location</h4>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>New Delhi, India</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(139,92,246,0.1)', color: 'var(--accent)', border: '1px solid var(--border-glass)' }}>
                  <LinkedInIcon width={22} height={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/deepali-aggarwal-80367b243/" target="_blank" rel="noreferrer" style={{ fontSize: '1.05rem', fontWeight: 600, transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                    linkedin.com/in/deepali-aggarwal-80367b243/
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)', border: '1px solid var(--border-glass)' }}>
                  <GitHubIcon width={22} height={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>GitHub</h4>
                  <a href="https://github.com/deepali-aggarwal" target="_blank" rel="noreferrer" style={{ fontSize: '1.05rem', fontWeight: 600, transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                    /deepali-aggarwal
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Card */}
          <div className="glass-panel gsap-reveal-contact" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <textarea 
                  name="message"
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  style={{ resize: 'none' }}
                />
                <label htmlFor="message" className="form-label">Message Details (min 10 characters)</label>
              </div>

              {/* Status messages feedback loop */}
              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.8rem', borderRadius: '8px', color: '#34d399', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle size={18} />
                  <span>{statusMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.8rem', borderRadius: '8px', color: '#fca5a5', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <AlertCircle size={18} />
                  <span>{statusMsg}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'loading'}
                style={{ alignSelf: 'flex-start', border: 'none', gap: '0.6rem', padding: '0.9rem 2.2rem' }}
              >
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </button>

            </form>
          </div>
        </div>

      </div>

      <style>{`
        @media screen and (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
