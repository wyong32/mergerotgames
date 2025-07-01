// 网站基础配置
export const SITE_CONFIG = {
  // 网站基础信息
  DOMAIN: 'https://merge-rot.com', // 请根据实际域名修改
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
    // Open Graph
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: SITE_CONFIG.SOCIAL.OG_TYPE_ARTICLE },
    { property: 'og:site_name', content: SITE_CONFIG.NAME },
    // Twitter Card
    { name: 'twitter:card', content: SITE_CONFIG.SOCIAL.TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
  ]
  
  // 添加图片信息
  if (imageUrl) {
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : getFullUrl(imageUrl)
    meta.push(
      { property: 'og:image', content: fullImageUrl },
      { name: 'twitter:image', content: fullImageUrl }
    )
  }
  
  // 添加发布时间
  if (publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime })
  }
  
  return meta
} 