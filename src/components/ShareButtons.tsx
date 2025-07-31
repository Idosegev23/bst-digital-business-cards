import React, { useState, useEffect } from 'react';
import './ShareButtons.css';
import { Employee } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ShareButtonsProps {
  employee: Employee;
}

export default function ShareButtons({ employee }: ShareButtonsProps) {
  const { t } = useLanguage();
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  // יצירת הטקסט לשיתוף
  const employeeName = employee.supportsBilingual ? t(employee.name) : employee.name;
  const employeeTitle = employee.supportsBilingual ? t(employee.title) : employee.title;
  const shareText = `${employeeName} - ${employeeTitle}\nBST Group\n${currentUrl}`;
  const encodedText = encodeURIComponent(shareText);
  
  // מספר טלפון לוואטסאפ (הראשון מהרשימה)
  const phoneNumber = Array.isArray(employee.phone) ? employee.phone[0] : employee.phone;
  const cleanPhone = phoneNumber?.replace(/[^0-9]/g, '') || '';

  return (
    <div className="share-buttons-container">
      <h3 className="share-buttons-title">{t('לשיתוף')}</h3>
      <div className="share-buttons-grid">
      {/* וואטסאפ */}
      <a 
        href={`https://wa.me/${cleanPhone}?text=${encodedText}`}
        className="share-button whatsapp-share"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>

      {/* מייל */}
      <a 
        href={`mailto:?subject=${encodeURIComponent(`כרטיס ביקור - ${employeeName}`)}&body=${encodedText}`}
        className="share-button email-share"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>

      {/* SMS */}
      <a 
        href={`sms:?body=${encodedText}`}
        className="share-button sms-share"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </a>
      </div>
    </div>
  );
} 