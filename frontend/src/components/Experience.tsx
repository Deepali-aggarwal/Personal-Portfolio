import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal-exp'),
      { opacity: 0, y: 50 },
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

  const experiences = [
    {
      role: 'Software Developer Trainee',
      company: 'TetraTrion Technologies Pvt. Ltd',
      period: 'Nov 2025 – Feb 2026',
      location: 'Online Mode',
      details: [
        'Learned and implemented RESTful API development using Express.js and Node.js for backend services.',
        'Structured and exchanged data efficiently using JSON schemas, ensuring seamless and fast frontend–backend communication.',
        'Implemented custom global error handling middleware and robust input validation using express-validator to ensure secure, stable API responses.',
        'Gained hands-on experience in structured API documentation, defining routes, request bodies, query schemas, and status codes.'
      ],
      skillsUsed: ['Node.js', 'Express.js', 'REST APIs', 'JSON Schema', 'Input Validation', 'API Docs']
    }
  ];

  return (
    <section id="experience" ref={sectionRef} style={{ background: 'var(--section-alt)' }}>
      {/* Background decoration */}
      <div className="ambient-glow glow-3" style={{ opacity: 0.2 }}></div>

      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper gsap-reveal-exp">
          <span className="section-subtitle">Professional Path</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        {/* Timeline */}
        <div className={`timeline${experiences.length === 1 ? ' timeline--single' : ''}`}>
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${experiences.length === 1 ? 'center' : idx % 2 === 0 ? 'right' : 'left'} gsap-reveal-exp`}
            >
              <div className="glass-panel timeline-content">
                
                {/* Header info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--secondary)' }}>
                    <Briefcase size={18} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{exp.role}</h3>
                  </div>

                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {exp.company}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job Duties list */}
                <ul 
                  style={{ 
                    listStyleType: 'none', 
                    paddingLeft: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.8rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {exp.details.map((detail, dIdx) => (
                    <li 
                      key={dIdx} 
                      style={{ 
                        position: 'relative', 
                        paddingLeft: '1.5rem',
                        textAlign: 'left'
                      }}
                    >
                      <span 
                        style={{ 
                          position: 'absolute', 
                          left: 0, 
                          top: '0.5em', 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: 'var(--secondary)' 
                        }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.2rem' }}>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.6rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        color: 'var(--secondary)',
                        borderRadius: '4px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
