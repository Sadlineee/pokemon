import { oxanium } from '@/fonts/fonts'
import { HeaderBox, AppTitle } from './Header.styled'

export default function Header() {
  return (
    <HeaderBox>
      <AppTitle className={oxanium.className}>
        Pokemon
      </AppTitle>
    </HeaderBox>
  )
}