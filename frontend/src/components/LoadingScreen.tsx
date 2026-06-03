import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-dark)',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '3px solid rgba(99, 102, 241, 0.15)',
          borderTopColor: 'var(--primary)',
          borderRightColor: 'var(--secondary)',
          animation: 'loader-spin 0.8s linear infinite',
          marginBottom: '1.5rem',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-headers)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
        }}
      >
        Loading...
      </span>
      <style>{`
        @keyframes loader-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
