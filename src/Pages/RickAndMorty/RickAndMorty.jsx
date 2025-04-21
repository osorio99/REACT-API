import { useEffect, useState } from "react"
import Card from "../../Layout/Card/Card"
const URL = 'https://rickandmortyapi.com/api/character'

export const RickAndMorty = () => {

  const [characters, setCharacters] = useState([])

  const handleGetCharacters = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setCharacters(data.results)
  }

  return (
    <>
      <button onClick={handleGetCharacters}>Traer personajes</button>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          characters.map(character => (
            <Card key={character.id} {...character} />
          ))
        }
      </section>
    </>
  )
}