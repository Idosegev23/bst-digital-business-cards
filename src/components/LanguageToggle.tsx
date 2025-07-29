'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { currentLanguage, toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      title={t('switchToEnglish')}
    >
      {t('languageCode')}
    </button>
  );
} 