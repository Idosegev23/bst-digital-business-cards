'use client'

import { useState } from 'react'
import './ProjectsGrid.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { Project } from '@/types'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()

  const defaultProjectImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0M0MDM2Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI0Q5RDhDQyIvPgo8cmVjdCB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNEOUQ4Q0MiLz4KPC9zdmc+'

  // מערך של רדיוסים שונים לכל פרויקט - רק פינה אחת
  const borderRadiusOptions = [
    '50px 0 50px 0',    // פינה ימנית עליונה
    '0 50px 0 50px',    // פינה שמאלית עליונה  
    '50px 0 0 0',       // פינה שמאלית תחתונה
    '0 50px 0 0',       // פינה ימנית תחתונה
    '50px 0 50px 50px', // פינה ימנית עליונה (חזרה)
    '0 50px 0 50px',    // פינה שמאלית עליונה (חזרה)
    '50px 0 50px 0',    // פינה שמאלית תחתונה (חזרה)
  ]

  return (
    <div className="projects-section">
      <h2 className="projects-title">{t('projects')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              borderRadius: borderRadiusOptions[index % borderRadiusOptions.length]
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => window.open(project.link, '_blank')}
          >
            <div 
              className="project-image-container"
              style={{
                borderRadius: borderRadiusOptions[index % borderRadiusOptions.length]
              }}
            >
              <img 
                src={project.image} 
                alt={t(project.nameKey)} 
                className="project-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultProjectImage;
                }}
              />
            </div>
            
            {/* Mobile overlay - always visible with glassmorphism */}
            <div 
              className="project-name-overlay"
              style={{
                borderRadius: borderRadiusOptions[index % borderRadiusOptions.length]
              }}
            >
              <div className="project-name-content">
                <h3 className="project-name-title">{t(project.nameKey)}</h3>
              </div>
            </div>
            
            {/* Desktop hover overlay */}
            <div 
              className="project-hover-overlay"
              style={{
                borderRadius: borderRadiusOptions[index % borderRadiusOptions.length]
              }}
            >
              <div className="project-overlay-content">
                <h3 className="project-overlay-title">{t(project.nameKey)}</h3>
                <p className="project-overlay-description">{t(project.descriptionKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 