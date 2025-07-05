// 网站基础配置
export const SITE_CONFIG = {
  // 网站基础信息
  DOMAIN: 'https://mergerotgames.com', // 统一主域名
  VERCEL_DOMAIN: 'https://mergerotgames.vercel.app', // Vercel域名
  NAME: 'Merge Rot',
  TITLE: 'Merge Rot - The Ultimate Merging Game',
  DESCRIPTION: 'Welcome to Merge Rot, the ultimate merging game experience. Join the fun, merge items, and conquer the leaderboard.',
  KEYWORDS: 'merge game, puzzle game, brainrot, merge rot',
  
  // SEO默认配置
  DEFAULT_OG_IMAGE: '/images/og-default.webp', // 请确保此图片存在
  DEFAULT_TWITTER_HANDLE: '@mergerot', // 如有Twitter账号请修改
  
  // 社交媒体配置
  SOCIAL: {
    TWITTER_CARD_TYPE: 'summary_large_image',
    OG_TYPE_WEBSITE: 'website',
    OG_TYPE_ARTICLE: 'article'
  }
}

// 动态获取当前环境的域名（修复版本）
export function getCurrentDomain() {
  // 检查是否在vite配置阶段
  if (typeof import.meta === 'undefined' || !import.meta.env) {
    // 在vite配置阶段，默认使用Vercel域名
    return SITE_CONFIG.VERCEL_DOMAIN
  }
  
  // 运行时环境判断
  if (import.meta.env.PROD && import.meta.env.VITE_CUSTOM_DOMAIN === 'true') {
    return SITE_CONFIG.DOMAIN
  }
  return SITE_CONFIG.VERCEL_DOMAIN
}

// 工具函数：生成完整URL
export function getFullUrl(path = '') {
  return `${SITE_CONFIG.DOMAIN}${path}`
}

// 工具函数：生成canonical URL
export function getCanonicalUrl(route) {
  return getFullUrl(route.fullPath)
}

// 工具函数：生成默认SEO meta标签
export function getDefaultSeoMeta(canonicalUrl, title = null, description = null) {
  const finalTitle = title || SITE_CONFIG.TITLE
  const finalDescription = description || SITE_CONFIG.DESCRIPTION
  
  return [
    { name: 'description', content: finalDescription },
    { name: 'keywords', content: SITE_CONFIG.KEYWORDS },
    // Open Graph
    { property: 'og:title', content: finalTitle },
    { property: 'og:description', content: finalDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: SITE_CONFIG.SOCIAL.OG_TYPE_WEBSITE },
    { property: 'og:site_name', content: SITE_CONFIG.NAME },
    // Twitter Card
    { name: 'twitter:card', content: SITE_CONFIG.SOCIAL.TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: finalTitle },
    { name: 'twitter:description', content: finalDescription },
  ]
}

// 工具函数：生成文章类型的SEO meta标签
export function getArticleSeoMeta(canonicalUrl, seo, imageUrl = null, publishedTime = null) {
  const meta = [
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords },
    // Basic meta
    { name: 'author', content: SITE_CONFIG.NAME },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: SITE_CONFIG.SOCIAL.OG_TYPE_ARTICLE },
    { property: 'og:site_name', content: SITE_CONFIG.NAME },
    { property: 'og:locale', content: 'en_US' },
    // Twitter Card
    { name: 'twitter:card', content: SITE_CONFIG.SOCIAL.TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
    { name: 'twitter:site', content: SITE_CONFIG.DEFAULT_TWITTER_HANDLE },
  ]
  
  // 添加默认或指定的图片信息
  const finalImageUrl = imageUrl || SITE_CONFIG.DEFAULT_OG_IMAGE
  if (finalImageUrl) {
    const fullImageUrl = finalImageUrl.startsWith('http') ? finalImageUrl : getFullUrl(finalImageUrl)
    meta.push(
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/webp' },
      { name: 'twitter:image', content: fullImageUrl }
    )
  }
  
  // 添加发布时间
  if (publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime })
  }
  
  return meta
} 