import axios from 'axios'
import { NextResponse } from 'next/server'
import { PokemonProps } from '@/types/PokemonProps'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const pageParam = url.searchParams.get('page')
    const limitParam = url.searchParams.get('limit')

    const page = pageParam ? parseInt(pageParam) : 1
    const limit = limitParam ? parseInt(limitParam) : 10

    const offset = (page - 1) * limit

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    
    const data = response.data

    const totalCount = data.count

    const pokemonDetailsPromises = data.results.map(async (pokemon: { url: string }) => {
      const res = await axios.get(pokemon.url)
      return res.data as PokemonProps
    })

    const pokemonData = await Promise.all(pokemonDetailsPromises)

    return NextResponse.json({
      results: pokemonData,
      total: totalCount,
      page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    })
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 })
  }
}