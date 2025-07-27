'use client'

import React from 'react'
import './EmployeePhoto.css'
import { Employee } from '@/types'

interface EmployeePhotoProps {
  employee: Employee;
}

export default function EmployeePhoto({ employee }: EmployeePhotoProps): JSX.Element {
  const defaultAvatar = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjM0M0MDM2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNTAiIHI9IjIwIiBmaWxsPSIjRDlEOENDIi8+CjxwYXRoIGQ9Ik0zMiA5NkMzMiA4MC41MzYgNDcuNTM2IDY4IDY0IDY4Qzc5LjQ2NCA2OCA5NiA4MC41MzYgOTYgOTZWMTI4SDMyVjk2WiIgZmlsbD0iI0Q5RDhDQyIvPgo8L3N2Zz4K'

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement;
    target.src = defaultAvatar;
  }

  return (
    <div className="employee-photo-container">
      <div className="employee-photo-wrapper">
        <div className="employee-photo">
          <img 
            src={employee.photo} 
            alt={employee.name} 
            className="employee-photo-img"
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  )
} 