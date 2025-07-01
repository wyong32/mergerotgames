import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 验证站点地图
function verifySitemap() {
  console.log('🔍 站点地图验证工具')
  console.log('=' .repeat(40))

  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml')
  const robotsPath = path.join(__dirname, '../dist/robots.txt')

  // 检查文件是否存在
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ 站点地图文件不存在:', sitemapPath)
    return false
  }

  if (!fs.existsSync(robotsPath)) {
    console.error('❌ Robots.txt文件不存在:', robotsPath)
    return false
  }

  console.log('✅ 站点地图文件存在')
  console.log('✅ Robots.txt文件存在')

  // 读取和解析站点地图
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
  const robotsContent = fs.readFileSync(robotsPath, 'utf8')

  // 验证XML格式
  if (!sitemapContent.includes('<?xml version="1.0"') || !sitemapContent.includes('<urlset')) {
    console.error('❌ 站点地图XML格式不正确')
    return false
  }

  console.log('✅ 站点地图XML格式正确')

  // 统计URL数量
  const urlMatches = sitemapContent.match(/<url>/g)
  const urlCount = urlMatches ? urlMatches.length : 0

  console.log(`📊 站点地图包含 ${urlCount} 个URL`)

  // 分析URL类型
  const urls = []
  const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g)
  
  if (locMatches) {
    locMatches.forEach(match => {
      const url = match.replace(/<\/?loc>/g, '')
      urls.push(url)
    })
  }

  const stats = {}
  urls.forEach(url => {
    const urlObj = new URL(url)
    const pathParts = urlObj.pathname.split('/').filter(Boolean)
    const category = pathParts[0] || 'home'
    stats[category] = (stats[category] || 0) + 1
  })

  console.log('\n📈 URL分类统计:')
  Object.entries(stats).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} 个页面`)
  })

  // 验证robots.txt
  if (!robotsContent.includes('Sitemap:')) {
    console.error('❌ Robots.txt缺少站点地图引用')
    return false
  }

  console.log('✅ Robots.txt包含站点地图引用')

  // 检查域名一致性
  const domain = 'https://merge-rot.com'
  const validUrls = urls.filter(url => url.startsWith(domain))
  
  if (validUrls.length !== urls.length) {
    console.warn(`⚠️  发现 ${urls.length - validUrls.length} 个非标准域名的URL`)
  } else {
    console.log('✅ 所有URL使用正确的域名')
  }

  // 检查重复URL
  const uniqueUrls = new Set(urls)
  if (uniqueUrls.size !== urls.length) {
    console.warn(`⚠️  发现 ${urls.length - uniqueUrls.size} 个重复URL`)
  } else {
    console.log('✅ 没有重复的URL')
  }

  console.log('\n🎉 站点地图验证完成！')
  return true
}

// 运行验证
verifySitemap()

export { verifySitemap } 