// 统一的站点地图验证脚本
import sitemapManager from '../src/utils/sitemapManager.js'

// 运行验证
async function main() {
  try {
    console.log('🔍 启动统一站点地图验证工具...')
    
    const results = await sitemapManager.verifySitemap({
      verbose: true
    })
    
    if (results.success) {
      console.log('\n✅ 验证成功完成！')
      process.exit(0)
    } else {
      console.log('\n❌ 验证发现问题！')
      process.exit(1)
    }
    
  } catch (error) {
    console.error('❌ 验证过程中发生错误:', error.message)
    console.error(error)
    process.exit(1)
  }
}

// 直接运行验证（简化版本）
main() 