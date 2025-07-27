'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      title={currentLanguage.code === 'he' ? 'Switch to English' : 'עבור לעברית'}
    >
      {currentLanguage.code === 'he' ? 'EN' : 'עב'}
    </button>
  );
} 