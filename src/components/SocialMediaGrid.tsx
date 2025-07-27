'use client'

import React from 'react'
import './SocialMediaGrid.css'
import { Employee } from '@/types'
import { Mail, Phone, MessageSquare, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

interface SocialMediaGridProps {
  employee: Employee;
}

export default function SocialMediaGrid({ employee }: SocialMediaGridProps) {
  const socialLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: employee.email,
      href: `mailto:${employee.email}`,
      show: true
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone', 
      value: employee.phone,
      href: `tel:${employee.phone}`,
      show: !!employee.phone
    },
    {
      icon: <MessageSquare size={24} />,
      label: 'WhatsApp',
      value: employee.whatsapp,
      href: `https://wa.me/${employee.whatsapp?.replace(/[^0-9]/g, '')}`,
      show: !!employee.whatsapp
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: employee.socialMedia.linkedin,
      href: employee.socialMedia.linkedin,
      show: !!employee.socialMedia.linkedin
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: employee.socialMedia.instagram,
      href: employee.socialMedia.instagram,
      show: !!employee.socialMedia.instagram
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      value: employee.socialMedia.facebook,
      href: employee.socialMedia.facebook,
      show: !!employee.socialMedia.facebook
    },
    {
      icon: <Youtube size={24} />,
      label: 'YouTube',
      value: employee.socialMedia.youtube,
      href: employee.socialMedia.youtube,
      show: !!employee.socialMedia.youtube
    }
  ].filter(link => link.show);

  return (
    <div className="social-media-grid">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link glassmorphism"
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
} 