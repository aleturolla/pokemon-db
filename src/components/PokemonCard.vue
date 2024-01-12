<script setup lang="ts">
import { computed } from 'vue'
import type { Pokemon } from '@/types/pokemon'

import TypeBadge from './TypeBadge.vue'

const props = defineProps<{
  pokemon: Pokemon
}>()

const normalizedName = computed(() => {
  const name = props.pokemon.name.replace(/-/g, ' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
})
const types = computed(() => props.pokemon.types.map(t => t.type.name))

const toggleShiny = () => {
 document.querySelector('.card')?.classList.toggle('shiny')
}
</script>
<template>
<div class="card w-60 h-60" @click="toggleShiny">
  <div
    class="card-front w-full h-full p-1 rounded-xl shadow-lg"
    :class="`bg-gradient-${types.join('-')}`"
    >
    <div class="h-full grid gap-2 auto-rows-min content-center justify-items-center p-4 bg-white rounded-xl">
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        class="w-24 h-24"
      />
      <h3 class="text-xl font-semibold">{{ normalizedName }}</h3>
      <div class="space-x-2">
        <TypeBadge v-for="type in types" :key="type" :type="type" />
      </div>
    </div>
  </div>
  <div
    class="card-back w-full h-full p-1 rounded-xl shadow-lg"
    :class="`bg-gradient-${types.join('-')}`"
    >
    <div class="h-full grid gap-2 auto-rows-min content-center justify-items-center p-4 rounded-xl">
      <img
        :src="pokemon.sprites.front_shiny || 'src/assets/pokeball-w.png'"
        :alt="pokemon.name"
        class="w-24 h-24"
      />
      <h3 class="text-xl text-white font-semibold">✨ {{ normalizedName }} ✨</h3>
      <div class="space-x-2">
        <TypeBadge v-for="type in types" :key="type" :type="type" class="border border-white" />
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.card {
  position: relative;
  perspective: 150rem;
}

.card-front, .card-back {
  transition: all .8s ease;
  position: absolute;
  backface-visibility: hidden;
  overflow: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.card.shiny .card-front {
  transform: rotateY(-180deg);
}

.card.shiny .card-back {
  transform: rotateY(0);
}
</style>
