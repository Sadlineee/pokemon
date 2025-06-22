import { useEffect } from 'react'
import { PaginationProps } from '@/types/PaginationProps'
import { oxanium } from '@/fonts/fonts'
import { PaginationBox, PaginationButton } from './Pagination.styled'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxButtons = 5
}) => {
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage')
    if (savedPage) {
      const pageNum = parseInt(savedPage, 10)
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        onPageChange(pageNum)
      }
    }
  }, [totalPages, onPageChange])

  const handlePageChange = (pageNum: number) => {
    if (pageNum !== currentPage && pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum)
      localStorage.setItem('currentPage', pageNum.toString())
    }
  }

  const getPageRange = () => {
    const half = Math.floor(maxButtons / 2)
    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, currentPage + half)

    if (end - start + 1 < maxButtons) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxButtons - 1)
      } else if (end === totalPages) {
        start = Math.max(1, end - maxButtons + 1)
      }
    }

    return { start, end }
  }

  const { start, end } = getPageRange()
  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return (
    <PaginationBox>
      <PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        currentPage={currentPage}
        pageNum={1}
        className={oxanium.className}
      >
        &lt;&lt;
      </PaginationButton>

      {pages.map((pageNum) => (
        <PaginationButton
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          currentPage={currentPage}
          pageNum={pageNum}
          className={oxanium.className}
        >
          {pageNum}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        currentPage={currentPage}
        pageNum={totalPages}
        className={oxanium.className}
      >
        &gt;&gt;
      </PaginationButton>
    </PaginationBox>
  )
}

export default Pagination