import styled from 'styled-components'
import { PaginationButtonProps } from '@/types/PaginationButtonProps'

export const PaginationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
`

export const PaginationButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['currentPage', 'pageNum'].includes(prop)
})<PaginationButtonProps>`
  aspect-ratio: 1;
  height: 2rem;
  margin: 0 5px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ currentPage, pageNum }) => (currentPage === pageNum ? `white` : 'black')};
  background-color: ${({ currentPage, pageNum }) => (currentPage === pageNum ? 'orangered' : 'white')};
  border: none;
  border-radius: 50%;
  cursor: pointer;
`