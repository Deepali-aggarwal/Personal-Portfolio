import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Compass, Database, Hammer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code size={20} style={{ color: 'var(--primary)' }} />,
    skills: ['C / C++', 'Python', 'JavaScript', 'TypeScript', 'Data Structures & Algorithms'],
  },
  {
    title: 'Web Technologies',
    icon: <Compass size={20} style={{ color: 'var(--secondary)' }} />,
    skills: ['HTML5 & CSS3', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'GSAP', 'Locomotive Scroll'],
  },
  {
    title: 'Databases',
    icon: <Database size={20} style={{ color: 'var(--accent)' }} />,
    skills: ['MongoDB', 'SQL Basics'],
  },
  {
    title: 'Tools & Environments',
    icon: <Hammer size={20} style={{ color: 'var(--accent-pink)' }} />,
    skills: ['VS Code', 'Git & GitHub', 'Jupyter Notebook', 'Postman'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal-skill'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-title-wrapper gsap-reveal-skill">
          <span className="section-subtitle">What I Bring</span>
          <h2 className="section-title">Skills & Tools</h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}
          className="skills-grid"
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel gsap-reveal-skill"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.8rem' }}>
                {cat.icon}
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{cat.title}</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--secondary)';
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-glass)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
