import styled from 'styled-components'

export const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
`