<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  function setDrawingStyles() {
    ctx.fillStyle = 'rgba(255, 128, 171, 0.8)'; // Candy Pink dots
    ctx.strokeStyle = 'rgba(255, 213, 79, 0.3)'; // Softer Sunny Yellow lines
    ctx.lineWidth = 1;
  }

  setDrawingStyles(); // Set initial styles

  window.addEventListener('resize', resize, { passive: true });
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    setDrawingStyles(); // Re-apply styles after resize
  }

  class Star {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.x_speed = (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1) / 5;
      this.y_speed = (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1) / 5;
    }

    move() {
      this.x -= this.x_speed;
      this.y -= this.y_speed;
    }

    render() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    
    changeX() {
      this.x_speed = -this.x_speed;
    }

    changeY() {
      this.y_speed = -this.y_speed;
    }
  }

  const stars = [];
  for (let i = 0; i < 130; i++) {
    stars.push(new Star(Math.random() * width, Math.random() * height, 1));
  }

  const mouseStar = new Star(0, 0, 2);
  
  function onMouseMove(e) {
    mouseStar.x = e.clientX;
    mouseStar.y = e.clientY;
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('mousemove', onMouseMove, { passive: true });

  function line(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.closePath();
    ctx.stroke();
  }
  
  function onClick(e) {
    for (let i = 0; i < 5; i++) {
      stars.push(new Star(e.clientX, e.clientY, 1));
      stars.shift();
    }
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('click', onClick, { passive: true });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    mouseStar.render();

    stars.forEach(star => {
      star.move();
      if (star.x < 0 || star.x > width) star.changeX();
      if (star.y < 0 || star.y > height) star.changeY();
      star.render();
    });

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        if (Math.abs(stars[i].x - stars[j].x) < 40 && Math.abs(stars[i].y - stars[j].y) < 40) {
          line(stars[i], stars[j]);
        }
      }
      if (Math.abs(stars[i].x - mouseStar.x) < 150 && Math.abs(stars[i].y - mouseStar.y) < 150) {
        line(stars[i], mouseStar);
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
  
  // Cleanup on component unmount
  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('click', onClick);
    window.removeEventListener('resize', resize);
  });
});
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* 修复右键菜单问题 */
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  /* 确保不影响页面的右键菜单 */
  -webkit-user-drag: none;
  -moz-user-drag: none;
}
</style> 