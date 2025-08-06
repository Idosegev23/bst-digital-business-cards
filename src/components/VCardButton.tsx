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
    let employeeName = employee.name;
    let employeeTitle = employee.title;
    
    // אם העובד תומך בדו-לשוניות, ננסה לתרגם
    if (employee.supportsBilingual) {
      const translatedName = t(employee.name);
      const translatedTitle = t(employee.title);
      
      // רק אם התרגום שונה מהמקור (כלומר קיים תרגום) נשתמש בו
      if (translatedName !== employee.name) {
        employeeName = translatedName;
      }
      if (translatedTitle !== employee.title) {
        employeeTitle = translatedTitle;
      }
    }
    
    const companyName = getCompanyName(employee.department);
    
    // Debug - בדיקה מה בדיוק נשמר
    console.log('VCard Data:', {
      originalName: employee.name,
      finalName: employeeName,
      originalTitle: employee.title, 
      finalTitle: employeeTitle,
      company: companyName,
      supportsBilingual: employee.supportsBilingual
    });
    
    // פיצול השם לשם פרטי ומשפחה (אם יש רווח)
    const nameParts = employeeName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${lastName};${firstName};;;`,
      `FN:${employeeName}`,
      `NICKNAME:${firstName}`,
      employee.phone ? `TEL;TYPE=WORK:${Array.isArray(employee.phone) ? employee.phone[0] : employee.phone}` : '',
      Array.isArray(employee.phone) && employee.phone[1] ? `TEL;TYPE=OFFICE:${employee.phone[1]}` : '',
      `EMAIL:${employee.email}`,
      `TITLE:${employeeTitle}`,
      `ORG:${companyName}`,
      employee.socialMedia.website ? `URL:${employee.socialMedia.website}` : '',
      'END:VCARD'
    ].filter(line => line).join('\r\n');
    
    // Debug - הדפסת ה-VCard המלא
    console.log('Generated VCard:', vcard);

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