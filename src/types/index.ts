export interface Employee {
  id: string;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone?: string;
  office?: string;
  whatsapp?: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
    website?: string;
  };
}

export interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  image: string;
  link: string;
}

export interface Language {
  code: 'he' | 'en';
  name: string;
  isRTL: boolean;
}

export interface Translations {
  [key: string]: {
    he: string;
    en: string;
  };
} 