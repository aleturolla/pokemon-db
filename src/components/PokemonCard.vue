<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon'
import { computed } from 'vue';

const props = defineProps<{
  pokemon: Pokemon
}>()

const normalizedName = computed(() => {
  const name = props.pokemon.name.replace('-', ' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
})
const types = computed(() => props.pokemon.types.map(t => t.type.name))
</script>
<template>
<div class="p-1 w-60 rounded-xl shadow-lg text-center" :class="`bg-gradient-${types.join('-')}`">
  <div class="p-4 bg-white rounded-xl">
    <img
      class="mx-auto"
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
    />
    <h3 class="text-xl font-semibold mb-2">{{ normalizedName }}</h3>
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
</template>
