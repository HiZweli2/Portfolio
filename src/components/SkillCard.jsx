import React from 'react';

const SkillCard = ({ category, items, color }) => {
  return (
    <div style={{
      padding: '2rem',
      border: '1px solid rgba(232, 232, 232, 0.08)',
      background: `linear-gradient(135deg, ${color}08 0%, transparent 100%)`,
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${color}40`;
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(232, 232, 232, 0.08)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 400,
        marginBottom: '1.5rem',
        letterSpacing: '0.05em',
        color: color
      }}>
        {category}
      </h3>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((skill, i) => (
          <li key={i} style={{
            fontSize: '1rem',
            lineHeight: 2,
            opacity: 0.7,
            fontWeight: 300,
            paddingLeft: '1rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: color,
              opacity: 0.5
            }}>•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
