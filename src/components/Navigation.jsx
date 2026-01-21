import React from 'react';

const Navigation = ({ scrollY }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '2rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      backgroundColor: scrollY > 100 ? 'rgba(15, 20, 25, 0.95)' : 'transparent',
      backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
      borderBottom: scrollY > 100 ? '1px solid rgba(74, 158, 255, 0.15)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        fontSize: '0.875rem',
        letterSpacing: '0.15em',
        fontWeight: 300,
        background: 'linear-gradient(135deg, #4a9eff 0%, #9d7fb8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'fadeInDown 0.8s ease-out'
      }}>
        ZWELIHLE NLEYA
      </div>
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        fontSize: '0.875rem',
        letterSpacing: '0.1em',
        fontWeight: 300
      }}>
        {['WORK', 'EXPERTISE', 'CONTACT'].map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#e8e8e8',
              textDecoration: 'none',
              opacity: 0.7,
              transition: 'all 0.3s ease',
              animation: `fadeInDown 0.8s ease-out ${i * 0.1}s backwards`,
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '1';
              e.target.style.color = '#4a9eff';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '0.7';
              e.target.style.color = '#e8e8e8';
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
