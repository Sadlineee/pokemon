import { Metadata } from 'next'
import { Styled, Theme } from '@/lib'
import { ProviderProps } from '@/types/ProviderProps'
import { jersey_15 } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'pokemon',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: Readonly<ProviderProps>) {
  return (
    <html>
      <body className={jersey_15.className}>
        <Theme>
          <Styled>
            {children}
          </Styled>
        </Theme>
      </body>
    </html>
  )
}