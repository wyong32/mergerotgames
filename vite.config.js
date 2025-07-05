import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { getCurrentDomain } from './src/config/site.js'
import { generateSitemapData } from './src/utils/sitemapManager.js'

// 生成所有路由（使用统一管理器）
function getAllRoutes() {
  const sitemapData = generateSitemapData()
  return sitemapData.map(item => new URL(item.url).pathname)
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const plugins = [
    vue(),
    vueJsx(),
    vueDevTools(),
  ]

  // 只在生产构建时使用sitemap插件
  if (command === 'build') {
    const hostname = getCurrentDomain()
    console.log(`🌐 构建站点地图使用域名: ${hostname}`)
    
    plugins.push(
      sitemap({
        hostname,
        dynamicRoutes: getAllRoutes(),
        generateRobotsTxt: false, // 使用public目录下的robots.txt
        exclude: ['/404'], // 排除404页面
        // 优化XML格式
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      })
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // 确保正确的base路径配置
    base: '/',
    // 构建配置
    build: {
      // 确保生成正确的资产路径
      assetsDir: 'assets',
      // 优化构建
      rollupOptions: {
        output: {
          // 分块策略，优化缓存
          manualChunks: {
            'vendor': ['vue', 'vue-router', 'pinia'],
            'utils': ['@vueuse/head']
          }
        }
      }
    },
    // 开发服务器配置
    server: {
      // 在开发模式下也处理SPA路由
      historyApiFallback: true,
    },
    // 环境变量配置
    define: {
      // 可在此处定义全局环境变量
    }
  }
})
