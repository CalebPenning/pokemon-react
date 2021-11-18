import './App.css'
import { useState, useEffect } from 'react'
import PokemonAPI from './Api'

function App() {
  const [pokemon, setPokemon] = useState({})
  let hasCalledAPI = false

  useEffect(() => {
    const getPokemonTest = async () => {
      let result = await PokemonAPI.getCharmander()
      setPokemon(result.data)
      hasCalledAPI = true
      console.log(pokemon)
    }
    if (!hasCalledAPI) getPokemonTest()
  }, [])

  if (pokemon.name) return (
    <div className="App">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} />
      <h2>Moves:</h2>
      <ul>
        {pokemon.moves.map((el, i) => <li key={i}>{el.move.name}</li>)}
      </ul>
    </div>
  )

  else return (<div>Nothing to see here</div>)
}

export default App
