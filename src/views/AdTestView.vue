<template>
  <div class="ad-test-page">
    <div class="test-container">
      <h1>Google AdSense 广告测试页面</h1>

      <div class="status info">
        <strong>测试说明：</strong> 此页面用于测试您的Google AdSense广告是否正常工作。
      </div>

      <div class="status info"><strong>广告客户端ID：</strong> ca-pub-4638984121333143</div>

      <div class="control-buttons">
        <button @click="loadAds" class="btn">手动加载广告</button>
        <button @click="checkStatus" class="btn">检查状态</button>
        <button @click="clearAds" class="btn">清除广告</button>
      </div>

      <hr />

      <!-- 横幅广告测试 -->
      <h2>横幅广告测试 (广告位: 3707198686)</h2>
      <div class="ad-test banner">
        <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8698738517703947"
     data-ad-slot="7116604857"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      </div>

      

      <div id="status-log" class="status-log"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

function log(message, type = 'info') {
  const logDiv = document.getElementById('status-log')
  const timestamp = new Date().toLocaleTimeString()
  const statusDiv = document.createElement('div')
  statusDiv.className = `status ${type}`
  statusDiv.innerHTML = `<strong>[${timestamp}]</strong> ${message}`
  logDiv.appendChild(statusDiv)
  logDiv.scrollTop = logDiv.scrollHeight
  console.log(`[${timestamp}] ${message}`)
}

function loadAds() {
  log('开始加载广告...', 'info')

  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 只处理当前测试页面中的广告元素
      const testContainer = document.querySelector('.test-container')
      const adElements = testContainer.querySelectorAll('.adsbygoogle')

      log(`找到 ${adElements.length} 个测试广告元素`, 'info')

      // 检查哪些广告需要重新加载
      const adsToReload = []
      adElements.forEach((el, index) => {
        const status = el.getAttribute('data-ad-status')
        const hasContent = el.children.length > 0

        if (!status || status === 'unfilled' || !hasContent) {
          adsToReload.push({ element: el, index })
        } else {
          log(`广告 ${index + 1} 已有内容，跳过重新加载`, 'info')
        }
      })

      if (adsToReload.length === 0) {
        log('所有广告都已加载完成，无需重新加载', 'success')
        return
      }

      log(`需要重新加载 ${adsToReload.length} 个广告`, 'info')

      // 清除需要重新加载的广告元素状态
      adsToReload.forEach(({ element }) => {
        element.removeAttribute('data-ad-status')
        element.innerHTML = ''
      })

      log('已清除需要重新加载的广告元素状态', 'info')

      // 等待一下让DOM更新
      setTimeout(() => {
        adsToReload.forEach(({ element, index }) => {
          try {
            const adSlot = element.getAttribute('data-ad-slot')

            // 只处理有正确广告位ID的元素
            if (!adSlot) {
              log(`跳过广告 ${index + 1}: 没有广告位ID`, 'warning')
              return
            }

            log(`正在加载广告 ${index + 1} (广告位: ${adSlot})`, 'info')

            // 确保元素有正确的尺寸
            if (element.offsetWidth === 0) {
              log(`警告: 广告 ${index + 1} 宽度为0，设置最小宽度`, 'warning')
              element.style.minWidth = '300px'
              element.style.minHeight = '250px'
            }

            ;(window.adsbygoogle = window.adsbygoogle || []).push({})

            // 标记为已处理
            element.setAttribute('data-ad-status', 'loading')
          } catch (error) {
            log(`广告 ${index + 1} 加载失败: ${error.message}`, 'error')
          }
        })
      }, 100)
    } catch (error) {
      log(`广告加载过程中发生错误: ${error.message}`, 'error')
    }
  } else {
    log('Google AdSense 脚本未加载或不可用', 'error')
  }
}

function checkStatus() {
  log('检查当前状态...', 'info')

  // 检查 adsbygoogle 对象
  if (window.adsbygoogle) {
    log('✓ adsbygoogle 对象存在', 'success')
    if (typeof window.adsbygoogle.push === 'function') {
      log('✓ adsbygoogle.push 方法可用', 'success')
    } else {
      log('✗ adsbygoogle.push 方法不可用', 'error')
    }
  } else {
    log('✗ adsbygoogle 对象不存在', 'error')
  }

  // 检查广告元素
  const testContainer = document.querySelector('.test-container')
  const adElements = testContainer.querySelectorAll('.adsbygoogle')
  log(`测试页面中有 ${adElements.length} 个广告元素`, 'info')

  adElements.forEach((el, index) => {
    const adSlot = el.getAttribute('data-ad-slot')
    const adStatus = el.getAttribute('data-ad-status')
    const hasContent = el.children.length > 0
    const width = el.offsetWidth
    const height = el.offsetHeight
    const computedStyle = window.getComputedStyle(el)

    log(`广告 ${index + 1} (广告位: ${adSlot}):`, 'info')
    log(`  - 状态: ${adStatus || '未处理'}`, 'info')
    log(`  - 有内容: ${hasContent}`, hasContent ? 'success' : 'error')
    log(`  - 尺寸: ${width}x${height}px`, width > 0 ? 'success' : 'error')
    log(`  - 显示: ${computedStyle.display}`, 'info')
    log(`  - 可见性: ${computedStyle.visibility}`, 'info')

    if (width === 0) {
      log(`  - 警告: 宽度为0，这会导致广告无法显示`, 'warning')
    }
  })

  // 检查网络连接
  fetch('https://pagead2.googlesyndication.com', { mode: 'no-cors' })
    .then(() => {
      log('✓ Google AdSense 域名可访问', 'success')
    })
    .catch((error) => {
      log(`✗ Google AdSense 域名不可访问: ${error.message}`, 'error')
    })
}

function clearAds() {
  log('清除测试页面广告...', 'info')

  const testContainer = document.querySelector('.test-container')
  const adElements = testContainer.querySelectorAll('.adsbygoogle')
  adElements.forEach((el) => {
    el.removeAttribute('data-ad-status')
    el.innerHTML = ''
  })

  log(`已清除 ${adElements.length} 个测试广告`, 'success')
}

onMounted(() => {
  log('页面加载完成', 'success')

  // 等待页面完全渲染后再加载广告
  setTimeout(() => {
    // 等待广告脚本加载
    const waitForAdScript = () => {
      if (window.adsbygoogle) {
        log('Google AdSense 脚本已加载', 'success')
        // 延迟更长时间确保页面完全渲染
        setTimeout(loadAds, 2000)
      } else {
        setTimeout(waitForAdScript, 100)
      }
    }

    waitForAdScript()
  }, 500)
})
</script>

<style scoped>
.ad-test-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.test-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.status {
  margin: 15px 0;
  padding: 15px;
  border-radius: 4px;
  font-weight: bold;
}

.status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status.info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.control-buttons {
  margin: 20px 0;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 14px;
}

.btn:hover {
  background-color: #0056b3;
}

.ad-test {
  margin: 20px 0;
  padding: 20px;
  border: 2px dashed #007bff;
  border-radius: 8px;
  text-align: center;
  min-height: 100px;
  display: block;
  background-color: #f8f9fa;
  width: 100%;
  box-sizing: border-box;
}

.ad-test.banner {
  min-height: 90px;
  width: 100%;
}

.ad-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.ad-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
}

.ad-test.sidebar {
  width: 100%;
  min-height: 600px;
}

.status-log {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  margin: 20px 0;
  font-family: monospace;
  font-size: 12px;
  max-height: 400px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .ad-layout {
    grid-template-columns: 1fr;
  }

  .test-container {
    padding: 20px;
  }
}
</style>
