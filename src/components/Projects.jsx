import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="work" style={{
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
        Selected Work
      </h2>
      <div style={{
        width: '60px',
        height: '2px',
        background: 'linear-gradient(90deg, #4a9eff 0%, transparent 100%)',
        marginBottom: '5rem'
      }} />

      <div style={{
        display: 'grid',
        gap: '4rem'
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
