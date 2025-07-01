<template>
  <div class="game-view-container" :class="{ 'web-fullscreen': isWebFullscreen }">
    <div ref="gameAreaRef" class="game-frame-wrapper">
      <div
        v-if="!gameStarted"
        class="game-poster"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      >
        <div class="poster-overlay">
          <div class="play-content">
            <img :src="imageUrl" alt="Game Thumbnail" class="play-poster-thumb" />
            <button @click="startGame" class="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.746 1.295 2.54 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>
              <span>PLAY</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="game-container">
        <iframe
          :src="iframeSrc"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          scrolling="no"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
    <div class="game-controls">
      <h1 class="game-title">{{ gameTitle }}</h1>
      <div class="control-buttons">
        <button @click="toggleWebFullscreen" :title="isWebFullscreen ? 'Exit Theater Mode' : 'Theater Mode'">
          <svg v-if="!isWebFullscreen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
        </button>
        <button @click="toggleNativeFullscreen" :title="isNativeFullscreen ? 'Exit Fullscreen' : 'Fullscreen'">
          <svg v-if="!isNativeFullscreen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  iframeSrc: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  gameTitle: {
    type: String,
    default: 'Merge Game'
  }
});

const gameStarted = ref(false);
const gameAreaRef = ref(null);
const isWebFullscreen = ref(false);
const isNativeFullscreen = ref(false);

const startGame = () => {
  gameStarted.value = true;
};

const toggleWebFullscreen = () => {
  isWebFullscreen.value = !isWebFullscreen.value;
  // When entering web fullscreen, ensure body scrolling is disabled
  document.body.style.overflow = isWebFullscreen.value ? 'hidden' : '';
};

const toggleNativeFullscreen = () => {
  if (!document.fullscreenElement) {
    gameAreaRef.value?.requestFullscreen().catch(err => {
      console.error(`全屏模式启动失败: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
};

const onFullscreenChange = () => {
  isNativeFullscreen.value = !!document.fullscreenElement;
};

onMounted(() => {
  document.addEventListener('fullscreenchange', onFullscreenChange);
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', onFullscreenChange);
  // Ensure we clean up body style if component is unmounted while in web fullscreen
  if (isWebFullscreen.value) {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.game-view-container {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem 1rem 0 1rem;
  border-radius: 1rem; /* Softer, larger radius */
  box-shadow: 0 8px 30px rgba(255, 128, 171, 0.25); /* Main pink shadow */
  border: 2px solid white;
}

.game-view-container.web-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: #000; /* Revert to solid black for fullscreen focus */
  padding: 1rem;
  border-radius: 0;
  border: none;
}

.game-view-container.web-fullscreen .game-frame-wrapper {
  flex-grow: 1;
  height: 0; /* Let flex-grow control the height */
  border-radius: 1rem;
  overflow: hidden;
}

.game-frame-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0; /* Light grey background */
  border-radius: 1rem;
  overflow: hidden;
  z-index: 1;
}

.game-poster {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poster-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.play-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.play-poster-thumb {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1.25rem;
  border: 3px solid white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  background-color: #000;
}

.play-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-primary);
  border: 2px solid white;
  border-radius: 9999px;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 2;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.play-button svg {
  transition: transform 0.3s ease;
  width: 30px;
  height: 30px;
}

.play-button:hover svg {
  transform: scale(1.1);
}

.game-container {
  width: 100%;
  height: 100%;
}

.game-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: var(--color-text);
}

.game-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.control-buttons {
  display: flex;
  gap: 0.5rem;
}

.control-buttons button {
  background-color: #fce4ec; /* Light Pink */
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 0.75rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-buttons button:hover {
  background-color: var(--color-primary);
  color: white;
  transform: scale(1.05);
}

.game-view-container.web-fullscreen .game-controls {
  flex-shrink: 0;
  padding: 0.5rem;
  border-top: none;
}

@media (max-width: 768px) {
  .game-title {
    font-size: 1rem;
    margin-right: 0;
  }

  .game-view-container{
    padding: 0.5rem 0.5rem 0 0.5rem;
  }

  .game-frame-wrapper{
    aspect-ratio: 16 / 24;
  }

  .control-buttons {
    align-self: flex-end;
  }

  .control-buttons button{
    width: 30px;
    height: 30px;
  }

  .play-button{
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
