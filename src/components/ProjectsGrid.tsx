'use client'

import { useState } from 'react'
import './ProjectsGrid.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { Project } from '@/types'

interface ProjectsGridProps {
  projects: Project[]
  department?: string
}

export default function ProjectsGrid({ projects, department }: ProjectsGridProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()
  const isUniformInitiationLayout = department === 'ייזום'

  const defaultProjectImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0M0MDM2Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI0Q5RDhDQyIvPgo8cmVjdCB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNEOUQ4Q0MiLz4KPC9zdmc+'

  // פונקציה להציג שם מתאים לפי מחלקה
  const getDisplayName = (project: Project) => {
    if (department === 'ייזום') {
      // עבור מחלקת ייזום - נציג רק את שם העיר
      const fullName = t(project.nameKey)
      
      // רשימת הערים הידועות בפרויקטים
      const cities = ['פתח תקווה', 'תל אביב', 'רחובות', 'נוף הגליל', 'קרית אתא', 'נצרת', 'נתניה', 'כפר סבא', 'ליליאן'];
      
      // נחפש עיר שמופיעה בשם הפרויקט
      const foundCity = cities.find(city => fullName.includes(city));
      
      return foundCity || fullName;
    }
    // עבור מחלקות אחרות - נציג את השם המלא ללא העיר
    return t(project.nameKey);
  }

  // מערך של רדיוסים שונים לכל פרויקט - רק פינה אחת (מוקטן)
  const borderRadiusOptions = [
    '25px 0 25px 0',    // פינה ימנית עליונה
    '0 25px 0 25px',    // פינה שמאלית עליונה  
    '25px 0 0 0',       // פינה שמאלית תחתונה
    '0 25px 0 0',       // פינה ימנית תחתונה
    '25px 0 25px 25px', // פינה ימנית עליונה (חזרה)
    '0 25px 0 25px',    // פינה שמאלית עליונה (חזרה)
    '25px 0 25px 0',    // פינה שמאלית תחתונה (חזרה)
  ]

  // עבור ייזום: פינה אחת חדה "מסודרת" לפי מיקום בגריד 3x3 (חוזר על עצמו כל 9 פרויקטים)
  type SharpCorner = 'tl' | 'tr' | 'br' | 'bl'
  const getInitiationSharpCornerByIndex = (index: number): SharpCorner => {
    const pattern: SharpCorner[][] = [
      ['tl', 'tr', 'tl'],
      ['br', 'tl', 'br'],
      ['bl', 'tr', 'bl'],
    ]

    const i = ((index % 9) + 9) % 9
    const row = Math.floor(i / 3)
    const col = i % 3
    return pattern[row][col]
  }

  const getInitiationBorderRadius = (index: number) => {
    const r = 16
    const corner = getInitiationSharpCornerByIndex(index)
    switch (corner) {
      case 'tl':
        return `0 ${r}px ${r}px ${r}px`
      case 'tr':
        return `${r}px 0 ${r}px ${r}px`
      case 'br':
        return `${r}px ${r}px 0 ${r}px`
      case 'bl':
        return `${r}px ${r}px ${r}px 0`
    }
  }

  return (
    <div className="projects-section" data-department={department}>
      <h2 className="projects-title">{t(department ? `projects-${department}` : 'projects')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const cardBorderRadius = isUniformInitiationLayout
            ? getInitiationBorderRadius(index)
            : borderRadiusOptions[index % borderRadiusOptions.length]

          const imageBorderRadius = isUniformInitiationLayout
            ? cardBorderRadius
            : cardBorderRadius

          return (
            <div
              key={project.id}
              className="project-card"
              style={{
                borderRadius: cardBorderRadius
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div 
                className="project-image-container"
                style={{
                  borderRadius: imageBorderRadius
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

                {/* Mobile overlay - always visible with glassmorphism */}
                <div className="project-name-overlay">
                  <div className="project-name-content">
                    <h3 className="project-name-title">{getDisplayName(project)}</h3>
                  </div>
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
} 