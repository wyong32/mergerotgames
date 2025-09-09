<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <h1 class="page-title">The Merge-Rot Blog</h1>
        <p class="page-subtitle">
          News, analysis, and deep dives into the world of merge games and brainrot culture.
        </p>

        <div class="games-list">
          <a
            v-for="post in posts"
            :key="post.id"
            :href="`/blog/${post.addressBar}`"
            class="game-card"
          >
                          <img :src="post.imageUrl" :alt="post.imageAlt" class="game-image" loading="lazy" decoding="async" />
            <div class="game-info">
              <h2 class="game-title">{{ post.title }}</h2>
              <p class="game-excerpt">{{ post.excerpt }}</p>
              <span class="game-date">{{ formatDate(post.date) }}</span>
            </div>
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { blogData } from '@/data/blogPosts.js';

const posts = computed(() => blogData.posts);

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary),
    var(--color-primary)
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.game-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
  line-height: 1.3;
}

.game-excerpt {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.game-date {
  font-size: 0.8rem;
  text-align: right;
  opacity: 0.6;
  margin-top: auto;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .page-subtitle {
    font-size: 1rem;
    margin: 0 auto 1.5rem;
  }
  .games-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .game-info {
    padding: 0.75rem 1rem;
  }
  .game-title {
    font-size: 1.1rem;
  }
  .game-excerpt,
  .game-date {
    font-size: 0.85rem;
  }
}
</style> 