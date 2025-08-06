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
  downloadVCard: { he: 'להורדה לנייד', en: 'Download to Mobile' },
  projects: { he: 'הפרויקטים שלנו', en: 'Our Projects' },
  'projects-ייזום': { he: 'פרויקטים נבחרים', en: 'Selected Projects' },
  'projects-בנייה': { he: 'פרויקטים נבחרים', en: 'Selected Projects' },
  'projects-BUILDUP': { he: 'פרויקטים נבחרים', en: 'Selected Projects' },
  'projects-קנדה': { he: 'פרויקטים נבחרים', en: 'Selected Projects' },
  'projects-הנהלה': { he: 'פרויקטים נבחרים', en: 'Selected Projects' },
  
  // Management project group titles
  'ייזום BST': { he: 'ייזום BST', en: 'BST Development' },
  'בנייה BST': { he: 'בנייה BST', en: 'BST Construction' },
  'BuildUp עבודות גמר': { he: 'BuildUp עבודות גמר', en: 'BuildUp Finishing Works' },
  'BST Global': { he: 'BST Global', en: 'BST Global' },
  contactInfo: { he: 'פרטי התקשרות', en: 'Contact Information' },
  socialMedia: { he: 'רשתות חברתיות', en: 'Social Media' },
  homepage: { he: 'דף הבית', en: 'Homepage' },
  ourTeam: { he: 'הצוות שלנו', en: 'Our Team' },
  viewCard: { he: 'צפה בכרטיס', en: 'View Card' },
  
  // About BST section translations
  'aboutBST': { he: 'אודות BST:', en: 'About BST:' },
  'bstDescription': { 
    he: 'קבוצת BST הינה קבוצת נדל"ן פרטית הפועלת כבר למעלה מ-50 שנה בתחומי יזמות, בניה והשקעות נדל"ן בארץ ובחו"ל.', 
    en: 'BST is a private real estate company operating for over 50 years in the fields of development, construction and real estate investments in Israel and abroad.' 
  },
  
  // Share buttons
  'שיתוף': { he: 'שיתוף', en: 'Share' },
  'לשיתוף': { he: 'לשיתוף', en: 'For Sharing' },
  'וואטסאפ': { he: 'וואטסאפ', en: 'WhatsApp' },
  'מייל': { he: 'מייל', en: 'Email' },
  'SMS': { he: 'SMS', en: 'SMS' },
  
  // General UI elements
  'מחלקה': { he: 'מחלקה', en: 'Department' },
  'אודות': { he: 'אודות', en: 'About' },
  'צור קשר': { he: 'צור קשר', en: 'Contact Us' },

  // Language toggle
  'switchToEnglish': { he: 'Switch to English', en: 'עבור לעברית' },
  'languageCode': { he: 'EN', en: 'HE' },

  // Project translations - Initiation
  'BSTOWERS פתח תקווה': { he: 'BSTOWERS פתח תקווה', en: 'BSTOWERS Petah Tikva' },
  'מערבה רחובות': { he: 'מערבה רחובות', en: 'Maarava Rehovot' },
  'רמברנדט 30 תל אביב': { he: 'רמברנדט 30 תל אביב', en: 'Rembrandt 30 Tel Aviv' },
  'ליליאן אנטוקלסקי, תל אביב': { he: 'ליליאן אנטוקלסקי, תל אביב', en: 'Lillian Antokolski, Tel Aviv' },
  'CREATE קרית אתא': { he: 'CREATE קרית אתא', en: 'CREATE Kiryat Ata' },
  'VIEW נצרת': { he: 'VIEW נצרת', en: 'VIEW Nazareth' },
  'PRIME נוף הגליל': { he: 'PRIME נוף הגליל', en: 'PRIME Nof HaGalil' },
  
  // Project translations - Construction
  'אלוני ים הרצליה': { he: 'אלוני ים הרצליה', en: 'Aloney Yam Herzliya' },
  'קמפוס מזרחי טפחות לוד': { he: 'קמפוס מזרחי טפחות לוד', en: 'Mizrahi Tefahot Campus Lod' },
  'מגדל לקסוס': { he: 'מגדל לקסוס', en: 'Lexus Tower' },
  'מגדלי מתם שלב ג\' חיפה': { he: 'מגדלי מתם שלב ג\' חיפה', en: 'Matam Towers Phase C Haifa' },
  'פארק תמר רחובות': { he: 'פארק תמר רחובות', en: 'Tamar Park Rehovot' },
  'פארק RBS': { he: 'פארק RBS', en: 'RBS Park' },
  'SIV PARK פתח תקווה': { he: 'SIV PARK פתח תקווה', en: 'SIV PARK Petah Tikva' },
  
  // Project translations - BUILDUP
  'Palo Alto Networks': { he: 'Palo Alto Networks', en: 'Palo Alto Networks' },
  'MalamTeam': { he: 'MalamTeam', en: 'MalamTeam' },
  'Philips': { he: 'Philips', en: 'Philips' },
  'MeMed': { he: 'MeMed', en: 'MeMed' },
  'איילנד טכנולוגיה': { he: 'איילנד טכנולוגיה', en: 'Island Technology' },
  'Bionic': { he: 'Bionic', en: 'Bionic' },
  'Ryze': { he: 'Ryze', en: 'Ryze' },
  
  // Project translations - Canada
  'Champagne Centre': { he: 'Champagne Centre', en: 'Champagne Centre' },
  '108 Angeline Street': { he: '108 Angeline Street', en: '108 Angeline Street' },
  'Maebrook Roseglen': { he: 'Maebrook Roseglen', en: 'Maebrook Roseglen' },
  'Maebrook Scott': { he: 'Maebrook Scott', en: 'Maebrook Scott' },
  'Maebrook Reve': { he: 'Maebrook Reve', en: 'Maebrook Reve' },
  'Maebrook Rideau': { he: 'Maebrook Rideau', en: 'Maebrook Rideau' },
  
  // Project descriptions - Initiation
  'פרויקט מגורים יוקרתי בפתח תקווה': { he: 'פרויקט מגורים יוקרתי בפתח תקווה', en: 'Luxury residential project in Petah Tikva' },
  'פרויקט מגורים מתקדם ברחובות': { he: 'פרויקט מגורים מתקדם ברחובות', en: 'Advanced residential project in Rehovot' },
  'פרויקט בוטיק יוקרתי בלב תל אביב': { he: 'פרויקט בוטיק יוקרתי בלב תל אביב', en: 'Luxury boutique project in the heart of Tel Aviv' },
  'פרויקט יוקרה בנוף הגליל': { he: 'פרויקט יוקרה בנוף הגליל', en: 'Luxury project in Nof HaGalil' },
  'פרויקט מגורים חדשני בקרית אתא': { he: 'פרויקט מגורים חדשני בקרית אתא', en: 'Innovative residential project in Kiryat Ata' },
  'פרויקט מגורים מתקדם בתל אביב': { he: 'פרויקט מגורים מתקדם בתל אביב', en: 'Advanced residential project in Tel Aviv' },
  'פרויקט מגורים מודרני בנצרת': { he: 'פרויקט מגורים מודרני בנצרת', en: 'Modern residential project in Nazareth' },
  
  // Project descriptions - Construction
  'פרויקט בנייה מתקדם בהרצליה': { he: 'פרויקט בנייה מתקדם בהרצליה', en: 'Advanced construction project in Herzliya' },
  'פרויקט קמפוס חדשני בלוד': { he: 'פרויקט קמפוס חדשני בלוד', en: 'Innovative campus project in Lod' },
  'מגדל יוקרה מתקדם': { he: 'מגדל יוקרה מתקדם', en: 'Advanced luxury tower' },
  'פרויקט מגורים מתקדם בחיפה': { he: 'פרויקט מגורים מתקדם בחיפה', en: 'Advanced residential project in Haifa' },
  'פרויקט מגורים ברחובות': { he: 'פרויקט מגורים ברחובות', en: 'Residential project in Rehovot' },
  'פרויקט מגורים חדשני': { he: 'פרויקט מגורים חדשני', en: 'Innovative residential project' },
  'פרויקט בנייה בפתח תקווה': { he: 'פרויקט בנייה בפתח תקווה', en: 'Construction project in Petah Tikva' },
  
  // Project descriptions - BUILDUP
  'משרדי היי-טק מתקדמים': { he: 'משרדי היי-טק מתקדמים', en: 'Advanced high-tech offices' },
  'פרויקט משרדים חדשני': { he: 'פרויקט משרדים חדשני', en: 'Innovative office project' },
  'משרדי חברת פיליפס': { he: 'משרדי חברת פיליפס', en: 'Philips company offices' },
  'משרדי חברת MeMed': { he: 'משרדי חברת MeMed', en: 'MeMed company offices' },
  'משרדי חברת איילנד טכנולוגיה': { he: 'משרדי חברת איילנד טכנולוגיה', en: 'Island Technology company offices' },
  'משרדי חברת Bionic': { he: 'משרדי חברת Bionic', en: 'Bionic company offices' },
  'משרדי חברת Ryze': { he: 'משרדי חברת Ryze', en: 'Ryze company offices' },
  
  // Project descriptions - Canada
  'פרויקט מגורים יוקרתי בקנדה': { he: 'פרויקט מגורים יוקרתי בקנדה', en: 'Luxury residential project in Canada' },
  'פרויקט מגורים מתקדם': { he: 'פרויקט מגורים מתקדם', en: 'Advanced residential project' },
  'פרויקט Maebrook Roseglen': { he: 'פרויקט Maebrook Roseglen', en: 'Maebrook Roseglen project' },
  'פרויקט Maebrook Scott': { he: 'פרויקט Maebrook Scott', en: 'Maebrook Scott project' },
  'פרויקט Maebrook Reve': { he: 'פרויקט Maebrook Reve', en: 'Maebrook Reve project' },
  'פרויקט Maebrook Rideau': { he: 'פרויקט Maebrook Rideau', en: 'Maebrook Rideau project' },
  
  // Employee names and titles - bilingual employees
  'עלא טנוס': { he: 'עלא טנוס', en: 'Alaa Tannous' },
  'מנכ"ל BST GLOBAL': { he: 'מנכ"ל BST GLOBAL', en: 'CEO BST GLOBAL' },
  
  'אליאס טנוס': { he: 'אליאס טנוס', en: 'Elias Tannous' },
  'מנכ"ל': { he: 'מנכ"ל', en: 'CEO' },
  
  'אמיר מרציאנו': { he: 'אמיר מרציאנו', en: 'Amir Marciano' },
  'מנכ"ל BUILDUP': { he: 'מנכ"ל BUILDUP', en: 'CEO BUILDUP' },
  
  'אסף סימון': { he: 'אסף סימון', en: 'Assaf Simon' },
  'מנכ"ל BST ייזום': { he: 'מנכ"ל BST ייזום', en: 'CEO BST Development' },
  
  'אורנה שגב': { he: 'אורנה שגב', en: 'Orna Segev' },
  'סמנכ"ל מטה וחברה': { he: 'סמנכ"ל מטה וחברה', en: 'Deputy CEO Operations & Company' },
  
  'ערן קונפינו': { he: 'ערן קונפינו', en: 'Eran Confino' },
  'משנה למנכ"ל': { he: 'משנה למנכ"ל', en: 'Deputy CEO' },
  
  'גיא הלפרין': { he: 'גיא הלפרין', en: 'Guy Halperin' },
  'CEO BST England': { he: 'CEO BST England', en: 'CEO BST England' },
  
  'רפי ביסקר': { he: 'רפי ביסקר', en: 'Rafi Bisker' },
  'יו"ר הקבוצה': { he: 'יו"ר הקבוצה', en: 'Chairman of the Group' },
  
  'סאמר כרדוש': { he: 'סאמר כרדוש', en: 'Samer Kardosh' },
  'מנכ"ל BST בנייה': { he: 'מנכ"ל BST בנייה', en: 'CEO BST Construction' },
  
  'וסים טנוס': { he: 'וסים טנוס', en: 'Wasseem Tannous' },
  'סמנכ"ל נכסים': { he: 'סמנכ"ל נכסים', en: 'Deputy CEO Real Estate' },
  
  'גדיר טנוס': { he: 'גדיר טנוס', en: 'Ghadir Tannous' },
  'מנהלת תחום חוזים והתקשרויות': { he: 'מנהלת תחום חוזים והתקשרויות', en: 'Contracts & Procurement Manager' },
  
  // Company departments
  'BST ייזום': { he: 'BST ייזום', en: 'BST Development' },
  'BST בנייה': { he: 'BST בנייה', en: 'BST Construction' }
};

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// פונקציה לזיהוי המיקום הגיאוגרפי וקביעת השפה הראשונית
const detectUserLanguage = (): Language => {
  // ניסיון לזהות מיקום בישראל
  try {
    // בדיקת timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const israelTimezones = ['Asia/Jerusalem', 'Asia/Tel_Aviv', 'Asia/Gaza', 'Asia/Hebron'];
    
    if (israelTimezones.includes(timezone)) {
      return languages[0]; // עברית
    }
    
    // בדיקת browser locale
    const userLocale = navigator.language || navigator.languages?.[0];
    if (userLocale?.startsWith('he')) {
      return languages[0]; // עברית
    }
    
    // בדיקת שפות נוספות של הדפדפן
    const userLanguages = navigator.languages || [navigator.language];
    const hasHebrew = userLanguages.some(lang => lang.startsWith('he'));
    
    if (hasHebrew) {
      return languages[0]; // עברית
    }
    
  } catch (error) {
    console.log('Could not detect user location, defaulting to English');
  }
  
  // ברירת מחדל - אנגלית (אם לא בישראל)
  return languages[1];
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(detectUserLanguage());

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