'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { employees } from '@/data/employees';
import Header from '@/components/Header';
import LanguageToggle from '@/components/LanguageToggle';
import Link from 'next/link';
import './homepage.css';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="homepage-container">
      <LanguageToggle />
      <Header />
      
      <div className="homepage-content">
        <div className="homepage-title">
          <h1>{t('ourTeam')}</h1>
          <p>קבוצת BST</p>
        </div>

        <div className="employees-grid">
          {employees.map((employee) => (
            <Link 
              key={employee.id} 
              href={`/${employee.id}`}
              className="employee-card"
            >
              <div className="employee-photo">
                <img 
                  src={employee.photo} 
                  alt={employee.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/employees/placeholder.jpg';
                  }}
                />
              </div>
              <div className="employee-info">
                <h3>{employee.name}</h3>
                <p>{employee.title}</p>
              </div>
              <div className="view-card-btn">
                {t('viewCard')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 