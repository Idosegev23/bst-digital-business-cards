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

  // מערך של רדיוסים שונים לכל פרויקט
  const borderRadiusOptions = [
    '50px 0 50px 0',
    '0 50px 0 50px',
    '50px 0 0 0',
    '0 50px 0 0',
    '50px 0 50px 50px',
    '0 50px 0 50px',
    '50px 0 50px 0',
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
            <div className="project-image-container">
              <img
                src={project.image}
                alt={t(project.nameKey)}
                className="project-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultProjectImage;
                }}
              />
              <div className="project-overlay">
                <h3 className="project-name">{t(project.nameKey)}</h3>
                <p className="project-description">{t(project.descriptionKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 