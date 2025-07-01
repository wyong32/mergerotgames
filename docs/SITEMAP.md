# 动态站点地图系统

本项目实现了基于Star-Copy-And-Paste项目的动态站点地图生成系统，支持自动生成包含所有页面的XML站点地图。

## 🎯 系统特性

### 自动化特性
- ✅ **自动页面发现**: 从数据文件自动提取所有动态页面
- ✅ **动态内容集成**: 自动包含游戏、博客、Wiki页面
- ✅ **构建时生成**: 在每次构建时自动更新站点地图
- ✅ **SEO优化**: 包含完整的SEO元数据（优先级、更新频率、最后修改时间）
- ✅ **Robots.txt支持**: 自动或手动管理robots.txt文件

### 智能配置
- 📊 **页面优先级**: 根据页面重要性自动设置优先级
- 🔄 **更新频率**: 根据内容类型智能设置更新频率
- 📅 **最后修改时间**: 从数据中自动提取内容更新时间

## 🏗️ 技术架构

### 两种实现方式

#### 方式1: 标准 vite-plugin-sitemap（推荐）
- 使用成熟的第三方插件
- 简单配置，稳定可靠
- 在 `vite.config.js` 中配置

#### 方式2: 自定义插件
- 更多控制选项和自定义功能
- 详细的构建日志和统计信息
- 支持高级SEO配置

### 核心文件

1. **Vite配置** (`vite.config.js`)
   - 插件配置和路由生成
   - 数据文件导入和路由映射

2. **站点地图配置** (`src/utils/sitemapConfig.js`)
   - 详细的页面配置
   - SEO元数据设置

3. **自定义插件** (`src/plugins/sitemapPlugin.js`)
   - 高级站点地图生成
   - 构建统计和日志

4. **Robots.txt** (`public/robots.txt`)
   - 搜索引擎爬虫规则

## 📋 页面配置

### 静态页面优先级

| 页面 | 优先级 | 更新频率 | 说明 |
|------|--------|----------|------|
| 首页 (/) | 1.0 | daily | 最高优先级，每日更新 |
| 合并游戏 (/merge-games) | 0.9 | daily | 核心功能页面 |
| Merge Fellas (/merge-fellas) | 0.9 | weekly | 角色展示页面 |
| 意大利Brainrot游戏 (/italian-brainrot-games) | 0.8 | daily | 特色游戏分类 |
| Brainrot Wiki (/brainrot-wiki) | 0.8 | weekly | 社区内容 |
| 博客 (/blog) | 0.8 | daily | 内容页面 |

### 动态页面配置

- **游戏详情页**: 优先级 0.7，周度更新
- **Wiki文章**: 优先级 0.6，月度更新  
- **博客文章**: 优先级 0.7，月度更新

## 🚀 使用方法

### 添加新内容

#### 新游戏
在 `src/data/mergeGames.js` 中添加游戏数据，系统会自动：
- 根据 `category` 字段生成对应路由
- 使用 `time` 字段作为最后修改时间
- 使用 `addressBar` 字段作为URL路径

#### 新Wiki文章
在 `src/data/brainrotWiki.js` 中添加文章，自动包含到站点地图

#### 新博客文章
在 `src/data/blogPosts.js` 中添加文章，自动生成博客页面路由

### 修改SEO配置

编辑 `src/utils/sitemapConfig.js` 文件：

```javascript
// 修改静态页面配置
const STATIC_PAGES = [
  {
    path: '/new-page',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  // ... 其他页面
]
```

### 切换插件模式

在 `vite.config.js` 中注释/取消注释对应插件：

```javascript
// 使用标准插件
sitemap({
  hostname: 'https://merge-rot.com',
  dynamicRoutes: allRoutes,
  generateRobotsTxt: false,
}),

// 或使用自定义插件
// sitemapPlugin({
//   hostname: 'https://merge-rot.com',
//   outDir: 'dist',
//   generateRobotsTxt: true,
// }),
```

## 📁 输出文件

### 站点地图 (sitemap.xml)
- 位置: `dist/sitemap.xml`
- 格式: 标准XML站点地图格式
- 内容: 所有静态页面 + 动态生成页面

### Robots.txt
- 位置: `public/robots.txt`（手动维护）或 `dist/robots.txt`（自动生成）
- 功能: 搜索引擎爬虫指导
- 包含: 站点地图链接和爬取规则

## 🔧 构建流程

1. **开发阶段**: 无需手动操作
2. **构建阶段**: 运行 `npm run build`
3. **自动生成**: 插件在构建完成后自动执行
4. **输出文件**: 站点地图自动生成到dist目录

### 构建日志示例（自定义插件）

```
🗺️ 正在生成站点地图...
✅ 站点地图已生成: dist/sitemap.xml
✅ Robots.txt已生成: dist/robots.txt
📊 已生成 42 个URL到站点地图
🔍 站点地图统计:
   home: 1 个页面
   merge-games: 15 个页面
   italian-brainrot-games: 12 个页面
   brainrot-wiki: 8 个页面
   blog: 6 个页面
```

## 🔍 SEO优化

### 搜索引擎友好
- 标准XML格式符合 Sitemaps.org 规范
- 完整的元数据（优先级、更新频率、最后修改时间）
- 正确的URL结构和域名配置
- 及时的内容更新反映

### 最佳实践
- 优先级合理分配（首页最高1.0，详情页中等0.7）
- 更新频率符合实际内容更新情况
- 最后修改时间从数据中准确提取
- Robots.txt配套使用

## 🛠️ 维护说明

### 自动维护
- 新内容添加到数据文件后自动包含
- 构建时自动更新站点地图
- 无需手动干预

### 手动维护（仅在需要时）
- 调整页面优先级设置
- 修改更新频率配置
- 更新域名设置
- 添加新的静态页面类型

## 📊 监控和验证

### 验证方法
1. 检查 `dist/sitemap.xml` 文件内容
2. 使用Google Search Console验证
3. 检查所有页面URL是否正确
4. 验证robots.txt文件引用

### 常见问题解决

#### 路由未包含
- 检查数据文件中的 `addressBar` 字段
- 确认数据文件在 `vite.config.js` 中正确导入

#### 日期格式错误
- 确保数据中的日期字段格式为 YYYY-MM-DD
- 检查 `sitemapConfig.js` 中的日期解析逻辑

#### 域名配置
- 确认 `vite.config.js` 中的 hostname 设置正确
- 检查 `robots.txt` 中的站点地图URL

这个动态站点地图系统确保了SEO友好性，自动化程度高，维护成本低，是现代Vue.js应用的最佳实践。 