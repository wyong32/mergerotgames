<template>
  <ParticleEffect />
  <RouterView />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import ParticleEffect from '@/components/ParticleEffect.vue';
import { SITE_CONFIG, getCanonicalUrl, getDefaultSeoMeta, getArticleSeoMeta } from '@/config/site.js';

const route = useRoute();

// 1. Initialize reactive data for head management
const siteData = ref({
  title: SITE_CONFIG.TITLE,
  meta: getDefaultSeoMeta(SITE_CONFIG.DOMAIN),
  link: [
    { rel: 'canonical', href: SITE_CONFIG.DOMAIN }
  ]
});

// 2. Call useHead once at the top level with reactive data
useHead(siteData);

// 3. Watch for route changes and update the reactive data
watch(
  () => route,
  (currentRoute) => {
    // 生成canonical URL
    const canonicalUrl = getCanonicalUrl(currentRoute);
    
    // 更新SEO信息
    if (currentRoute.meta && currentRoute.meta.seo) {
      siteData.value.title = currentRoute.meta.seo.title;
      siteData.value.meta = getArticleSeoMeta(canonicalUrl, currentRoute.meta.seo);
    } else {
      // 默认SEO信息
      siteData.value.title = SITE_CONFIG.TITLE;
      siteData.value.meta = getDefaultSeoMeta(canonicalUrl);
    }
    
    // 更新canonical URL
    siteData.value.link = [
      { rel: 'canonical', href: canonicalUrl }
    ];
  },
  { immediate: true }
);
</script>

<style scoped>
</style>
