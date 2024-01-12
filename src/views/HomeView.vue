<script setup lang="ts">
import { ref } from 'vue'

import type { Pokemon } from '@/types/pokemon'
import api from '@/common/api'
import { MAX_POKEMON_ID, MIN_POKEMON_ID } from '@/common/constants'

import Loader from '@/components/Loader.vue'
import PokemonCard from '@/components/PokemonCard.vue'

const isLoading = ref<boolean>(false)
const randomPokemon = ref<Pokemon>()

const onRandomPokemonClick = async () => {
  const randomPokemonId = Math.floor(Math.random() * (MAX_POKEMON_ID - MIN_POKEMON_ID + 1) - MIN_POKEMON_ID)
  isLoading.value = true
  
  try {
    const res = await api.pokemon.get(randomPokemonId)
    randomPokemon.value = res.data
  } catch (error) {
    console.log(error)
  }

  isLoading.value = false
}

</script>

<template>
  <main class="space-y-4">
    <h1 class="text-3xl font-bold text-blue-500">
      Pokémon DB
    </h1>

    <button
      class="py-2 px-4 text-white bg-blue-500 rounded-full"
      @click="onRandomPokemonClick">
        Random Pokémon
    </button>
    <Loader v-if="isLoading" />
    <PokemonCard v-else-if="randomPokemon" :pokemon="randomPokemon" />
  </main>
</template>
