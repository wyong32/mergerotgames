<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <h1 class="page-title">Merge Fellas</h1>
        <div class="home-layout">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Main Game Section -->
            <section>
              <GameFrame
                :iframe-src="data.iframeSrc"
                :image-url="data.imageSrc"
                :game-title="data.gameTitle"
              />
            </section>

            <!-- About Section -->
            <section class="about-section info-card">
              <h2 class="section-title">About the Fellas</h2>
              <div v-html="data.aboutHtml" class="prose"></div>
            </section>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <h2 class="section-title">Hot Games</h2>
            <GameGrid :games="fellaGames" />
          </aside>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GameFrame from '@/components/GameFrame.vue'
import GameGrid from '@/components/GameGrid.vue'
import { mergeFellasData as data } from '@/data/mergeFellas.js'
import { mergeGamesData } from '@/data/mergeGames.js'

const fellaGames = computed(() => {
  return mergeGamesData.gamesList.filter((game) => game.isFella)
})
</script>

<style scoped>
/* Page Title Styles */
.page-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    #ff4081, /* Bright Pink */
    #8e24aa, /* Purple */
    #ff4081  /* Bright Pink */
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  background-size: 200% auto;
  animation: text-shine 5s linear infinite;
}

@keyframes text-shine {
  to {
    background-position: 200% center;
  }
}

.home-layout {
  display: flex;
  gap: 1rem;
}

.main-content {
  flex: 3; /* Takes up 3 parts of the space */
}

.sidebar {
  flex: 1; /* Takes up 1 part of the space */
  position: sticky;
  top: 1rem;
  align-self: flex-start; /* Aligns to the top */
  background-color: rgba(224, 247, 250, 0.5); /* Semi-transparent Light Cyan, frosted glass */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  border-radius: 1rem; /* Softer corners */
  padding: 1rem;
  border: 2px solid white;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.2);
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

/* Gradients for Section Titles */
.sidebar .section-title {
  background: linear-gradient(90deg, #ff80ab, #ff9e80); /* Pink to Orange-Pink */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-section .section-title {
  background: linear-gradient(90deg, #b388ff, #8c9eff); /* Lavender to Indigo */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.prose {
  margin: 0;
}

/* Card layout for info sections */
.info-card {
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15); /* Soft Pink Glow */
}

@media (max-width: 1024px) {
  .home-layout{
    flex-direction: column;
  }

  .sidebar{
    width: 100%;
    position: static;
  }

  .main-content {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .info-card, .sidebar {
    padding: 0.5rem; 
  }

  .info-card{
    margin-top: 0.5rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

</style> 