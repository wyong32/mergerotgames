<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <div v-if="game" class="home-layout">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Game Section -->
            <section>
              <GameFrame
                :iframe-src="game.iframeUrl"
                :image-url="game.imageUrl"
                :game-title="game.title"
              />
            </section>

            <!-- About Section -->
            <section class="about-section info-card">
              <h1 class="section-title">{{ game.title }}</h1>
              <p class="release-date">Released: {{ formattedDate }}</p>
              <div v-html="game.detailsHtml" class="prose"></div>
            </section>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <section class="hot-games-section info-card">
              <h2 class="section-title">Hot Games</h2>
              <GameGrid :games="sidebarGames" />
            </section>
          </aside>
        </div>
        <div v-else class="not-found">
          <h1 class="section-title">Game Not Found</h1>
          <p>Sorry, we couldn't find the game you're looking for.</p>
          <RouterLink to="/merge-games" class="back-link"
            >Back to Games List</RouterLink
          >
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GameFrame from '@/components/GameFrame.vue'
import GameGrid from '@/components/GameGrid.vue'
import { mergeGamesData } from '@/data/mergeGames.js'

const route = useRoute()

const game = computed(() => {
  return mergeGamesData.gamesList.find(
    (g) => g.addressBar === route.params.addressBar
  )
})

const sidebarGames = computed(() => {
  return mergeGamesData.gamesList.filter(
    (g) => g.isDetails && g.id !== game.value?.id
  )
})

const formattedDate = computed(() => {
  if (!game.value || !game.value.time) {
    return ''
  }
  const date = new Date(game.value.time)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
})

// 配置网站基础信息
const SITE_URL = 'https://merge-rot.com'; // 根据实际域名修改

// Set SEO meta tags
useHead(
  computed(() => {
    const canonicalUrl = `${SITE_URL}${route.fullPath}`;
    
    if (game.value) {
      return {
        title: game.value.seo.title,
        meta: [
          { name: 'description', content: game.value.seo.description },
          { name: 'keywords', content: game.value.seo.keywords },
          // Open Graph meta标签
          { property: 'og:title', content: game.value.seo.title },
          { property: 'og:description', content: game.value.seo.description },
          { property: 'og:url', content: canonicalUrl },
          { property: 'og:type', content: 'article' },
          { property: 'og:image', content: `${SITE_URL}${game.value.imageUrl}` },
          // Twitter Card meta标签
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: game.value.seo.title },
          { name: 'twitter:description', content: game.value.seo.description },
          { name: 'twitter:image', content: `${SITE_URL}${game.value.imageUrl}` },
        ],
        link: [
          { rel: 'canonical', href: canonicalUrl }
        ]
      }
    }
    return {
      title: 'Game Not Found - Merge Rot',
      meta: [
        { name: 'description', content: 'The requested game could not be found.' },
        { property: 'og:title', content: 'Game Not Found - Merge Rot' },
        { property: 'og:description', content: 'The requested game could not be found.' },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    }
  })
)
</script>

<style scoped>
.home-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.main-content {
  flex: 3;
}

.sidebar {
  flex: 1;
  position: sticky;
  top: 1rem;
  align-self: flex-start;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.prose {
  margin: 0;
}

/* Gradients for Section Titles */
.hot-games-section .section-title {
  background: linear-gradient(90deg, #ff80ab, #ff9e80); /* Pink to Orange-Pink */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.release-date {
  color: var(--color-text);
  opacity: 0.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

/* Card layout for info sections */
.info-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
}

.about-section.info-card {
  margin-top: 2rem;
}

.not-found {
  padding: 8rem 1rem;
  text-align: center;
}
.not-found .section-title {
  margin-bottom: 2rem;
  -webkit-text-fill-color: initial;
}
.not-found p {
  margin-bottom: 2rem;
  color: var(--color-text);
  opacity: 0.8;
  font-size: 1.1rem;
}
.not-found .back-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  border-radius: 999px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}
.not-found .back-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1024px) {
  .home-layout {
    flex-direction: column;
    gap: 1rem;
  }
  .sidebar {
    position: static;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
  .info-card {
    padding: 1rem;
  }
}
</style> 