<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <h1 class="page-title">Brainrot Wiki</h1>
        <div class="wiki-layout">
          <!-- Right Panel: Main Content -->
          <section class="info-card">
            <h2>What Is Italian Brainrot & Why Are Your Kids Obsessed With It?</h2>
            <p>
              <strong>By Jamie Kenney</strong> — <time datetime="2025-05-23">May 23, 2025</time>
            </p>

            <p>
              If you've recently found your child mumbling something like "Tung Tung Sahur" or
              playing videos of a blue cartoon shark in Nikes dancing to nonsensical narration,
              you've likely encountered the internet phenomenon known as
              <strong>Italian Brainrot</strong>. Strange, surreal, and increasingly popular among
              children and tweens, Italian Brainrot is everywhere—and it shows no signs of slowing
              down.
            </p>

            <p>
              But what exactly is Italian Brainrot? Is it dangerous? Is it meaningful? Is it... art?
              Before you start digging too deep, we'll tell you right now:
              <strong>do not overthink it</strong>.
            </p>

            <h3>The Origins of Italian Brainrot</h3>
            <p>
              Italian Brainrot emerged in early 2025 as part of a larger trend of "brainrot"
              content—media that's intentionally absurd, overstimulating, and devoid of logic. The
              term "brainrot" itself was originally used to describe the mental numbness that
              results from scrolling through too much low-effort content online. But Gen Alpha—the
              digital-native generation of tweens—took ownership of it, turning it into a genre of
              its own.
            </p>

            <p>
              In its Italian form, brainrot took on a uniquely chaotic flavor. These videos
              typically feature AI-generated characters—often cartoonish mashups of animals and
              objects—paired with sing-song names and heavily accented Italian or gibberish
              narration. The result is both surreal and hilarious, especially to young viewers who
              delight in randomness and repetition. One might hear a looped chant like "Tung Tung
              Tung Tung Sahur" over a pounding techno beat, accompanied by a janky dance animation,
              and that alone is enough to make it go viral.
            </p>

            <h3>The Formula: Why It Works</h3>
            <p>
              So what makes <strong>Italian Brainrot</strong> so irresistible to kids? It's a
              perfect storm of chaos, creativity, and control. The content is visually simple,
              endlessly remixable, and requires zero context. There's no plot to follow, no
              backstory to understand—just pure, looping absurdity. That makes it ideal for the
              short-form video formats dominating platforms like TikTok, YouTube Shorts, and
              Instagram Reels.
            </p>

            <p>
              Kids don't just watch Italian Brainrot. They create it. With tools like AI art
              generators, voice changers, and music loops, even a 10-year-old can cobble together
              their own brainrot-style video. The low barrier to entry fuels an explosion of content
              where no two memes are exactly the same, but all are instantly recognizable by their
              aesthetic: clashing colors, nonsense names, offbeat dancing, and audio that sounds
              like a glitchy remix of a cartoon theme song and a football chant.
            </p>

            <h3>It Doesn't Mean Anything—And That's the Point</h3>
            <p>
              Adults often try to assign meaning to children's media. But attempting to analyze
              Italian Brainrot as if it contains hidden messages is a trap. It doesn't symbolize
              anything. It's not a metaphor for society or a coded critique of digital culture. It's
              just... noise. Beautiful, chaotic noise.
            </p>

            <p>
              And yet, that doesn't mean it's without value. For kids, Italian Brainrot offers a
              space where nonsense reigns and the usual rules of logic and narrative fall away. In a
              world filled with structured education and adult expectations, brainrot is an anarchic
              playground of the imagination. It's not supposed to make sense. That's the entire
              joke.
            </p>

            <h3>Memetic Culture and Collective Inside Jokes</h3>
            <p>
              One key reason <strong>Italian Brainrot</strong> spreads so quickly is its ability to
              generate inside jokes that only "those in the know" understand. Kids repeat phrases
              like "Patapim!" or "Trallallà!" not because they have literal meanings, but because
              they're part of a shared, evolving meme language. If you know, you know. If you don't,
              you're old—and that's kind of the point.
            </p>

            <p>
              In this way, Italian Brainrot serves a social function. It creates a sense of
              belonging. Kids can bond over the most bizarre characters and phrases, laugh at their
              randomness, and even attempt to one-up each other by making their own increasingly
              weird creations. It's a type of meme literacy, and those who speak the language get to
              feel like part of a digital tribe.
            </p>

            <h3>AI, Accessibility, and the New Folk Art</h3>
            <p>
              While much of the attention focuses on the absurdity of Italian Brainrot, there's a
              deeper layer: accessibility. The rise of free AI tools has democratized content
              creation. Anyone—regardless of age or artistic skill—can generate an image, a
              character, a voiceover, and a beat in minutes. Italian Brainrot is, in a way, the
              digital folk art of Gen Alpha: crude, communal, ever-evolving, and proudly silly.
            </p>

            <p>
              This also explains its volume and speed. Trends in the brainrot ecosystem don't last
              long. New characters appear daily, go viral overnight, and disappear just as quickly.
              It's a perpetual machine of remixing, iterating, and sharing. And kids love being part
              of that creative cycle—even if their parents find the whole thing incomprehensible.
            </p>

            <h3>Parents: Don't Panic</h3>
            <p>
              Is <strong>Italian Brainrot</strong> "good" content? That depends on how you define
              good. It's not educational in the traditional sense, nor is it high art. But it is
              playful, participatory, and harmless. Most importantly, it makes kids laugh. And in a
              world filled with pressure and perfectionism, laughter matters.
            </p>

            <p>
              If you're a parent trying to make sense of Italian Brainrot, here's our advice: don't.
              You're not supposed to. Just appreciate it for what it is—a digital sandbox of absurd
              creativity where kids get to be kids. Join in if you want. Chant along. Watch a few
              videos. Maybe even make your own.
            </p>

            <p>But whatever you do, remember the golden rule:</p>
            <p><strong>Do. Not. Overthink. It.</strong></p>

            <!-- Brainrot Characters Table -->
            <div class="characters-table-section">
              <h3>Popular Italian Brainrot Characters</h3>
              <div class="table-wrapper">
                <table class="characters-table">
                  <thead>
                    <tr>
                      <th>Character</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="character in characters" :key="character.id">
                      <td class="character-image">
                        <img :src="character.imageUrl" :alt="character.imageAlt" class="character-img">
                      </td>
                      <td class="character-name">{{ character.name }}</td>
                      <td class="character-desc">{{ character.description }}</td>
                      <td class="audio-cell">
                        <button 
                          @click="playAudio(character.audioRef)" 
                          class="audio-btn"
                          :class="{ 'playing': currentPlaying === character.audioRef }"
                        >
                          <svg v-if="currentPlaying !== character.audioRef" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                          </svg>
                          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M6 19h4V5H6v14zM14 5v14h4V5h-4z" fill="currentColor"/>
                          </svg>
                        </button>
                        <audio :ref="el => audioRefs[character.audioRef] = el" preload="none">
                          <source :src="character.audioUrl" type="audio/mpeg">
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Left Panel: Entry List (如果需要的话可以添加) -->
          <aside class="left-panel">
            <h2 class="left-panel-title">Wiki Topics</h2>
            <div class="entry-list-panel">
                             <RouterLink
                 v-for="entry in wikiData.entries"
                 :key="entry.id"
                 :to="`/brainrot-wiki/${entry.addressBar}`"
                 class="post-card"
               >
                <img :src="entry.imageUrl" :alt="entry.imageAlt" class="post-image" />
                <div class="post-content">
                  <h3 class="post-title">{{ entry.title }}</h3>
                  <span class="read-more">Read More</span>
                </div>
              </RouterLink>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { brainrotWikiData as wikiData } from '@/data/brainrotWiki.js'
import { brainrotCharactersData } from '@/data/brainrotCharacters.js'

// 角色数据
const characters = brainrotCharactersData.characters

// 音频播放状态
const currentPlaying = ref(null)
const audioRefs = ref({})

// 播放音频函数
const playAudio = (audioRef) => {
  const audioElement = audioRefs.value[audioRef]
  
  if (!audioElement) return
  
  // 如果当前正在播放这个音频，则暂停
  if (currentPlaying.value === audioRef) {
    audioElement.pause()
    currentPlaying.value = null
    return
  }
  
  // 暂停所有其他音频
  Object.values(audioRefs.value).forEach(audio => {
    if (audio && !audio.paused) {
      audio.pause()
    }
  })
  
  // 播放选中的音频
  currentPlaying.value = audioRef
  audioElement.play().catch(error => {
    console.error('Audio playback failed:', error)
    currentPlaying.value = null
  })
  
  // 监听音频结束事件
  audioElement.onended = () => {
    currentPlaying.value = null
  }
}
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  background-size: 200% auto;
  animation: text-shine 5s linear infinite;
}

@keyframes text-shine {
  to {
    background-position: 200% center;
  }
}

.wiki-layout {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.left-panel {
  flex: 1;
  order: 1;
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
}

.left-panel-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff80ab, #ff9e80);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.entry-list-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.post-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid white;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 128, 171, 0.3);
}

.post-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.post-content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-title {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.read-more {
  font-weight: bold;
  color: var(--color-primary);
  align-self: flex-end;
  font-size: 0.9rem;
  margin-top: auto;
}

.info-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
  flex: 3;
  order: 2;
}

.info-card h2 {
  font-size: 2.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), #ff80ab);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.info-card h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem;
  padding-left: 1rem;
  border-left: 5px solid var(--color-primary);
  background: linear-gradient(90deg, #b388ff, #8c9eff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-card p {
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 1.5rem;
  font-style: italic;
  border-bottom: 1px dashed var(--color-primary-light);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .wiki-layout {
    flex-direction: column;
    gap: 1.5rem;
  }

  .left-panel,
  .info-card {
    order: initial;
  }

  .left-panel {
    position: static;
    width: 100%;
  }

  .entry-list-panel {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .info-card {
    padding: 0.5rem;
  }

  .entry-list-panel {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .info-card h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .info-card p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .info-card h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
    border-left: 2px solid var(--color-primary);
  }

  .left-panel {
    padding: 1rem;
  }

  .left-panel-title {
    font-size: 1.3rem;
  }
}

/* Characters Table Styles */
.characters-table-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px dashed var(--color-primary-light);
}

.characters-table-section h3 {
  margin-bottom: 1.5rem;
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
}

.characters-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid white;
  border-radius: 1rem;
  overflow: hidden;
}

.characters-table thead {
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.characters-table th {
  color: white;
  font-weight: bold;
  padding: 1rem;
  text-align: left;
  font-size: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.characters-table th:last-child {
  border-right: none;
}

.characters-table tbody tr {
  transition: background-color 0.2s ease;
}

.characters-table tbody tr:hover {
  background-color: rgba(255, 128, 171, 0.1);
}

/* .characters-table tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.5);
} */

.characters-table td {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(255, 128, 171, 0.2);
  vertical-align: middle;
}

.characters-table tbody tr:last-child td {
  border-bottom: none;
}

.character-image {
  width: 60px;
  text-align: center;
}

.character-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--color-primary-light);
  transition: transform 0.2s ease;
}

.character-img:hover {
  transform: scale(1.1);
}

.character-name {
  font-weight: bold;
  color: var(--color-primary);
  font-size: 1rem;
  min-width: 120px;
}

.character-desc {
  color: var(--color-text);
  line-height: 1.4;
  width: 500px;
  font-size: 1rem;
}

.audio-cell {
  text-align: center;
  width: 60px;
}

.audio-btn {
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 128, 171, 0.3);
}

.audio-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(255, 128, 171, 0.5);
}

.audio-btn.playing {
  background: linear-gradient(90deg, #ff5722, #ff9800);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Mobile Responsive for Table */
@media (max-width: 768px) {
  .characters-table-section {
    margin-top: 1rem;
    padding-top: 1rem;
  }
  
  .characters-table {
    font-size: 0.9rem;
  }
  
  .characters-table th,
  .characters-table td {
    padding: 0.5rem;
  }
  
  .character-image {
    width: 60px;
  }
  
  .character-img {
    width: 45px;
    height: 45px;
  }
  
  .character-name {
    font-size: 1rem;
    min-width: 100px;
  }
  
  .character-desc {
    font-size: 0.85rem;
    max-width: 200px;
  }
  
  .audio-btn {
    width: 35px;
    height: 35px;
  }
  
  .audio-btn svg {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .table-wrapper {
    margin: 0 -0.5rem;
  }
  
  .characters-table th,
  .characters-table td {
    padding: 0.5rem;
  }
  
  .character-desc {
    max-width: 150px;
    font-size: 0.8rem;
  }
  
  .audio-cell {
    width: 50px;
  }
  
  .audio-btn {
    width: 30px;
    height: 30px;
  }
  
  .audio-btn svg {
    width: 14px;
    height: 14px;
  }
}
</style> 