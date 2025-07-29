'use client'

import React from 'react'
import './SocialMediaGrid.css'
import { Employee } from '@/types'
import PhoneDropdown from './PhoneDropdown'
import { Mail, Globe, Linkedin, Instagram, Facebook } from 'lucide-react'

interface SocialMediaGridProps {
  employee: Employee;
}

export default function SocialMediaGrid({ employee }: SocialMediaGridProps) {
  return (
    <div className="social-media-grid">
      {/* שורה ראשונה: טלפון, וואטסאפ, מייל, אתר */}
      {employee.phone && (
        <PhoneDropdown phones={employee.phone} />
      )}
      
      <a href={`https://wa.me/${employee.whatsapp?.replace(/[^0-9]/g, '') || (Array.isArray(employee.phone) ? employee.phone[0] : employee.phone)?.replace(/[^0-9]/g, '')}`} className="social-icon glass-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
      
      <a href={`mailto:${employee.email}`} className="social-icon glass-icon">
        <Mail size={28} fill="none" stroke="white" strokeWidth={0.8} />
      </a>
      
      <a href={employee.socialMedia.website || "https://bst.co.il"} className="social-icon glass-icon">
        <Globe size={28} fill="none" stroke="white" strokeWidth={0.8} />
      </a>
      
      {/* שורה שנייה: פייסבוק, לינקדאין, אינסטגרם, טיקטוק */}
      <a href={employee.socialMedia.facebook || "#"} className="social-icon glass-icon">
        <Facebook size={28} fill="none" stroke="white" strokeWidth={0.8} />
      </a>
      
      <a href={employee.socialMedia.linkedin || "#"} className="social-icon glass-icon">
        <Linkedin size={28} fill="none" stroke="white" strokeWidth={0.8} />
      </a>
      
      <a href={employee.socialMedia.instagram || "#"} className="social-icon glass-icon">
        <Instagram size={28} fill="none" stroke="white" strokeWidth={0.8} />
      </a>
      
      <a href={employee.socialMedia.tiktok || "#"} className="social-icon glass-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M9 12a4 4 0 1 0 4 4V8l3-1v4"/>
          <rect x="2" y="2" width="20" height="20" rx="3" ry="3"/>
        </svg>
      </a>
    </div>
  )
} 