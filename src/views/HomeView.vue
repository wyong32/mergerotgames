<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <div class="home-layout">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Game Section -->
            <section class="game-section">
              <!-- <h1 class="game-title">{{ data.gameTitle }}</h1> -->
              <GameFrame
                :iframe-src="data.iframeSrc"
                :image-url="data.imageSrc"
                :game-title="data.gameTitle"
              />
            </section>

            <!-- About Section -->
            <section class="about-section info-card">
              <h2 class="section-title">About Merge Rot</h2>
              <div v-html="data.aboutHtml" class="prose"></div>
            </section>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <!-- Video Section -->
            <section class="video-section info-card">
              <h2 class="section-title">Game Trailer</h2>
              <div class="video-wrapper">
                <iframe
                  class="video-iframe"
                  :src="data.videoIframeSrc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  loading="lazy"
                >
                </iframe>
              </div>
            </section>
            
            <!-- Hot Games Section -->
            <section class="hot-games-section info-card">
              <h2 class="section-title">Hot Games</h2>
              <GameGrid :games="homeGames" />
            </section>
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
import { homeData as data } from '@/data/home.js'
import { mergeGamesData } from '@/data/mergeGames.js'

const homeGames = computed(() => {
  return mergeGamesData.gamesList.filter((game) => game.isHome)
})
</script>

<style scoped>
.home-layout {
  display: flex;
  gap: 1rem;
}

.main-content {
  flex: 3; /* Takes up 3 parts of the space */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Consistent spacing */
}

.sidebar {
  flex: 1; /* Takes up 1 part of the space */
  position: sticky;
  top: 1rem;
  align-self: flex-start; /* Aligns to the top */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Consistent spacing */
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
.hot-games-section .section-title {
  background: linear-gradient(90deg, #ff80ab, #ff9e80); /* Pink to Orange-Pink */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.video-section .section-title {
  background: linear-gradient(90deg, #84ffff, #80d8ff); /* Cyan to Light Blue */
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

.video-wrapper {
  position: relative;
  padding-bottom: 75%; /* 16:9 aspect ratio */
  height: 0;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  background: #000;
}

.video-wrapper .video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.prose {
  margin: 0;
}

/* Card layout for info sections */
.info-card {
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15); /* Soft Pink Glow */
}

/* Responsive Design */
@media (max-width: 1024px) {
  .home-layout {
    flex-direction: column;
  }

  .sidebar {
    position: static; /* Remove sticky positioning on smaller screens */
    width: 100%;
  }

  .main-content {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .info-card, .sidebar {
    padding: 0.5rem; 
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
