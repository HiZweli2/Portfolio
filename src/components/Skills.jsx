import React from 'react';
import SkillCard from './SkillCard';
import { skills, skillColors } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="expertise" style={{
      padding: '8rem 4rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      background: 'linear-gradient(180deg, transparent 0%, rgba(90, 61, 92, 0.05) 50%, transparent 100%)'
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 300,
        marginBottom: '1rem',
        letterSpacing: '-0.01em'
      }}>
        Technical Expertise
      </h2>
      <div style={{
        width: '60px',
        height: '2px',
        background: 'linear-gradient(90deg, #b68cd9 0%, transparent 100%)',
        marginBottom: '5rem'
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem'
      }}>
        {Object.entries(skills).map(([category, items], index) => {
          const color = skillColors[index % skillColors.length];
          return (
            <SkillCard 
              key={index} 
              category={category} 
              items={items} 
              color={color} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
