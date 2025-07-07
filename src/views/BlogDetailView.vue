<template>
  <div class="page-main">
    <Header />
    <main>
      <div v-if="post" class="page-wrapper container">
        <div class="main-content">
          <h1 class="post-title">{{ post.title }}</h1>
          <section class="post-card info-card">
            <img :src="post.imageUrl" :alt="post.imageAlt" class="featured-image" loading="lazy" decoding="async" />
            <div class="post-meta">
              <span>{{ formattedDate }}</span>
            </div>
            <div class="prose" v-html="post.content"></div>
          </section>
        </div>
      </div>
      <div v-else class="loading-container">
        <p v-if="error">{{ error }}</p>
        <p v-else>Loading post...</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { blogData } from '@/data/blogPosts.js';

const route = useRoute();
const post = ref(null);
const error = ref(null);

const formattedDate = computed(() => {
  if (!post.value || !post.value.date) {
    return ''
  }
  const date = new Date(post.value.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
})

// 配置网站基础信息
const SITE_URL = 'https://mergerotgames.com'; // 根据实际域名修改

const findPost = () => {
  error.value = null;
  post.value = null;
  const postSlug = route.params.slug;
  const foundPost = blogData.posts.find(p => p.addressBar === postSlug);
  const canonicalUrl = `${SITE_URL}${route.fullPath}`;

  if (foundPost) {
    post.value = foundPost;
    
    useHead({
      title: post.value.seo.title,
      meta: [
        { name: 'description', content: post.value.seo.description },
        { name: 'keywords', content: post.value.seo.keywords },
        // Open Graph meta标签
        { property: 'og:title', content: post.value.seo.title },
        { property: 'og:description', content: post.value.seo.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: post.value.imageUrl },
        { property: 'article:published_time', content: post.value.date },
        // Twitter Card meta标签
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.value.seo.title },
        { name: 'twitter:description', content: post.value.seo.description },
        { name: 'twitter:image', content: post.value.imageUrl },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    });
  } else {
    error.value = 'Post not found.';
    useHead({
      title: 'Post Not Found - Merge Rot',
      meta: [
        { name: 'description', content: 'The requested blog post could not be found.' },
        { property: 'og:title', content: 'Post Not Found - Merge Rot' },
        { property: 'og:description', content: 'The requested blog post could not be found.' },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    });
  }
};

onMounted(findPost);
watch(() => route.params.slug, findPost);
</script>

<style scoped>
.main-content {
  max-width: 800px;
  margin: 0 auto;
}

.post-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: center;
  background: linear-gradient(90deg, #b388ff, #8c9eff, var(--color-primary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
}

.featured-image {
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.post-meta {
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--color-primary-light);
}

.loading-container {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .page-wrapper {
    padding: 0 1rem;
  }
  .post-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  .info-card {
    padding: 1rem;
  }
  .post-meta {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }
}
</style> 