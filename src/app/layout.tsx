import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'קבוצת BST - כרטיסי ביקור דיגיטליים',
  description: 'כרטיסי ביקור דיגיטליים של צוות קבוצת BST',
  icons: {
    icon: '/BST-LOGO-NEW.svg',
    shortcut: '/BST-LOGO-NEW.svg',
    apple: '/BST-LOGO-NEW.svg',
  },
  openGraph: {
    title: 'קבוצת BST - כרטיסי ביקור דיגיטליים',
    description: 'כרטיסי ביקור דיגיטליים של צוות קבוצת BST',
    images: '/BST-LOGO-NEW.svg',
    siteName: 'BST Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'קבוצת BST - כרטיסי ביקור דיגיטליים',
    description: 'כרטיסי ביקור דיגיטליים של צוות קבוצת BST',
    images: '/BST-LOGO-NEW.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 