<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <div v-if="entry" class="wiki-content">
          <!-- Page Title with Animation -->
          <h1 class="page-title">{{ entry.title }}</h1>
          
          <!-- Wiki Entry Section -->
          <section class="entry-section info-card">
            <p class="release-date">Published: {{ formattedDate }}</p>
            
            <!-- Video Section -->
            <div v-if="entry && entry.videoIframeSrc && entry.videoIframeSrc !== null" class="video-section">
              <div class="video-wrapper">
                <!-- Video Mask (shown when not loaded) -->
                <div v-if="!videoLoaded" class="video-mask" @click="loadVideo">
                  <img :src="entry.imageUrl" :alt="entry.imageAlt" class="video-thumbnail" loading="lazy" decoding="async" />
                  <div class="play-button">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.9)" />
                      <polygon points="10,8 16,12 10,16" fill="#ff4757" />
                    </svg>
                  </div>
                </div>
                
                <!-- Actual iframe (shown when loaded) -->
                <iframe
                  v-if="videoLoaded"
                  class="video-iframe"
                  :src="entry.videoIframeSrc"
                  title="Video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                >
                </iframe>
              </div>
            </div>
            
            <div v-html="entry.htmlContent" class="prose"></div>
          </section>
          
          <!-- Back Link Section -->
          <section class="back-link-section">
            <RouterLink to="/italian-brainrot-wiki" class="back-link">&larr; Back to Wiki</RouterLink>
          </section>
        </div>
        <div v-else class="not-found">
          <h1 class="page-title">Entry Not Found</h1>
          <p>Sorry, we couldn't find the wiki entry you're looking for.</p>
          <RouterLink to="/italian-brainrot-wiki" class="back-link">Back to Wiki</RouterLink>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useHead } from '@vueuse/head';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { brainrotWikiData } from '@/data/brainrotWiki.js';

const route = useRoute();

const entry = computed(() => {
  return brainrotWikiData.entries.find(e => e.addressBar === route.params.slug);
});

const formattedDate = computed(() => {
  if (!entry.value || !entry.value.time) {
    return ''
  }
  const date = new Date(entry.value.time)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
})

// 视频加载状态
const videoLoaded = ref(false)

// 加载视频函数
const loadVideo = () => {
  videoLoaded.value = true
}

// 配置网站基础信息
const SITE_URL = 'https://mergerotgames.com'; // 根据实际域名修改

// Set SEO meta tags
useHead(computed(() => {
  const canonicalUrl = `${SITE_URL}${route.fullPath}`;
  
  if (entry.value) {
    return {
      title: entry.value.seo.title,
      meta: [
        { name: 'description', content: entry.value.seo.description },
        { name: 'keywords', content: entry.value.seo.keywords },
        // Open Graph meta标签
        { property: 'og:title', content: entry.value.seo.title },
        { property: 'og:description', content: entry.value.seo.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: entry.value.imageUrl },
        { property: 'article:published_time', content: entry.value.time },
        // Twitter Card meta标签
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: entry.value.seo.title },
        { name: 'twitter:description', content: entry.value.seo.description },
        { name: 'twitter:image', content: entry.value.imageUrl },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    }
  }
  return {
    title: 'Entry Not Found - Brainrot Wiki',
    meta: [
      { name: 'description', content: 'The requested wiki entry could not be found.' },
      { property: 'og:title', content: 'Entry Not Found - Brainrot Wiki' },
      { property: 'og:description', content: 'The requested wiki entry could not be found.' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  }
}));
</script>

<style scoped>
.page-main {
  overflow-x: hidden;
}

.wiki-content {
  max-width: 800px;
  margin: 0 auto;
}

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
  margin-bottom: 2rem;
  background-size: 200% auto;
  animation: text-shine 5s linear infinite;
}

@keyframes text-shine {
  to {
    background-position: 200% center;
  }
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

.release-date {
  color: var(--color-text);
  opacity: 0.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  text-align: center;
  font-size: 1.1rem;
}

/* Card layout for info sections */
.info-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(102, 187, 106, 0.15);
}

.entry-section.info-card {
  margin-bottom: 2rem;
}

/* Back Link Section */
.back-link-section {
  text-align: center;
  margin-top: 2rem;
}

.back-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  border-radius: 999px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  display: inline-block;
}

.back-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.not-found {
  padding: 8rem 1rem;
  text-align: center;
}
.not-found .page-title {
  margin-bottom: 2rem;
}

/* Video Section Styles */
.video-section {
  margin-bottom: 2rem;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
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

/* Video Mask Styles */
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.video-mask:hover {
  background: rgba(0, 0, 0, 0.5);
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.play-button {
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
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

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .info-card {
    padding: 1rem;
    margin: 0.5rem;
  }
  .entry-section.info-card {
    margin-bottom: 0.5rem;
  }
  .back-link-section {
    margin-top: 0.5rem;
  }
  .wiki-content {
    max-width: 100%;
  }
  .release-date {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style> 