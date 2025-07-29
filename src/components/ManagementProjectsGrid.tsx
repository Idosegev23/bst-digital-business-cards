'use client'

import { useState } from 'react'
import './ProjectsGrid.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { ProjectGroup } from '@/types'

interface ManagementProjectsGridProps {
  projectGroups: ProjectGroup[]
}

export default function ManagementProjectsGrid({ projectGroups }: ManagementProjectsGridProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()

  const defaultProjectImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0M0MDM2Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI0Q5RDhDQyIvPgo8cmVjdCB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNEOUQ4Q0MiLz4KPC9zdmc+'

  // מערך של רדיוסים מגוונים בסגנון בנטו - 1-3 פינות מעוגלות
  const getRandomBorderRadius = (groupIndex: number, projectIndex: number) => {
    // יצירת מפתח ייחודי לכל פרויקט כדי לוודא עקביות
    const seed = groupIndex * 10 + projectIndex;
    const radiusOptions = [
      // רדיוס פינה אחת (30px)
      ['30px 0 0 0', '0 30px 0 0', '0 0 30px 0', '0 0 0 30px'],
      // רדיוס שתי פינות (25px)
      ['25px 25px 0 0', '0 25px 25px 0', '0 0 25px 25px', '25px 0 0 25px'],
      // רדיוס שלוש פינות (20px)
      ['20px 20px 20px 0', '20px 20px 0 20px', '20px 0 20px 20px', '0 20px 20px 20px']
    ];
    
    const categoryIndex = seed % 3;
    const variantIndex = Math.floor(seed / 3) % 4;
    
    return radiusOptions[categoryIndex][variantIndex];
  }

  return (
    <div className="projects-section">
      <h2 className="projects-title">{t('projects-הנהלה')}</h2>
      
      {projectGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="project-group">
          <h3 className="project-group-title">{t(group.titleKey)}</h3>
          <div className="project-group-grid">
            {group.projects.map((project, index) => {
              const borderRadius = getRandomBorderRadius(groupIndex, index);
              return (
                <div
                  key={project.id}
                  className="project-card project-card-management"
                  style={{
                    borderRadius
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => window.open(project.link, '_blank')}
                >
                <div 
                  className="project-image-container"
                  style={{
                    borderRadius
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
                    borderRadius
                  }}
                >
                  <div className="project-name-content">
                    <h4 className="project-name-title">{t(project.nameKey)}</h4>
                    <div className="project-accent-line"></div>
                  </div>
                </div>
                
                {/* Desktop hover overlay */}
                <div 
                  className="project-hover-overlay"
                  style={{
                    borderRadius
                  }}
                >
                  <div className="project-overlay-content">
                    <h4 className="project-overlay-title">{t(project.nameKey)}</h4>
                    <p className="project-overlay-description">{t(project.descriptionKey)}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}