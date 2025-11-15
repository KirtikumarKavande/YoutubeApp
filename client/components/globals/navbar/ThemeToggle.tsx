'use client'

import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()

  if (!mounted) return null

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setTimeout(() => {
    }, 100)
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-lg transition-colors hover:bg-gray-300"
      style={{ backgroundColor: 'var(--border)', color: 'var(--text)' }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}