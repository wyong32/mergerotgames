import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { mergeGamesData } from '../data/mergeGames.js'
import { brainrotWikiData } from '../data/brainrotWiki.js'
import { blogData } from '../data/blogPosts.js'

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取项目最后更新时间（用于静态页面）
const PROJECT_LAST_MODIFIED = '2025-01-06T00:00:00.000Z'

// 页面分类逻辑（统一函数）
function categorizeUrl(url) {
  const urlObj = new URL(url)
  const path = urlObj.pathname
  
  if (path === '/') {
    return 'home'
  } else if (path.startsWith('/merge-games/')) {
    return 'merge-games'
  } else if (path.startsWith('/italian-brainrot-games/')) {
    return 'italian-brainrot-games'
  } else if (path.startsWith('/italian-brainrot-wiki/')) {
    return 'italian-brainrot-wiki'
  } else if (path.startsWith('/blog/')) {
    return 'blog'
  } else if (path.includes('privacy') || path.includes('terms') || path.includes('copyright')) {
    return 'legal'
  } else {
    return 'other'
  }
}

// 生成统计信息（统一函数）
function generateUrlStats(urls) {
  const stats = {
    home: 0,
    'merge-games': 0,
    'italian-brainrot-games': 0,
    'italian-brainrot-wiki': 0,
    blog: 0,
    legal: 0,
    other: 0
  }

  urls.forEach(url => {
    const category = categorizeUrl(url)
    stats[category]++
  })

  return stats
}

// 静态页面配置
const STATIC_PAGES = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '网站首页 - 最重要的页面'
  },
  {
    path: '/merge-fellas',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: PROJECT_LAST_MODIFIED,
    description: 'Merge Fellas角色展示页面'
  },
  {
    path: '/merge-games',
    changefreq: 'daily',
    priority: '0.9',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '合并游戏主页 - 核心功能页面'
  },
  {
    path: '/italian-brainrot-games',
    changefreq: 'daily',
    priority: '0.8',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '意大利Brainrot游戏分类页面'
  },
  {
    path: '/italian-brainrot-wiki',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: PROJECT_LAST_MODIFIED,
    description: 'Brainrot Wiki主页'
  },
  {
    path: '/blog',
    changefreq: 'daily',
    priority: '0.8',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '博客主页'
  },
  // 法律页面 - SEO重要
  {
    path: '/privacy-policy',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '隐私政策'
  },
  {
    path: '/terms-of-use',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '使用条款'
  },
  {
    path: '/copyright',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '版权信息'
  },
  {
    path: '/about-us',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '关于我们'
  },
  {
    path: '/contact-us',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: PROJECT_LAST_MODIFIED,
    description: '联系我们'
  }
]

// 优化的时间戳解析函数
function parseLastModified(dateString, fallback = PROJECT_LAST_MODIFIED) {
  if (!dateString) return fallback
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return fallback
    return date.toISOString()
  } catch (error) {
    console.warn(`Invalid date format: ${dateString}, using fallback`)
    return fallback
  }
}

// 生成动态页面数据
function generateDynamicPages() {
  const pages = []
  
  // 游戏详情页面
  mergeGamesData.gamesList.forEach((game) => {
    const gameDate = parseLastModified(game.time)
    
    // 为每个分类生成页面
    if (game.category.includes('merge-games')) {
      pages.push({
        path: `/merge-games/${game.addressBar}`,
        changefreq: 'weekly',
        priority: game.isHome ? '0.8' : '0.7',
        lastmod: gameDate,
        description: `${game.title} 游戏详情页`
      })
    }
    
    if (game.category.includes('italian-brainrot-games')) {
      pages.push({
        path: `/italian-brainrot-games/${game.addressBar}`,
        changefreq: 'weekly',
        priority: game.isHome ? '0.8' : '0.7',
        lastmod: gameDate,
        description: `${game.title} 意大利Brainrot游戏详情页`
      })
    }
  })
  
  // Wiki页面
  brainrotWikiData.entries.forEach((entry) => {
    const entryDate = parseLastModified(entry.time)
    pages.push({
      path: `/italian-brainrot-wiki/${entry.addressBar}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: entryDate,
      description: `${entry.title} Wiki文章`
    })
  })
  
  // 博客页面
  if (blogData && blogData.posts) {
    blogData.posts.forEach((post) => {
      const postDate = parseLastModified(post.date)
      pages.push({
        path: `/blog/${post.addressBar}`,
        changefreq: 'monthly',
        priority: '0.7',
        lastmod: postDate,
        description: `${post.title} 博客文章`
      })
    })
  }
  
  return pages
}

// 站点地图管理器类
class SitemapManager {
  constructor() {
    this.staticPages = STATIC_PAGES
    this.dynamicPages = generateDynamicPages()
  }

  // 生成完整的站点地图数据
  generateSitemapData(hostname = 'https://mergerotgames.com') {
    console.log(`📍 正在为域名 ${hostname} 生成站点地图数据...`)
    
    const staticPages = this.staticPages.map(page => ({
      url: `${hostname}${page.path}`,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    }))
    
    const dynamicPages = this.dynamicPages.map(page => ({
      url: `${hostname}${page.path}`,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    }))
    
    const allPages = [...staticPages, ...dynamicPages]
    
    // 生成统计信息
    const allUrls = allPages.map(page => page.url)
    const stats = generateUrlStats(allUrls)
    
    console.log('📊 站点地图统计:', stats)
    console.log(`✅ 总计生成 ${allPages.length} 个URL`)
    
    return allPages
  }

  // 验证站点地图文件
  async verifySitemap(options = {}) {
    const {
      sitemapPath = path.join(__dirname, '../../dist/sitemap.xml'),
      robotsPath = path.join(__dirname, '../../public/robots.txt'),
      verbose = true
    } = options

    if (verbose) {
      console.log('🔍 站点地图验证工具 v3.0 (统一版本)')
      console.log('=' .repeat(60))
    }

    const results = {
      success: true,
      errors: [],
      warnings: [],
      stats: {},
      summary: {}
    }

    try {
      // 检查文件是否存在
      if (!fs.existsSync(sitemapPath)) {
        results.errors.push('站点地图文件不存在')
        results.success = false
        if (verbose) {
          console.error('❌ 站点地图文件不存在:', sitemapPath)
          console.log('💡 请运行 npm run build 生成站点地图')
        }
        return results
      }

      if (!fs.existsSync(robotsPath)) {
        results.errors.push('Robots.txt文件不存在')
        results.success = false
        if (verbose) {
          console.error('❌ Robots.txt文件不存在:', robotsPath)
        }
        return results
      }

      if (verbose) {
        console.log('✅ 站点地图文件存在:', sitemapPath)
        console.log('✅ Robots.txt文件存在:', robotsPath)
      }

      // 读取文件内容
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
      const robotsContent = fs.readFileSync(robotsPath, 'utf8')

      // 验证XML格式
      if (!sitemapContent.includes('<?xml version="1.0"') || !sitemapContent.includes('<urlset')) {
        results.errors.push('站点地图XML格式不正确')
        results.success = false
        if (verbose) {
          console.error('❌ 站点地图XML格式不正确')
        }
        return results
      }

      if (verbose) {
        console.log('✅ 站点地图XML格式正确')
      }

      // 提取URL
      const urls = []
      const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g)
      
      if (locMatches) {
        locMatches.forEach(match => {
          const url = match.replace(/<\/?loc>/g, '')
          urls.push(url)
        })
      }

      // 生成统计信息
      const stats = generateUrlStats(urls)
      results.stats = stats

      if (verbose) {
        console.log(`📊 站点地图包含 ${urls.length} 个URL`)
        console.log('\n📈 URL分类统计:')
        Object.entries(stats).forEach(([category, count]) => {
          if (count > 0) {
            console.log(`   ${category}: ${count} 个页面`)
          }
        })
      }

      // 验证robots.txt
      const sitemapReferences = (robotsContent.match(/Sitemap:/g) || []).length
      if (verbose) {
        console.log(`\n🤖 Robots.txt检查:`)
        console.log(`   站点地图引用: ${sitemapReferences} 个`)
      }

      if (sitemapReferences === 0) {
        results.errors.push('Robots.txt缺少站点地图引用')
        results.success = false
        if (verbose) {
          console.error('❌ Robots.txt缺少站点地图引用')
        }
      } else if (verbose) {
        console.log('✅ Robots.txt包含站点地图引用')
      }

      // 检查域名一致性
      const domains = new Set()
      urls.forEach(url => {
        const domain = new URL(url).origin
        domains.add(domain)
      })

      if (verbose) {
        console.log(`\n🌐 域名检查:`)
        domains.forEach(domain => {
          const count = urls.filter(url => url.startsWith(domain)).length
          console.log(`   ${domain}: ${count} 个URL`)
        })
      }

      // 检查重复URL
      const uniqueUrls = new Set(urls)
      if (uniqueUrls.size !== urls.length) {
        const duplicateCount = urls.length - uniqueUrls.size
        results.warnings.push(`发现 ${duplicateCount} 个重复URL`)
        
        if (verbose) {
          console.warn(`⚠️  发现 ${duplicateCount} 个重复URL`)
        }
      } else if (verbose) {
        console.log('✅ 没有重复的URL')
      }

      // 检查SEO优化
      const hasLastmod = sitemapContent.includes('<lastmod>')
      const hasChangefreq = sitemapContent.includes('<changefreq>')
      const hasPriority = sitemapContent.includes('<priority>')
      
      if (verbose) {
        console.log('\n🔍 SEO优化检查:')
        console.log(`   最后修改时间: ${hasLastmod ? '✅' : '❌'}`)
        console.log(`   更新频率: ${hasChangefreq ? '✅' : '❌'}`)
        console.log(`   优先级: ${hasPriority ? '✅' : '❌'}`)
      }

      // 检查重要页面
      const importantPages = [
        '/',
        '/merge-games',
        '/italian-brainrot-games',
        '/italian-brainrot-wiki',
        '/blog'
      ]

      if (verbose) {
        console.log('\n🎯 重要页面检查:')
        importantPages.forEach(pagePath => {
          const hasPage = urls.some(url => new URL(url).pathname === pagePath)
          console.log(`   ${pagePath}: ${hasPage ? '✅' : '❌'}`)
          
          if (!hasPage) {
            results.warnings.push(`重要页面缺失: ${pagePath}`)
          }
        })
      }

      // 性能建议
      if (verbose) {
        console.log('\n💡 性能建议:')
        if (urls.length > 50000) {
          console.log('   ⚠️  URL数量过多，考虑分割站点地图')
          results.warnings.push('URL数量过多，考虑分割站点地图')
        } else if (urls.length > 10000) {
          console.log('   ℹ️  URL数量较多，建议监控生成时间')
        } else {
          console.log('   ✅ URL数量适中')
        }
      }

      // 生成总结
      results.summary = {
        totalUrls: urls.length,
        domains: domains.size,
        categories: Object.keys(stats).filter(key => stats[key] > 0).length,
        hasErrors: results.errors.length > 0,
        hasWarnings: results.warnings.length > 0
      }

      if (verbose) {
        console.log('\n🎉 站点地图验证完成！')
        console.log(`📊 总结: ${urls.length} 个URL，分布在 ${domains.size} 个域名`)
        
        if (results.errors.length > 0) {
          console.log(`❌ 发现 ${results.errors.length} 个错误`)
        }
        
        if (results.warnings.length > 0) {
          console.log(`⚠️  发现 ${results.warnings.length} 个警告`)
        }
      }

    } catch (error) {
      results.success = false
      results.errors.push(error.message)
      if (verbose) {
        console.error('❌ 验证过程中发生错误:', error.message)
      }
    }

    return results
  }

  // 综合工具：生成并验证
  async buildAndVerify(hostname = 'https://mergerotgames.com') {
    console.log('🚀 开始站点地图生成和验证流程...')
    
    // 生成站点地图数据
    const sitemapData = this.generateSitemapData(hostname)
    
    console.log('\n⏳ 等待构建完成后验证...')
    
    // 验证站点地图
    const verificationResults = await this.verifySitemap()
    
    console.log('\n📋 完整报告:')
    console.log(`   生成URL数量: ${sitemapData.length}`)
    console.log(`   验证状态: ${verificationResults.success ? '✅ 成功' : '❌ 失败'}`)
    console.log(`   错误数量: ${verificationResults.errors.length}`)
    console.log(`   警告数量: ${verificationResults.warnings.length}`)
    
    return {
      sitemapData,
      verificationResults,
      success: verificationResults.success
    }
  }
}

// 创建默认实例
const sitemapManager = new SitemapManager()

// 导出函数（保持向后兼容）
export function generateSitemapData(hostname) {
  return sitemapManager.generateSitemapData(hostname)
}

export function verifySitemap(options) {
  return sitemapManager.verifySitemap(options)
}

// 导出管理器和配置
export { SitemapManager, sitemapManager as default }
export { STATIC_PAGES, PROJECT_LAST_MODIFIED } 