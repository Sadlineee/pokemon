import { useEffect, useState } from 'react'
import { NextResponse } from 'next/server'
import Image from 'next/image'
import { Loader, Pagination } from '@/components'
import { PokemonProps } from '@/types/PokemonProps'
import { CardBox, Line, Name, OtherInfoBox, OtherInfoColumn, OtherInfoColumnText, OtherInfoColumnTitle, PhotoBox, TableBox } from './Table.styled'
import { oxanium } from '@/fonts/fonts'

const ITEMS_PER_PAGE = 20

export default function Table() {
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`./api/pokemon?page=${currentPage}&limit=${ITEMS_PER_PAGE}`)
        const data = await response.json()
        setPokemonData(data.results)
        setTotalCount(data.total)
      } catch (error) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 })
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [currentPage])

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TableBox>
            {pokemonData.map(({ id, sprites, name, abilities, types }) => (
              <CardBox key={id}>
                <PhotoBox>
                  <Image 
                    src={sprites.front_default}
                    alt={name}
                    fill={true} 
                    quality={100}
                  />
                </PhotoBox>
                <Name className={oxanium.className}>
                  {name}
                </Name>
                <Line />
                <OtherInfoBox>
                  <OtherInfoColumn>
                    <OtherInfoColumnTitle>Ability:</OtherInfoColumnTitle>
                    {abilities.map(({ slot, ability }) => (
                      <OtherInfoColumnText key={slot}>
                        {ability.name}
                      </OtherInfoColumnText>
                    ))}
                  </OtherInfoColumn> 
                  <Line />
                  <OtherInfoColumn>
                    <OtherInfoColumnTitle>Type:</OtherInfoColumnTitle>
                    {types.map(({ slot, type }) => (
                      <OtherInfoColumnText key={slot}>
                        {type.name}
                      </OtherInfoColumnText>
                    ))}
                  </OtherInfoColumn>
                </OtherInfoBox>
              </CardBox>
            ))}
          </TableBox>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}