import { Mail, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-glass)', padding: '4rem 0 2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Upper footer grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2.5rem' }}>
          
          {/* Logo & Statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-headers)' }}>
              <Terminal size={24} style={{ color: 'var(--secondary)' }} />
              <span>DEEP<span style={{ color: 'var(--primary)' }}>ALI</span></span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Building seamless full-stack web architectures and fluid UI experiences. Available for internships and engineering roles.
            </p>
          </div>

          {/* Sitemap links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.05em' }}>SITEMAP</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }} className="footer-links">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().split(' ')[0]}`} 
                  style={{ transition: 'var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Direct contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.05em' }}>CONNECT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href="mailto:deepaggarwall2004@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Mail size={16} />
                <span>deepaggarwall2004@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {currentYear} Deepali. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <a 
              href="https://www.linkedin.com/in/deepali-aggarwal-80367b243/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <LinkedInIcon width={20} height={20} />
            </a>
            <a 
              href="https://github.com/deepali-aggarwal" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <GitHubIcon width={20} height={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
