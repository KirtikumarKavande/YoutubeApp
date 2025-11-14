'use client'

import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('app-theme') as 'light' | 'dark' | null
    const initial = stored || 'light'
    
    // Update state without triggering cascading renders
    if (initial === 'dark') {
      setThemeState('dark')
      document.documentElement.classList.add('dark')
    } else {
      setThemeState('light')
      document.documentElement.classList.remove('dark')
    }
    
    setMounted(true)
  }, [])

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme)
    
    // Apply dark class to html element
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    localStorage.setItem('app-theme', newTheme)
    console.log('Theme set to:', newTheme, 'Class:', document.documentElement.className)
  }

  return { theme, setTheme, mounted }
}
