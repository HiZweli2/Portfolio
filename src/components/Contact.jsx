import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { contactLinks } from '../data/portfolio';

const getIcon = (text, href) => {
  if (href.startsWith('mailto:')) return Mail;
  if (href.startsWith('tel:')) return Phone;
  if (text === 'GitHub') return Github;
  if (text === 'LinkedIn') return Linkedin;
  return Mail;
};

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '8rem 4rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 300,
        marginBottom: '1rem',
        letterSpacing: '-0.01em'
      }}>
        Let's Connect
      </h2>
      <div style={{
        width: '60px',
        height: '2px',
        background: 'linear-gradient(90deg, #5fbfa7 0%, transparent 100%)',
        marginBottom: '3rem'
      }} />

      <p style={{
        fontSize: '1.25rem',
        lineHeight: 1.7,
        opacity: 0.7,
        maxWidth: '700px',
        marginBottom: '3rem',
        fontWeight: 300
      }}>
        Open to discussing cloud architecture projects, DevOps consulting, 
        or full-stack development opportunities.
      </p>

      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {contactLinks.map((link, i) => {
          const Icon = getIcon(link.text, link.href);
          return (
            <a key={i} href={link.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.5rem',
              color: '#e8e8e8',
              textDecoration: 'none',
              fontSize: '1rem',
              border: '1px solid rgba(232, 232, 232, 0.15)',
              transition: 'all 0.3s ease',
              background: 'rgba(232, 232, 232, 0.02)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${link.color}60`;
              e.currentTarget.style.background = `${link.color}15`;
              e.currentTarget.style.color = link.color;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(232, 232, 232, 0.15)';
              e.currentTarget.style.background = 'rgba(232, 232, 232, 0.02)';
              e.currentTarget.style.color = '#e8e8e8';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <Icon size={20} />
              {link.text}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
