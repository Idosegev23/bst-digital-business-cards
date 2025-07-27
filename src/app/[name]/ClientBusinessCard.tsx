'use client';

import { Employee, Project } from '@/types';
import Header from '@/components/Header';
import LanguageToggle from '@/components/LanguageToggle';
import EmployeePhoto from '@/components/EmployeePhoto';
import EmployeeInfo from '@/components/EmployeeInfo';
import SocialMediaGrid from '@/components/SocialMediaGrid';
import VCardButton from '@/components/VCardButton';
import ProjectsGrid from '@/components/ProjectsGrid';
import GeometricBackground from '@/components/GeometricBackground';
import DynamicLayout from '@/components/DynamicLayout';

interface ClientBusinessCardProps {
  employee: Employee;
  projects: Project[];
}

export default function ClientBusinessCard({ employee, projects }: ClientBusinessCardProps) {
  return (
    <DynamicLayout>
      <div className="min-h-screen bg-gray-100">
        <div className="business-card-container">
          <GeometricBackground />
          {employee.supportsBilingual && <LanguageToggle />}
          <Header />

          <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto relative z-10">
            <EmployeePhoto employee={employee} />
            <EmployeeInfo employee={employee} />
            <SocialMediaGrid employee={employee} />
            <VCardButton employee={employee} />
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </div>
    </DynamicLayout>
  );
} 