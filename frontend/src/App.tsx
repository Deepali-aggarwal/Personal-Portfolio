import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <LoadingScreen />
      <StarField />

      {/* Premium custom mouse glow spotlight effect */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 99,
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="mouse-spotlight"
      />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />

      <style>{`
        @media (hover: none) {
          .mouse-spotlight {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
