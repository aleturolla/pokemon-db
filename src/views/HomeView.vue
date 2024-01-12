<script setup lang="ts">
import { ref } from 'vue'

import type { Pokemon } from '@/types/pokemon'
import api from '@/common/api'
import { MAX_POKEMON_ID, MIN_POKEMON_ID } from '@/common/constants'

import PokemonCard from '@/components/PokemonCard.vue'

const randomPokemon = ref<Pokemon>();

const onRandomPokemonClick = async () => {
  const randomPokemonId = Math.floor(Math.random() * (MAX_POKEMON_ID - MIN_POKEMON_ID + 1) - MIN_POKEMON_ID)
  const res = await api.pokemon.get(randomPokemonId)
  randomPokemon.value = res.data
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
    <PokemonCard v-if="randomPokemon" :pokemon="randomPokemon" />
  </main>
</template>
