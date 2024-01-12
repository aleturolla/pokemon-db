import axios from 'axios'

const API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

const api = {
  pokemon: {
    get: (id: number) => API.get(`/pokemon/${id}`)
  }
}

export default api