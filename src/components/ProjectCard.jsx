import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div style={{
      border: '1px solid rgba(232, 232, 232, 0.08)',
      padding: '3rem',
      transition: 'all 0.4s ease',
      background: `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${project.accent}40`;
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = `0 8px 32px ${project.accent}20`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(232, 232, 232, 0.08)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: `linear-gradient(180deg, ${project.accent} 0%, transparent 100%)`
      }} />

      <div className="project-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '3rem',
        alignItems: 'start'
      }}>
        <div>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: project.accent,
            marginBottom: '0.5rem'
          }}>
            {project.role}
          </div>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            marginBottom: '1rem',
            letterSpacing: '-0.01em'
          }}>
            {project.title}
          </h3>
          {project.impact && (
            <div style={{
              fontSize: '0.875rem',
              color: project.accent,
              fontStyle: 'italic',
              opacity: 0.8,
              marginBottom: '1.5rem'
            }}>
              {project.impact}
            </div>
          )}
          
          {project.links && project.links.length > 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: project.accent,
                    textDecoration: 'none',
                    padding: '0.5rem 0.75rem',
                    border: `1px solid ${project.accent}40`,
                    background: `${project.color}20`,
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${project.accent}20`;
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${project.color}20`;
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <ExternalLink size={14} />
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            opacity: 0.8,
            marginBottom: '2rem',
            fontWeight: 300
          }}>
            {project.description}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {project.tech.map((tech, i) => (
              <span key={i} style={{
                fontSize: '0.75rem',
                padding: '0.5rem 1rem',
                background: `${project.color}30`,
                border: `1px solid ${project.accent}40`,
                letterSpacing: '0.05em',
                color: project.accent,
                transition: 'all 0.3s ease'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
