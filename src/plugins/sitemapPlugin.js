import fs from 'fs'
import path from 'path'
import { generateSitemapData } from '../utils/sitemapConfig.js'

// Vite插件：自动生成站点地图
export function sitemapPlugin(options = {}) {
  const { 
    hostname = 'https://merge-rot.com', 
    outDir = 'dist', 
    generateRobotsTxt = true,
    filename = 'sitemap.xml'
  } = options

  return {
    name: 'vite-plugin-sitemap-auto',
    apply: 'build',
    closeBundle() {
      // 在构建完成后生成站点地图
      generateSitemap(hostname, outDir, generateRobotsTxt, filename)
    },
  }
}

// 生成站点地图
function generateSitemap(hostname, outDir, generateRobotsTxt, filename) {
  try {
    console.log('🗺️ 正在生成站点地图...')

    // 获取站点地图数据
    const sitemapData = generateSitemapData(hostname)

    // 生成XML内容
    const urlElements = sitemapData
      .map(
        (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
      )
      .join('')

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`

    // 确保输出目录存在
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    // 写入sitemap.xml
    const sitemapPath = path.join(outDir, filename)
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf8')
    console.log(`✅ 站点地图已生成: ${sitemapPath}`)

    // 生成robots.txt
    if (generateRobotsTxt) {
      generateRobotsFile(hostname, outDir, filename)
    }

    console.log(`📊 已生成 ${sitemapData.length} 个URL到站点地图`)
    console.log('🔍 站点地图统计:')
    
    // 统计不同类型的页面
    const stats = {}
    sitemapData.forEach(item => {
      const pathParts = new URL(item.url).pathname.split('/').filter(Boolean)
      const category = pathParts[0] || 'home'
      stats[category] = (stats[category] || 0) + 1
    })
    
    Object.entries(stats).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} 个页面`)
    })
    
  } catch (error) {
    console.error('❌ 生成站点地图时出错:', error.message)
    console.error(error)
  }
}

// 生成robots.txt
function generateRobotsFile(hostname, outDir, sitemapFilename) {
  const robotsContent = `User-agent: *
Allow: /

# 禁止爬取管理员目录
Disallow: /admin/
Disallow: /private/

# 禁止爬取某些文件类型
Disallow: /*.json$
Disallow: /src/

# 站点地图位置
Sitemap: ${hostname}/${sitemapFilename}

# 爬取延迟
Crawl-delay: 1`

  const robotsPath = path.join(outDir, 'robots.txt')
  fs.writeFileSync(robotsPath, robotsContent, 'utf8')
  console.log(`✅ Robots.txt已生成: ${robotsPath}`)
} 