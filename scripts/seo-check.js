import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO检查工具
function checkSEO() {
  console.log('🔍 SEO检查工具')
  console.log('=' .repeat(50))

  const issues = []
  const warnings = []
  const passed = []

  // 检查1: 站点地图存在性
  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml')
  if (fs.existsSync(sitemapPath)) {
    passed.push('✅ 站点地图文件存在')
  } else {
    issues.push('❌ 站点地图文件不存在')
  }

  // 检查2: Robots.txt存在性
  const robotsPath = path.join(__dirname, '../dist/robots.txt')
  if (fs.existsSync(robotsPath)) {
    passed.push('✅ Robots.txt文件存在')
    
    // 检查robots.txt内容
    const robotsContent = fs.readFileSync(robotsPath, 'utf8')
    if (robotsContent.includes('Sitemap:')) {
      passed.push('✅ Robots.txt包含站点地图引用')
    } else {
      issues.push('❌ Robots.txt缺少站点地图引用')
    }
  } else {
    issues.push('❌ Robots.txt文件不存在')
  }

  // 检查3: 配置文件一致性
  const siteConfigPath = path.join(__dirname, '../src/config/site.js')
  const viteConfigPath = path.join(__dirname, '../vite.config.js')
  
  if (fs.existsSync(siteConfigPath)) {
    passed.push('✅ 网站配置文件存在')
  } else {
    issues.push('❌ 网站配置文件不存在')
  }

  // 检查4: 域名一致性
  if (fs.existsSync(viteConfigPath)) {
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf8')
    const viteHostnameMatch = viteConfig.match(/hostname:\s*['"`]([^'"`]+)['"`]/)
    
    if (viteHostnameMatch) {
      const viteHostname = viteHostnameMatch[1]
      console.log(`📍 Vite配置域名: ${viteHostname}`)
      
      if (fs.existsSync(siteConfigPath)) {
        const siteConfig = fs.readFileSync(siteConfigPath, 'utf8')
        const siteHostnameMatch = siteConfig.match(/DOMAIN:\s*['"`]([^'"`]+)['"`]/)
        
        if (siteHostnameMatch) {
          const siteHostname = siteHostnameMatch[1]
          console.log(`📍 网站配置域名: ${siteHostname}`)
          
          if (viteHostname === siteHostname) {
            passed.push('✅ 域名配置一致')
          } else {
            issues.push(`❌ 域名配置不一致: Vite(${viteHostname}) vs Site(${siteHostname})`)
          }
        } else {
          warnings.push('⚠️  无法检测到网站配置域名')
        }
      }
    } else {
      warnings.push('⚠️  无法检测到Vite配置域名')
    }
  }

  // 检查5: 公共资源检查
  const publicDir = path.join(__dirname, '../public')
  const requiredImages = ['favicon.ico']
  
  requiredImages.forEach(image => {
    const imagePath = path.join(publicDir, image)
    if (fs.existsSync(imagePath)) {
      passed.push(`✅ ${image} 存在`)
    } else {
      warnings.push(`⚠️  ${image} 不存在`)
    }
  })

  // 检查6: 构建产物检查
  const distDir = path.join(__dirname, '../dist')
  if (fs.existsSync(distDir)) {
    passed.push('✅ 构建目录存在')
    
    // 检查关键文件
    const criticalFiles = ['index.html', 'sitemap.xml']
    criticalFiles.forEach(file => {
      const filePath = path.join(distDir, file)
      if (fs.existsSync(filePath)) {
        passed.push(`✅ ${file} 存在`)
      } else {
        issues.push(`❌ ${file} 不存在`)
      }
    })
  } else {
    warnings.push('⚠️  构建目录不存在，请先运行 npm run build')
  }

  // 输出结果
  console.log('\n📋 检查结果:')
  console.log('-' .repeat(40))

  if (passed.length > 0) {
    console.log('\n🎉 通过的检查:')
    passed.forEach(item => console.log(`  ${item}`))
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  警告:')
    warnings.forEach(item => console.log(`  ${item}`))
  }

  if (issues.length > 0) {
    console.log('\n❌ 需要修复的问题:')
    issues.forEach(item => console.log(`  ${item}`))
  }

  // 总结
  console.log('\n📊 总结:')
  console.log(`  通过: ${passed.length} 项`)
  console.log(`  警告: ${warnings.length} 项`)
  console.log(`  错误: ${issues.length} 项`)

  if (issues.length === 0) {
    console.log('\n🎊 所有关键SEO检查都已通过！')
  } else {
    console.log('\n🔧 请修复上述问题以获得更好的SEO效果')
  }

  // 提供建议
  console.log('\n💡 SEO最佳实践建议:')
  console.log('  1. 确保所有页面都有独特的canonical URL')
  console.log('  2. 检查meta描述长度（建议150-160字符）')
  console.log('  3. 验证Open Graph图片尺寸（建议1200x630px）')
  console.log('  4. 使用Google Search Console验证站点地图')
  console.log('  5. 定期检查404错误和重定向链')

  return issues.length === 0
}

// 运行检查
checkSEO()

export { checkSEO } 