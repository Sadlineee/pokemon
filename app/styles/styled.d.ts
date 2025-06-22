import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
    },
    
    media: {
      extraLarge: string
      large: string
      medium: string
      small: string
      extraSmall: string
    }
  }
}