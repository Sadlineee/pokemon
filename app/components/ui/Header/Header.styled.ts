import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  height: 5rem;

  @media ${({ theme }) => theme.media.extraLarge}, ${({ theme }) => theme.media.large} {
    padding: 0 5rem;
  }

  @media ${({ theme }) => theme.media.medium}, ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const AppTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`