import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { mergeGamesData } from './src/data/mergeGames.js'
import { brainrotWikiData } from './src/data/brainrotWiki.js'
import { blogData } from './src/data/blogPosts.js'
// import { sitemapPlugin } from './src/plugins/sitemapPlugin.js' // 自定义插件备选

// 静态路由配置
const staticRoutes = [
  '/',
  '/merge-fellas',
  '/merge-games', 
  '/italian-brainrot-games',
  '/brainrot-wiki',
  '/blog',
  '/privacy-policy',
  '/terms-of-use',
  '/copyright',
  '/about-us',
  '/contact-us',
]

// 生成动态路由
const dynamicGameRoutes = mergeGamesData.gamesList.map((game) => {
  // 根据游戏分类生成不同的路由
  const routes = []
  if (game.category.includes('merge-games')) {
    routes.push(`/merge-games/${game.addressBar}`)
  }
  if (game.category.includes('italian-brainrot-games')) {
    routes.push(`/italian-brainrot-games/${game.addressBar}`)
  }
  return routes
}).flat()

const dynamicWikiRoutes = brainrotWikiData.entries.map((entry) => `/brainrot-wiki/${entry.addressBar}`)
const dynamicBlogRoutes = blogData.posts.map((post) => `/blog/${post.addressBar}`)

// 合并所有路由
const allRoutes = [...staticRoutes, ...dynamicGameRoutes, ...dynamicWikiRoutes, ...dynamicBlogRoutes]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    // 使用标准的 vite-plugin-sitemap
    sitemap({
      hostname: 'https://merge-rot.com', // 请根据实际域名修改 (与 src/config/site.js 保持一致)
      dynamicRoutes: allRoutes,
      // 不自动生成robots.txt，我们已在public目录下创建
      generateRobotsTxt: false,
    }),
    // 或者使用自定义插件（取消注释以下行并注释掉上面的sitemap配置）
    // sitemapPlugin({
    //   hostname: 'https://merge-rot.com',
    //   outDir: 'dist',
    //   generateRobotsTxt: true, // 自定义插件可以生成robots.txt
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
