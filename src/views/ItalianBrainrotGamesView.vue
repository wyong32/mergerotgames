<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <h1 class="page-title">Italian Brainrot Games</h1>
        <p class="page-subtitle">
          A special collection of Italian-themed brainrot games. Buon divertimento!
        </p>

        <div class="games-list">
          <RouterLink
            v-for="game in italianGames"
            :key="game.id"
            :to="`/italian-brainrot-games/${game.addressBar}`"
            class="game-card"
          >
                          <img :src="game.imageUrl" :alt="game.imageAlt" class="game-image" loading="lazy" decoding="async" />
            <div class="game-info">
              <h2 class="game-title">{{ game.title }}</h2>
            </div>
          </RouterLink>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mergeGamesData } from '@/data/mergeGames.js'

const italianGames = computed(() => {
  return mergeGamesData.gamesList.filter((game) =>
    game.category.includes('italian-brainrot-games')
  )
})

// Helper function to extract the first <p> content
function getFirstParagraph(htmlString) {
  const match = htmlString.match(/<p>(.*?)<\/p>/)
  return match ? `<p>${match[1]}</p>` : ''
}
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    #008c45, /* Italian Green */
    #f4f5f0, /* Italian White */
    #cd212a, /* Italian Red */
    #008c45  /* Repeat Green to complete the loop */
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  background-size: 200% auto;
  animation: text-shine 7s linear infinite;
}

@keyframes text-shine {
  to {
    background-position: 200% center;
  }
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--color-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  text-align: center;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.game-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(255, 128, 171, 0.3);
}

.game-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.game-info {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.game-title {
  font-size: 1rem;
  text-align: center;
}

.game-description {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.7;
}

/* Ensure nested p tags from v-html have no margin */
.game-description :deep(p) {
  margin: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .page-subtitle {
    font-size: 1rem;
    margin: 0 auto 0.5rem;
  }
  .games-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
  }
  .game-info{
    padding: 0.3rem 0.5rem;
  }
  .game-title{
    font-size: 0.8rem;
  }
}

</style> 