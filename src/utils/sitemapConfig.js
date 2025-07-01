import { mergeGamesData } from '../data/mergeGames.js'
import { brainrotWikiData } from '../data/brainrotWiki.js'
import { blogData } from '../data/blogPosts.js'

// 静态页面配置
const STATIC_PAGES = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString()
  },
  {
    path: '/merge-fellas',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    path: '/merge-games',
    changefreq: 'daily',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    path: '/italian-brainrot-games',
    changefreq: 'daily',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    path: '/brainrot-wiki',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    path: '/blog',
    changefreq: 'daily',
    priority: '0.8',
    lastmod: new Date().toISOString()
  }
]

// 生成动态页面数据
function generateDynamicPages() {
  const pages = []
  
  // 游戏详情页面
  mergeGamesData.gamesList.forEach((game) => {
    // 解析游戏日期
    const gameDate = game.time ? new Date(game.time).toISOString() : new Date().toISOString()
    
    // 为每个分类生成页面
    if (game.category.includes('merge-games')) {
      pages.push({
        path: `/merge-games/${game.addressBar}`,
        changefreq: 'weekly',
        priority: '0.7',
        lastmod: gameDate
      })
    }
    
    if (game.category.includes('italian-brainrot-games')) {
      pages.push({
        path: `/italian-brainrot-games/${game.addressBar}`,
        changefreq: 'weekly', 
        priority: '0.7',
        lastmod: gameDate
      })
    }
  })
  
  // Wiki页面
  brainrotWikiData.entries.forEach((entry) => {
    const entryDate = entry.time ? new Date(entry.time).toISOString() : new Date().toISOString()
    pages.push({
      path: `/brainrot-wiki/${entry.addressBar}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: entryDate
    })
  })
  
  // 博客页面
  blogData.posts.forEach((post) => {
    const postDate = post.date ? new Date(post.date).toISOString() : new Date().toISOString()
    pages.push({
      path: `/blog/${post.addressBar}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: postDate
    })
  })
  
  return pages
}

// 生成完整的站点地图数据
export function generateSitemapData(hostname = 'https://merge-rot.com') {
  const staticPages = STATIC_PAGES.map(page => ({
    url: `${hostname}${page.path}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority
  }))
  
  const dynamicPages = generateDynamicPages().map(page => ({
    url: `${hostname}${page.path}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority
  }))
  
  return [...staticPages, ...dynamicPages]
}

// 导出配置用于调试
export { STATIC_PAGES, generateDynamicPages } 