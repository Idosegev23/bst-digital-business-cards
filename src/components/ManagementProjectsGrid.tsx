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

  // רדיוסים מכוונים - הפינות הישרות מצביעות למרכז הגריד 2×2
  const getDirectionalBorderRadius = (groupIndex: number, projectIndex: number) => {
    // לוגיקה לפי מיקום בגריד 2×2
    const position = projectIndex; // 0, 1, 2, 3
    
    // רדיוס קבוע
    const radius = '15px';
    
    // מיקום בגריד 2×2 - הפינות הישרות מצביעות למרכז
    switch (position) {
      case 0: // שמאל עליון (0) - פינה ישרה מימין למטה
        return `0 0 ${radius} 0`; 
      case 1: // ימין עליון (1) - פינה ישרה משמאל למטה
        return `0 0 0 ${radius}`; 
      case 2: // שמאל תחתון (2) - פינה ישרה מימין למעלה
        return `0 ${radius} 0 0`; 
      case 3: // ימין תחתון (3) - פינה ישרה משמאל למעלה
        return `${radius} 0 0 0`; 
      default:
        return `${radius}`; // רדיוס מלא לכל הפינות
    }
  }

  return (
    <div className="projects-section">
      <h2 className="projects-title">{t('projects-הנהלה')}</h2>
      
      {projectGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="project-group">
          <h3 className="project-group-title">{t(group.titleKey)}</h3>
          <div className="project-group-grid">
            {group.projects.map((project, index) => {
              const borderRadius = getDirectionalBorderRadius(groupIndex, index);
              console.log(`Project ${index}: ${borderRadius}`);
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