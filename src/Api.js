import axios from "axios"


class PokemonAPI {
    static async getCharmander() {
        let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`)
        if (result.status !== 200) return "Uh oh!"
        else return result
    }
}

export default PokemonAPI