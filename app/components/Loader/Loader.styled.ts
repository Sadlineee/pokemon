import styled from 'styled-components'

export const LoaderBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 100%;
`

export const LoaderShape = styled.div`
  font-family: Consolas, Menlo, Monaco, monospace;
  font-size: 4.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;

  &::before {
    content: '{';
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }

  &::after {
    content: '}';
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`   