'use client'

import React from 'react'
import './EmployeeInfo.css'
import { Employee } from '@/types'

interface EmployeeInfoProps {
  employee: Employee;
}

export default function EmployeeInfo({ employee }: EmployeeInfoProps) {
  return (
    <div className="employee-info">
      <h1 className="employee-name">{employee.name}</h1>
      <p className="employee-title">{employee.title}</p>
    </div>
  )
} 