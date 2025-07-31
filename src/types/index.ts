export interface Employee {
  id: string;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone?: string | string[];
  whatsapp?: string;
  department?: string;
  supportsBilingual?: boolean;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    website?: string;
    tiktok?: string;
    whatsapp?: string;
  };
}

export interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  image: string;
  link: string;
}

export interface ProjectGroup {
  titleKey: string;
  projects: Project[];
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