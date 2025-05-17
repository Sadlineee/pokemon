export interface PokemonProps {
  id: number
  name: string
  sprites: { front_default: string }
  abilities: Ability[]
  types: Type[]
}

interface Ability {
  ability: { name: string }
  slot: number
}

interface Type {
  type: { name: string }
  slot: number
}