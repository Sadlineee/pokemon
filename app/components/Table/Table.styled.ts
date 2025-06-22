import styled from 'styled-components'

export const TableBox = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;

  @media 
  ${({ theme }) => theme.media.extraLarge}, 
  ${({ theme }) => theme.media.large} 
  {
    grid-template-columns: repeat(4, 1fr);
  }

  @media 
  ${({ theme }) => theme.media.medium}, 
  ${({ theme }) => theme.media.small} 
  {
    grid-template-columns: repeat(3, 1fr);
  }

  @media 
  ${({ theme }) => theme.media.extraSmall} 
  {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CardBox = styled.div`
  height: auto;
  width: 100%;
  background-image: repeating-linear-gradient(
    45deg,
  #000000,
  #000000 40px,
  #1F1F1F 40px,
  #1F1F1F 80px
  );
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
`

export const PhotoBox = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 90%;
  margin: 0 5%;
`

export const Name = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`

export const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.white};
`

export const OtherInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`

export const OtherInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`

export const OtherInfoColumnTitle = styled.span`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.white};
`

export const OtherInfoColumnText = styled.span`
  text-align: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
`