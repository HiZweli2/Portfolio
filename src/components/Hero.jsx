import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 4rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        maxWidth: '900px',
        animation: 'fadeInUp 1s ease-out 0.3s backwards'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.25rem',
          background: 'rgba(74, 158, 255, 0.1)',
          border: '1px solid rgba(74, 158, 255, 0.3)',
          borderRadius: '2px',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          marginBottom: '2rem',
          color: '#4a9eff'
        }}>
          BASED IN JOHANNESBURG, SOUTH AFRICA
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          DevOps Engineer<br />
          <span style={{
            background: 'linear-gradient(135deg, #5fbfa7 0%, #4a9eff 50%, #b68cd9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            & Cloud Architect
          </span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
          lineHeight: 1.6,
          opacity: 0.7,
          maxWidth: '700px',
          fontWeight: 300,
          marginBottom: '3rem',
          animation: 'fadeInUp 1s ease-out 0.5s backwards'
        }}>
          Building scalable cloud infrastructure and optimizing systems for performance and cost efficiency. 
          Specialized in GCP, data engineering, and full-stack development.
        </p>

        <div style={{
          display: 'flex',
          gap: '1.5rem',
          animation: 'fadeInUp 1s ease-out 0.7s backwards'
        }}>
          <a href="#work" style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #2d5a7b 0%, #5a3d5c 100%)',
            color: '#e8e8e8',
            textDecoration: 'none',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            border: '1px solid rgba(74, 158, 255, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #4a9eff 0%, #9d7fb8 100%)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #2d5a7b 0%, #5a3d5c 100%)';
            e.target.style.transform = 'translateY(0)';
          }}>
            VIEW WORK
          </a>
          <a href="#contact" style={{
            padding: '1rem 2rem',
            color: '#4a9eff',
            textDecoration: 'none',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            border: '1px solid rgba(74, 158, 255, 0.3)',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(74, 158, 255, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}>
            GET IN TOUCH
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        color: '#4a9eff',
        opacity: 0.5
      }}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
