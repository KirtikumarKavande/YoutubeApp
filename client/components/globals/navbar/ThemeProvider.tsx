'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem('app-theme') as 'light' | 'dark' | null
    const initial = stored || 'light'
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  return <>{children}</>
}