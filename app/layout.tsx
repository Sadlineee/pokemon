import { Metadata } from 'next'
import { Styled, Theme } from '@/lib'
import { ProviderProps } from '@/types/ProviderProps'
import { jersey_15 } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'pokemon'
}

export default function RootLayout({ children }: Readonly<ProviderProps>) {
  return (
    <Theme>
      <Styled>
        <html>
          <body className={jersey_15.className}>
            {children}
          </body>
        </html>
      </Styled>
    </Theme>
  )
}