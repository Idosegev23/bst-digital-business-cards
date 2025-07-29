import { notFound } from 'next/navigation';
import { employees } from '@/data/employees';
import { projects as initiationProjects } from '@/data/initiation-projects';
import { constructionProjects } from '@/data/construction-projects';
import { buildupProjects } from '@/data/buildup-projects';
import { canadaProjects } from '@/data/canada-projects';
import { managementProjects } from '@/data/management-projects';
import ClientBusinessCard from './ClientBusinessCard';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    name: string;
  };
}

export function generateStaticParams() {
  return employees.map((employee) => ({
    name: employee.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const employee = employees.find(emp => emp.id === params.name);
  
  if (!employee) {
    return {
      title: 'Employee Not Found - BST Global',
      description: 'The requested employee page could not be found.',
    };
  }

  return {
    title: `${employee.name} - ${employee.title} | BST Global`,
    description: `כרטיס ביקור דיגיטלי של ${employee.name}, ${employee.title} ב-BST Global`,
  };
}

export default function BusinessCardPage({ params }: PageProps) {
  const employee = employees.find(emp => emp.id === params.name);
  
  if (!employee) {
    notFound();
  }

  // בחירת פרויקטים לפי מחלקה
  const getProjectsByDepartment = (department: string) => {
    switch (department) {
      case 'בנייה':
        return constructionProjects;
      case 'BUILDUP':
        return buildupProjects;
      case 'קנדה':
        return canadaProjects;
      case 'הנהלה':
        return null; // ההנהלה תקבל טיפול מיוחד
      case 'ייזום':
      default:
        return initiationProjects;
    }
  };

  const projects = getProjectsByDepartment(employee.department || 'ייזום');

  return <ClientBusinessCard 
    employee={employee} 
    projects={projects}
    managementProjects={(employee.department || '') === 'הנהלה' ? managementProjects : undefined}
  />;
} 