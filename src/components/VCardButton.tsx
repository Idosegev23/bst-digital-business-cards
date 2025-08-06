'use client'

import React from 'react'
import './VCardButton.css'
import { Employee } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'
import { Download } from 'lucide-react'

interface VCardButtonProps {
  employee: Employee;
}

export default function VCardButton({ employee }: VCardButtonProps) {
  const { t } = useLanguage();

  const getCompanyName = (department: string | undefined): string => {
    switch (department) {
      case 'הנהלה':
        return 'BST';
      case 'ייזום':
        return t('BST ייזום');
      case 'בנייה':
        return t('BST בנייה');
      case 'BUILDUP':
        return 'BUILDUP';
      case 'קנדה':
        return 'BST GLOBAL';
      default:
        return 'BST';
    }
  };

  const generateVCard = () => {
    // שימוש בתרגום נכון בהתאם לשפה הנוכחית
    const employeeName = employee.supportsBilingual ? t(employee.name) : employee.name;
    const employeeTitle = employee.supportsBilingual ? t(employee.title) : employee.title;
    
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${employeeName}`,
      `TITLE:${employeeTitle}`,
      `ORG:${getCompanyName(employee.department)}`,
      `EMAIL:${employee.email}`,
      employee.phone ? `TEL;TYPE=WORK:${Array.isArray(employee.phone) ? employee.phone[0] : employee.phone}` : '',
      Array.isArray(employee.phone) && employee.phone[1] ? `TEL;TYPE=OFFICE:${employee.phone[1]}` : '',
      employee.socialMedia.website ? `URL:${employee.socialMedia.website}` : '',
      'END:VCARD'
    ].filter(line => line).join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${employeeName.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button 
      className="vcard-button glassmorphism"
      onClick={generateVCard}
    >
      <Download size={20} />
      <span>{t('downloadVCard')}</span>
    </button>
  )
} 