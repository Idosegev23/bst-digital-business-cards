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

  // פונקציה להפרדת התפקיד מהחברה
  const splitTitle = (title: string) => {
    // דפוסים לחיפוש: פסיק + BST, פסיק + BUILDUP, או רק BST/BUILDUP
    const patterns = [
      /, (BST [^,]+)/,           // פסיק + BST + שם
      /, (BUILDUP)/,             // פסיק + BUILDUP
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
        return { jobTitle, company };
      }
    }

    // אם לא נמצא דפוס, החזר את הכל כתפקיד
    return { jobTitle: title, company: null };
  };

  const originalTitle = employee.supportsBilingual ? t(employee.title) : employee.title;
  const { jobTitle, company } = splitTitle(originalTitle);

  return (
    <div className="employee-info" data-department={employee.department}>
      <h1 className="employee-name">
        {employee.supportsBilingual ? t(employee.name) : employee.name}
      </h1>
      <p className="employee-title">
        {jobTitle}
      </p>
      {company && (
        <p className="employee-company">
          {company}
        </p>
      )}
    </div>
  )
} 