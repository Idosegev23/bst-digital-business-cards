import { notFound } from 'next/navigation';
import { employees } from '@/data/employees';
import { projects } from '@/data/projects';
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

  return <ClientBusinessCard employee={employee} projects={projects} />;
} 