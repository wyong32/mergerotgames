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
const updateSEO = (currentRoute) => {
  // 生成canonical URL
  const canonicalUrl = getCanonicalUrl(currentRoute);
  
  console.log('Route changed:', currentRoute.path, currentRoute.meta?.seo);
  
  // 更新SEO信息
  if (currentRoute.meta && currentRoute.meta.seo) {
    siteData.value.title = currentRoute.meta.seo.title;
    siteData.value.meta = getArticleSeoMeta(canonicalUrl, currentRoute.meta.seo);
    console.log('Updated SEO with route meta:', currentRoute.meta.seo.title);
  } else {
    // 默认SEO信息
    siteData.value.title = SITE_CONFIG.TITLE;
    siteData.value.meta = getDefaultSeoMeta(canonicalUrl);
    console.log('Updated SEO with default:', SITE_CONFIG.TITLE);
  }
  
  // 更新canonical URL
  siteData.value.link = [
    { rel: 'canonical', href: canonicalUrl }
  ];
};

// 监听路由变化
watch(
  () => route.path,
  () => updateSEO(route),
  { immediate: true }
);

// 也监听meta变化（以防动态路由的meta信息变化）
watch(
  () => route.meta,
  () => updateSEO(route),
  { immediate: true }
);
</script>

<style scoped>
</style>
