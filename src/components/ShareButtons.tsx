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
  const shareText = `${employeeName} - ${employeeTitle}\nקבוצת BST\n${currentUrl}`;
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
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