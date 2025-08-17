'use client'

import React from 'react'
import './EmployeeInfo.css'
import { Employee } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'

interface EmployeeInfoProps {
  employee: Employee;
}

export default function EmployeeInfo({ employee }: EmployeeInfoProps) {
  const { t } = useLanguage();

  // פונקציה להפרדת התפקיד לשורות נפרדות
  const splitTitle = (title: string) => {
    // אם יש פסיק, פצל לחלקים נפרדים
    if (title.includes(',')) {
      const parts = title.split(',').map(part => part.trim());
      return { titleParts: parts };
    }

    // דפוסים לחיפוש: BST, BUILDUP וכו'
    const patterns = [
      / (BST GLOBAL)$/,          // רווח + BST GLOBAL בסוף
      / (BST England)$/,         // רווח + BST England בסוף
      / (BST [^,]+)$/,           // רווח + BST + שם בסוף המחרוזת
      / (BUILDUP)$/              // רווח + BUILDUP בסוף המחרוזת
    ];

    for (const pattern of patterns) {
      const match = title.match(pattern);
      if (match) {
        const jobTitle = title.replace(pattern, '').trim();
        const company = match[1];
        return { titleParts: [jobTitle, company] };
      }
    }

    // אם לא נמצא דפוס, החזר את הכל כתפקיד יחיד
    return { titleParts: [title] };
  };

  const originalTitle = employee.supportsBilingual ? t(employee.title) : employee.title;
  const { titleParts } = splitTitle(originalTitle);

  return (
    <div className="employee-info" data-department={employee.department}>
      <h1 className="employee-name">
        {employee.supportsBilingual ? t(employee.name) : employee.name}
      </h1>
      {titleParts.map((part, index) => (
        <p key={index} className={index === 0 ? "employee-title" : "employee-company"}>
          {part}
        </p>
      ))}
    </div>
  )
} 