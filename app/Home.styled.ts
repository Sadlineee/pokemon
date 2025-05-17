import styled from 'styled-components'

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem;

  @media ${({ theme }) => theme.media.extraLarge}, ${({ theme }) => theme.media.large} {
    padding: 0 5rem;
  }

  @media ${({ theme }) => theme.media.medium}, ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`