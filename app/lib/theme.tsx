'use client'

import { ThemeProvider } from 'styled-components'
import { ProviderProps } from '@/types/ProviderProps'
import { theme } from '@/styles/theme'

export default function Theme({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}