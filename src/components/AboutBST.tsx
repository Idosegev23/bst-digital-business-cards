import React from 'react';
import './AboutBST.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutBST() {
  const { t } = useLanguage();

  return (
    <div className="about-bst-section">
      <p className="about-text">
        {t('bstDescription')}
      </p>
    </div>
  )
} 