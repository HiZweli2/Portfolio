import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '3rem 4rem',
      borderTop: '1px solid rgba(74, 158, 255, 0.15)',
      textAlign: 'center',
      fontSize: '0.875rem',
      opacity: 0.5,
      letterSpacing: '0.05em',
      position: 'relative',
      zIndex: 2
    }}>
      © {new Date().getFullYear()} Zweli Lawrence. All rights reserved.
    </footer>
  );
};

export default Footer;
