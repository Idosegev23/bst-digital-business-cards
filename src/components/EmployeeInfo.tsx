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

  return (
    <div className="employee-info">
      <h1 className="employee-name">
        {employee.supportsBilingual ? t(employee.name) : employee.name}
      </h1>
      <p className="employee-title">
        {employee.supportsBilingual ? t(employee.title) : employee.title}
      </p>
    </div>
  )
} 