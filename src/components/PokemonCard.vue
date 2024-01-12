<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon'
import { computed } from 'vue';

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
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <h3 class="text-xl font-semibold">{{ normalizedName }}</h3>
      <div class="space-x-2">
        <span 
          v-for="type in types" 
          :key="type" 
          :class="`bg-${type}`"
          class="text-white text-xs py-1 px-3 rounded-full"
        >
          {{ type }}
        </span>
      </div>
    </div>
  </div>
  <div
    class="card-back w-full h-full p-1 rounded-xl shadow-lg"
    :class="`bg-gradient-${types.join('-')}`"
    >
    <div class="h-full grid gap-2 auto-rows-min content-center justify-items-center p-4 rounded-xl">
      <img :src="pokemon.sprites.front_shiny" :alt="pokemon.name" />
      <h3 class="text-xl text-white font-semibold">✨ {{ normalizedName }} ✨</h3>
      <div class="space-x-2">
        <span 
          v-for="type in types" 
          :key="type" 
          :class="`bg-${type}`"
          class="text-white text-xs py-1 px-3 rounded-full border border-white"
        >
          {{ type }}
        </span>
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
