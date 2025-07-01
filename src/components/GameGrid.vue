<template>
  <div class="games-grid">
    <RouterLink
      v-for="game in games"
      :key="game.id"
      :to="`/merge-games/${game.addressBar}`"
      class="game-card"
    >
      <img :src="game.imageUrl" :alt="game.imageAlt" />
      <div class="game-card-title">{{ game.title }}</div>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  games: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
}

.game-card {
  background: white;
  border: 2px solid white;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-decoration: none;
  color: inherit;
}

.game-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: var(--color-secondary);
  box-shadow: 0 8px 25px rgba(255, 213, 79, 0.4);
}

.game-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  filter: saturate(1);
  transition: transform 0.3s ease;
}

.game-card-title {
  padding: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.2;
  color: var(--color-text);
  text-align: center;
}

@media (max-width: 768px) {
  .games-grid{
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style> 