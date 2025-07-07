<template>
  <header class="main-header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <img src="/images/logo.png" alt="Merge Rot" class="logo-image">
        <span class="logo-merge">Merge</span>
        <span class="logo-rot">Rot</span>
      </RouterLink>
      <button @click="toggleMenu" class="mobile-nav-toggle" aria-controls="main-nav" :aria-expanded="isMenuOpen">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <ul @click="closeMenu">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/merge-fellas">Merge Fellas</RouterLink></li>
          <li><RouterLink to="/merge-games">Merge Games</RouterLink></li>
          <li><RouterLink to="/italian-brainrot-games">Italian Brainrot Games</RouterLink></li>
          <li><RouterLink to="/italian-brainrot-wiki">Italian Brainrot Wiki</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.main-header {
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  position: sticky;
  top: 0;
  z-index: 10;
}

.main-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Impact', 'Arial Black', 'Helvetica', sans-serif;
  font-size: 2rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  text-decoration: none;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
}

.logo-image{
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
}

.logo-merge {
  color: #a855f7; /* purple-500 */
  text-shadow:
    -1.5px -1.5px 0 #4c1d95,
    1.5px -1.5px 0 #4c1d95,
    -1.5px 1.5px 0 #4c1d95,
    1.5px 1.5px 0 #4c1d95; /* violet-900 */
}

.logo-rot {
  color: #facc15; /* yellow-400 */
  text-shadow:
    -1.5px -1.5px 0 #ca8a04,
     1.5px -1.5px 0 #ca8a04,
    -1.5px 1.5px 0 #ca8a04,
     1.5px 1.5px 0 #ca8a04; /* yellow-600 */
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.main-nav a {
  color: var(--color-text);
  font-weight: 600; /* Bolder font */
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s;
  border-radius: 999px; /* Pill shape */
}

.main-nav a:hover {
  color: white;
  background-color: var(--color-primary);
}

.main-nav a.router-link-exact-active {
  color: white;
  background-color: var(--color-primary);
}

.mobile-nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.mobile-nav-toggle .icon-bar {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--color-text);
  margin: 5px 0;
  transition: transform 0.3s ease;
}

@media (max-width: 1024px) {
  .main-nav {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    padding-top: 5rem;
    height: 100vh;
  }

  .main-nav.is-open {
    display: block;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .main-nav a {
    font-size: 1.5rem;
  }

  .mobile-nav-toggle {
    display: block;
  }
}

@media (max-width: 768px) {
  .main-header {
    padding: 0.5rem 0;
  }

  .main-nav a {
    font-size: 1rem;
  }
}
</style> 