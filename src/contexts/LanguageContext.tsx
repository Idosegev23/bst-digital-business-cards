'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from '@/types';

const languages: Language[] = [
  { code: 'he', name: 'עברית', isRTL: true },
  { code: 'en', name: 'English', isRTL: false }
];

const translations: Translations = {
  name: { he: 'שם', en: 'Name' },
  title: { he: 'תפקיד', en: 'Title' },
  email: { he: 'דואר אלקטרוני', en: 'Email' },
  phone: { he: 'טלפון', en: 'Phone' },
  office: { he: 'משרד', en: 'Office' },
  whatsapp: { he: 'וואטסאפ', en: 'WhatsApp' },
  downloadVCard: { he: 'הורד כרטיס ביקור', en: 'Download VCard' },
  projects: { he: 'הפרויקטים שלנו', en: 'Our Projects' },
  contactInfo: { he: 'פרטי התקשרות', en: 'Contact Information' },
  socialMedia: { he: 'רשתות חברתיות', en: 'Social Media' },
  homepage: { he: 'דף הבית', en: 'Homepage' },
  ourTeam: { he: 'הצוות שלנו', en: 'Our Team' },
  viewCard: { he: 'צפה בכרטיס', en: 'View Card' },
  
  // About BST section translations
  'aboutBST': { he: 'אודות BST:', en: 'About BST:' },
  'bstDescription': { 
    he: 'קבוצת BST הינה קבוצת נדל"ן פרטית הפועלת כבר למעלה מ-50 שנה בתחומי יזמות, בניה והשקעות נדל"ן בארץ ובחו"ל.', 
    en: 'BST Group is a private real estate company operating for over 50 years in the fields of development, construction and real estate investments in Israel and abroad.' 
  },
  
  // Project translations
  'BSTOWERS פתח תקווה': { he: 'BSTOWERS פתח תקווה', en: 'BSTOWERS Petah Tikva' },
  'מערבה רחובות': { he: 'מערבה רחובות', en: 'Maarava Rehovot' },
  'רמברנדט 30 תל אביב': { he: 'רמברנדט 30 תל אביב', en: 'Rembrandt 30 Tel Aviv' },
  'ליליאן אנטוקלסקי, תל אביב': { he: 'ליליאן אנטוקלסקי, תל אביב', en: 'Lillian Antokolski, Tel Aviv' },
  'CREATE קרית אתא': { he: 'CREATE קרית אתא', en: 'CREATE Kiryat Ata' },
  'VIEW נצרת': { he: 'VIEW נצרת', en: 'VIEW Nazareth' },
  'PRIME נוף הגליל': { he: 'PRIME נוף הגליל', en: 'PRIME Nof HaGalil' },
  
  // Employee names and titles - bilingual employees
  'עלא טנוס': { he: 'עלא טנוס', en: 'Alaa Tannous' },
  'מנכ"ל BST GLOBAL': { he: 'מנכ"ל BST GLOBAL', en: 'CEO BST GLOBAL' },
  
  'אליאס טנוס': { he: 'אליאס טנוס', en: 'Elias Tannous' },
  'מנכ"ל': { he: 'מנכ"ל', en: 'CEO' },
  
  'גיא הלפרין': { he: 'גיא הלפרין', en: 'Guy Halperin' },
  'CEO BST England': { he: 'CEO BST England', en: 'CEO BST England' }
};

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const toggleLanguage = () => {
    setCurrentLanguage(prev => 
      prev.code === 'he' ? languages[1] : languages[0]
    );
  };

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage.code] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 