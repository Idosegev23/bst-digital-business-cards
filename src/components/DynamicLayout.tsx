'use client'

import React, { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  const { currentLanguage, t } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code
    document.documentElement.dir = currentLanguage.isRTL ? 'rtl' : 'ltr'
  }, [currentLanguage])

  return <>{children}</>
} 